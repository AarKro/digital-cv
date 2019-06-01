import React, {useEffect, useState} from 'react';
import {CSSTransition} from "react-transition-group";

export const TimelineNode = (props) => {
    const [animateLeaf, setAnimateLeaf] = useState(false);
    const [animateKnotTag, setAnimateKnotTag] = useState(false);

    useEffect(() => {
        if(props.isVisible) setAnimateLeaf(true)
    }, [props.isVisible]);

    const startKnotTagAnimation = () => setAnimateKnotTag(true);

    const isFollowup = props.noTag ? "hidden" : "visible";

    return (
        <div className="timeline-node" style={{marginTop: props.noTag ? "-25px" : ""}}>
            <CSSTransition in={animateLeaf} timeout={400} classNames="timeline-node-leaf-animation" onEntered={startKnotTagAnimation}>
                <div className="timeline-node-leaf-animation-preset">
                    <CSSTransition in={animateKnotTag} timeout={400} classNames="timeline-node-knot-tag-animation">
                        <span style={{visibility: isFollowup, marginLeft: props.date.includes("Today") ? "-150px" : "-140px"}} className="timeline-node-knot-tag">{props.date}</span>
                    </CSSTransition>
                    <span style={{visibility: isFollowup}} className="timeline-node-knot"/>
                    <div className="timeline-node-leaf">
                        <span style={{visibility: isFollowup}} className="timeline-node-leaf-knot"/>
                        <div className="timeline-node-leaf-title">{props.title}</div>
                        <div className="timeline-node-leaf-content" dangerouslySetInnerHTML={{__html: props.content}}/>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}
