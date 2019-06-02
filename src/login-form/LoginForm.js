import React, {useState, useEffect} from 'react';
import './loginForm.css';

export const LoginForm = (props) => {
    const [value, setValue] = useState("");
    const [shake, setShake] = useState(false);

    useEffect(() => {
        document.addEventListener("keypress", keypressMethod);

        return () => document.removeEventListener("keypress", keypressMethod); 
    })

    const keypressMethod = (e) => {
        if(e.keyCode === 13 && !props.transition) validateInput();
    }

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
