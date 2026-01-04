import { intList } from './intlist.js';

test('intList generates correct number of integers within range', () => {
    const n = 5;
    const min = 1;
    const max = 10;
    const result = intList(n, min, max);
    expect(result.length).toBe(n);
    result.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
    });
});

test('intList with n=0 returns empty array', () => {
    const result = intList(0, 1, 10);
    expect(result).toEqual([]);
});

test('intList with min equal to max returns array of identical numbers', () => {
    const n = 3;
    const min = 5;
    const max = 5;
    const result = intList(n, min, max);
    expect(result).toEqual([5, 5, 5]);
});

test('intList throws error for non-integer n', () => {
    expect(() => intList(2.5, 1, 10)).toThrow('n must be an integer.');
    expect(() => intList('3', 1, 10)).toThrow('n must be an integer.');
});

test('intList throws error for non-integer min or max', () => {
    expect(() => intList(3, 1.5, 10)).toThrow('Min and max must both be integers.');
    expect(() => intList(3, 1, '10')).toThrow('Min and max must both be integers.');
    expect(() => intList(3, NaN, 10)).toThrow('Min and max must both be integers.');
    expect(() => intList(3, 'a', null)).toThrow('Min and max must both be integers.');
});