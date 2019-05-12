import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './tile.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    onMouseEnterTile = () => {
        this.setState({ hover: true });
    }

    onMouseLeaveTile = () => {
        this.setState({ hover: false });
    }

    render() {
        return (
            <CSSTransition
                in={this.state.hover}
                timeout={500}
                classNames="tile"
            >
                <div style={{zIndex: this.state.hover ? 2 : 1}} className="tile" onMouseEnter={this.onMouseEnterTile} onMouseLeave={this.onMouseLeaveTile}>
                    {this.props.content && this.props.content}
                </div>
            </CSSTransition>
        );
    }
}
