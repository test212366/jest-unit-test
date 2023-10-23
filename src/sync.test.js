const Lodash = require('./sync')
const l = new Lodash()
describe('Lodash: compact', () =>{
    let array
    beforeEach(() => {
        array = [false, 32, 0, '', true, null,'hehe']
    })
    test('should be defined', () => {
        expect(l.compact).toBeDefined()
    })
    test('should remove falsy values from array', () => {
        const result = [32, true, 'hehe']
        expect(l.compact(array)).toEqual(result)
    })
})
describe('lodash group by', () => {
    test('should be defined', () => {
        expect(l.groupBy).toBeDefined()
        expect(l.groupBy).not.toBeUndefined()
    })
    test('should grop array itme by Math.floor', () => {
        const array = [2.2,2.4,4.2,3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(l.groupBy(array)).toEqual(result)
    })
    test('should grop array itme by length', () => {
        const array = [1,2,3,4]
        const result = {
            3: ['one', 'two']
        }
        expect(l.groupBy(array, 'length')).toEqual(result)
    })
})