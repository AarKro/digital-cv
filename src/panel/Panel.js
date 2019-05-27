import React from 'react';
import './panel.css';

export const Panel = (props) => {
    return (
        <div className={"panel-" + props.alternation}>
            {props.children}
        </div>
    );
}
