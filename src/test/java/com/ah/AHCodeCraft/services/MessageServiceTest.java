package com.ah.AHCodeCraft.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class MessageServiceTest {

    @Autowired
    private MessageService service;

    @Test
    void processInvitationMessageTest() {
        var expected = "Hello";
        assertEquals(expected, service.processMessage("hi"));
        assertEquals(expected, service.processMessage("Hi"));
        assertEquals(expected, service.processMessage("HI"));
        assertEquals(expected, service.processMessage("Hello"));
    }

    @Test
    void processIncorrectMessageTest() {
        var expected = "Incorrect command. Please chose on f the next options: ";
        assertEquals(expected, service.processMessage("where am I?"));
        assertEquals(expected, service.processMessage("Who am I?"));
        assertEquals(expected, service.processMessage(""));

    }

    @Test
    void processStartMessageTest() {
        assertEquals("let's do it", service.processMessage("/start"));
    }
}