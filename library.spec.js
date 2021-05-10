const _ = require('./library.js')

describe('Library', () => {
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

        test('Should modify the elements when passed in a named callback', () => {

            let arr = [1,2,3,4,5]

             let mapElements = el => el + 1

            expect(_.map(arr, mapElements)).toStrictEqual([2,3,4,5,6])
        })

        test('Should modify the elements when passed in a named callback with obj', () => {

            let arr = [1,2,3,4,5]

            let mapElementsToObj = (el) => {
                return {[el] : el}
            }

            expect(_.map(arr, mapElementsToObj)).toStrictEqual([{1 : 1} ,{2 : 2}, {3 : 3}, {4 : 4}, {5 : 5}])
        })
    })

    describe('filter', () => {
        let array = ['cat','dog', 'rabbit', 'ferret']
        let filterArray = word => word.length > 5
        let objt = [{'one': 1, 0:0, 1:1, 2:2, 3:3}, {'one': 0, 'two' :1}]
        let filterObjt = (obj) => {
            
                return obj['one'] < 1
            
        }
        let users = [  { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false } ]
        let funct = (o) => {
            { return !o.active }
        }
        
        test('Should return array with only the array elements that pass the test implemented by the callback', () => {
            expect(_.filter(array, filterArray)).toStrictEqual(['rabbit', 'ferret'])
        })
        test('Should return object with only the elements of the parameter object that pass the test implemented by the callback', () => {
          
            expect(_.filter(objt, filterObjt)).toStrictEqual([{'one': 0, 'two' :1}])
            
        })

        test('Should return array with only the elements of the parameter object that passes the test implemented by the callback 2', () => {
            expect(_.filter(users, funct)).toStrictEqual([{ 'user': 'fred',   'age': 40, 'active': false }])
        })

    })

    describe('reject', () => {
        let array = ['cat','dog', 'rabbit', 'ferret']
        let rejectArray = word => word.length > 5
        let objt = [{'one': 1, 0:0, 1:1, 2:2, 3:3}, {'one': 0, 'two' :1}]
        let rejectObjt = (obj) => {
            
                return obj['one'] < 1
            
        }
        let users = [  { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false } ]
        let funct = (o) => {
            { return !o.active }
        }
        
        test('Should return array without  the array elements that pass the test implemented by the callback', () => {
            expect(_.reject(array, rejectArray)).toStrictEqual(['cat', 'dog'])
        })
        test('Should return object without  the elements of the parameter object that pass the test implemented by the callback', () => {
            // console.log('Filtered object => ', _.filter(objt, rejectObjt))
          
            expect(_.reject(objt, rejectObjt)).toStrictEqual([{'one': 1, 0:0, 1:1, 2:2, 3:3}])
            
        })

        test('Should return array with only the elements of the parameter object that passes the test implemented by the callback 2', () => {
            expect(_.reject(users, funct)).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
        })

    })

    describe('reduce', () => {

        it('should return a value', () => {
          let result = _.reduce([3, 2, 1], (memo, item) =>{ return item; });
          expect(result).to.be.defined;
        });
  
        it('should not mutate the input array', () => {
          let input = [1, 2, 3, 4, 5];
          let result = _.reduce(input, (memo, item) =>{ 
              return item; });
          
          /*
           * Mutation of inputs should be avoided without good justification otherwise
           * as it can often lead to hard to find bugs and confusing code!
           * Imagine we were reading the code above, and we added the following line:
           *
           * let lastElement = input[input.length - 1];
           *
           * Without knowing that mutation occured inside of _.reduce,
           * we would assume that `lastElement` is 5. But if inside of
           * _.reduce, we use the array method `pop`, we would permanently
           * change `input` and our assumption would not longer be true,
           * `lastElement` would be 4 instead!
           *
           * The tricky part is that we have no way of knowing about the mutation
           * just by looking at the code above. We'd have to dive into the
           * implementation of _.reduce to the exact line that uses `pop`.
           * If we write a lot of code with this assumption, it might be very hard
           * to trace back to the correct line in _.reduce.
           *
           * You can avoid an entire class of bugs by writing s
           * that don't mutate their inputs!
           */
  
          expect(input).to.eql([1, 2, 3, 4, 5]);
        });
  
        it('should invoke the iterator  with arguments (memo, item) in that order', () => {
          let memoInCallback, itemInCallback;
  
          _.reduce(['item'], (memo, item) =>{
            memoInCallback = memo;
            itemInCallback = item;
          }, 'memo');
  
          expect(memoInCallback).to.equal('memo');
          expect(itemInCallback).to.equal('item');
        });
  
        it('should pass items of the array into the iterator from left to right', () => {
          let orderTraversed = [];
  
          _.reduce([1, 2, 3, 4], (memo, item) =>{
            orderTraversed.push(item);
            return memo;
          }, 10);
  
          expect(orderTraversed).to.eql([1, 2, 3, 4]);
        });
  
        it('should continue to call iterator even if the iterator returns undefined', () => {
          let callCount = 0;
          let returnFalsy = (total, item) =>{
            callCount++;
            if (callCount === 1) {
              return undefined;
            } else {
              return item + 1;
            }
          };
  
          let total = _.reduce([1, 1, 2], returnFalsy);
          expect(total).to.equal(3);
        });
  
        it('should pass every item of the array into the iterator if a memo is passed in', () => {
          let result = _.reduce([1, 2, 3], (memo, item) =>{
            return memo - item;
          }, 10);
  
          expect(result).to.equal(4);
        });
  
        it('Fill me in with a description of the behavior this test is checking for', () => {
          let result = _.reduce([1, 2, 3], (memo, item) =>{
            return memo * item;
          }, 0);
  
          expect(result).to.equal(0);
        });
  
        it('should set memo to be the first item of the array if no memo is passed in', () => {
          let result = _.reduce([1, 2, 3], (memo, item) =>{
            return memo;
          });
  
          expect(result).to.equal(1);
        });
  
  
        it('should pass the second item of the array into the iterator first if a memo is not passed in', () => {
          let result = _.reduce([3, 2, 1], (memo, item) =>{
            return memo - item;
          });
  
          expect(result).to.equal(0);
        });
  
      });

    
})