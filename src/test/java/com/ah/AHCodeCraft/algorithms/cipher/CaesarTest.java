package com.ah.AHCodeCraft.algorithms.cipher;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CaesarTest {

    @Autowired
    private Caesar caesar;

    @Test
    void encodeTest() {
        assertEquals("Mjqqt Btwqi", caesar.encode("Hello World", 5));
        assertEquals("Mjqqt/Btwqi", caesar.encode("Hello/World", 5));
    }

    @Test
    void decodeTest() {
        assertEquals("Hello World", caesar.decode("Mjqqt Btwqi", 5));
        assertEquals("Hello/World", caesar.decode("Mjqqt/Btwqi", 5));
    }
}