import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import LoginForm from './LoginForm';
import Tile from './Tile';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transition: false
        }
    }

    validateInput = (value) => {
        this.setState({
            transition: value === "asdf"
        })
    };

    render() {
        const loginForm = <LoginForm validateInput={this.validateInput}/>;
        return (
            <React.Fragment>
                <div className="app">
                    <Tile content={loginForm}/>
                    <Tile/>
                    <Tile/>
                </div>
                <CSSTransition
                    in={this.state.transition}
                    timeout={1000}
                    classNames="mouse-down"
                >
                    <Slide showContent={this.state.transition} />
                </CSSTransition>
            </React.Fragment>
        );
    }
}
