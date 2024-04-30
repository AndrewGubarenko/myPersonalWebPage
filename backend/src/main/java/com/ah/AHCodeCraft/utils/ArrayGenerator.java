package com.ah.AHCodeCraft.utils;

import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class ArrayGenerator {

    public static int[] generateArray(int size) {
        int[] arr = new int[size];
        Random random = new Random();
        for (int i = 0; i < size; i++) {
            arr[i] = random.nextInt(100); // You can adjust the range of random numbers as needed
        }
        return arr;
    }
}
