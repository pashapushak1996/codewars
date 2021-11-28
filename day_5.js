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
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

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
    const arrayOfCharacter = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    for (let i = 0; i < arrayOfCharacter.length; i++) {

        const character = arrayOfCharacter[i];

        for (let j = 0; j < str.length; j++) {

            if (str.includes(character)) {
                str = str.replace(character, '');
            }

        }
    }

    return str
}


disemvowel("This website is for losers LOL!")

