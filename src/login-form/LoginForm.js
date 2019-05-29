import React, {useState} from 'react';
import './loginForm.css';

export const LoginForm = (props) => {
    const [value, setValue] = useState("");
    const [shake, setShake] = useState(false);

    const handleInput = (e) => setValue(e.target.value);

    const validateInput = () => props.validateInput(value, shaking);

    const shaking = () => {
        setShake(true)
        setTimeout(() => setShake(false), 300);
    }

    return (
        <React.Fragment>
            <div className='login-title'>
                Digital CV
                <br/>
                <span className='login-title-name'>
                    Aaron Kromer
                </span>
            </div>
            <div className='login-label'>
                Enter Password:
            </div>
            <div className={shake ? "login-form login-form-animation" : "login-form"}>
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
        </React.Fragment>
    );
}
