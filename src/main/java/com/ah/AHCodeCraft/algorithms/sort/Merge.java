package com.ah.AHCodeCraft.algorithms.sort;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@Component
@SessionScope
public class Merge {
    // Merge the two halves of the array
    private void merge(int[] arr, int left, int middle, int right) {

        int n1 = middle - left + 1;
        int n2 = right - middle;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[middle + 1 + j];

        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // Main function that sorts arr[left..right] using merge()
    private void sort(int[] arr, int left, int right) {
        if (left < right) {
            int middle = (left + right) / 2;

            sort(arr, left, middle);
            sort(arr, middle + 1, right);

            merge(arr, left, middle, right);
        }
    }

    // Method to call from outside
    public void sort(int[] arr) {
        int n = arr.length;
        sort(arr, 0, n - 1);
    }
}

