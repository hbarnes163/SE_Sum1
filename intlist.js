import { randomInt } from './randomint.js';

function intList(n, min, max) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(randomInt(min, max));
    }
    return result;
};

export { intList };