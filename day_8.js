//Task 1 (8kyu)
//Implement a function which convert the given boolean value into its string representation.
//
// Note: Only valid inputs will be given.

//first solution
const booleanToString = (b) => b === true ? 'true' : 'false';

//second solution
const booleanToStringSecond = () => b.toString();

//Task 2(7kyu)
//It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.
//
// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!
//
// When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.
//
// You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position (a = 1, b = 2, etc.) of each odd indexed character in y to give the string a total.
//
// example: 'abc' --> a=97, b=2, c=99 --> y total = 198.
//
// If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.

function cake(x, y) {
    let a = y.split("");
    let res = 0;
    for (i in a) {
        res += i % 2 === 0 ? a[i].charCodeAt(0) : a[i].charCodeAt(0) - 96;
    }
    return res > x * 0.7 ? 'Fire!' : 'That was close!';
}


//Task 3(7 kyu)
//Create a function, called removeVowels (or remove_vowels),
// that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

const removeVowels = (str) => {
    const vowelsArr = ["a", "e", "i", "o", "u"];
    return [...str].filter((el) => !vowelsArr.includes(el)).join('');
};


//Task 4(7 kyu)
//Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

//First solution
function getCount(str) {
    let vowelsCount = 0;

    const vowelsArr = ["a", "e", "i", "o", "u"];

    [...str].forEach((el) => {
        if (vowelsArr.includes(el)) {
            vowelsCount += 1;
        }
    });

    return vowelsCount;
}

//Second solution

function getVowelCount(str) {
    return [...str].filter(c => "aeiouAEIOU".includes(c)).length;
}


//Task 5(6 kyu)
//You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    const evenArr = [];
    const oddArr = [];

    for (let i = 0; i < integers.length; i++) {

        if (integers[i] % 2) {
            oddArr.push(integers[i]);
        } else {
            evenArr.push(integers[i]);
        }
    }

    const element = evenArr.length === 1 ? evenArr[0] : oddArr[0]

    return element;
}

findOutlier([2, 6, 8, 10, 3]);

//Task 6(7 kyu)

//Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    let string = new Set([...s1, ...s2]);

    return [...string].sort().join('')
}


const longestSecond = (s1, s2) => [...new Set(s1 + s2)].sort().join('');


//Task 7(8 kyu)
//Write a function called repeatStr which repeats the given string string exactly n times.

const repeatStr = (n, string) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += string;
    }

    return str;
};

function repeatStrSecond(n, s) {
    return s.repeat(n);
}

//Task 8(7 kyu)
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more: http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
// Example: (input --> output)

const DNAStrand = (dna) => {
    const dictionary = { A: 'T', T: 'A', C: 'G', G: 'C' };

    return dna
        .split('')
        .map(c => dictionary[c])
        .join('')
}

//Task 9(7kyu)
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!


function getSum(a, b) {

    const min = Math.min(a, b);

    const max = Math.max(a, b);

    let sum = min;


    for (let i = min + 1; i <= max; i++) {
        sum += i;
    }

    return sum;

}

//Task 10 (7 kyu)
//You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(string) {
    let middleIndex = string.length / 2;
    if (string.length % 2 === 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

//Task 11 (8 kyu)
//Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];

        for (let i = 0; i < args.length; i++) {
            const num = args[i];

            if (num < min) {
                min = num;
            }
        }

        return min;
    }
}

//Task 12 (6 kyu);
//Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
//
// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
//
// [4, 3, 2, 5] would return [4, 3, 2, 6]


const upArray = (arr) => {
    let string = '';

    if (!arr.length) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 9 || arr[i] < 0) {
            return null;
        }

        string += arr[i].toString();

        if (i === arr.length - 1) {
            string = Number(string) + 1;
        }

    }


    return [...string.toString()].map((el) => +el);
}

let upArray1 = upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]);
console.log(upArray1);

