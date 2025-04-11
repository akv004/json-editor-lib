import { describe, it, expect } from 'vitest';
import { parseJson, getJsonType } from '../parser';

describe('parseJson', () => {
    it('parses a valid JSON string', () => {
        const input = '{"key": "value", "num": 123}';
        const result = parseJson(input);
        expect(result).toEqual({ key: 'value', num: 123 });
    });

    it('throws an error on invalid JSON', () => {
        const badJson = '{key: value}';
        expect(() => parseJson(badJson)).toThrowError(/Invalid JSON/);
    });
});

describe('getJsonType', () => {
    it('returns correct types for primitives', () => {
        expect(getJsonType('hello')).toBe('string');
        expect(getJsonType(42)).toBe('number');
        expect(getJsonType(true)).toBe('boolean');
        expect(getJsonType(null)).toBe('null');
    });

    it('returns correct types for complex values', () => {
        expect(getJsonType([1, 2, 3])).toBe('array');
        expect(getJsonType({ key: 'value' })).toBe('object');
    });
});
