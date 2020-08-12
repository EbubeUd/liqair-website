import React from 'react';

function footer() {
    return (
        <footer className="my-5 pt-5 text-muted text-center text-small">
            <div class="container">
                Copyright© &nbsp;<span class="liqair-color">{process.env.REACT_APP_NAME}</span>&nbsp; All Rights Reserved {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default footer;
