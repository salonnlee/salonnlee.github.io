import eq from './shared/eq';

const { isSymbol } = require('../src/utils/baseUtils');

describe('baseUtils', () => {
    describe('isSymbol', () => {
        it('should test value for a `Symbol`', () => {
            eq(isSymbol(Symbol()), true); // Symbol
            eq(isSymbol(null), false); // Null
            eq(isSymbol(undefined), false); // Undefined
            eq(isSymbol(true), false); // Boolean
            eq(isSymbol(101), false); // Number
            eq(isSymbol(NaN), false);
            eq(isSymbol(Infinity), false);
            eq(isSymbol('I like it.'), false); // String
            eq(isSymbol({}), false); // Object
            eq(isSymbol([]), false); // Array
            eq(isSymbol(() => {}), false); // Function
            eq(isSymbol(async () => {}), false);
            eq(isSymbol(function*() {}), false);
            eq(isSymbol(new Date()), false); // Date
            eq(isSymbol(/\.js$/), false); // RegExp
            eq(isSymbol(new Error()), false); // Error
        });
    });
});
