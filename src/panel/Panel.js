import React from 'react';
import './panel.css';

export const Panel = (props) => {
    return (
        <div className={props.login ? "panel-login" : "panel"}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}
