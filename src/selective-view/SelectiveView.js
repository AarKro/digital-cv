import React, {useState} from 'react';
import {SelectiveViewButton} from './SelectiveViewButton.js';
import {SelectiveViewPanel} from './SelectiveViewPanel.js';
import "./selectiveView.css";

export const SelectiveView = (props) => {
    const [activeView, setActiveView] = useState("1");

    return (
        <div className="selective-view">
            <div className="selective-view-button-container">
                <SelectiveViewButton active={activeView === "1"} setActiveView={setActiveView} viewId="1"/>
                <SelectiveViewButton active={activeView === "2"} setActiveView={setActiveView} viewId="2"/>
                <SelectiveViewButton active={activeView === "3"} setActiveView={setActiveView} viewId="3"/>
            </div>
            <div className="selective-view-panel-container">
                <SelectiveViewPanel active={activeView === "1"}/>
                <SelectiveViewPanel active={activeView === "2"}/>
                <SelectiveViewPanel active={activeView === "3"}/>
            </div>
        </div>
    );
}