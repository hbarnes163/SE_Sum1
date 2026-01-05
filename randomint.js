/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The generated random integer
 * @throws {Error} If min or max are not integers
*/

function randomInt(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Min and max must both be integers.');
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { randomInt };