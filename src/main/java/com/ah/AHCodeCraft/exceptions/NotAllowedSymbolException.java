package com.ah.AHCodeCraft.exceptions;


public class NotAllowedSymbolException extends RuntimeException{
    private static final String message = "Input row should contain only letters";

    public NotAllowedSymbolException() {
        super(message);
    }
}
