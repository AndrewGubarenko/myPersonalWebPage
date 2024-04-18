package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.dao.VigenereMessageContainer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class VigenereCypherServiceTest {
    @Autowired
    private CypherService service;

    static VigenereMessageContainer container;

    @BeforeAll
    static void setup() {
        container = new VigenereMessageContainer();
    }

    @Test
    void vigenereEncodeTest() {
        container.setMessage("Hello World");
        container.setKeyword("Cat");
        assertEquals("Jeeno Yoknd", service.vigenereEncode(container));
    }

    @Test
    void vigenereDecodeTest() {
        container.setMessage("Jeeno Yoknd");
        container.setKeyword("Cat");
        assertEquals("Hello World", service.vigenereDecode(container));
    }
}