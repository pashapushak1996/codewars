//Task 1
//Array.prototype.length will give you the number of top-level elements in an array.
//
// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

function deepCount(a) {
    let count = 0;
    const recursion = arr => {
        count += arr.length;
        for (let i of arr) {
            if (Array.isArray(i)) {
                recursion(i);
            }
        }
    }
    recursion(a);
    return count;
}

//Task 2
//We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
//
// var callbacks = createFunctions(5); // create an array, containing 5 functions
//
// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
function createFunctions(n) {
    let callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }

    return callbacks;
}


//Task 3
//There's no such thing as private properties on a coffeescript object! But, maybe there are?
//
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
//
// getSecret() which returns the secret
// setSecret() which sets the secret

function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret
        },
        setSecret: function (v) {
            secret = v
        }
    }
}

