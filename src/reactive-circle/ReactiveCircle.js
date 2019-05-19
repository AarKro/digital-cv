import React from 'react';

export const ReactiveCircle = (props) => {
    return (
        <div style={{
            position: 'fixed',
            backgroundColor: '#00ff00',
            borderRadius: '50%',
            height: `${props.size}px`,
            width: `${props.size}px`,
            top: props.top,
            left: props.left,
            boxShadow: '2px 2px 2px #7e8184',
            transform: `translate(calc(${props.left} - ${(props.cursor.x / props.stiffness) + "px"} - ${props.left}), calc(${props.top} - ${(props.cursor.y / props.stiffness) + "px"} - ${props.top}))`,
            transition: 'transform 150ms'
        }}/>
    );
}