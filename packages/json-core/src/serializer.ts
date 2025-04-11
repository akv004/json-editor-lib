// packages/json-core/src/serializer.ts

import { JsonValue } from './types';

/**
 * Serializes a JSON value with pretty formatting.
 */
export function serializeJson(value: JsonValue): string {
    return JSON.stringify(value, null, 2);
}
