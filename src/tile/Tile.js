import React, {useState} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './tile.css';

export const Tile = (props) => {
    const [hover, setHover] = useState(false);

    const onMouseEnterTile = () => setHover(true);

    const onMouseLeaveTile = () => setHover(false);

    return (
        <CSSTransition
            in={hover}
            timeout={500}
            classNames="tile"
        >
            <div style={{zIndex: hover ? 2 : 1}} className="tile" onMouseEnter={onMouseEnterTile} onMouseLeave={onMouseLeaveTile}>
                {props.content && props.content}
            </div>
        </CSSTransition>
    );
}
