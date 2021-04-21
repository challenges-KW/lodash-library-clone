module.exports = {
    identity : param => param,
    first: function (arr, indexOfArr) {
        if (arguments.length === 1) {
            return arr[0]
        } else if (indexOfArr === 0) {
            return []
        } else if (indexOfArr > arr.length) {
            return arr
        } else {
            let newArr = []
            for (i = 0; i <= indexOfArr; i++) {
                newArr.push(arr[i])
                }
            return newArr
        }

},
last: function (arr, indexOfArr) {
            if (arguments.length === 1) {
                return arr[arr.length - 1]
            } else if (indexOfArr === 0) {
                return []
            } else if (indexOfArr > arr.length - 1 ) {
                return arr
            } else {
                let newArr = []
                for (i = indexOfArr; i < arr.length; i++) {
                    newArr.push(arr[i])
                }
            return newArr
        }
    
    },
    foreach: function (arrOrObj, funct) {
        if (Array.isArray(arrOrObj)) {
            for (let i = 0; i < arrOrObj.length; i++){
                funct(arrOrObj[i], i, arrOrObj);
            }
        } else {
            for (let key in arrOrObj) {
                if (arrOrObj.hasOwnProperty(key)) {
                funct(arrOrObj[key], key, arrOrObj);
                }
            }
        }
    },
    indexOf: function(arr, element) {
//refactor using foreach method

        // loop through  the array
        for (let i = 0; i < arr.length; i++) {

        // compare the element that was passed in against the other elements in the array
        if (arr[i] === element) {
        //if you find it, return its index
            return i
        }
        //Todo: what happens if it is not found?
        }
        return -1
    }
}