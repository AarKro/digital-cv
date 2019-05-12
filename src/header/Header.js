import React from 'react';
import './header.css';

export const Header = (props) => {

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-title">
                    Test Title Digital-CV
                </div>
                <img alt="" src={require("../assets/img/BewerbungsBild.jpg")} className="header-img"/>
            </div>
        </div>
    );
}
