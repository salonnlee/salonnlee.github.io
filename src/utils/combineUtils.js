import {
    forEach,
    cond,
    isFunction,
    isString,
    isArray,
    isBoolean
} from './baseUtils';

export const consumeClassNames = classNamesList => {
    const classNamesResult = [];
    forEach(classNameItem => {
        cond([
            [
                isString,
                classNameItem => {
                    classNamesResult.push(classNameItem);
                }
            ],
            [
                isArray,
                classNameItem => {
                    cond([
                        [
                            isBoolean,
                            bool =>
                                bool && classNamesResult.push(classNameItem[0])
                        ],
                        [
                            isFunction,
                            func =>
                                func() &&
                                classNamesResult.push(classNameItem[0])
                        ]
                    ])(classNameItem[1]);
                }
            ]
        ])(classNameItem);
    }, classNamesList);
    return classNamesResult.join(' ');
};
