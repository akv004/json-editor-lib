import React, { useState } from 'react';
import FullTextEditor from './components/FullTextEditor';
import {JsonValue} from "json-core";

const JsonEditor: React.FC = () => {
    const [json, setJson] = useState<JsonValue>({ name: 'Amit', age: 35 });
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {isEditing ? (
                <FullTextEditor
                    json={json}
                    onSave={(updatedJson:JsonValue) => {
                        setJson(updatedJson);
                        setIsEditing(false);
                    }}

                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div>
                    {/* Replace this with your Canvas viewer component */}
                    <pre>{JSON.stringify(json, null, 2)}</pre>
                    <button onClick={() => setIsEditing(true)} style={{ marginTop: 8 }}>
                        ✏️ Edit as JSON
                    </button>
                </div>
            )}
        </div>
    );
};

export default JsonEditor;
