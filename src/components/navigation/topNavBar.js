import React, { Component } from 'react';

export class TopNavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top liqair-border-image-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a href="#home" className="nav-link mx-3">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" className="nav-link mx-3">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-item px-3 mx-5">
                                <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link mx-3">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#clients" className="nav-link mx-3">Clients</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopNavBar;
