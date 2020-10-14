import React, { Component } from 'react';
import Carousel from '../includes/carousel';
import Caption from '../includes/caption';
import MidBorderTop from '../includes/midBorderTop';
import MidBorderBottom from '../includes/midBorderBottom';
import MediaPlayer from '../includes/mediaPlayer';
import CompanyServices from '../includes/companyServices';
import OurClients from '../includes/ourClients';
import ContactCompany from '../includes/contactCompany';
import BorderBottom from '../includes/borderBottom';
import Social from '../includes/social';
import Divider from '../includes/divider';
import PrePageLoader from '../loaders/prePageLoader';

export class Landing extends Component {
    render() {
        return (
            <React.Fragment>
            <PrePageLoader />
            <div>
                <Carousel />

                <span id="home"></span>
                <div style={{backgroundColor: "#2d2d2d"}}>
                <Caption />
                {/* <MidBorderTop /> */}
                <div className="text-content ">
                    <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">WORKS</h6>
                        <h6 className="caption-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h6>
                    </div>
                    </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
               </div>


                <span id="works"></span>
                <div style={{backgroundColor: "#2d2d2d"}}>
                <MediaPlayer />
                {/* <MidBorderTop /> */}
                <div className="text-content ">
                    <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">SERVICES</h6>
                        <h6 className="caption-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h6>
                    </div>
                 </div>
                 {/* <MidBorderBottom bg="#2d2d2d" /> */}
                </div>


                <span id="services"></span>
                <div style={{backgroundColor: "#2d2d2d"}}>
                <CompanyServices />
                {/* <MidBorderTop /> */}
                <div className="text-content ">
                    <div className="container text-center caption-text align-middle">
                        <h6 className="caption-header">CLIENTS</h6>
                        <h6 className="caption-body">Don't take our word for it, ask our clients.</h6>
                    </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
                </div>


                <span id="clients"></span>

                <div style={{backgroundColor: "#2d2d2d"}}>
                <OurClients />
                <Divider />
                <ContactCompany />
                <BorderBottom />
                <Social />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Landing;
