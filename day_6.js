//Task 1
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
    const zeroArr = [];
    const pureArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            pureArr.push(arr[i]);
        }
    }

    return [...pureArr, ...zeroArr];
};

//Second solution
const moveZerosSecond = function (arr) {
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}

//Third solution
const moveZerosThird = function (arr) {
    return arr
        .filter((val) => val !== 0)
        .concat(arr.filter((val) => val === 0));
}

let moveZeros1 = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);


//Task 2
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (cc) => {
    return cc.length > 4 ? [...cc].fill('#', 0, cc.length - 4).join('') : cc;
}


//Task 3
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = (num) => num >= 0 ? num - num - num : num;

//Second solution
function makeNegativeSecond(num) {
    return num < 0 ? num : -num;
}

//Task 4
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
    const strArr = Array.isArray(iterable) ? iterable : iterable.split('');

    return strArr.filter((el, i) => strArr[i] !== strArr[i + 1]);
};


uniqueInOrder(['A', 'B', 'C', 'D', 'A', 'B']);

//Task 5
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

const abbrevName = (name) => name.split(' ').map((word) => word[0].toUpperCase()).join('.');

let abbrevName1 = abbrevName("Sam Harris");

console.log(abbrevName1);