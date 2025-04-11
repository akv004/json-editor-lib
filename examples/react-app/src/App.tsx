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
            <h2>Canvas-based JSON Viewer</h2>
            <JsonEditor json={json} />
        </div>
    );
}

export default App;
