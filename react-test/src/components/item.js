import React from 'react';

export function Item(props) {
    const { onClick, index } = props;
    return (
        <div className="item" onClick={ onClick }>{ index }</div>
    );
}
