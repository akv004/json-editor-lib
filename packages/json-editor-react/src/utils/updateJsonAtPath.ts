import { JsonValue } from 'json-core';

export function updateJsonAtPath(
    data: JsonValue,
    path: string[],
    newValue: any
): JsonValue {
    if (path.length === 0) return newValue;

    const [head, ...tail] = path;
    if (Array.isArray(data)) {
        const index = parseInt(head);
        if (!isNaN(index) && index >= 0 && index < data.length) {
            return [
                ...data.slice(0, index),
                updateJsonAtPath(data[index], tail, newValue),
                ...data.slice(index + 1)
            ];
        }
        return data;
    }

    if (typeof data === 'object' && data !== null) {
        return {
            ...data,
            [head]: updateJsonAtPath((data as any)[head], tail, newValue)
        };
    }

    return data;
}
