import React from 'react';

function footer() {
    return (
        <footer className=" py-4 text-muted text-center text-small liqair-bg-off-color">
            <div className="container">
                Copyright© &nbsp;<span className="liqair-color">{process.env.REACT_APP_NAME}</span>&nbsp; All Rights Reserved {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default footer;
