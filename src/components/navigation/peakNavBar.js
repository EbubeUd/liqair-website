import React, { Component } from 'react';
import {logoutUserAction} from '../../redux/actions/masterAuthActions';
import { connect } from 'react-redux';

export class PeakNavBar extends Component {

    unCollapseNav = () => {
        let togglerIcon = document.getElementById('navbar-toggler-icon');
        let nav = document.getElementById('navbarTogglerDemo01');
        let navChild = nav.firstChild

        if (nav.classList.contains("bg-dark")) {
            nav.classList.remove("bg-dark");
            navChild.classList.remove("mt-5");
            togglerIcon.src = process.env.REACT_APP_PUBLIC_URL+'/assets/img/spinners/wave_cool.gif';
        } else {
            nav.classList.add("bg-dark");
            navChild.classList.add("mt-5");
            togglerIcon.src = process.env.REACT_APP_PUBLIC_URL+'/assets/img/spinners/wave_hot.gif';
        }
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutUserAction();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-default bg-default fixed-top liqair-bg-off-color">
                <a className="navbar-brand d-block" href="/">
                    <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                </a>
                <button onClick={this.unCollapseNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" /> */}
                    <img id="navbar-toggler-icon" src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/spinners/wave_cool.gif'} width={60} height={25} className="img-fluid" alt="navbar toggler icon" loading="lazy" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item d-block d-md-inline-flex">
                            <a href="/" className="nav-link"><span className="liqair-color">Home</span></a>
                        </li>
                        <li className="nav-item d-block d-md-inline-flex">
                            <a href="/admin/dashboard#carousel" className="nav-link"><span className="liqair-color">Carousel</span></a>
                        </li>
                        <li className="nav-item d-block d-md-inline-flex">
                            <a href="/admin/dashboard#videos" className="nav-link"><span className="liqair-color">Videos</span></a>
                        </li>
                        <li className="nav-item d-block d-md-inline-flex">
                            <a href="/admin/dashboard#clients" className="nav-link"><span className="liqair-color">Clients</span></a>
                        </li>
                        <li className="nav-item d-block d-md-inline-flex">
                            <a href="/admin/dashboard#messages" className="nav-link"><span className="liqair-color">Messages</span></a>
                        </li>
                    </ul>
                    <form onClick={this.logout} className="form-inline my-2 my-lg-0 justify-content-center">
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default connect(null,{logoutUserAction})(PeakNavBar);
