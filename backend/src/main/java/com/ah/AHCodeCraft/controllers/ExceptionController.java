package com.ah.AHCodeCraft.controllers;

import com.ah.AHCodeCraft.exceptions.NotAllowedSymbolException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;

@RestControllerAdvice
public class ExceptionController extends ExceptionHandlerExceptionResolver {

    @ExceptionHandler
    public ResponseEntity<String> notAllowedSymbolExceptionHandler(NotAllowedSymbolException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getLocalizedMessage());
    }
}
