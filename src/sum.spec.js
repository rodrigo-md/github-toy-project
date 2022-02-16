const  {describe, test, expect } = require('@jest/globals');
const { sum } = require('./sum');

describe('sum', function () {
    test('sum 1 and 2 returns 3', function () {
        expect(sum(1,2)).toEqual(3);
    })
})