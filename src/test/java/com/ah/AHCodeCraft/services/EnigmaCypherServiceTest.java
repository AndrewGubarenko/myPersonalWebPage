package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.dao.MessageContainer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
    void enigmaEncodeTest() {
        container.setMessage("Hello World");
        assertEquals("APXXG QGVXM", service.enigmaEncode(container));
    }

    @Test
    void enigmaDecodeTest() {
        container.setMessage("APXXG QGVXM");
        assertEquals("HELLO WORLD", service.enigmaEncode(container));
    }
}