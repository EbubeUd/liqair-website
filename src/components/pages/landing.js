import React, { Component } from 'react';
import Carousel from '../includes/carousel';

import CompanyServices from '../includes/companyServices';
import OurClients from '../includes/ourClients';
import ContactCompany from '../includes/contactCompany';
import BorderBottom from '../includes/borderBottom';
import Social from '../includes/social';
import PrePageLoader from '../loaders/prePageLoader';
import WorksGrid from '../includes/worksGrid';
import Career from '../includes/career'

export class Landing extends Component {
    render() {
        return (
            <React.Fragment>
            <PrePageLoader />
            <span id="home" style={{position: "relative", top: "-15vh"}}></span>
         <div className="video-banner">
         <Carousel />
            <span id="home"></span>


            <span id="works" style={{position: "relative", top: "-15vh"}}></span>
            <div style={{backgroundColor: "#2d2d2d"}} className="fluid">
                {/* <Caption /> */}


                {/* <MidBorderTop /> */}
                
                <div className="text-content" style={{position: "relative", top: "-10px"}}>
                    <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">WORKS</h6>
                    
                        <h6 className="caption-body">Disclaimer: This might blow your mind </h6>
                    </div>
                    </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
               
            </div>
           


            <div style={{backgroundColor: "#2d2d2d"}} className="container-fluid">
            
            <WorksGrid gridStyle={{"spacing": true, "displayOverlay": true, "view": "clients"}} />
            {/* <MediaPlayer /> */}
            {/* <MidBorderTop /> */}
            </div>

            <span id="careers" style={{position: "relative", top: "-15vh"}}></span>
            <div style={{backgroundColor: "#2d2d2d"}} className="fluid">
                <div className="text-content ">
                    <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CAREERS</h6>
                    <h6 className="caption-body">Your exciting journey begins here </h6>
                    </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>
           
         



            <div style={{backgroundColor: "#2d2d2d"}} className="container-fluid">
            <Career />
            </div>

            <span id="services" style={{position: "relative", top: "-15vh"}}></span>
            <div style={{backgroundColor: "#2d2d2d"}} className="fluid">
            
                <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">SERVICES</h6>
                    <h6 className="caption-body">Need Something? We got you</h6>
                </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>


                
            <div style={{backgroundColor: "#2d2d2d"}} className="container-fluid">
            <CompanyServices />
            </div>


            <span id="clients" style={{position: "relative", top: "-15vh"}}></span>

            <div style={{backgroundColor: "#2d2d2d"}} className="fluid">
            {/* <MidBorderTop /> */}
            <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CLIENTS</h6>
                    <h6 className="caption-body">Be our next happy customer</h6>
                </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>


            <div style={{backgroundColor: "#2d2d2d"}} className="container-fluid">
            <span id="clients"></span>
            <OurClients />
            </div>

            <span id="contact" style={{position: "relative", top: "-15vh"}}></span>
            <div style={{backgroundColor: "#2d2d2d"}} className="fluid">
            {/* <MidBorderTop /> */}
            <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CONTACT  US</h6>
                    <h6 className="caption-body">Be our next happy customer</h6>
                </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>

            <div style={{backgroundColor: "#2d2d2d"}} className="container-fluid">
            <ContactCompany />
            </div>

                
         

                <div style={{backgroundColor: "black"}} className="fluid">
                <BorderBottom />
                </div>
             
                <div style={{backgroundColor: "black"}} className="container-fluid">
                <Social />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Landing;
