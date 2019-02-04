import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './slide.css';

export default class Slide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="slide-wrapper">
                <div className="slide">Slide</div>
            </div>
        );
    }
}
