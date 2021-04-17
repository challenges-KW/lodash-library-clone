module.exports = {
    identity : param => param,
    first: (arr, indexOfArr) => {
//if there is no other args, return the first element of the array
        if (indexOfArr > 0) {
            return arr[0]
        } else if (indexOfArr === 0) {
            return []
        } else {
       //return a new array
       //this array will have only elements up to the index 
       //Steps:
       //create a new arr
       let newArr = []
//loop through the old array up to the point of the indexOfArr
        for (i = 0; i <= indexOfArr; i++) {
            //push into the new array elements from the old array
            newArr.push(arr[i])
        }
       //return that new array
       console.log('this is newArr after push:', newArr)
       return newArr
    }

}
}
