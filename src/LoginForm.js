import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './loginForm.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
        }
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value })
    }

    setButtonDown = () => {
        this.props.setButtonDown(true);
    }

    validateInput = () => {
        this.props.validateInput(this.state.value);
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-align-wrapper">
                    <input
                        className="login-input"
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.value}
                    />
                    <button
                        className="login-button"
                        onMouseDown={this.setButtonDown}
                        onMouseUp={this.validateInput}
                    >
                        ➜
                    </button>

                </div>
            </div>
        );
    }
}
