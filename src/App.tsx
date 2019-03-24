import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Parallax, ParallaxLayer} from "react-spring/addons";
import {AppProps, AppState} from "./types/types";
import HeaderBarContainer from "./components/headerBar/HeaderBarContainer";
import CoinsContainer from "./components/coins/CoinsContainer";
import Grid from "@material-ui/core/Grid/Grid";
import {createStyles, Theme} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import MinuteDataContainer from "./components/minuteData/MinuteDataContainer";

const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}w3images/${name}.jpg${wrap ? ')' : ''}`;

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component<AppProps, AppState> {

    render() {
        const {classes} = this.props;
        return (
            <div>
                {/*
                // @ts-ignore */}
                {/*<Parallax ref={ref => (this.parallax = ref)} pages={3}>
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
                </Parallax>*/}
                <HeaderBarContainer/>
                <CoinsContainer/>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <MinuteDataContainer/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
