import React, {useState} from 'react';
import {SelectiveViewButton} from './SelectiveViewButton.js';
import {SelectiveViewPanel} from './SelectiveViewPanel.js';
import TrackVisibility from "react-on-screen";
import "./selectiveView.css";

export const SelectiveView = (props) => {
    const [activeView, setActiveView] = useState("1");

    return (
        <div className="selective-view">
            <div className="selective-view-button-container">
                <TrackVisibility once partialVisibility>
                    <SelectiveViewButton img="technology" active={activeView === "1"} setActiveView={setActiveView} viewId="1"/>
                    <SelectiveViewButton img="tools" active={activeView === "2"} setActiveView={setActiveView} viewId="2"/>
                </TrackVisibility>
            </div>
            <div className="selective-view-panel-container">
                <TrackVisibility once>
                    <SelectiveViewPanel content="technologies" active={activeView === "1"}/>
                    <SelectiveViewPanel content="tools" active={activeView === "2"}/>
                </TrackVisibility>
            </div>
        </div>
    );
}
