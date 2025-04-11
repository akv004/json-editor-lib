import React, { useRef, useEffect } from 'react';
import { JsonValue } from './types/json';
import { renderJsonOnCanvas } from './canvas/renderer';

interface JsonEditorProps {
    json: JsonValue;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ json }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            renderJsonOnCanvas(canvasRef.current, json);
        }
    }, [json]);

    return (
        <div style={{ border: '1px solid #ccc' }}>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
            />
        </div>
    );
};


