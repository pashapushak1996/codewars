//Task 1
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

const sortArray = (array) => {
    const evenArr = [];
    const oddArr = [];
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArr.push(array[i])
        } else {
            oddArr.push(array[i]);
        }
    }

    oddArr.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(evenArr.shift());
        } else {
            result.push(oddArr.shift());
        }

    }
};

const array = [5, 3, 2, 8, 1, 4];

//Second solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}


//Task 2
//Given a list of integers, determine whether the sum of its elements is odd or even.
//
// Give your answer as a string matching "odd" or "even".
//
// If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = (array) => array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd';


//Sort for asc
for (let i = 1; i < array.length; i++) {

    for (let j = 0; j < i; j++) {

        if (array[i] < array[j]) {

            if (array[i] % 2) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

        }
    }
}

