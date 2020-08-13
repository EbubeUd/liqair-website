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

export class Landing extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <span id="home"></span>
                <Caption />
                <MidBorderTop />
                    <div className="text-center">
                        <h4>Disclaimer</h4>
                        <h6>This may blow your mind, view at your own risk.</h6>
                    </div>
                <MidBorderBottom />
                <span id="works"></span>
                <MediaPlayer />
                <MidBorderTop />
                    <div className="text-center">
                        <p>Wow, you came this far. You must be one COOL customer. If you would like us to move your business/brand forward,</p>
                        <p>click the icon of the service(s) you need below to select them, and then click the “Ask us” button to start a conversation with our team.</p>
                        <p>We hope we can work together.</p>
                    </div>
                <MidBorderBottom />
                <span id="services"></span>
                <CompanyServices />
                <MidBorderTop />
                    <div className="text-center">
                        <h4>Affirmation</h4>
                        <h6>Don't take our word for it, ask our clients.</h6>
                    </div>
                <MidBorderBottom />
                <span id="clients"></span>
                <OurClients />
                <Divider />
                <ContactCompany />
                <BorderBottom />
                <Social />
            </div>
        )
    }
}

export default Landing;
