import React from 'react';
import './App.css';

import NameForm from './components/NameForm';

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Edit</h1>
                <NameForm />
            </header>
        </div>
    );
}

export default App;