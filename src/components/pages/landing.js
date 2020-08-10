import React, { Component } from 'react';
import Carousel from '../includes/carousel';
import Caption from '../includes/caption';
import BorderTop from '../includes/borderTop';
import BorderBottom from '../includes/borderBottom';
import MediaPlayer from '../includes/mediaPlayer';
import CompanyServices from '../includes/companyServices';
import OurClients from '../includes/ourClients';

export class Landing extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Caption />
                <BorderTop />
                    <div className="text-center">
                        <h4>Disclaimer</h4>
                        <h6>This may blow your mind, view at your own risk.</h6>
                    </div>
                <BorderBottom />
                <MediaPlayer />
                <BorderTop />
                    <div className="text-center">
                        <p>Wow, you came this far. You must be one COOL customer. If you would like us to move your business/brand forward,</p>
                        <p>click the icon of the service(s) you need below to select them, and then click the “Ask us” button to start a conversation with our team.</p>
                        <p>We hope we can work together.</p>
                    </div>
                <BorderBottom />
                <CompanyServices />
                <BorderTop />
                    <div className="text-center">
                        <h4>Affirmation</h4>
                        <h6>Don't take our word for it, ask our clients.</h6>
                    </div>
                <BorderBottom />
                <OurClients />
            </div>
        )
    }
}

export default Landing;
