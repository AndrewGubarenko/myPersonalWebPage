package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.dao.MessageContainer;
import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
class EnigmaCypherServiceTest {
    @Autowired
    private CypherService service;

    MessageContainer container;

    @BeforeEach
    void init() {
        container = new MessageContainer();
    }

    @Test
    void enigmaCorrectInputEncodeTest() {
        container.setMessage("Hello World");
        assertEquals("APXXG QGVXM", service.enigmaEncode(container));
    }

    @Test
    void enigmaIncorrectInputEncodeTest() {
        container.setMessage("Hello World 123");
        assertThrows(NotAllowedSymbolException.class, () -> service.enigmaEncode(container));
    }

    @Test
    void enigmaCorrectInputDecodeTest() {
        container.setMessage("APXXG QGVXM");
        assertEquals("HELLO WORLD", service.enigmaEncode(container));
    }
}