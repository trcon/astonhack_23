package com.example.goosechat.controller;

import com.example.goosechat.model.Message;
import com.example.goosechat.service.ChatroomService;
import com.example.goosechat.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller public class ChatController {
    @Autowired private SimpMessagingTemplate template;
    @Autowired private MessageService messageService;
    @Autowired private ChatroomService chatroomService;

    @MessageMapping("/chat")
    public void processMessage(@Payload Message message) {
        var chatId = chatroomService.getChatId(message.getSender(), message.getRecipient(), true);
        message.setChatroom(chatId.get());

        Message saved = messageService.save(message);
    }
}
