import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

export const SelectiveViewButton = (props) => {
    const [animateButton, setAnimateButton] = useState(false);

    useEffect(() => setAnimateButton(props.active && props.isVisible), [props.active, props.isVisible]);

    return (
        <CSSTransition in={animateButton} timeout={400} classNames="selective-view-button-animation">
            <button className="selective-view-button" onClick={() => props.setActiveView(props.viewId)}>
                <img alt={props.img} src={require("../assets/img/" + props.img + ".png")} className="selective-view-button-img"/>
            </button>
        </CSSTransition>
    );
}
