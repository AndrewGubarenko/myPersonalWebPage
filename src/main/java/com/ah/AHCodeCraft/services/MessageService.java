package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.services.iServices.IMessageService;
import org.springframework.stereotype.Service;

@Service
public class MessageService implements IMessageService {

    @Override
    public String processMessage(String request) {

        return switch (request.toLowerCase()) {
            case "hi", "hello" -> "Hello";
            case "/start" -> "let's do it";
            default -> "Incorrec command. Please chose on f the next options: ";
        };
    }
}
