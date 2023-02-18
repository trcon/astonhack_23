package com.example.goosechat.repository;

import com.example.goosechat.model.Chatroom;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ChatroomRepository extends MongoRepository<Chatroom, String> {
    Optional<Chatroom> findBySenderAndRecipient(String sender, String recipient);
}