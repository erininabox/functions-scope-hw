![ga-logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Problem solving with Functions 

Duration: "3:00 - 4:00" <br>
Type: Homework<br>
Class: SEI<br>
Creator: GA Instructional Team<br>
Topics: Problem solving with functions<br>

---


## Setup

Fork/clone this repo as directed by your instructor. Inside the repo, create the usual folder structure. Write your answers in `app.js`.

## 1. Verbal questions

Write answers to the following questions as comments. 

1. What is the difference between a **parameter** and an **argument**?
2. Within a function, what is the difference between **return** and **console.log**?
3. What are the implications of the ability of a function to return a value?

## 2. Palindrome.
Write a function `checkPalindrome` that accepts a single argument, a string. Later in this assignment we're gonna beef up our palindrome function some. The function should return true if the string is a palindrome, false if not. A _palindrome_ is a word that is the same spelled backwards and forwards, for example: Racecar. Make sure your function will give the correct answer for words with **capital letters**.

```javascript
const wordIsPalindrome = checkPalindrome("Radar");

console.log(wordIsPalindrome);
=> true
```

```javascript
const wordIsPalindrome = checkPalindrome("Cat");

console.log(wordIsPalindrome);
=> false
```

## 3. Check a List

Write a function `checkForStudent` that takes 2 parameters, a student's name and an array of students, and checks if the student's name is in the array. If the student's name is included in the array the function should return true. If the name is not included in the array the function should return false. There is more than one way to do this challenge.

**Extra Bonus**: For extra practice see if you can find at least two ways to solve it.

```js
const studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);

console.log(studentIncluded);
=> true
```

```js
const studentIncluded =  checkForStudent('Ron', ['Sally', 'Kyle']);

console.log(studentIncluded);
=> false
```


## 4. Sum Array
Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array.

**Try solving it using a loop instead of using [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**.

Expected result:
```javascript
const sum = sumArray([1, 2, 3, 4, 5, 6]);

console.log(sum);
=> 21
```

## CSS
Watch the following three videos on CSS:

- [First CSS video - 5 minutes](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [Second CSS video - 11 minutes](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
- [Third CSS video - 17 minutes](https://www.youtube.com/watch?v=g0Aq2kP5-CY&index=5&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

You will need to have watched these videos for tomorrow's lesson.

# Hungry for more?

## Digit Sum
Write a function `sumDigits` that accepts a number and returns the sum of its digits.
```js
const sum = sumDigits(42);

console.log(sum);
=> 6;
```

    Commit.

## Pythagoras
Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

_hint:_ discover the Pythagorean Theorem on a website called google.com

_hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

**For this problem, do not use `Math.hypot()`**
```js
const sideC = calculateSide(8, 6);

console.log(sideC);
=> 10
```

    Commit.

## Prime Numbers
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

    Commit.

### Step One
Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
_Hint:_ Check every number up to the square root. To do this, try a _for loop_.

### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
This function can **call on** the previous `checkPrime` function.

## Insert Dash

Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.
```javascript
const numWithDashes = insertDash(454793);

console.log(numWithDashes);
=> 4547-9-3
```

    Commit.

## Reverse a String

Write a function `reverseString` that takes a string as a parameter and returns that string with the letters reversed **without using `.split()`, `.reverse()`, or `.join()`**.

    Commit.

4. Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.

    Commit.

5. Make your palindrome function work even if the string contains punctuation.  So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

    Commit.

6. Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards.  It should not care about spacing, capitalization, or punctuation.  For example the following string would pass the test: 

    "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

    Commit.

7. You still want more?!?! Do you even sleep? Create an account on [Project euler](https://projecteuler.net/archives) and keep working on those problems.

## More Practice

For more practice with functions, check out the website, [Codewars](https://www.codewars.com/). Codewars is a code challenge platform with hundreds of challenges of different difficulty levels. Create an account, start on the easiest difficulty level, and slowly work your way up.
