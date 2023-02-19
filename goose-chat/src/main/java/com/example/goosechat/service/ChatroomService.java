package com.example.goosechat.service;

import com.example.goosechat.model.Chatroom;
import com.example.goosechat.repository.ChatroomRepository;
import lombok.experimental.SuperBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service public class ChatroomService {
    @Autowired
    private ChatroomRepository chatRoomRepository;

    public Optional<String> getChatId(
            String sender, String recipient, boolean createIfNotExist) {

        return chatRoomRepository
                .findBySenderAndRecipient(sender, recipient)
                .map(Chatroom::getChatId)
                .or(() -> {
                    if(!createIfNotExist) {
                        return  Optional.empty();
                    }
                    var chatId = String.format("%s_%s", sender, recipient);

                    Chatroom senderRecipient = Chatroom
                            .builder()
                            .chatId(chatId)
                            .sender(sender)
                            .recipient(recipient)
                            .build();

                    Chatroom recipientSender = Chatroom.builder()
                            .chatId(chatId)
                            .sender(recipient) // TODO: CHECK IF RIGHT?
                            .recipient(sender)
                            .build();
                    chatRoomRepository.save(senderRecipient);
                    chatRoomRepository.save(recipientSender);

                    return Optional.of(chatId);
                });
    }
}
