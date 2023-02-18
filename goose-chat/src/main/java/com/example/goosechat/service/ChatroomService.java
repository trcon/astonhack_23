package com.example.goosechat.service;

import com.example.goosechat.model.Chatroom;
import com.example.goosechat.repository.ChatroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service public class ChatroomService {
    @Autowired
    private ChatroomRepository chatRoomRepository;

    public Optional<String> getChatId(
            String senderId, String recipientId, boolean createIfNotExist) {

        return chatRoomRepository
                .findBySenderIdAndRecipientId(senderId, recipientId)
                .map(Chatroom::getChatId)
                .or(() -> {
                    if(!createIfNotExist) {
                        return  Optional.empty();
                    }
                    var chatId = String.format("%s_%s", senderId, recipientId);

                    Chatroom senderRecipient = Chatroom
                            .builder()
                            .chatId(chatId)
                            .chatter1(senderId)
                            .chatter2(recipientId)
                            .build();

                    Chatroom recipientSender = Chatroom
                            .builder()
                            .chatId(chatId)
                            .chatter1(recipientId)
                            .chatter2(senderId)
                            .build();
                    chatRoomRepository.save(senderRecipient);
                    chatRoomRepository.save(recipientSender);

                    return Optional.of(chatId);
                });
    }
}
