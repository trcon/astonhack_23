package com.example.goosechat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class Chatroom {
    @Id @GeneratedValue private long cId;
    private String chatId;
    private String chatter1;
    private String chatter2;

    public long getcId() {
        return cId;
    }

    public void setcId(long cId) {
        this.cId = cId;
    }

    public String getChatId() {
        return chatId;
    }

    public void setChatId(String chatId) {
        this.chatId = chatId;
    }

    public String getChatter1() {
        return chatter1;
    }

    public void setChatter1(String chatter1) {
        this.chatter1 = chatter1;
    }

    public String getChatter2() {
        return chatter2;
    }

    public void setChatter2(String chatter2) {
        this.chatter2 = chatter2;
    }
}
