import React from 'react';
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

    validateInput = () => {
        this.setState({buttonDown: false});
        this.props.validateInput(this.state.value);
    }

    render() {
        return (
            <div className="login-form">
                <input
                    className="login-input"
                    type="password"
                    onChange={this.handleInput}
                    value={this.state.value}
                />
                <button
                    className="login-button"
                    onMouseDown={this.setButtonDown}
                    onMouseUp={this.validateInput}
                    onMouseEnter={this.onButtonMouseEnter}
                    onMouseLeave={this.onButtonMouseLeave}
                >
                    <div>
                        &#x279c;
                    </div>
                </button>
            </div>
        );
    }
}
