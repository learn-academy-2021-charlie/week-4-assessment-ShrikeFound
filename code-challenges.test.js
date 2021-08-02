// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

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
    //ended up commenting them out after trying ton console log stuff and getting repeats
    // it("returns array one element shorter than input",() =>{
    //     expect(removeAndShuffle(colors1)).toHaveLength(4)
    //     expect(removeAndShuffle(colors2)).toHaveLength(5)
    // })
    // // we can use NOT to check whether an array doesn't match.
    // //first checks to make sure .toEqual passed, then added .not
    // it("returns array that doesn't match",() =>{
    //     expect(removeAndShuffle(colors1)).not.toEqual(colors1.slice(1))
    //     expect(removeAndShuffle(colors2)).not.toEqual(colors2.slice(1))
    // })
    //the above test makes sure the two arrays are different, but this one makes sure that the two arrays WOULD match if they were ont eh same order.

    //I think technically I would only need this one/ should only use this one, since a shuffle 
    //might still return an array in the same order (which means my second test would fail). I'd only need the test above if we needed to return an array in different order.
    //still, happy to have used a little more of the jest syntax.

    //Keeping the other tests because I like all of the green check marks.
    
    it("returns array WOULD match if sorted",() =>{
        expect(removeAndShuffle(colors1).sort()).toEqual(colors1.slice(1).sort())
        expect(removeAndShuffle(colors2).sort()).toEqual(colors2.slice(1).sort())
    })
})

// b) Create the function that makes the test pass.

//function takes an array

// const removeAndShuffle = (array) =>{
//     // return array from index 1 up
//     newArray = array.slice(1)

//     //using something from a shuffle functin I've tried before 
//     //https://github.com/ShrikeFound/Lucius-Bot/blob/main/dealer.js
//     // the idea is that we loop through the array an arbitrary amount of times
//     // each time, grabbing the first item in the array
//     // and replacing it with a random element in the array.
//     // 1000 times worked fine for a deck of 54, so should work for arrays of 4/6
    
//     //get random number for index
//     //temporarily hold value of first index
//     //replace first index with value of random index
//     //replace random index with value of first index (held in temporary variable)
//     //return newly shuffle array

//     for (let i = 0; i < 1000; i++) {
       
//         let randomLocation = Math.floor(Math.random() * newArray.length)
//         let temp = newArray[0]

//         newArray[0] = newArray[randomLocation]

//         newArray[randomLocation] = temp
//       }


//       return newArray
// }


//will look for maybe a neater way to do it
//Apparently this problem has been solved for years. 
//The Fisher-Yates Algorithm:
//there's a really cool page on this here:
// https://bost.ocks.org/mike/shuffle/
//from the page:
//To implement the in-place O(n) shuffle, then, pick a random remaining element (from the
//front) and place in its new location (in the back). The unshuffled element in the back is
//swapped to the front, where it waits for subsequent shuffling.

//this is their implementation. gonna break it down before I try it myself:

//function takes an array
// function shuffle(array) {
//     //initialize 3 variables: 
//     //m = array length
//     //i = random index
//     //t = temporary holder.
//     //not sure why they don't use more descriptive variable names.

//     var m = array.length, t, i;

//     // While there remain elements to shuffle…
//     while (m) {
  
//       // Pick a remaining element…
//       //you're also decrementing the m variable 
//       //so next time around the numbers you can pick from are less.
//       i = Math.floor(Math.random() * m--);
        
//       // And swap it with the current element.
//       //temporary holder holds value of last element (index m)
//       t = array[m];
//       //last element holds value of element at index i
//       array[m] = array[i];
//       //element at index i holds temp
//       array[i] = t;
//     }
  
//     //return array that's been shuffled in-place.
//     return array;
//   }


//one more time for my benefit:
//we have an array.
//we store the value of its original length, which we use as a counter.
//pretty sure we could just use a for loop here.
//from there, we choose a random element from 0 to the current index
//swap it with the current index

//gonna try it with a for loop.

//function takes an array
//new array with one less element
//length-1 because that's the value of the last index. leaving it at array.length shuffles in an undefined element.
//temp holds value at current last index
//instead of grabbing a random location from the entire array (like my original function)
//we're just grabbing one from the remaining items
//last element replaced with random element
//random element replaced with last element

    const removeAndShuffle = (array) =>{
    
    const newArray = array.slice(1) 

    for(let i = newArray.length-1; i > 0; i--){
    
        let temp = newArray[i]
        //welp. need a plus one otherwise we aren't able to actually get i.
        let randomLocation = Math.floor(Math.random() * i+1)

        newArray[i] = newArray[randomLocation]
        newArray[randomLocation] = temp

    }
    console.log(newArray)
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
var testArray3 = [17, 8, 2, 13, 11, 15, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("consolidateArrays",() =>{
    it("returns 1 array with no duplicate values",() =>{
        expect(consolidateArrays(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        expect(consolidateArrays(testArray1,testArray2,testArray3)).toEqual([3,  7, 10,  5,  4, 8,  2,  1, 17, 13, 11, 15])
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


// const consolidateArrays = (arrayOne,arrayTwo) =>{
//     const result = []
//     combinedArray = arrayOne.concat(arrayTwo)

//     for(let i = 0; i < combinedArray.length; i++){
//         if (!result.includes(combinedArray[i])){
//             result.push(combinedArray[i])
//         }
//     }

//     return result

// }

// STRETCH: Use the spread operator to pass in a dynamic number of arguments.

const consolidateArrays = (...allArrays) =>{
    // console.log(allArrays)
    //we get an array, so we can use methods like reduce.
    const flattenedArray = allArrays.reduce((newArray,smallArray) =>{
        return newArray.concat(smallArray)
    },[])
    // console.log(flattenedArray)
    const result = []

    for (let i = 0; i < flattenedArray.length; i++){
        if (!result.includes(flattenedArray[i])){
            result.push(flattenedArray[i])
        }
    }
    return result

}

//as of ES6 we can use a Set object. Sets are collections of unique values, so if we convert an array to a set it will implicitly remove any duplicates.


// const consolidateArrays = (...allArrays) =>{
//     // console.log(allArrays)
//     //we get an array, so we can use methods like reduce.
//     const flattenedArray = allArrays.reduce((newArray,smallArray) =>{
//         return newArray.concat(smallArray)
//     },[])
//     // console.log(flattenedArray)
//     //convert array to set
//     const setResult = new Set(flattenedArray)
//     // convert set to array 
//     result = [...setResult]
//     return result

// }

//I prefer the loop