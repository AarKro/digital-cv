import React, {useState, useEffect} from 'react';
import {CSSTransition} from "react-transition-group";

export const SelectiveViewPanel = (props) => {
    const [animatePanel, setAnimatePanel] = useState(false);

    useEffect(() => setAnimatePanel(props.active), [props.active]);

    return (
        <CSSTransition in={animatePanel} timeout={400} classNames="selective-view-panel-animation">
            <div className="selective-view-panel">Panel</div>
        </CSSTransition>
    );
}