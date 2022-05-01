import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import SassComponent from './SassComponent';

import CSSModule from './CSSModule';

function App() {
    return (
        <div>
            <div>
                <CSSModule />
            </div>
            <p />
            <div>
                <SassComponent />
            </div>
        </div>
    );
}

export default App;
