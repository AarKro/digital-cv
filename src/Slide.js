import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export default class Slide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showSlide: false
        }
    }

    componentDidMount() {
        this.setState({ showSlide: true })
    }

    render() {
        return (
            <div className="slideWrapper">
                <div className="slide">Slide</div>
            </div>
        );
    }
}
