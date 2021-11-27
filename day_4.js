//Task 1

//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
        let strElement = str[i];
        if (i % 2) {
            strElement = strElement.split('').reverse().join('');
            str.splice(i, 1, strElement);
        }
    }

    return str.join(' ').trim();
}

//Task 2

//You have to extract a portion of the file name as follows:
//
// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end

class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        const numSlice = dirtyFileName.indexOf('_')
        const extSlice = dirtyFileName.lastIndexOf('.')
        dirtyFileName = dirtyFileName.slice(numSlice + 1, extSlice)
        return dirtyFileName
    }
}

new FileNameExtractor()
let extractFileName = FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION');

//Task 3

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${ names[0] } likes this`;
        case 2:
            return `${ names[0] } and ${ names[1] } like this`;
        case 3 :
            return `${ names[0] }, ${ names[1] } and Mark like this`;
        default :
            return `${ names[0] }, ${ names[1] } and ${ names.length - 2 } others like this`;
    }
}

//Task 4
//Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.


function highestRank(arr) {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const array = Object.entries(counts).sort((a, b) => {
        return b[1] - a[1]
    });
    if (array[0][1] === array[1][1]) {
        if (array[0][0] < array[1][0]) {
            return Number(array[1][0]);
        }
    }
    return Number(array[0][0]);

}

//Second solution
function highestRan(arr) {
    return arr.sort((a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0];
}

//Task 5
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    const arr = ['!', '?', ',', '.', ';', ':'];

    str = str.split(' ');

    str = str.map((el) => {

        el = el.split('');

        const temp = el.shift();

        el.push(temp);

        let isPunctuation = arr.includes(el.toString());

        return isPunctuation
            ? el.join('')
            : el.concat('ay')
                .join('');
    });

    return str.join(' ');
}

//Task 6
//In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
//
// The string has the following conditions to be alphanumeric:
//
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


function alphanumeric(string) {
    let code;

    for (let i = 0; i < string.length; i++) {
        code = string.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }

    return true;
}


let b = alphanumeric('i4N2Gi!Vs1XIlKW3ee6xlyYvoMxgg');

//Task 6

//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

const sortWord = (string = '') => string.toLowerCase().split('').sort().join('');

const isAnagram = (test, original) => sortWord(test) === sortWord(original);
