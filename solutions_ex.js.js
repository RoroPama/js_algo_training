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
