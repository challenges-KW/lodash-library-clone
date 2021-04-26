const _ = require('./library.js')

describe('Library', ()=> {
    let uniqueArray
    const uniqueObject = {}
    let resultArray
    let testFunction
    let testArr
    let resultObj

    beforeEach(() => {
        uniqueArray = [0, 5, 1, 2, 5, 4, 5]
        resultArray = []
        testArr = []
        testFunction = x => x * x
        resultObj = {a : 'a', b: 'b'}
    })

    describe('identity', () => {
        test('Should return whatever is passed to it', () => {
            expect(_.identity(1)).toBe(1)
            expect(_.identity('string')).toBe('string')
            expect(_.identity(false)).toBeFalsy
            expect(_.identity(uniqueObject)).toBe(uniqueObject)
        })
    })

    describe('first', () => {
        test('Should return first element of array if the function is passed a single argument', () => {
            expect(_.first(uniqueArray)).toBe(0)
        })
        test('Should accept another argument as an index, and return a slice of the array from 0 upto and including the index', () => {
            expect(_.first(uniqueArray, 1)).toStrictEqual([0, 5])
        })

        test('Should return an empty array if the index passed is zero', () => {
            expect(_.first(uniqueArray, 0)).toStrictEqual([])
        })

        test ('If the index argument is greater than the length of the array, return full array', () => {
            expect(_.first(uniqueArray, 8)).toStrictEqual([0, 5, 1, 2, 5, 4, 5])
        })
    
    })

    describe('last', () => {
        test('Should return last element of array if the function is passed a single argument', () => {
            expect(_.last(uniqueArray)).toBe(5)
        })
        test('Should accept another argument as an index, and return a slice of the array from the array.length minus the index upto and including the final element in the array', () => {
            expect(_.last(uniqueArray, 5)).toStrictEqual([4, 5])
        })

        test('Should return an empty array if the index passed is zero', () => {
            expect(_.last(uniqueArray, 0)).toStrictEqual([])
        })

        test ('If the index argument is greater than the length of the array, return full array', () => {
            expect(_.last(uniqueArray, 7)).toStrictEqual([0, 5, 1, 2, 5, 4, 5])
        })
    
    })

    describe('Foreach', () => {
       test('should not return anything', () => {
        let result = _.foreach(uniqueArray, _.identity)
        expect(uniqueArray).toStrictEqual([ 0, 5, 1, 2, 5, 4, 5 ])

       })

       test('Should invoke a callback on each element in an array', () => {

           _.foreach(uniqueArray, (element) => {
               resultArray.push(testFunction(element))
           })
           expect(resultArray).toStrictEqual([0, 25, 1, 4, 25, 16, 25]) 
           expect(uniqueArray).toStrictEqual([0, 5, 1, 2, 5, 4, 5]) 
       })

       test('Should provide access to each index of the array', () => {
           _.foreach(uniqueArray, (element, index) => {
               resultArray.push(testFunction(element) + ':' + index)
           })
           expect(resultArray).toStrictEqual(['0:0', '25:1', '1:2', '4:3', '25:4', '16:5', '25:6'])    
       } )

       test('Should provide access to the original array passed to it', () => {
           _.foreach(uniqueArray, (element, index) => {
               testArr.push([element, index, uniqueArray])
           })
           expect(testArr[0]).toStrictEqual([0, 0,[0, 5, 1, 2, 5, 4, 5]])
        })

        test('Should provide access on each value in an object', () => {
             _.foreach(resultObj, (value) => {
                 resultArray.push((value + 'ye'))
             })
             expect(resultArray).toStrictEqual(['aye', 'bye']) 
         })

         test('Should provide access to each key and the original object passed to it', () => {
            _.foreach(resultObj, (value, key) => {
                testArr.push([value, key, resultObj])
            })
            expect(testArr[0]).toStrictEqual(['a', 'a', resultObj])
         })
    })

    describe('indexOf', () => {        
        test('Should show index number of given element', () => {

           expect(_.indexOf(uniqueArray, 0)).toStrictEqual(0)
        })
        
        test('Should show index number of the first element it encounters in the array', () => {

            expect(_.indexOf(uniqueArray, 5)).toStrictEqual(1)
         })
        test('Should return -1 if element not found in array', () => {
            expect(_.indexOf(uniqueArray, 7)).toStrictEqual(-1)
        })
    })

    describe('map', () => {

        test('Should return an array', () => {
            expect(Array.isArray(_.map(uniqueArray, testFunction))).toBe(true)
        })

        test('Should modify the elements in the array by the callback conditions', () => {
            let expectedResults = _.map(uniqueArray, testFunction)

            expect(expectedResults).toStrictEqual([0, 25, 1, 4, 25, 16, 25])

        })
    })
})