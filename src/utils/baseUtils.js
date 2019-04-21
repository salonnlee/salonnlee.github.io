const R = require('ramda');
const RA = require('ramda-adjunct');
const R_ = require('ramda-extension');

export const { type, compose } = R;

export const {
    isNull,
    isUndefined,
    isBoolean,
    isNumber,
    isString,
    isArray,
    isFunction,
    isDate,
    isRegExp
} = RA;

export const { isError, isPlainObject: isObject } = R_;

export const isSymbol = R.compose(
    R.equals('Symbol'),
    R.type
);
