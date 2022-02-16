const  {describe, test, expect } = require('@jest/globals');
const { sum } = require('./sum');

describe('sum', function () {
    test('take 1 and 2 and returns 3', function () {
        expect(sum(1,2)).toEqual(3);
    })
})
