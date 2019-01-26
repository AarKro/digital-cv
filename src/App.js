import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDown: false,
      transition: false,
      showContent: false,
      value: "",
      inputValid: false
    }
  }

  validateInput = () => {
    this.setState({ 
      buttonDown: false, 
      transition: this.state.value === "asdf",
      inputValid: this.state.value !== "asdf"
    })
  };

  render() {
    return (
      <CSSTransition
        in={this.state.transition}
        timeout={1000}
        classNames="mouse-down"
      >
        <div>
          <div className="app">
            <div className="input-form">
              <input type="text" onChange={(e) => this.setState({ value: e.target.value })} value={this.state.value} />
              <button
                onMouseDown={() => this.setState({ buttonDown: true })}
                onMouseUp={this.validateInput}
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
                <div className="background-div-top" />
              </CSSTransition>
              <CSSTransition
                in={this.state.buttonDown}
                timeout={1000}
                classNames="background-div-mid"
              >
                <div className="background-div-mid" />
              </CSSTransition>
              <CSSTransition
                in={this.state.buttonDown}
                timeout={1000}
                classNames="background-div-bot"
              >
                <div className="background-div-bot" />
              </CSSTransition>
            </div>
          </div>
          <Slide showContent={this.state.showContent} />
        </div>
      </CSSTransition>
    );
  }
}

export default App;
