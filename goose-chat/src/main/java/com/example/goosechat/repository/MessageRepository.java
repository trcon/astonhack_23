package com.example.goosechat.repository;

import com.example.goosechat.model.Message;
import com.example.goosechat.model.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    long countBySenderAndRecipientAndStatus(
            String sender, String recipient, Status status);

    List<Message> findByChatId(String chatId);
}