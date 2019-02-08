import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import LoginForm from './LoginForm';
import SkewedAnimationLayers from './SkewedAnimationLayers';
import Tile from './Tile';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonDown: false,
            transition: false
        }
    }

    setButtonDown = (buttonDown) => {
        this.setState({ buttonDown: buttonDown });
    }

    validateInput = (value) => {
        this.setState({
            buttonDown: false,
            transition: value === "asdf"
        })
    };

    render() {
        //<LoginForm setButtonDown={this.setButtonDown} validateInput={this.validateInput}/>
        //<Slide showContent={this.state.transition} />
        return (
            <div className="app">
                <Tile/>
                <Tile/>
                <Tile/>
            </div>
        );
    }
}
