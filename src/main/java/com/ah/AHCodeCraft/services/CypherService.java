package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.algorithms.Caesar;
import com.ah.AHCodeCraft.algorithms.Enigma;
import com.ah.AHCodeCraft.algorithms.Vigenere;
import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import com.ah.AHCodeCraft.dao.MessageContainer;
import com.ah.AHCodeCraft.dao.VigenereMessageContainer;
import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CypherService implements com.ah.AHCodeCraft.services.iServices.ICypherService {

    private Enigma enigma;
    private Caesar caesar;
    private Vigenere vigenere;

    @Override
    public String enigmaEncode(MessageContainer messageContainer) {
        if(!containsOnlyLettersAndSpaces(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return enigma.encode(messageContainer.getMessage());
    }

    private boolean containsOnlyLettersAndSpaces(String input) {
        for (char c : input.toCharArray()) {
            if (!Character.isLetter(c) && c != ' ') {
                return false;
            }
        }
        return true;
    }

    @Override
    public String caesarEncode(CaesarMessageContainer messageContainer) {
        if(!containsOnlyLettersAndSpaces(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return caesar.encode(messageContainer.getMessage(), messageContainer.getShift());
    }

    @Override
    public String caesarDecode(CaesarMessageContainer messageContainer) {
        if(!containsOnlyLettersAndSpaces(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return caesar.decode(messageContainer.getMessage(), messageContainer.getShift());
    }

    @Override
    public String vigenereEncode(VigenereMessageContainer messageContainer) {
        if(!containsOnlyLettersAndSpaces(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return vigenere.encode(messageContainer.getMessage(), messageContainer.getKeyword());
    }

    @Override
    public String vigenereDecode(VigenereMessageContainer messageContainer) {
        if(!containsOnlyLettersAndSpaces(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return vigenere.decode(messageContainer.getMessage(), messageContainer.getKeyword());
    }
}
