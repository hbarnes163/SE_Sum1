import { randomInt } from './randomint.js';

test('randomInt generates number within range', () => {
    const min = 1;
    const max = 10;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});

test('randomInt generates exact number when range is 0', () => {
    const min = 5;
    const max = 5;
    const result = randomInt(min, max);
    expect(result).toBe(5);
});

test('randomInt handles negative values', () => {
    const min = -10;
    const max = -1;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});

test('randomInt works with large ranges', () => {
    const min = 1000;
    const max = 1000000;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});

test('randomInt works with min greater than max', () => {
    const min = 10;
    const max = 1;
    const result = randomInt(min, max);
    const realMin = Math.min(min, max);
    const realMax = Math.max(min, max);
    expect(result).toBeGreaterThanOrEqual(realMin);
    expect(result).toBeLessThanOrEqual(realMax);
});