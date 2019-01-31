import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './loginForm.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            buttonHover: false,
            buttonDown: false
        }
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value })
    }

    setButtonDown = () => {
        this.setState({buttonDown: true});
        this.props.setButtonDown(true);
    }

    validateInput = () => {
        this.setState({buttonDown: false});
        this.props.validateInput(this.state.value);
    }

    onButtonMouseEnter = () => {
        this.setState({ buttonHover: true });
    }

    onButtonMouseLeave = () => {
        this.setState({ buttonHover: false });
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-align-wrapper">
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
                        <CSSTransition
                            in={this.state.buttonHover}
                            timeout={300}
                            classNames="arrow-hover"
                        >
                            <CSSTransition
                                in={this.state.buttonDown}
                                timeout={300}
                                classNames="arrow-down"
                            >
                                <div>
                                    &#x279c;
                                </div>
                            </CSSTransition>
                        </CSSTransition>
                    </button>
                </div>
            </div>
        );
    }
}
