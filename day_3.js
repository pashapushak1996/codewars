//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    const characters = [];
    text = text.toLowerCase().split('').sort();

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            characters.push(text[i]);
        }
    }

    const duplicates = characters.reduce((acc, value) => {
        let find = acc.find(el => el === value);

        if (find !== value) {
            acc.push(value);
        }

        return acc;
    }, []);

    return duplicates.length;
}

let number = duplicateCount("Indivisibility");
console.log(number);
