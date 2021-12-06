//Task 1
//Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
//
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
    let str = [...n.toString()];
    let string = [];

    for (let i = str.length - 1; i >= 0; i--) {
        const strElement = str[i];
        if (strElement === '-') {
            string.unshift(str[i]);
        } else {
            string.push(str[i])
        }
    }

    return +string.join('');
}

const reverseNumberTwo = (n) => {
    const number = [...Math.abs(n).toString()].reverse().join('');

    return n > 0 ? Number(number) : -Number(number);
}

//Task 2
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str = '', ending) {
    const string = [...str].reverse().slice(0, ending.length).reverse().join('');

    return string === ending;
}

let b = solution('abcde', 'cde');


function solutionTwo(str, ending) {
    return str.slice(0 - ending.length) === ending;
}

//Task 3
//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0;
}

//Task 4
//Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
// Task
// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100);
}

//Task 5
//We need a function that can transform a number into a string.
//
// What ways of achieving this do you know?

const numberToString = (num) => num.toString();

//Task 6
//Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

const toBinary = n => +n.toString(2);


//Task 7
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = (x) => x.split('').map(el => +el >= 5 ? '1' : '0').join('');

//Task 8
//This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.
//
// Given a sequence of characters, does "abc" appear in the CENTER of the sequence?
//
// The sequence of characters could contain more than one "abc".
//
// To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.
//
// If it is in the CENTER, return True. Otherwise, return False.
//
// Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

const isInMiddle = str =>
    str.length <= 4 ? str.includes('abc') : isInMiddle(str.slice(1, -1));

//Task 9
//Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
// All inputs will be valid.

function digits(n) {
    return n.toString().length;
}


//Task 10
//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):


function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    }

    if (exam > 75 && projects >= 5) {
        return 90;
    }

    if (exam > 50 && projects >= 2) {
        return 75;
    }

    return 0;
}

//Task 11
//When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// If your language supports it, try using a switch statement.

function switchItUp(number) {
    const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    return numbers[number];
}

//Task 12
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
// For example, update_light('green') should return 'yellow'.
//
// Note: Use "" instead of '' in C++.

function updateLight(current) {
    switch (current) {
        case 'green' :
            return 'yellow';

        case 'yellow':
            return 'red';

        case 'red':
            return 'green';

        default:
            return 'unknown color';
    }
}

const updateLightSecond = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]

//Your job is to figure out the index of which vowel is missing from a given string:
//
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

function absentVowel(x) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const newVowels = [];

    for (let i = 0; i < x.length; i++) {
        if (vowels.includes(x[i])) {
            newVowels.push(x[i]);
        }
    }

    const character = [...vowels].filter((el) => !newVowels.includes(el))[0];

    return vowels.findIndex(c => c === character)
}

const absentVowelBest = string =>
    [...'aeiou'].findIndex(letter => !string.includes(letter))


//Task 13
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
    const numbersArray = numbers.split(' ').map(el => +el);

    let min = numbersArray[0];
    let max = numbersArray[0];

    for (let i = 0; i < numbersArray.length; i++) {
        if (min > numbersArray[i]) {
            min = numbersArray[i];
        }

        if (max < numbersArray[i]) {
            max = numbersArray[i];
        }
    }

    return `${ max } ${ min }`;
}

//Task 14
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
    str = str.toLowerCase();

    return [...new Set(str)].length === str.length;
}

//Task 15
//Nickname Generator
//
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
//
// If the 3rd letter is a consonant, return the first 3 letter

const nicknameGenerator = (name) => {
    const vowels = [...'aeiou'];

    const nickName = !vowels.includes(name[2]) ? name.slice(0, 3) : name.slice(0, 4);

    return name.length <= 3 ? 'Error: Name too short' : nickName;
}

//Task 16
//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

const explode = (s) => {
    let string = '';

    const numbers = [...s].map(el => +el);

    numbers.forEach(el => {
        for (let i = 0; i < el; i++) {
            string += el;
        }
    });

    return string;
}

function explodeBetter(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}

//Task 17
//The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

function revrot(str = '', sz) {
    let array = [...str];

    let clearArr = [];

    while (array.length) {
        const part = array.splice(0, sz);

        if (part.length === sz) {
            const sum = part.reduce((a, b) => Math.pow(a, 3) + Math.pow(b, 3), 0);

            if (sum % 2 === 0) {
                const reverse = part.reverse();

                clearArr.push(reverse);
            } else {
                clearArr.unshift(part);
            }

        }
    }

    console.log(clearArr.flat());
}

revrot("664438769", 8);
