import React, { Component } from 'react';
import Carousel from '../includes/carousel';
import Caption from '../includes/caption';
import MidBorderTop from '../includes/midBorderTop';
import MidBorderBottom from '../includes/midBorderBottom';
import CompanyServices from '../includes/companyServices';
import OurClients from '../includes/ourClients';
import ContactCompany from '../includes/contactCompany';
import BorderBottom from '../includes/borderBottom';
import Social from '../includes/social';
import Divider from '../includes/divider';
import PrePageLoader from '../loaders/prePageLoader';
import WorksGrid from '../includes/worksGrid';
import Career from '../includes/career'

export class Landing extends Component {
    render() {
        return (
            <React.Fragment>
            <PrePageLoader />

         <div className="video-banner">
         <Carousel />
            <span id="home"></span>



            <div style={{backgroundColor: "#2d2d2d"}}>
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
           


            <div style={{backgroundColor: "#2d2d2d"}}>
            <span id="works"></span>
            <WorksGrid gridStyle={{"spacing": true, "displayOverlay": true, "view": "clients"}} />
            {/* <MediaPlayer /> */}
            {/* <MidBorderTop /> */}
            </div>


            <div style={{backgroundColor: "#2d2d2d"}}>
                <div className="text-content ">
                    <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CAREERS</h6>
                    <h6 className="caption-body">Your exciting journey begins here </h6>
                    </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>
           
         



            <div style={{backgroundColor: "#2d2d2d"}}>
            <span id="careers"></span>
            <Career />
            </div>


            <div style={{backgroundColor: "#2d2d2d"}}>
            
                <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">SERVICES</h6>
                    <h6 className="caption-body">Need Something? We got you</h6>
                </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>


                
            <div style={{backgroundColor: "#2d2d2d"}}>
            <span id="services"></span>
            <CompanyServices />
            </div>

            <div style={{backgroundColor: "#2d2d2d"}}>
            {/* <MidBorderTop /> */}
            <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CLIENTS</h6>
                    <h6 className="caption-body">Be our next happy customer</h6>
                </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>


            <div style={{backgroundColor: "#2d2d2d"}}>
            <span id="clients"></span>
            <OurClients />
            </div>

            <div style={{backgroundColor: "#2d2d2d"}}>
            {/* <MidBorderTop /> */}
            <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CONTACT  US</h6>
                    <h6 className="caption-body">Be our next happy customer</h6>
                </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>

            <div style={{backgroundColor: "#2d2d2d"}}>
            <span id="clients"></span>
            <ContactCompany />
            </div>

                
         

                <div style={{backgroundColor: "black"}}>
                <BorderBottom />
                </div>
             
                <div style={{backgroundColor: "black"}}>
                <Social />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Landing;
