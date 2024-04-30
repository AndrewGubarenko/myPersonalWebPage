package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.constants.Constants;
import com.ah.AHCodeCraft.dao.VigenereMessageContainer;
import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class VigenereCypherServiceTest {
    @Autowired
    private CypherService service;

    static VigenereMessageContainer container;

    @BeforeAll
    static void setup() {
        container = new VigenereMessageContainer();
        container.setKeyword("Cat");
    }

    @Test
    void vigenereCorrectInputEncodeTest() {
        container.setMessage("Hello World");
        assertEquals("Jeeno Yoknd", service.vigenereEncode(container));
    }

    @Test
    void vigenereIncorrectInputEncodeTest() {
        container.setMessage("Hello World 123");
        assertThrows(NotAllowedSymbolException.class, () -> service.vigenereEncode(container));
    }

    @Test
    void vigenereCorrectInputDecodeTest() {
        container.setMessage("Jeeno Yoknd");
        assertEquals("Hello World", service.vigenereDecode(container));
    }

    @Test
    void vigenereInorrectInputDecodeTest() {
        container.setMessage("Jeeno/Yoknd");
        assertThrows(NotAllowedSymbolException.class, () -> service.vigenereEncode(container));
    }

    @Test
    void caesarIncorrectInputExceptionMessageDecodeTest() {
        container.setMessage("Mjqqt%Btwqi");
        var thrown = assertThrows(NotAllowedSymbolException.class, () -> service.vigenereDecode(container));
        assertTrue(Objects.nonNull(thrown.getMessage()));
        assertEquals(Constants.NOT_ALLOWED_SYMBOL_EXCEPTION_MESSAGE, thrown.getMessage());
    }
}