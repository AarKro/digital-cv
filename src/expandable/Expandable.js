import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import './expandable.css';

export const Expandable = (props) => {
    const [textAppear, setTextAppear] = useState(false);

    return (
        <div className="expandable">
            <CSSTransition in={props.isVisible} timeout={400} classNames={"expandable-master-animation-" + props.orientation}>
                <div className="expandable-master"/>
            </CSSTransition>
            <CSSTransition in={props.isVisible} timeout={400} classNames="expandable-detail-animation" onEntered={() => setTextAppear(true)}>
                <div className={"expandable-detail-" + props.orientation}>
                    <CSSTransition in={textAppear} timeout={200} classNames="expandable-detail-content-animation">
                        <span className="expandable-detail-content">
                            {props.detail}
                        </span>
                    </CSSTransition>
                </div>
            </CSSTransition>
        </div>
    );
}