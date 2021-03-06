import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import './expandable.css';

export const Expandable = (props) => {
    const [textAppear, setTextAppear] = useState(false);

    return (
        <div className={"expandable-" + props.orientation}>
            <CSSTransition in={props.isVisible} timeout={400} classNames={"expandable-master-animation-" + props.orientation}>
                <div className="expandable-master">
                    <img alt={props.img} src={require("../assets/img/" + props.img + ".png")} className="expandable-master-img" />
                </div>
            </CSSTransition>
            <CSSTransition in={props.isVisible} timeout={400} classNames="expandable-detail-animation" onEntered={() => setTextAppear(true)}>
                <div className={"expandable-detail-" + props.orientation}>
                    <CSSTransition in={textAppear} timeout={400} classNames="expandable-detail-content-animation">
                        <span className="expandable-detail-content" dangerouslySetInnerHTML={{__html: props.detail}}/>
                    </CSSTransition>
                </div>
            </CSSTransition>
        </div>
    );
}
