import React from 'react';

export const SelectiveViewPanelItem = (props) => {
    return (
        <div className="selective-view-panel-item">
            {props.img !== "" &&
                <img
                    alt={props.img}
                    src={require("../assets/img/" + props.img + ".png")}
                    className="selective-view-panel-item-img"
                />
            }
            <div className={props.img !== "" ? "selective-view-panel-item-label" : "selective-view-panel-item-label imageless"}>
                {props.label}
            </div>
        </div>
    );
}
