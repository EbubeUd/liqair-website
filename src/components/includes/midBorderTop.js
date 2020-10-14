import React from 'react';

function midBorderTop(props) {
    let bgColor = props ? props.bg : 'black';
    console.log("BackgroundColor is " + bgColor);
    return (
        // <div className="mt-5 liqair-border-image-mid-top" style={{backgroundColor: bgColor}}></div>
        <img src="/assets/img/borders/mid_border_top.png" style={{width: "100%"}} />
    )
}

export default midBorderTop;
