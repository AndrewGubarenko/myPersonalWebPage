package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.constants.Constants;
import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CaesarCypherServiceTest {

    @Autowired
    private CypherService service;

    static CaesarMessageContainer container;

    @BeforeAll
    static void setup() {
        container = new CaesarMessageContainer();
        container.setShift(5);
    }

    @Test
    void caesarCorrectInputEncodeTest() {
        container.setMessage("Hello World");
        assertEquals("Mjqqt Btwqi", service.caesarEncode(container));
    }

    @Test
    void caesarIncorrectInputEncodeTest() {
        container.setMessage("Hello World 123");
        assertThrows(NotAllowedSymbolException.class, () -> service.caesarEncode(container));
    }

    @Test
    void caesarCorrectInputDecodeTest() {
        container.setMessage("Mjqqt Btwqi");
        assertEquals("Hello World", service.caesarDecode(container));
    }

    @Test
    void caesarIncorrectInputDecodeTest() {
        container.setMessage("Mjqqt%Btwqi");
        assertThrows(NotAllowedSymbolException.class, () -> service.caesarDecode(container));
    }

    @Test
    void caesarIncorrectInputExceptionMessageDecodeTest() {
        container.setMessage("Mjqqt%Btwqi");
        var thrown = assertThrows(NotAllowedSymbolException.class, () -> service.caesarDecode(container));
        assertTrue(Objects.nonNull(thrown.getMessage()));
        assertEquals(Constants.NOT_ALLOWED_SYMBOL_EXCEPTION_MESSAGE, thrown.getMessage());
    }
}