import React, {useEffect, useState} from 'react';
import {CSSTransition} from "react-transition-group";

export const TimelineNode = (props) => {
    const [animateLeaf, setAnimateLeaf] = useState(false);
    const [animateKnotTag, setAnimateKnotTag] = useState(false);

    useEffect(() => {
        if(props.isVisible) setAnimateLeaf(true)
    }, [props.isVisible]);

    const startKnotTagAnimation = () => setAnimateKnotTag(true);

    return (
        <div className="timeline-node">
            <CSSTransition in={animateLeaf} timeout={400} classNames="timeline-node-leaf-animation" onEntered={startKnotTagAnimation}>
                <div className="timeline-node-leaf-animation-preset">
                    <CSSTransition in={animateKnotTag} timeout={400} classNames="timeline-node-knot-tag-animation">
                        <span className="timeline-node-knot-tag">{props.date}</span>
                    </CSSTransition>
                    <span className="timeline-node-knot"/>
                    <div className="timeline-node-leaf">
                        <span className="timeline-node-leaf-knot"/>
                        <div className="timeline-node-leaf-title">{props.title}</div>
                        <div className="timeline-node-leaf-content" dangerouslySetInnerHTML={{__html: props.content}}/>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}