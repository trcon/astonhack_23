package com.example.goosechat.service;

import com.example.goosechat.model.Message;
import com.example.goosechat.model.Status;
import com.example.goosechat.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    @Autowired private MessageRepository repository;
    @Autowired private ChatroomService chatRoomService;
    @Autowired private MongoOperations mongoOperations;

    public Message save(Message chatMessage) {
        chatMessage.setStatus(Status.RECEIVED);
        repository.save(chatMessage);
        return chatMessage;
    }

    public long countNewMessages(String sender, String recipient) {
        return repository.countBySenderAndRecipientAndStatus(
                sender, recipient, Status.RECEIVED);
    }

    public List<Message> findChatMessages(String sender, String recipient) {
        var chatId = chatRoomService.getChatId(sender, recipient, false);

        var messages =
                chatId.map(cId -> repository.findByChatId(cId)).orElse(new ArrayList<>());

        if(messages.size() > 0) {
            updateStatuses(sender, recipient, Status.DELIVERED);
        }

        return messages;
    }

    public Message findById(String id) {
        return repository
                .findById(id)
                .map(chatMessage -> {
                    chatMessage.setStatus(Status.DELIVERED);
                    return repository.save(chatMessage);
                })
                .orElseThrow(() ->
                        new ResourceNotFoundException("can't find message (" + id + ")"));
    }

    public void updateStatuses(String sender, String recipient, Status status) {
        Query query = new Query(
                Criteria
                        .where("sender").is(sender)
                        .and("recipient").is(recipient));
        Update update = Update.update("status", status);
        mongoOperations.updateMulti(query, update, Message.class);
    }
}