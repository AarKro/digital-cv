import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Expandable } from './Expandable';

export const ExpandableContainer = (props) => {
    return (
        <div className="expandable-container" style={{marginLeft: props.orientation==="left" ? "-100px" : ""}}>
            <TrackVisibility once>
                <Expandable img="music" orientation='left' detail="Avid piano player for 10+ years"/>
            </TrackVisibility>
            <TrackVisibility once>
                <Expandable img="technology" orientation='right' detail="Development of smaller applications, such as a <a href='https://github.com/Chromeroni/Hera-Chatbot' target='_blank'>Chat-Bot for Discord</a>"/>
            </TrackVisibility>
            <TrackVisibility once>
                <Expandable img="controller" orientation='left' detail="Console and PC gaming"/>
            </TrackVisibility>
        </div>
    );
}
