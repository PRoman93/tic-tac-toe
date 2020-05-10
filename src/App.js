import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import Clock from "./Clock";

function App() {
    return (
        <div className="App">
            <Game/>
            <Clock/>
        </div>
    );
}

export default App;
