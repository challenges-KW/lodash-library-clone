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
    indexOf: function(arrOrObj, element) {
        //IMPLEMENTATION WITH FOREACH
        //declare as variable
        let indexOfArrOrObj = -1
        //loop through using foreach
        this.foreach(arrOrObj, (elementInArrOrObj, index) => {
            //check to see if elementInArrOrObj === element
            if (elementInArrOrObj === element && indexOfArrOrObj < 0) {
                //reassign variable
                indexOfArrOrObj = index
                //return index
                return indexOfArrOrObj
            }
        })
        return indexOfArrOrObj;

        //IMPLEMENTION WITH FOR LOOP
        // //loop through arrOrObj
        // for (let i=0; i<arrOrObj.length; i++) {
        // //check if element === arrOrObj[i]
        //     if (arrOrObj[i] === element) {
        //     //if yes, turn index
        //         return i
        //     }
        // }
        // return -1
    },
    map: function(arrOrObj) {
        return arrOrObj
    }
}