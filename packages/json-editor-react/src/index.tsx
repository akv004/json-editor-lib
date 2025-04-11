import React, { useRef, useEffect, useState } from 'react';
import { JsonValue } from 'json-core';
import { renderJsonOnCanvas } from './canvas/renderer';

interface JsonEditorProps {
    json: JsonValue;
    onChange?: (updatedJson: JsonValue) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ json, onChange }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [editableLine, setEditableLine] = useState<{
        y: number;
        text: string;
        index: number;
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
        // 🧠 This is mock logic — we'll replace it with true path parsing later
        try {
            if (typeof json !== 'object' || json === null || Array.isArray(json)) {
                alert('Editing supported only for root objects at this stage.');
                return;
            }

            const newJson = { ...json };

            // Simulate value change (replace value in JSON string for now)
            const edited = [...JSON.stringify(json, null, 2).split('\n')];
            edited[editableLine!.index] = inputValue;
            const updated = JSON.parse(edited.join('\n'));
            onChange?.(updated);
            setEditableLine(null);
        } catch (err) {
            alert('Invalid edit. Please enter valid JSON.');
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
                    onBlur={handleSave}
                    autoFocus
                />
            )}
        </div>
    );
};
