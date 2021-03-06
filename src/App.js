import React, { useState } from 'react';
import { Slide } from './slide/Slide';
import { LoginForm } from './login-form/LoginForm';
import { BackgroundLayer } from './background-layer/BackgroundLayer';
import { Panel } from './panel/Panel';
import CSSTransition from 'react-transition-group/CSSTransition';
import base64 from 'base-64';
import './app.css';

export const App = (props) => {
    const [transition, setTransition] = useState(false);
    const [data, setData] = useState({});

    const validateInput = (value, shaking) => {
        fetch("./digital-cv-1.0-SNAPSHOT/digitalcv/content", {
            method:'GET',
            headers: {'Authorization': 'Basic ' + base64.encode('digital-cv-frontend:' + value)}
        }).then((response) => {
            if(response.status === 200) {
                response.json().then((json) => {
                    setData(json);
                    setTransition(true)
                });
            }
            else shaking();
        })
    }

    return (
        <React.Fragment>
            <div className={transition ? "app" : "app block-scroll"}>
                <BackgroundLayer/>
                <Panel login={true}>
                    <LoginForm transition={transition} validateInput={validateInput}/>
                </Panel>
            </div>
            <CSSTransition
                in={transition}
                timeout={1000}
                classNames="mouse-down"
            >
                <React.Fragment>
                    {transition && <Slide showContent={transition} data={data}/>}
                </React.Fragment>
            </CSSTransition>
        </React.Fragment>
    );
}
