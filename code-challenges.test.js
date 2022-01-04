// ASSESSMENT 3: Coding Practical Questions with Jest

// const { expect } = require("@jest/globals");
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    describe("fibonacci", ()=>{
        it(
          "takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.",()=>{
            expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
            expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
          });
    });

// b) Create the function that makes the test pass.
    // Declare a function fib that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
    const fibonacci = (num) => {
      if (num < 2) {
        return "try a  bigger number";
      }
      // declare a local variable to add to the end of the array that starts at one and gets added to itself as it goes up in a for loop
      let currentNumber = 1;
      // declare an array to store the values
      let fibNums = [1];
      // create a variable to store the value of the previous number in the sequence
      let lastNum = 1;
      // for loop will take in the parameter an return an array that pushes the currentNumber on to the array and then adds to currentNumber
      for (let index = 1; index < num; index++) {
          fibNums.push(currentNumber)
          //add current number to previous number to get the new current number
          currentNumber = currentNumber + lastNum
          lastNum = currentNumber - lastNum
      }
      return fibNums
    }

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

    describe("oddNumbers", () => {
      it("takes an input array of any type and outputs an array that shows odd numbers from least to greatest", () => {
          let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
          let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23]);
      });
    });

// Expected output: [-9, 7, 9, 199]
// Expected output: [-823, 7, 23]

// b) Create the function that makes the test pass.
// This function will take an input array of any type and outputs an array that shows odd numbers from least to greatest
    const oddNumbers = (array) => {
        // will require a filter and the condiotn is value %2 !== 0  and  data type must equal "number"
        // a sort fucntion will be implemeted to sort numbers from least to greatest 
        // sorted array will be returned
        // let filteredArr = array.filter(value => value % 2 !== 0 && typeof value === 'number')
        // let sortedFilter = filteredArr.sort((a, b) => a - b);
        // return sortedFilter;
         return array.filter((value) => value % 2 !== 0 && typeof value === "number").sort((a, b) => a - b);
    }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("someFunction", () => {
  it("takes an array of numbers and returns an arry with each number having the value of the previous value addedd to it", () => {
    let numbersToAdd1 = [2, 4, 45, 9]
    let numbersToAdd2 = [0, 7, -8, 12]
    let numbersToAdd3 = []
    expect(someFunction(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(someFunction(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(someFunction(numbersToAdd3)).toEqual([]);
  });
});

// b) Create the function that makes the test pass.
// create someFunction 
    const someFunction = (array) => {
        // Create an if statement for the edge case
        if (array.length < 1) {
            return []
        } 
        // create a new array variable and set index 0 to what it already is 
        let summed = [array[0]]
        // itterate over the array starting with Index 1 
        for (let index = 1; index < array.length; index++) {
            // push the value of array at i with the pervious value into the new array
            summed.push(array[index] + summed[index - 1])
        }
        return summed
    }
