package com.ah.AHCodeCraft.controllers;

import com.ah.AHCodeCraft.services.iServices.ISortService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/algorithm/sort")
public class SortController {

    private ISortService sortService;

    @GetMapping("/merge/{arraySize}")
    public ResponseEntity<Long> mergeSort(@PathVariable int arraySize) {
        return ResponseEntity.status(HttpStatus.OK).body(sortService.mergeSort(arraySize));
    }

    @GetMapping("/bubble/{arraySize}")
    public ResponseEntity<Long> bubbleSort(@PathVariable int arraySize) {
        return ResponseEntity.status(HttpStatus.OK).body(sortService.bubbleSort(arraySize));
    }

    @GetMapping("/insertion/{arraySize}")
    public ResponseEntity<Long> insertionSort(@PathVariable int arraySize) {
        return ResponseEntity.status(HttpStatus.OK).body(sortService.insertionSort(arraySize));
    }

    @GetMapping("/selection/{arraySize}")
    public ResponseEntity<Long> selectionSort(@PathVariable int arraySize) {
        return ResponseEntity.status(HttpStatus.OK).body(sortService.selectionSort(arraySize));
    }

    @GetMapping("/heap/{arraySize}")
    public ResponseEntity<Long> heapSort(@PathVariable int arraySize) {
        return ResponseEntity.status(HttpStatus.OK).body(sortService.heapSort(arraySize));
    }

}
