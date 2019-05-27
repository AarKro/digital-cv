import React, { useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import {Slide} from './slide/Slide';
import {LoginForm} from './login-form/LoginForm';
import {Tile} from './tile/Tile';
import base64 from 'base-64';
import './app.css';

export const App = (props) => {
    const [transition, setTransition] = useState(false);

    const validateInput = (value) => {
        fetch("./digital-cv-1.0-SNAPSHOT/digitalcv/content", {
            method:'GET',
            headers: {'Authorization': 'Basic ' + base64.encode('digital-cv-frontend:' + value)}
        }).then((response) => {
            if(response.status === 200) setTransition(true)
        })
    }

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
