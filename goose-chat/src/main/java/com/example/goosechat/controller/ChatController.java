package com.example.goosechat.controller;

import com.example.goosechat.model.Message;
import com.example.goosechat.service.ChatroomService;
import com.example.goosechat.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller public class ChatController {
    @Autowired private SimpMessagingTemplate template;
    @Autowired private MessageService messageService;
    @Autowired private ChatroomService chatroomService;

    @MessageMapping("/chat")
    public void processMessage(@Payload Message message) {
//        var chatId = chatroomService.getChatId(message.getSender(), message.getRecipient(), true);
//        message.setChatId(chatId.get());

        Message saved = messageService.save(message);

    }

    @GetMapping("/messages/{sender}/{recipient}")
    public ResponseEntity<?> findMessages(@PathVariable String sender, @PathVariable String recipient) {
        return ResponseEntity.ok(messageService.findChatMessages(sender, recipient));
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity<?> findMessage(@PathVariable String id) {
        return ResponseEntity.ok(messageService.findById(id));
    }
}
