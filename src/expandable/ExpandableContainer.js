import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Expandable } from './Expandable';

export const ExpandableContainer = (props) => {
    return (
        <div className="expandable-container">
            <TrackVisibility once>
                <Expandable img="music" orientation='left'/>
            </TrackVisibility>
            <TrackVisibility once>
                <Expandable img="controller" orientation='right'/>
            </TrackVisibility>
            <TrackVisibility once>
                <Expandable img="controller" orientation='left'/>
            </TrackVisibility>
        </div>
    );
}
