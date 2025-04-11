import React, { useState } from 'react';
import { JsonEditor } from 'json-editor-react';

const initialJson = {
    name: 'Amit Verma',
    age: 35,
    isDeveloper: true,
    skills: ['React', 'TypeScript', 'Canvas'],
    address: {
        city: 'Chaska',
        state: 'MN'
    }
};

function App() {
    const [json, setJson] = useState(initialJson);

    return (
        <div style={{ padding: 20 }}>
            <h2>Canvas-based JSON Editor</h2>
            <JsonEditor
                json={json}
                onChange={(updated) => {
                    console.log('Updated JSON:', updated);
                    setJson(updated); // ✅ This line makes the update reflect
                }}
            />
        </div>
    );
}

export default App;
