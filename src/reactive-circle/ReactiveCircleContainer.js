import React, { useState, useEffect } from 'react';
import { ReactiveCircle } from './ReactiveCircle';
import { MousePositionContext } from '../context/MousePositionContext';

const reactiveCircleData = [
    {
        id: 1,
        top: '12%',
        left: '10%',
        size: 200,
        stiffness: 15
    },
    {
        id: 2,
        top: '18%',
        left: '80%',
        size: 150,
        stiffness: 15
    },
    {
        id: 3,
        top: '30%',
        left: '45%',
        size: 300,
        stiffness: 15
    }
]

export const ReactiveCircleContainer = (props) => {
    const [reactiveCircles, setReactiveCircles] = useState([]);

    useEffect(() => {
        const circles = reactiveCircleData.map((item) => {
            return (
                <ReactiveCircle
                    key={item.id}
                    size={item.size}
                    top={item.top}
                    left={item.left}
                    stiffness={item.stiffness}
                />
            )
        })

        setReactiveCircles(circles);
    }, []);

    return (
        <MousePositionContext.Consumer>
            {({x, y}) => (
                <div style={{ position: 'fixed', width: '100vw', height: '100%', zIndex: "-1"}}>
                    {reactiveCircles.map((item) => React.cloneElement(item, { cursor: { x: x, y: y } }))}
                </div>
            )}
        </MousePositionContext.Consumer>
    );
}