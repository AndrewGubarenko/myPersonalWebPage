package com.ah.AHCodeCraft.exceptions;


import com.ah.AHCodeCraft.constants.Constants;

public class NotAllowedSymbolException extends RuntimeException{

    public NotAllowedSymbolException() {
        super(Constants.NOT_ALLOWED_SYMBOL_EXCEPTION_MESSAGE);
    }
}
