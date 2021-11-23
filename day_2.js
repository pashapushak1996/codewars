//Kata 1

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
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//Kata 2
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((a, b) => b - a);

    const numberOne = numbers.pop();
    const numberTwo = numbers.pop();

    return numberOne + numberTwo
}

function sumTwoSmallestNumbersSecondSolution(numbers) {
    const [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}

//Kata 3

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//Kata 4
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// function order(words) {
//     words = words.split(' ').map((word) => {
//         word = word.split('')
//         word = word.sort()
//         return word.map(Number).splice(0, 1).concat(...word)
//     });
//
//     console.log(words);
// }
//
// order("is2 Thi1s T4est 3a")

//Kata 5
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function list(array) {
    return list.filter((el) => typeof el === 'number');
}




function findUniq(arr) {
    return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}

let findUniq1 = findUniq([0, 1, 0, 0, 0, 0]);

console.log(findUniq1);



