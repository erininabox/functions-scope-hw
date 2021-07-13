/////////////////////////////////
// FUNCTIONS HOMEWORK

/////////////////////////////////
/* VERBAL QUESTIONS
1. What is the difference between a 'parameter' and an 'argument'?
--A parameter can vary in value, whereas the argument is the actual value that you pass through the function

2. Within a function, what is the difference between 'return' and 'console.log'?
--Console.log prints to the console which is accessible to human eyes. 'Return' does not print to the console, but makes the value being asked for available to use in the code. It ends whatever function/loop/etc once it provides the value. You can nest the function containing return into another function. For example into a console.log() so that you can read it.

3. What are the implications of the ability of a function to return a value?
--The implications are that you can then use a function that ends in a return value in place of an actual value. You don't have to hard-code everything in and instead and can call a value stored elsewhere that may or may not be variable, and then act upon it in a fairly compact piece of code without creating a new constant.
*/

/////////////////////////////////
// QUESTION 2 - PALINDROME
function checkPalindrome(wordIsPalindrome) {
    wordIsPalindrome = wordIsPalindrome.toUpperCase();
    const wordSplit = wordIsPalindrome.split("");
    const reverseArray = wordSplit.reverse();
    const reverseWord = reverseArray.join("");
    if (reverseWord === wordIsPalindrome) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkPalindrome("cat");
checkPalindrome("tacocat");

/////////////////////////////////
// QUESTION 3 - CHECK A LIST

const studentArray = ["Nicole", "Brooke", "Megan", "Stephany", "Erin", "Jack"];

function checkForStudent(student, arrayOfStudents) {
    for (i = 0; i <= arrayOfStudents.length; i++) {
        if (arrayOfStudents[i] == student) {
            return true;
        };
        
    };
    return false;
};

const studentIncluded = checkForStudent("John", studentArray);
console.log(studentIncluded);

/////////////////////////////////
// QUESTION 4 - SUM ARRAY
