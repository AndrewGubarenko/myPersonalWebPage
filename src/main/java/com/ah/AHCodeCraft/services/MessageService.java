package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.services.iServices.IMessageService;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MessageService implements IMessageService {

    @Override
    public String processMessage(String request) throws IOException {
        String response;

        response = "Hello";

        return response;
    }
}
