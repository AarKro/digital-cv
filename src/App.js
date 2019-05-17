import React, { useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import {Slide} from './slide/Slide';
import {LoginForm} from './login-form/LoginForm';
import {Tile} from './tile/Tile';
import './app.css';

export const App = (props) => {
    const [transition, setTransition] = useState(false);

    const validateInput = (value) => setTransition(value === "asdf");

    const loginForm = <LoginForm validateInput={validateInput}/>;
    
    return (
        <React.Fragment>
            <div className={!transition ? "app" : "app block-scroll"}>
                <Tile content={loginForm}/>
                <Tile/>
                <Tile/>
            </div>
            <CSSTransition
                in={transition}
                timeout={1000}
                classNames="mouse-down"
            >
                <Slide showContent={transition} />
            </CSSTransition>
        </React.Fragment>
    );
}
