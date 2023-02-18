package com.example.goosechat.repository;

import com.example.goosechat.model.Message;
import com.example.goosechat.model.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {

    long countBySenderIdAndRecipientIdAndStatus(
            String senderId, String recipientId, Status status);

    List<Message> findByChatId(String chatId);
}