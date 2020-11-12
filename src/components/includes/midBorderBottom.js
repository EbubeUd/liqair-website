import React from 'react';

function midBorderBottom(props) {
    let bgColor = props.bg ? props.bg : 'black';

    return (
        // <div className="liqair-border-image-mid-bottom" style={{backgroundColor: bgColor}}></div>
        <img src="/assets/img/borders/mid_border_bottom.png" style={{width: "100%"}} />
    )
}

export default midBorderBottom;
