package com.ah.AHCodeCraft.services.iServices;

import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import com.ah.AHCodeCraft.dao.MessageContainer;
import com.ah.AHCodeCraft.dao.VigenereMessageContainer;

public interface ICypherService {
    String enigmaEncode(MessageContainer messageContainer);

    String caesarEncode(CaesarMessageContainer messageContainer);

    String caesarDecode(CaesarMessageContainer messageContainer);

    String vigenereEncode(VigenereMessageContainer messageContainer);

    String vigenereDecode(VigenereMessageContainer messageContainer);
}
