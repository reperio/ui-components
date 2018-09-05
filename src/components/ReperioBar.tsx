import React from 'react'
const image = require('../../assets/rio-slider-colorband1.png');

const ReperioBar = (props: any) => (
    <div className="r-bar-container" style={{height: `${props.height}`}}>
        <img className="r-bar" src={image} />
    </div>
);

export {ReperioBar};