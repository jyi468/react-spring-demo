import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Parallax, ParallaxLayer} from "react-spring/addons";
import {AppProps, AppState} from "./types/types";

const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}w3images/${name}.jpg${wrap ? ')' : ''}`;

class App extends Component<AppProps, AppState> {

    render() {
        return (
            <div>
                {/*
                // @ts-ignore */}
                <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                    <ParallaxLayer offset={0} speed={1}>
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                            </header>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.5} speed={-0.3}>
                        <img src={url('parallax1')} style={{ width: '15%', marginLeft: '70%' }} />
                    </ParallaxLayer>
                </Parallax>
            </div>
        );
    }
}

export default App;
