import { randomInt } from './randomint.js';

/**
 * Generates a list of random integer between the specified minimum and maximum values, inclusive.
 *
 * @param {number} n - The number of integers to generate
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The generated random integer
 * @throws {Error} If n, min or max are not integers
*/

function intList(n, min, max) {
    if (!Number.isInteger(n)) {
        throw new Error('n must be an integer.');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Min and max must both be integers.');
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(randomInt(min, max));
    }
    return result;
};

export { intList };