package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.services.iServices.IMessageService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope(value="prototype")
public class MessageService implements IMessageService {

    @Override
    public String processMessage(String request) {

        return switch (request.toLowerCase()) {
            case "hi", "hello" -> "Hello";
            case "/start" -> "let's do it";
            default -> "Incorrect command. Please chose on f the next options: ";
        };
    }
}
