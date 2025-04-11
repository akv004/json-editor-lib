import { JsonValue } from 'json-core';

interface RenderOptions {
    onLineClick?: (y: number, line: string, index: number) => void;
}

export function renderJsonOnCanvas(
    canvas: HTMLCanvasElement,
    json: JsonValue,
    options?: RenderOptions
) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lineHeight = 22;
    const padding = 10;
    const lines = JSON.stringify(json, null, 2).split('\n');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '14px monospace';
    ctx.fillStyle = '#333';

    lines.forEach((line, index) => {
        const y = padding + index * lineHeight;
        ctx.fillText(line, padding, y);
    });

    canvas.onclick = (e: MouseEvent) => {
        const y = e.offsetY;
        const lineIndex = Math.floor((y - padding) / lineHeight);
        const line = lines[lineIndex];
        if (line) {
            options?.onLineClick?.(padding + lineIndex * lineHeight, line, lineIndex);
        }
    };
}
