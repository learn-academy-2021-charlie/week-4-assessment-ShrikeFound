// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { result } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//using this https://github.com/sapegin/jest-cheat-sheet#test-structure

describe("removeAndShuffle",() =>{
    //not sure how to check to see if array is different from original.
    
    //first checking to see if returned array length is different 
    it("returns array one element shorter than input",() =>{
        expect(removeAndShuffle(colors1)).toHaveLength(4)
        expect(removeAndShuffle(colors2)).toHaveLength(5)
    })
    // we can use NOT to check whether an array doesn't match.
    //first checks to make sure .toEqual passed, then added .not
    it("returns array in different order",() =>{
        expect(removeAndShuffle(colors1)).not.toEqual(colors1.slice(1))
        expect(removeAndShuffle(colors2)).not.toEqual(colors2.slice(1))
    })
})

// b) Create the function that makes the test pass.

//function takes an array
const removeAndShuffle = (array) =>{
    // return array from index 1 up
    newArray = array.slice(1)

    //using something from a shuffle functin I've tried before 
    //https://github.com/ShrikeFound/Lucius-Bot/blob/main/dealer.js
    // the idea is that we loop through the array an arbitrary amount of times
    // each time, grabbing the first item in the array
    // and replacing it with a random element in the array.
    // 1000 times worked fine for a deck of 54, so should work for arrays of 4/6
    for (let i = 0; i < 1000; i++) {
        //get random number fo rindex
        let randomLocation = Math.floor(Math.random() * newArray.length);
        //temporarily hold value of first index
        let temp = newArray[0];
        //replace first index with value of random index
        newArray[0] = newArray[randomLocation];
        //replace random index with value of first index (held in temporary variable)
        newArray[randomLocation] = temp;
      }


    //will look for maybe a neater way to do it
      //return newly shuffle array
      return newArray
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
//jest is giving me an error here, so I'm adding a comma between the numbers.
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMax",() =>{
    //checking to see if array returned matches expected array
    it("returns an array with 2 numbers",() =>{
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})


// b) Create the function that makes the test pass.

//create a function that takes an array
//to find  largest number 
//set placeholder variable to first index
//iterate through rest of array
//compare plaeholder to each element, replace if element is larger
//repeat with  smallest
//return numbers in array

const minMax = (array) =>{
    //two placeholders for min and max
    let min = array[0]
    let max = array[0]

    //iterate through array
    for (let i = 1; i < array.length; i++){

        //find smallest number
        if (array[i] < min){
            min = array[i]
        }
        //find largest number
        if (array[i] > max){
            max = array[i]
        }
    }
    //return array with two numbers
    return [min,max]

}




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("consolidateArrays",() =>{
    it("returns 1 array with no duplicate values",() =>{
        expect(consolidateArrays(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// b) Create the function that makes the test pass.


//function takes 2 arrays (for now)
//joins the arrays
//removes duplicates....by....
//could have placeholder array 
//loop through combined array
//if value doens't exist in placeholder, push to placeholder
// return placeholder


const consolidateArrays = (arrayOne,arrayTwo) =>{
    const result = []
    combinedArray = arrayOne.concat(arrayTwo)

    for(let i = 0; i < combinedArray.length; i++){
        if (!result.includes(combinedArray[i])){
            result.push(combinedArray[i])
        }
    }

    return result

}