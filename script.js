// ======================================================
// Part 1
// ======================================================

// 1. Take an array of numbers and return the sum

function sumArray(numbers) {
    // Use reduce to add all numbers together
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Without reduce():
// function sumArray(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

console.log(sumArray([1, 2, 3, 4])); // 10

// Explanation:
// reduce() loops through the array. reduce() is used when you want to combine all elements of an array into a single value. Useful when calculating:
// Sum
// Average
// Total price
// Counting values
// Building objects
// sum keeps track of the running total.
// Starts from 0.

// 2. Take an array of numbers and return the average
// ========================================================

function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    // Divide total sum by number of elements
    return sumArray(numbers) / numbers.length;
}

console.log(averageArray([2, 4, 6, 8])); // 5

// Explanation:
// Reuses sumArray()
// Divides by total number of values

// 3. Take an array of strings and return the longest string
// ===========================================================

function longestString(strings) {
    if (strings.length === 0) return "";

    return strings.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
}

console.log(longestString(["cat", "elephant", "dog"])); // elephant

// Explanation:
// Compare each string length
// Keep the longest one

// 4. Return strings longer than a given number
// ========================================================

function stringsLongerThan(strings, num) {
    return strings.filter(str => str.length > num);
}

console.log(stringsLongerThan(['hello', 'per', 'in', 'the', 'scholas'], 3));  // ["hello", "scholas"]

// Explanation:
// filter() keeps only strings matching the condition

// 5. Print every number from 1 to n using recursion (no loops)
// ==============================================================

function printNumbers(n, current = 1) {
    // Base case
    if (current > n) return;

    console.log(current);

    // Recursive call
    printNumbers(n, current + 1);
}

printNumbers(10);

// Explanation:
// Stops when current > n
// Calls itself with the next number

// ======================================================
// Part 2: Thinking Methodically
// ======================================================

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// 1. Sort by age
// ==============================================================================

const sortedByAge = [...data].sort((a, b) => Number(a.age) - Number(b.age));

console.log(sortedByAge);

// Explanation:
// Number() converts strings to numbers
// Sorts youngest to oldest
// sort() changes the original array. [...data] creates a copy first, so your original data stays unchanged.

// 2. Filter out people older than 50
// ==================================================================================

const filteredPeople = data.filter(obj => Number(obj.age) <= 50);

console.log(filteredPeople);

// 3. Map occupation → job and increment age
// ==================================================================================

const updatedPeople = data.map(obj => ({
    id: obj.id,
    name: obj.name,
    job: obj.occupation,
    age: Number(obj.age) + 1
}));

console.log(updatedPeople);

// Changes:
// occupation becomes job
// Age increases by 1

// 4. Use reduce to calculate sum of ages
// ==================================================================================

const totalAge = data.reduce((sum, obj) => {
    return sum + Number(obj.age);
}, 0);

console.log(totalAge);

// 5. Calculate average age
// ==================================================================================

const averageAge = totalAge / data.length;

console.log(averageAge);

// ======================================================
// Part 3: Thinking Critically
// ======================================================

// 1. Increment the object's age directly
// ======================================================

function incrementAge(obj) {
    // If age doesn't exist, create it
    if (!obj.age) {
        obj.age = 0;
    }

    // Increment age
    obj.age++;

    // Add/update timestamp
    obj.updated_at = new Date();

    return obj;
}

const person1 = { name: "Alice" };

console.log(incrementAge(person1)); // The original object is modified.

// 2. Make a copy and increment the copy
// ==========================================

function incrementAgeCopy(obj) {
    const copy = {
        ...obj,
        age: obj.age ? obj.age + 1 : 0,
        updated_at: new Date()
    };

    return copy;
}

const person2 = {
    name: "Bob",
    age: 25
};

const newPerson = incrementAgeCopy(person2);

console.log(newPerson); // The copy becomes: { name: "Bob", age: 26, updated_at: Date } 
console.log(person2);  // But original stays: { name: "Bob", age: 25 }

// ...obj copies all properties

