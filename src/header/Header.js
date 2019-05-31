import React from 'react';
import './header.css';

export const Header = (props) => {

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-title">
                    Digital CV
                    <br/>
                    <span className="header-title-name">
                        Aaron Kromer
                    </span>
                </div>
                <img alt="self" src={require("../assets/img/BewerbungsBild.jpg")} className="header-img"/>
            </div>
        </div>
    );
}
