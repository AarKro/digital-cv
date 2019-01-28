import React, {Component} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export default function SkewedAnimationLayers(props) {
    return(
        <div className="background-divs">
            <CSSTransition
                in={props.trigger}
                timeout={1000}
                classNames="background-div-top"
            >
                <div className="background-div-top" />
            </CSSTransition>
            <CSSTransition
                in={props.trigger}
                timeout={1000}
                classNames="background-div-mid"
            >
                <div className="background-div-mid" />
            </CSSTransition>
            <CSSTransition
                in={props.trigger}
                timeout={1000}
                classNames="background-div-bot"
            >
                <div className="background-div-bot" />
            </CSSTransition>
        </div>
    );
}
