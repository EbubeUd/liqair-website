import React, { Component } from 'react';

export class TopNavBar extends Component {

    unCollapseNav = () => {
        let nav = document.getElementById('navbarTogglerDemo01');
        let navChild = nav.firstChild

        if (nav.classList.contains("bg-dark")) {
            nav.classList.remove("bg-dark");
            navChild.classList.remove("mt-5");
        } else {
            nav.classList.add("bg-dark");
            navChild.classList.add("mt-5");
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top liqair-border-image-top">
                <a className="navbar-brand d-block d-md-none" href="/">
                    <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                </a>
                <button onClick={this.unCollapseNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a href="/#home" className="nav-link mx-3"><span className="liqair-color">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/#works" className="nav-link mx-3"><span className="liqair-color">Works</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="d-none d-md-block px-3 mx-5">
                                <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#services" className="nav-link mx-3"><span className="liqair-color">Services</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/#clients" className="nav-link mx-3"><span className="liqair-color">Clients</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopNavBar;
