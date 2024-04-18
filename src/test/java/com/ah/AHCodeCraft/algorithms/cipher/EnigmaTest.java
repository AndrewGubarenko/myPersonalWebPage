package com.ah.AHCodeCraft.algorithms.cipher;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class EnigmaTest {

    @Autowired
    private Enigma enigma;

    @Test
    void encodeTest() {
        assertEquals("APXXG QGVXM", enigma.encode("Hello World"));
        assertEquals("APXXG /QGVX M", enigma.encode("Hello/World"));
    }
}
