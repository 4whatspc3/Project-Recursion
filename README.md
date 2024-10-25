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

### Sources

This project was part of the module _A Bit of Computer Science_ from **The Odin Project's** Open Source curriculum, where we have to go through some challenges
to grasp key concepts.

Some video lessons and lectures that helped me to solve the problems:

1. Fibonacci:
    -   Khan Academy - [Stepping Through Recursive Fibonacci Function](https://youtu.be/zg-ddPbzcKM?si=TydFd7PPamu5yJuT)
    -   Wrath of Math - [What is the Fibonacci Sequence?](https://youtu.be/N7pc4aVBP5I?si=xk0rBBcuXrwsS6L-)
    -   TED - [The magic of Fibonacci numbers | Arthur Benjamin](https://youtu.be/SjSHVDfXHQ4?si=0VBgxsphb3YXpZaq)

2. Merge sort and recursion:
    -   CS50 - [Merge Sort](https://youtu.be/Ns7tGNbtvV4?si=oyKcqxl0Y-3vKUE2)
    -   CS50 - [CS50x 2023 - Lecture 3 - Algorithms](https://www.youtube.com/live/4oqjcKenCH8?si=StzckSQbXzVy420w)
    -   CS50 - [Recursion](https://youtu.be/mz6tAJMVmfM?si=7_HN2V7ba5f-5M7k)

3. Texts and sites:
    -   Javascript.info - [Recursion and stack](https://javascript.info/recursion)
    -   CodinGame - [Recursion in Javascript](https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion)
    -   Hackerearth - [Merge Sort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)
    -   MIT - [Reading 10: Recursion](https://web.mit.edu/6.005/www/fa15/classes/10-recursion/)
