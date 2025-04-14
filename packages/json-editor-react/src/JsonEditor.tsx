import React, { useState } from 'react';
import FullTextEditor from './components/FullTextEditor';
import { JsonValue } from 'json-core'; // ✅ pulled via package boundary, not by direct file path

const JsonEditor: React.FC = () => {
    const [json, setJson] = useState<JsonValue>({
        name: 'Amit',
        age: 35,
        tags: ['typescript', 'json-editor'],
    });

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
            <h2>🧩 JSON Editor</h2>

            {isEditing ? (
                <FullTextEditor
                    json={json}
                    onSave={(updatedJson) => {
                        setJson(updatedJson);
                        setIsEditing(false);
                    }}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
          <pre
              style={{
                  background: '#f6f8fa',
                  border: '1px solid #ddd',
                  padding: 16,
                  borderRadius: 6,
                  fontSize: 14,
              }}
          >
            {JSON.stringify(json, null, 2)}
          </pre>

                    <button
                        onClick={() => setIsEditing(true)}
                        style={{
                            marginTop: 12,
                            padding: '6px 12px',
                            background: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                        }}
                    >
                        ✏️ Edit as JSON
                    </button>
                </>
            )}
        </div>
    );
};

export default JsonEditor;
