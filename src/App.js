import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonDown: false,
            showContent: false
        }
    }

    render() {
        return (
            <CSSTransition
                in={this.state.buttonDown}
                timeout={1000}
                classNames="mouse-down"
            >
                <div>
                    <div className="app">
                        <div className="input-form">
                            <input type="text" />
                            <button
                                onMouseDown={() => this.setState({ buttonDown: true })}
                                onMouseUp={() => this.setState({ buttonDown: false, showContent: true })}
                            >
                                ->
                            </button>
                        </div>
                        <div className="background-divs">
                            <CSSTransition
                                in={this.state.buttonDown}
                                timeout={1000}
                                classNames="background-div-top"
                            >
                                <div className="background-div-top"/>
                            </CSSTransition>
                            <CSSTransition
                                in={this.state.buttonDown}
                                timeout={1000}
                                classNames="background-div-mid"
                            >
                                <div className="background-div-mid"/>
                            </CSSTransition>
                            <CSSTransition
                                in={this.state.buttonDown}
                                timeout={1000}
                                classNames="background-div-bot"
                            >
                                <div className="background-div-bot"/>
                            </CSSTransition>
                        </div>
                    </div>
                    <Slide showContent={this.state.showContent}/>
                </div>
            </CSSTransition>
        );
    }
}

export default App;
