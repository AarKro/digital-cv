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
            <CSSTransition
                in={this.state.showSlide}
                timeout={1000}
                classNames="slide"
            >
                <div className="slide">Slide</div>
            </CSSTransition>
        );
    }
}