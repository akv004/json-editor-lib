import React, { useState } from 'react';
import { JsonValue } from '../types';

interface FullTextEditorProps {
    json: JsonValue;
    onSave: (updatedJson: JsonValue) => void;
    onCancel: () => void;
}

const FullTextEditor: React.FC<FullTextEditorProps> = ({ json, onSave, onCancel }) => {
    const [text, setText] = useState(JSON.stringify(json, null, 2));
    const [error, setError] = useState<string | null>(null);

    const handleSave = () => {
        try {
            const parsed: JsonValue = JSON.parse(text);
            onSave(parsed);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', height: 400 }}
      />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel} style={{ marginLeft: 8 }}>
                Cancel
            </button>
        </div>
    );
};

export default FullTextEditor;
