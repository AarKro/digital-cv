import React from 'react';

export const ReactiveCircle = (props) => {
    return (
        <div style={{
            position: 'fixed',
            backgroundColor: '#e86971',
            borderRadius: '50%',
            zIndex: '-1',
            height: `${props.size}px`,
            width: `${props.size}px`,
            top: `${props.top}px`,
            left: `${props.left}px`,
            transform: `translate(${props.left - (props.cursor.x / props.stiffness) - props.left}px, ${props.top - (props.cursor.y / props.stiffness) - props.top}px)`
        }}/>
    );
}