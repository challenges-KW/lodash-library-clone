module.exports = {
    identity : param => param,
    first: function (arr, indexOfArr) {
//if there is no other args, return the first element of the array
        if (arguments.length === 1) {
            return arr[0]
al        } else if (indexOfArr === 0) {
            return []
        } else if (indexOfArr > arr.length) {
            return arr
        }
        else {
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
       console.log('this is newArr: ', newArr)
       return newArr
    }

},
last: function (arr, indexOfArr) {
    //if there is no other args, return the last element of the array
            if (arguments.length === 1) {

                return arr[arr.length - 1]
    al        } else if (indexOfArr === 0) {
                return []
            } else if (indexOfArr > arr.length - 1 ) {
                return arr
            }
            else {
           //return a new array
           //this array will have only elements up to the index 
           //Steps:
           //create a new arr
           let newArr = []
    //loop through the old array up to the point of the indexOfArr
            for (i = indexOfArr; i < arr.length; i++) {
                //push into the new array elements from the old array
                newArr.push(arr[i])
            }
           //return that new array
           return newArr
        }
    
    },
    foreach: function (arr, funct) {
       for (var i = 0; i < arr.length; i++){
        funct(arr[i])
    }
 }
}
