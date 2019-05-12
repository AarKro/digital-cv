import React, {useState} from 'react';
import './loginForm.css';

export const LoginForm = (props) => {
    const [value, setValue] = useState("");

    const handleInput = (e) => setValue(e.target.value);

    const validateInput = () => props.validateInput(value);

    return (
        <div className="login-form">
            <input
                className="login-input"
                type="password"
                onChange={handleInput}
                value={value}
            />
            <button
                className="login-button"
                onMouseUp={validateInput}
            >
                <div>
                    &#x279c;
                </div>
            </button>
        </div>
    );
}
