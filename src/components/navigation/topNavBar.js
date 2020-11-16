import React, { Component } from 'react';

export class TopNavBar extends Component {

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

    moveNavLine = (nav) =>
    {
        var element = document.getElementById(nav);
        var bounds = element.getBoundingClientRect();
        var line = document.getElementById("nav-line");
        line.style.left = bounds.left - 16 + "px";
    }
    

    setScroll = () =>
    {
        //document.body.scrollTop = scroll;

        if ((document.body.scrollTop < 400 && document.body.scrollTop < 400) || (document.documentElement.scrollTop <400  && document.documentElement.scrollTop < 400)) {
            this.moveNavLine("home-nav")
    }

    if ((document.body.scrollTop > 400 && document.body.scrollTop <2500) || (document.documentElement.scrollTop > 400 && document.documentElement.scrollTop <2500)) {
        this.moveNavLine("works-nav")
      }

    if ((document.body.scrollTop > 2500 && document.body.scrollTop < 3800) || (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 3800)) {
        this.moveNavLine("careers-nav")
    }
    if ((document.body.scrollTop > 3800 && document.body.scrollTop < 4900) || (document.documentElement.scrollTop > 3800 && document.documentElement.scrollTop < 4900)) {
        this.moveNavLine("services-nav")
    }
    if ((document.body.scrollTop > 4900 && document.body.scrollTop < 5200) || (document.documentElement.scrollTop > 4900 && document.documentElement.scrollTop < 5200)) {
        this.moveNavLine("clients-nav")
    }
    if ((document.body.scrollTop > 5200 ) || (document.documentElement.scrollTop > 5200)) {
        this.moveNavLine("contacts-nav")
    }

    }


    // componentDidMount(){
    //      var instance = this;
    //      instance.moveNavLine("home-nav");



    //             // Setup isScrolling variable
    //             var isScrolling;

    //             // Listen for scroll events
    //             window.addEventListener('scroll', function ( event ) {

    //             // Clear our timeout throughout the scroll
    //             window.clearTimeout( isScrolling );

    //             // Set a timeout to run after scrolling ends
    //             isScrolling = setTimeout(function() {

    //                 if ((document.body.scrollTop < 100 && document.body.scrollTop < 100) || (document.documentElement.scrollTop <100  && document.documentElement.scrollTop < 100)) {
    //                         instance.moveNavLine("home-nav")
    //                 }

    //                 if ((document.body.scrollTop > 700 && document.body.scrollTop <2100) || (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop <2100)) {
    //                         instance.moveNavLine("works-nav")
    //                   }

    //                 if ((document.body.scrollTop > 2100 && document.body.scrollTop < 3300) || (document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 3300)) {
    //                     instance.moveNavLine("careers-nav")
    //                 }
    //                 if ((document.body.scrollTop > 3300 && document.body.scrollTop < 4100) || (document.documentElement.scrollTop > 3300 && document.documentElement.scrollTop < 4100)) {
    //                     instance.moveNavLine("services-nav")
    //                 }
    //                 if ((document.body.scrollTop > 4100 && document.body.scrollTop < 4600) || (document.documentElement.scrollTop > 4100 && document.documentElement.scrollTop < 4600)) {
    //                     instance.moveNavLine("clients-nav")
    //                 }
    //                 if ((document.body.scrollTop > 4600 ) || (document.documentElement.scrollTop > 4500)) {
    //                     instance.moveNavLine("contacts-nav")
    //                 }

    //             }, 66);

    //             }, false);

               


    // }


    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top liqair-border-image-top">
                <a className="navbar-brand d-block d-md-none" href="/">
                    <img  src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                </a>
                <button onClick={this.unCollapseNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" /> */}
                    <img  id="navbar-toggler-icon" src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/spinners/wave_cool.gif'} width={60} height={25} className="img-fluid" alt="navbar toggler icon" loading="lazy" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item" href="#home">
                            <a href="#" data-scroll="home" className="nav-link mx-3" >
                                <span className="liqair-color font-header" id="home-nav">Home</span><br/>
                                </a>
                            
                        </li>
                        <li className="nav-item" href="#works">
                            <a href="#" className="nav-link mx-3" data-scroll="works" >
                                <span className="liqair-color font-header" id="works-nav">Works</span>
                            </a>
                        </li>
                        <li className="nav-item" href="#careers">
                            <a href="#" data-scroll="careers" className="nav-link mx-3"><span className="liqair-color font-header" id="careers-nav" > Careers</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll="home" className="d-none d-md-block px-3 mx-5">
                                <img  src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liqair.png'} width={120} height={50} className="img-fluid" alt="logo" loading="lazy" />
                            </a>
                        </li>
                        <li className="nav-item" href="#services">
                            <a href="#" data-scroll="services" className="nav-link mx-3"><span className="liqair-color font-header" id="services-nav" >Services</span></a>
                        </li>
                        <li className="nav-item" href="#clients"> 
                            <a href="#" data-scroll="clients" className="nav-link mx-3"><span className="liqair-color font-header" id="clients-nav" >Clients</span></a>
                        </li>
                        <li className="nav-item" href="#contact">
                            <a href="#" data-scroll="contact" className="nav-link mx-3"><span className="liqair-color font-header" id="contacts-nav" >Contacts</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopNavBar;
