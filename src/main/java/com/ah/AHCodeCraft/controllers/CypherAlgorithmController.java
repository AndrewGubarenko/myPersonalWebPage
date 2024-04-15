package com.ah.AHCodeCraft.controllers;

import com.ah.AHCodeCraft.dao.CaesarMessageContainer;
import com.ah.AHCodeCraft.dao.MessageContainer;
import com.ah.AHCodeCraft.dao.VigenereMessageContainer;
import com.ah.AHCodeCraft.services.iServices.ICypherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/algorithm/cypher")
public class CypherAlgorithmController {

    ICypherService cypherService;

    @PostMapping("/enigma/encode")
    public ResponseEntity<String> enigmaEncode(@RequestBody MessageContainer messageContainer) {
        return ResponseEntity.status(HttpStatus.OK).body(cypherService.enigmaEncode(messageContainer));
    }

    @PostMapping("/caesar/encode")
    public ResponseEntity<String> caesarEncode(@RequestBody CaesarMessageContainer messageContainer) {
        return ResponseEntity.status(HttpStatus.OK).body(cypherService.caesarEncode(messageContainer));
    }

    @PostMapping("/caesar/decode")
    public ResponseEntity<String> caesarDecode(@RequestBody CaesarMessageContainer messageContainer) {
        return ResponseEntity.status(HttpStatus.OK).body(cypherService.caesarDecode(messageContainer));
    }

    @PostMapping("/vigenere/encode")
    public ResponseEntity<String> vigenereEncode(@RequestBody VigenereMessageContainer messageContainer) {
        return ResponseEntity.status(HttpStatus.OK).body(cypherService.vigenereEncode(messageContainer));
    }

    @PostMapping("/vigenere/decode")
    public ResponseEntity<String> vigenereDecode(@RequestBody VigenereMessageContainer messageContainer) {
        return ResponseEntity.status(HttpStatus.OK).body(cypherService.vigenereDecode(messageContainer));
    }
}
