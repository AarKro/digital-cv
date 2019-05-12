import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

export const SelectiveViewButton = (props) => {
    const [animateButton, setAnimateButton] = useState(false);

    useEffect(() => setAnimateButton(props.active), [props.active]);

    return (
        <CSSTransition in={animateButton} timeout={400} classNames="selective-view-button-animation">
            <button className="selective-view-button" onClick={() => props.setActiveView(props.viewId)}>Button</button>
        </CSSTransition>
    );
}