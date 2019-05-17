import React, { useState, useEffect } from 'react';
import { ReactiveCircle } from './ReactiveCircle';

const reactiveCircleData = [
    {
        id: 1,
        top: 200,
        left: 200,
        size: 100,
        stiffness: 10
    },
    {
        id: 2,
        top: 400,
        left: 400,
        size: 100,
        stiffness: 10
    },
    {
        id: 3,
        top: 600,
        left: 600,
        size: 100,
        stiffness: 10
    }
]

export const ReactiveCircleContainer = (props) => {
    const [reactiveCircles, setReactiveCircles] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

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

    const trackMousePosition = (event) => {
        setX(event.pageX);
        setY(event.pageY);
    }

    return (
        <div onMouseMove={trackMousePosition} style={{ position: 'fixed', width: '100vw', height: '100%' }}>
            {reactiveCircles.map((item) => React.cloneElement(item, { cursor: { x: x, y: y } }))}
        </div>
    );
}