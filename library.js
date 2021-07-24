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
        //IMPLEMENTATION WITH FOREACH
        //declare as variable
        let indexOfArr = -1
        //loop through using foreach
        this.foreach(arr, (elementInArr, index) => {
            //check to see if elementInArr === element
            if (elementInArr === element && indexOfArr < 0) {
                //reassign variable
                indexOfArr = index
                //return index
                return indexOfArr
            }
        })
        return indexOfArr;

        //IMPLEMENTION WITH FOR LOOP
        // //loop through arr
        // for (let i=0; i<arr.length; i++) {
        // //check if element === arr[i]
        //     if (arr[i] === element) {
        //     //if yes, turn index
        //         return i
        //     }
        // }
        // return -1
    },

    map: function(arrOrObj, callback) {
        let result = []
        //loop through array
        this.foreach(arrOrObj, (elementInArrOrObj) => {
        //apply callback conditions to each element
        result.push((callback(elementInArrOrObj, arrOrObj[elementInArrOrObj])))
        })
        //return new array
        return result
    },
    filter: function(arrObjOrString, callback) {
        let result = []
        //loop through array using foreach
        this.foreach(arrObjOrString, (elementInArrObjOrString) => {
            //check if true for conditions of callback
            if (callback(elementInArrObjOrString)){
                result.push(elementInArrObjOrString)
            }
        })
        return result
    },
    reject: function(arrObjOrString, callback) {
        return this.filter(arrObjOrString, elementInArrObjOrString => !callback(elementInArrObjOrString));
    },
    reduce: function(arrOrObj, callback, initialValue) {
        let accumulator = initialValue;
        

    }
}
