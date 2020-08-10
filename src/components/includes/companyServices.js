import React, { Component } from 'react';
import CompanyServicesModal from '../modals/companyServicesModal';

export class CompanyServices extends Component {

    constructor(props){
        super(props);
        this.state={
            companyServices:{
                branding:false,
                illustrations:false,
                video_branding:false,
                motion_design:false,
                animation:false,
                broadcast_design:false,
            }
        }
    }

    checkCompanyService = (id,unchecked,checked) => {
        // Change service image
        let serviceImage = document.getElementById(id);

        if ( serviceImage.src === process.env.REACT_APP_PUBLIC_URL+unchecked ) {
            serviceImage.src = checked;
            serviceImage.parentNode.parentNode.parentNode.classList.add('opacity-80');

            // Add checked box to modal
            this.setState({companyServices:{...this.state.companyServices, [id]:true }});

        } else {
            serviceImage.src = unchecked;
            serviceImage.parentNode.parentNode.parentNode.classList.remove('opacity-80');

            // Remove checked box from modal
            this.setState({companyServices:{...this.state.companyServices, [id]:false }});
        }
    }

    modalControl = () =>{

    }

    render() {
        return (
            <div className="col-12 bg-dark">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('branding','assets/img/services/branding.png','assets/img/services/branding_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="branding" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/branding.png'} alt="branding" />
                                </div>
                            </div>
                            <h5>Branding</h5>
                            <span className="tooltip-text tooltip-center">Identity Design: Logo, Card, etc</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('illustrations','assets/img/services/illustrations.png','assets/img/services/illustrations_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="illustrations" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/illustrations.png'} alt="illustrations" />
                                </div>
                            </div>
                            <h5>Illustrations / Visualization</h5>
                            <span className="tooltip-text tooltip-center">Artworks, Paintings, 3D Modeling and Rendering</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('video_branding','assets/img/services/video_branding.png','assets/img/services/video_branding_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="video_branding" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/video_branding.png'} alt="video branding" />
                                </div>
                            </div>
                            <h5>Video Branding</h5>
                            <span className="tooltip-text tooltip-center">Name Reveals, Logo Reveals, Transitions etc visual elements that make your videos more exciting to watch</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('motion_design','assets/img/services/motion_design.png','assets/img/services/motion_design_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="motion_design" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/motion_design.png'} alt="motion design" />
                                </div>
                            </div>
                            <h5>Motion Design</h5>
                            <span className="tooltip-text tooltip-center">Pass the message across with lively animations</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('animation','assets/img/services/animation.png','assets/img/services/animation_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="animation" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/animation.png'} alt="animation" />
                                </div>
                            </div>
                            <h5>Animation</h5>
                            <span className="tooltip-text tooltip-center">2D/3D animation to tell a story or sell your product</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center tooltip-body">
                            <div className="d-flex justify-content-center">
                                <div className="w-50 h-50 clickable" onClick={()=>this.checkCompanyService('broadcast_design','assets/img/services/broadcast_design.png','assets/img/services/broadcast_design_checked.png') }>
                                    <img className="img-fluid w-75 h-75" id="broadcast_design" src={process.env.REACT_APP_PUBLIC_URL+'assets/img/services/broadcast_design.png'} alt="broadcast design" />
                                </div>
                            </div>
                            <h5>Broadcast Design</h5>
                            <span className="tooltip-text tooltip-center">Style your TV channel and make it world-class with animations and visual elements</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 my-5 text-center">
                    <span className="btn btn-liqair" onClick={()=>this.modalControl()} data-toggle="modal" data-target="#companyServicesModal">Ask For Cost !!</span>
                </div>
                <CompanyServicesModal checkCompanyService={this.checkCompanyService} companyServices={this.state.companyServices} />
            </div>
        )
    }
}

export default CompanyServices;
