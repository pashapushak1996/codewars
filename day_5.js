//Task 1
//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x = '') {
    while (x.includes(' ')) {
        x = x.replace(' ', '');
    }
    return x;
}

//Task 2
function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }

    let oneMinute = 0;
    let oneHour = 60 * oneMinute;
    let oneDay = 24 * oneHour;
    let oneYear = 24 * oneDay;

    const timePeriod = {
        oneYear,
        oneDay,
        oneHour,
        oneMinute
    };
}

function formatDurations(seconds) {
    if (seconds === 0) return 'now';
    let typeArr = ['year', 'day', 'hour', 'minute', 'second'];
    let sec = 0;
    let minute = 0;
    let hour = 0;
    let day = 0;
    let year = 0;
    minute = Math.floor(seconds / 60);
    sec = seconds % 60;

    hour = Math.floor(minute / 60);
    minute = minute % 60;

    day = Math.floor(hour / 24);
    hour = hour % 24;

    year = Math.floor(day / 365);
    day = day % 365;

    let resultArr = [year, day, hour, minute, sec];
    let resultStrArr = [];
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] === 1) {
            resultStrArr.push(resultArr[i] + ' ' + typeArr[i]);
        } else if (resultArr[i] >= 2) {
            resultStrArr.push(resultArr[i] + ' ' + typeArr[i] + 's');
        }
    }
    let resultStr = '';
    for (let i = 0; i < resultStrArr.length; i++) {
        if (i === resultStrArr.length - 2) {
            resultStr += resultStrArr[i] + ' and ' + resultStrArr[i + 1];
            break;
        }
        if (i !== resultStrArr.length - 1) {
            resultStr += resultStrArr[i] + ', ';
        } else {
            resultStr += resultStrArr[i];
        }
    }
    return resultStr;
}

//Task 3

//This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

const zero = (cb) => cb ? cb(0) : 0;
const one = (cb) => cb ? cb(1) : 1;
const two = (cb) => cb ? cb(2) : 2;
const three = (cb) => cb ? cb(3) : 3;
const four = (cb) => cb ? cb(4) : 4;
const five = (cb) => cb ? cb(5) : 5;
const six = (cb) => cb ? cb(6) : 6;
const seven = (cb) => cb ? cb(7) : 7;
const eight = (cb) => cb ? cb(8) : 8;
const nine = (cb) => cb ? cb(9) : 9;

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => Math.round(a * b);
const dividedBy = (a) => (b) => Math.round(b / a);
//Task 4
//Write a function that accepts an people of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
    let phoneNumber = '(xxx) xxx-xxxx';

    for (let i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace('x', numbers[i])
    }

    return phoneNumber;
}

let s = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//Task 5
const disemvowel = (str = '') => {
    const peopleOfCharacter = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    for (let i = 0; i < peopleOfCharacter.length; i++) {

        const character = peopleOfCharacter[i];

        for (let j = 0; j < str.length; j++) {

            if (str.includes(character)) {
                str = str.replace(character, '');
            }

        }
    }

    return str
}

//Task 6

//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

function nextBigger(n) {
    n = n.toString().split('');

    if (n.length === 1) {
        return null;
    }


    for (let i = 0; i < n.length; i++) {

        if (n[i] < n[i + 1]) {
            //Replace element
            let temp = n[i];

            n[i] = n[i + 1];

            n[i + 1] = temp;
        }
    }


    console.log(n);

    //your code here
}


//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger1(n) {
    const sortedDigits = n => ('' + n)
        .split('')
        .sort((a, b) => b - a);

    const max = +sortedDigits(n).join('');

    for (let i = n + 1; i <= max; i++) {
        if (max === +sortedDigits(i).join('')) return i
    }
    return -1
}


//Task 8
//Your job is to create a class called Song.
//
// A new Song will take two parameters, title and artist.
//
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).
//
// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listeners = [];
    }

    howMany(people) {
        people = people.map(el => el.toLowerCase());
        people = people.filter((el, index, arr) => arr.indexOf(el) === index && !this.listeners.includes(el));
        this.listeners.push(...people);
        return people.length
    }
}

const mount = new Song('Love you', 'Pavlo Pushak');
//Task 9
//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


String.prototype.toJadenCase = function () {
    function capitalizeFirstLetter(string = '') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

//Task 10
//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let min = s.split(' ')[0].length;

    s.split(' ').forEach((el) => {
        if (min > el.length) {
            min = el.length;
        }
    });

    return min
}

findShort("Let's travel abroad shall we");



