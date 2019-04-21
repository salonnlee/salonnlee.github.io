const assert = require('assert');

const { toString } = require('ramda');

export default function(actual, expected) {
    assert.strictEqual(arguments.length, 2);
    assert.strictEqual(toString(actual), toString(expected));
}
