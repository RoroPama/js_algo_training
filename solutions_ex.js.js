// JAVASCRIPT_INTERVIEW_QUESTIONS
// JAVASCRIPT_INTERVIEW_QUESTIONS
// JAVASCRIPT_INTERVIEW_QUESTIONS
// JAVASCRIPT_INTERVIEW_QUESTIONS

/*
Exercise 1:
N*12

Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.
Examples

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10

*/

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */ Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  if (acc === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }

  return acc;
};

/*
Exercise 2:
N*16
Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.
Input

    numbers: number[]: An array of integers

Examples

Input: numbers = [5,7,1,3]
Output: false
Explanation: All elements in the array are unique.

Input: numbers = [10,7,0,0,9]
Output: true
Explanation: 0 appears more than once.

*/

export default function findDuplicates(numbers) {
  const numbersSet = new Set(numbers);
  return numbers.length === numbersSet.size;
}

/*
Exercice 3:
N*21
Given an array of integers numbers, write a function that returns the indices of two integers within the numbers array that sum up to a target integer. The smaller index should appear first.
Input

    numbers: number[]: An array of integers
    target: number: An integer

Notes

    There will always be exactly one solution for the given input
    The same element should not be used more than once

Examples

Input: numbers = [0,7,1,9], target = 7
Output: [0,1]
Explanation: numbers[0] plus numbers[1] = 7 which is target

Input: numbers = [4,9,2,1,7], target = 5
Output: [0,3]
Explanation: numbers[3] plus numbers[0] = 5 which is target

*/

function pairSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

/*
Exercice 4:
N*37

Given a string str, determine if it is a palindrome. Return true if it is, and false otherwise.

A string is a palindrome if, after changing all uppercase letters to lowercase and discarding all non-alphanumeric characters, it remains identical when read forward and backward. Alphanumeric characters consist of both letters and numbers.
Input

    str: string: A string

Examples

Input: str = "No 'x' in Nixon"
Output: true
Explanation: After removing non-alphanumeric characters and converting to lowercase, the string becomes 'noxinnixon', which is a palindrome.

Input: str = "Was it a car or a cat I saw?"
Output: true
Explanation: After removing non-alphanumeric characters and converting to lowercase, the string becomes 'wasitacaroracatisaw', which is a palindrome.

*/

/**
 * @param {string} str
 * @return {boolean}
 */
function isStringPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^0-9a-z]/g, "");
  // Comparer avec sa version inversée
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

/*
Exercise 5:
N*104
Implement a queue data structure in JavaScript that contains the following operations:

    new Queue(): Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.
    enqueue(): Adds an item to the back of the queue. Required time complexity: O(1).
    dequeue(): Removes an item from the front of the queue. Required time complexity: O(1).
    isEmpty(): Determines if the queue is empty. Required time complexity: O(1).
    front(): Returns the item at the front of the queue without removing it from the queue. Required time complexity: O(1).
    back(): Returns the item at the back of the queue without removing it from the queue. Required time complexity: O(1).
    length(): Returns the number of items in the queue. Required time complexity: O(1).

Examples

const queue = new Queue();
queue.isEmpty(); // true
queue.enqueue(1);
queue.enqueue(2);
queue.length(); // 2
queue.enqueue(3);
queue.front(); // 1
queue.back(); // 3
queue.dequeue(); // 1
queue.isEmpty(); // false


*/

class Queue {
  constructor() {
    this.Q = [];
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    this.Q.push(item);
    return this.Q.length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    return this.Q.shift();
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean}
   */
  isEmpty() {
    return this.Q.length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    return this.Q[0];
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    return this.Q[this.Q.length - 1];
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.Q.length;
  }
}
