// packages/json-core/src/parser.ts

import { JsonValue } from './types';

/**
 * Parses JSON safely and returns the result or throws a user-friendly error.
 */
export function parseJson(jsonString: string): JsonValue {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        throw new Error(`Invalid JSON: ${(err as Error).message}`);
    }
}

/**
 * Returns the type of a JSON value as a string.
 */
export function getJsonType(value: JsonValue): string {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}
