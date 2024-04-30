package com.ah.AHCodeCraft.algorithms.cipher;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.MOCK,
        classes = Vigenere.class)
public class VigenereTest {

    @Autowired
    private Vigenere vigenere;

    @Test
    void encodeTest() {
        assertEquals("Jeeno Yoknd", vigenere.encode("Hello World", "Cat"));
        assertEquals("Jeeno/Yoknd", vigenere.encode("Hello/World", "Cat"));
    }

    @Test
    void decodeTest() {
        assertEquals("Hello World", vigenere.decode("Jeeno Yoknd", "Cat"));
        assertEquals("Hello/World", vigenere.decode("Jeeno/Yoknd", "Cat"));
    }
}
