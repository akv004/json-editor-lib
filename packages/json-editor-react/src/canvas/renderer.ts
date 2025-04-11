import { JsonValue }  from 'json-core';

export function renderJsonOnCanvas(
    canvas: HTMLCanvasElement,
    json: JsonValue
) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const text = JSON.stringify(json, null, 2);
    ctx.font = '14px monospace';
    ctx.fillStyle = '#333';

    const lines = text.split('\n');
    lines.forEach((line, i) => {
        ctx.fillText(line, 10, 20 + i * 18);
    });
}
