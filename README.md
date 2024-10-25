# Project-Recursion

Applying what I have learned about recursion so far, my goal is to solve two classic problems: Fibonacci and Merge Sort.

## Fibonacci sequence

The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

The first step was to write a function `fibsForLoop` which takes a number and returns an array containing that many numbers from the Fibonacci sequence.

**Example:** 
    ```
     Using an example input of 8,
     return [0, 1, 1, 2, 3, 5, 8, 13].
    ```

The next step was to write another function `fibsRecursion` that solves the same problem recursively.


## Merge sort

A significant part of computer science is dedicated to sorting data. An algorithm which uses the ‘divide and conquer’ approach of recursion is able to reduce a sorting problem to smaller and smaller sub-problems. Merge sort is one such sorting algorithm.

Essentially merge sort recurses through an array of unsorted data until it reaches its smallest sub-set, a single item. Merge sort then merges the single items back together in sorted order.

To apply that, the practice required building a function `mergeSort` that takes in an array and returns a sorted array, using a recursive merge sort methodology.

**Example:** 
    ```
     An input of [3, 2, 1, 13, 8, 5, 0, 1],
     return [0, 1, 1, 2, 3, 5, 8, 13].
    ```