import React from 'react';
import  { JsonEditor } from 'json-editor-react';

const App: React.FC = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>JSON Editor</h1>
            <JsonEditor />
        </div>
    );
};

export default App;
