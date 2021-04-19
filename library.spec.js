const _ = require('./library.js')

describe('Library', ()=> {
    describe('identity', () => {
        test('Should return whatever is passed to it', () => {
            const uniqueObject = {}
            expect(_.identity(1)).toBe(1)
            expect(_.identity('string')).toBe('string')
            expect(_.identity(false)).toBeFalsy
            expect(_.identity(uniqueObject)).toBe(uniqueObject)
        })
    })

    describe('first', () => {
        let uniqueArray

        beforeEach(() => {
            uniqueArray = [0, 1, 2]
          })            
    
        test('Should return first element of array if the function is passed a single argument', () => {
            expect(_.first(uniqueArray)).toBe(0)
        })
        test('Should accept another argument as an index, and return a slice of the array from 0 upto and including the index', () => {
            expect(_.first(uniqueArray, 1)).toStrictEqual([0, 1])
        })

        test('Should return an empty array if the index passed is zero', () => {
            expect(_.first(uniqueArray, 0)).toStrictEqual([])
        })

        test ('If the index argument is greater than the length of the array, return full array', () => {
            expect(_.first(uniqueArray, 5)).toStrictEqual([0, 1, 2])
        })
    
    })

    describe('last', () => {
        let uniqueArray

        beforeEach(() => {
            uniqueArray = [0, 1, 2]
          })            
    
        test('Should return last element of array if the function is passed a single argument', () => {
            expect(_.last(uniqueArray)).toBe(2)
        })
        test('Should accept another argument as an index, and return a slice of the array from the array.length minus the index upto and including the final element in the array', () => {
            expect(_.last(uniqueArray, 1)).toStrictEqual([1, 2])
        })

        test('Should return an empty array if the index passed is zero', () => {
            expect(_.last(uniqueArray, 0)).toStrictEqual([])
        })

        test ('If the index argument is greater than the length of the array, return full array', () => {
            expect(_.last(uniqueArray, 5)).toStrictEqual([0, 1, 2])
        })
    
    })

    describe('Foreach', () => {
        let uniqueArray

        beforeEach(() => {
            uniqueArray = [0, 1, 2, 5, 4]
          }) 
       test('should not return anything', () => {
        let result = _.foreach(uniqueArray, _.identity)
        expect(uniqueArray).toStrictEqual([ 0, 1, 2, 5, 4 ])

       })

       test('Should invoke a callback on each element in an array', () => {
          let resultArray = []

           let testFunction = x => x * x

           _.foreach(uniqueArray, (element) => {
               resultArray.push(testFunction(element))
           })
           expect(resultArray).toStrictEqual([0, 1, 4, 25, 16]) 
           expect(uniqueArray).toStrictEqual([0, 1, 2, 5, 4]) 
       })

       test('Should provide access to each index of the array', () => {
        let testFunction = x => x * x
        let resultArray = []

           _.foreach(uniqueArray, (element) => {
               resultArray.push(testFunction(element) + ':'+ index)
           })
           expect(resultArray).toStrictEqual(['0:0', '1:1', '4:2', '25:3', '16:4'])    
       } )

       test('Should provide access to the original array passed to it', () => {
           let testArr = []
           _.foreach(uniqueArray, (element) => {
               testArr.push([element, index])
           })
           expect(testArr[0]).toStrictEqual([0, 0,[0, 1, 2, 5, 4]])
        })
    })
})