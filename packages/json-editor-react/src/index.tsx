import React, { useRef, useEffect, useState } from 'react';
import { JsonValue } from 'json-core';
import { renderJsonOnCanvas } from './canvas/renderer';
import { updateJsonAtPath } from './utils/updateJsonAtPath';


interface JsonEditorProps {
    json: JsonValue;
    onChange?: (updatedJson: JsonValue) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ json, onChange }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [editableLine, setEditableLine,] = useState<{
        y: number;
        text: string;
        index: number;
        keyPath?: string[];
    } | null>(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (canvasRef.current) {
            renderJsonOnCanvas(canvasRef.current, json, {
                onLineClick: (y, line, index) => {
                    setEditableLine({ y, text: line, index });
                    setInputValue(line.trim());
                }
            });
        }
    }, [json]);

    const handleSave = () => {
        if (!editableLine) return;

        try {
            const parsedValue = JSON.parse(inputValue.split(':').slice(1).join(':').trim().replace(/,$/, ''));

            const updated = updateJsonAtPath(
                json,
                editableLine.keyPath || [],
                parsedValue
            );

            onChange?.(updated);
            setEditableLine(null);
        } catch (err) {
            alert('Failed to parse edited value.');
        }
    };


    return (
        <div style={{ position: 'relative', border: '1px solid #ccc' }}>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
            />
            {editableLine && (
                <input
                    style={{
                        position: 'absolute',
                        top: editableLine.y - 16,
                        left: 10,
                        fontFamily: 'monospace',
                        fontSize: 14,
                        padding: '2px 6px',
                        width: '700px',
                        zIndex: 10
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSave();
                    }}
                    onBlur={handleSave}
                    autoFocus
                />
            )}
        </div>
    );
};
