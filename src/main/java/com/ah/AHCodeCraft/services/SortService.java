package com.ah.AHCodeCraft.services;

import com.ah.AHCodeCraft.algorithms.sort.*;
import com.ah.AHCodeCraft.services.iServices.ISortService;
import com.ah.AHCodeCraft.utils.ArrayGenerator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class SortService implements ISortService {

    private Merge merge;
    private Bubble bubble;
    private Insertion insertion;
    private Selection selection;
    private Heap heap;

    @Override
    public Long mergeSort(int arraySize) {
        int[] arrayToSort = ArrayGenerator.generateArray(arraySize);

        long startTime = System.currentTimeMillis();
        merge.sort(arrayToSort);
        long endTime = System.currentTimeMillis();

        return endTime - startTime;
    }

    @Override
    public Long bubbleSort(int arraySize) {
        int[] arrayToSort = ArrayGenerator.generateArray(arraySize);

        long startTime = System.currentTimeMillis();
        bubble.sort(arrayToSort);
        long endTime = System.currentTimeMillis();

        return endTime - startTime;
    }

    @Override
    public Long insertionSort(int arraySize) {
        int[] arrayToSort = ArrayGenerator.generateArray(arraySize);

        long startTime = System.currentTimeMillis();
        insertion.sort(arrayToSort);
        long endTime = System.currentTimeMillis();

        return endTime - startTime;
    }

    @Override
    public Long selectionSort(int arraySize) {
        int[] arrayToSort = ArrayGenerator.generateArray(arraySize);

        long startTime = System.currentTimeMillis();
        selection.sort(arrayToSort);
        long endTime = System.currentTimeMillis();

        return endTime - startTime;
    }

    @Override
    public Long heapSort(int arraySize) {
        int[] arrayToSort = ArrayGenerator.generateArray(arraySize);

        long startTime = System.currentTimeMillis();
        heap.sort(arrayToSort);
        long endTime = System.currentTimeMillis();

        return endTime - startTime;
    }
}
