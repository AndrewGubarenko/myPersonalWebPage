package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CaesarCypherServiceTest {
    @Autowired
    private CypherService service;

    static CaesarMessageContainer container;

    @BeforeAll
    static void setup() {
        container = new CaesarMessageContainer();
    }

    @Test
    void caesarEncodeTest() {
        container.setMessage("Hello World");
        container.setShift(5);
        assertEquals("Mjqqt Btwqi", service.caesarEncode(container));
    }

    @Test
    void caesarDecodeTest() {
        container.setMessage("Mjqqt Btwqi");
        container.setShift(5);
        assertEquals("Hello World", service.caesarDecode(container));
    }
}