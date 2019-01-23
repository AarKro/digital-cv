import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDown: false,
      showSlide: false
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
            <input type="text" />
            <button onClick={() => this.setState({ showSlide: true })} onMouseDown={() => this.setState({ buttonDown: true })} onMouseUp={() => this.setState({ buttonDown: false })}>-></button>
          </div>
          {this.state.showSlide && <Slide />}
        </div>
      </CSSTransition>
    );
  }
}

export default App;
