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
    
        test('Should return first element of array', () => {
            expect(_.first(uniqueArray)).toBe(0)
        })
        test('Should accept an index argument', () => {
            expect(_.first(uniqueArray, 1)).to.eql([0, 1])
        })

        test('Should return an empty array if the index passed is zero', () => {
            expect(_.first(uniqueArray, 0)).to.eql([])
        })

    })

})