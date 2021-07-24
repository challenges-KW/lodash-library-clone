//cannot use arrow function bc does not bind to arguments.length

//array and index of array as parameters
//if single argument, return first element of array
//if given index, loop through portion of array at index (<=index)
//create newArr (empty) and push portion of array in newArr
//return newArr
//if index===0 return []
//if index > array.length, return full array
const first = function (arr, indexOfArr) {
    if (arguments.length === 1) {
        return arr[0];
    } else if (indexOfArr === 0) {
        return [];
    } else if (indexOfArr > arr.length) {
        return arr;
    } else {
        let newArr = []
        for (let i=0; i<=indexOfArr; i++) {
            newArr.push(arr[i])
        }
        return newArr;
    }
}


// let uniqueArray = [0, 5, 1, 2, 5, 4, 5]
// let testFunction = x => x * x;
// let resultArray = []

// console.log('first - this should be 0: ', first(uniqueArray));
// console.log('first - this should be [0, 5]: ', first(uniqueArray, 1));
// console.log('first - this should be []: ', first(uniqueArray, 0));
// console.log('first this should be [0, 5, 1, 2, 5, 4, 5]: ', first(uniqueArray, 8));

//2 parameters - arr and indexOfArr
//if single argument, return last element of arr (arr.length-1)
//if given indexOfArr < arr.length-1
    //create new empty newArr
    //loop through (i=indexOfArr; i<=arr.length; i++)
    //push into newArr
    //return newArr
//if indexOfArr === 0, return []
//if indexOfArr > arr-1, return arr

const last  = function (arr, indexOfArr) {
    if (arguments.length === 1) {
        return arr[arr.length - 1]
    } else if (indexOfArr === 0) {
        return []
    } else if (indexOfArr > arr.length - 1) {
        return arr
    } else {
        let newArr = []
        for (let i=indexOfArr; i <= arr.length -1; i++) {
            newArr.push(arr[i])
        }
        return newArr
    }
}

// console.log('last - this should be 5: ', last(uniqueArray));
// console.log('last - this should be [4, 5]: ', last(uniqueArray, 5));
// console.log('last - this should be []: ', last(uniqueArray, 0));
// console.log('last - this should be [0, 5, 1, 2, 5, 4, 5]: ', last(uniqueArray, 7));


//2 para -- arrOrObj and function
//if array, for loop through array
    //apply function with 3 params
//else obj
    //for in loop (let key of arrOrObj)
        //if obj apply function (3 param);
//no return statement



const foreach = function (arrOrObj, funct) {
    if (Array.isArray(arrOrObj)) {
        for (let i =0; i<arrOrObj.length; i++) {
            funct(arrOrObj[i], i, arrOrObj)
        }
    } else {
        for (let key in arrOrObj) {
            if (arrOrObj.hasOwnProperty(key)) {        
                funct(arrOrObj[key], key, arrOrObj)
            }
        }
    }
};



//param arr and element
//loop through arr
//if element === arrOrObj[i] return index
//else return -1

const indexOf = function (arr, element) {
    for (let i=0; i<arr.length; i++) {
        if (element === arrOrObj[i]) {
            return i
        }
    }
    return -1
}


//
