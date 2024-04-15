package com.ah.AHCodeCraft.algorithms;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Enigma {
    private final Map<Character, Character> rotor1;
    private final Map<Character, Character> rotor2;
    private final Map<Character, Character> reflector;

    public Enigma() {
        rotor1 = createRotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", 'A');
        rotor2 = createRotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", 'A');
        reflector = createReflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");
    }

    private Map<Character, Character> createRotor(String mapping, char startChar) {
        Map<Character, Character> rotorMap = new HashMap<>();
        char currentChar = startChar;
        for (char c : mapping.toCharArray()) {
            rotorMap.put(currentChar, c);
            currentChar++;
            if (currentChar > 'Z')
                currentChar = 'A';
        }
        return rotorMap;
    }

    private Map<Character, Character> createReflector(String mapping) {
        Map<Character, Character> reflectorMap = new HashMap<>();
        for (int i = 0; i < mapping.length(); i += 2) {
            reflectorMap.put(mapping.charAt(i), mapping.charAt(i + 1));
            reflectorMap.put(mapping.charAt(i + 1), mapping.charAt(i));
        }
        return reflectorMap;
    }

    public String encode(String input) {
        input = input.replaceAll("\\s", "");
        StringBuilder output = new StringBuilder();
        int count = 0;
        for (char c : input.toUpperCase().toCharArray()) {
            char encodedChar = rotor1.getOrDefault(c, c);
            encodedChar = rotor2.getOrDefault(encodedChar, encodedChar);
            encodedChar = reflector.getOrDefault(encodedChar, encodedChar);
            encodedChar = reverseLookup(rotor2, encodedChar);
            encodedChar = reverseLookup(rotor1, encodedChar);
            output.append(encodedChar);
            count++;
            if (count % 5 == 0) {
                output.append(" ");
            }
        }
        return output.toString().trim();
    }

    private char reverseLookup(Map<Character, Character> rotor, char value) {
        for (Map.Entry<Character, Character> entry : rotor.entrySet()) {
            if (entry.getValue() == value) {
                return entry.getKey();
            }
        }
        return value;
    }

}

