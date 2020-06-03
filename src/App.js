import React from "react";
import NameForm from "./components/NameForm";
import "./App.css";

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Edit</h1>
                <NameForm fname="Random" lname="Dude" />
            </header>
        </div>
    );
}

export default App;