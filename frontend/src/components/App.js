import React, { Component } from 'react';
import {render} from 'react-dom';
import Home from './Home';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Home />
            </>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

