import React, {useEffect, useState} from 'react';
import TrackVisibility from "react-on-screen";
import './timeline.css'

export const Timeline = (props) => {
    const [timelineNodes, setTimelineNodes] = useState([]);

    useEffect(() => {
        let id = 0;
        const nodes = props.children.map((child) => {
            id++;
            return (
                <TrackVisibility once partialVisibility key={id} >
                    {React.cloneElement(child, {nodeId: id})}
                </TrackVisibility>
            )
        })
        setTimelineNodes(nodes);
    }, [props.children]);

    return(
        <div className="timeline">
            <div className="timeline-node">
                <span className="timeline-node-start"/>
            </div>
            {timelineNodes}
            <div className="timeline-node-end" style={{height: "15px"}}/>
            <div className="timeline-node-end" style={{height: "6px", borderLeft: "white"}}/>
            <div className="timeline-node-end" style={{height: "13px", opacity: "0.8"}}/>
            <div className="timeline-node-end" style={{height: "6px", borderLeft: "white"}}/>
            <div className="timeline-node-end" style={{height: "7px", opacity: "0.6"}}/>
        </div>
    );
}
