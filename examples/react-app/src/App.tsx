import React from 'react';

import {FullTextEditor} from 'json-editor-react'; // make sure this resolves via workspace alias or local path
import { JsonValue } from '@editor/types';


const App: React.FC = () => {
    return (
        <div style={{padding: 20}}>
            <h1>JSON Editor</h1>
            <FullTextEditor json={null} onSave={function(updatedJson: JsonValue): void {
                throw new Error('Function not implemented.');
            } } onCancel={function(): void {
                throw new Error('Function not implemented.');
            } } />
        </div>
    );
};

export default App;
