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
    foreach: function (arr, funct) {
       for (let i = 0; i < arr.length; i++){
        funct(arr[i], i, arr);
    }
 }
}
