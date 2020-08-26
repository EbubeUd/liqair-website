import React from 'react';
import './prePageLoader.css';

function prePageLoader() {

    const loader = function(){
        window.onload = (event) => {
            const loader = document.getElementById('prePageLoader');
            if (loader && !loader.classList.contains('hidden')) {
                loader.classList.add('hidden');
            }
        };
    };
    loader();

    return (
        <React.Fragment>
            <div id="prePageLoader" className="visible">
                <div className="loader-body">
                    <img className="loader-spinner" src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/spinners/liqair-loader-small.gif'} alt="Pre Page Loader" />
                </div>
            </div>
            {loader()}
        </React.Fragment>
    )
}

export default prePageLoader;
