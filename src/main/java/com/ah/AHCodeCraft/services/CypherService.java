package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.algorithms.cipher.Caesar;
import com.ah.AHCodeCraft.algorithms.cipher.Enigma;
import com.ah.AHCodeCraft.algorithms.cipher.Vigenere;
import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import com.ah.AHCodeCraft.dao.MessageContainer;
import com.ah.AHCodeCraft.dao.VigenereMessageContainer;
import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import com.ah.AHCodeCraft.services.iServices.ICypherService;
import com.ah.AHCodeCraft.utils.RequestProcessingUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CypherService implements ICypherService {

    private Enigma enigma;
    private Caesar caesar;
    private Vigenere vigenere;

    @Override
    public String enigmaEncode(MessageContainer messageContainer) {
        if(RequestProcessingUtil.containsOnlyAllowedSymbols(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return enigma.encode(messageContainer.getMessage());
    }

    @Override
    public String caesarEncode(CaesarMessageContainer messageContainer) {
        if(RequestProcessingUtil.containsOnlyAllowedSymbols(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return caesar.encode(messageContainer.getMessage(), messageContainer.getShift());
    }

    @Override
    public String caesarDecode(CaesarMessageContainer messageContainer) {
        if(RequestProcessingUtil.containsOnlyAllowedSymbols(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return caesar.decode(messageContainer.getMessage(), messageContainer.getShift());
    }

    @Override
    public String vigenereEncode(VigenereMessageContainer messageContainer) {
        if(RequestProcessingUtil.containsOnlyAllowedSymbols(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return vigenere.encode(messageContainer.getMessage(), messageContainer.getKeyword());
    }

    @Override
    public String vigenereDecode(VigenereMessageContainer messageContainer) {
        if(RequestProcessingUtil.containsOnlyAllowedSymbols(messageContainer.getMessage()))
            throw new NotAllowedSymbolException();
        return vigenere.decode(messageContainer.getMessage(), messageContainer.getKeyword());
    }
}
