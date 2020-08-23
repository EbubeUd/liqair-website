import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction, setMultiAlertAction } from '../../redux/actions/masterAlertActions';
import {messageContentStoreAction} from '../../redux/actions/contentMessageActions';

export class CompanyServicesModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            message:'',
            companyServices:{
                branding:false,
                illustrations:false,
                video_branding:false,
                motion_design:false,
                animation:false,
                broadcast_design:false,
            },
            validationFeedback:{
                name:'',
                email:'',
                phone:'',
                message:'',
            }
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.companyServices !== this.props.companyServices) {
            this.setState({companyServices:this.props.companyServices});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    validateForm = (inputs) => {
        const {name, email, message} = inputs;
        let errors = [];
        let feedback = {name:'', email:'', phone:'', message:''};

        if (!name || name.length < 3) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A name is required'});
            feedback.name = 'is-invalid';
        } else {feedback.name = 'is-valid';}

        if (!email) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'An email address is required'});
            feedback.email = 'is-invalid';
        } else {feedback.email = 'is-valid';}

        if (!message || message.length < 10) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A message is required'});
            feedback.message = 'is-invalid';
        } else {feedback.message = 'is-valid';}

        if (errors.length === 0) {
            this.setState({validationFeedback:feedback});
            return true;
        }

        this.props.setMultiAlertAction(...errors);
        this.setState({validationFeedback:feedback});
        return false;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state)) {

            const {validationFeedback, companyServices, ...data} = this.state;
            if(!data.phone){delete data.phone}

            this.props.messageContentStoreAction({...data, ...companyServices, type:'services'});
            document.getElementsByClassName('btn-liqair-modal-close')[0].click();
        }
    }

    render() {
        const {branding, illustrations, video_branding, motion_design, animation, broadcast_design} = this.props.companyServices;
        const {validationFeedback} = this.state;
        return (
            <div id="companyServicesModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="gridModalLabel" style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <form onSubmit={this.onSubmit} className="modal-content liqair-bg-off-color">
                        <div className="modal-header border-bottom-0">
                            <div className="col-12">
                                <button type="button" className="btn-liqair-modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 order-2 order-md-1 mt-md-4">
                                        <div className="col-md-12 mb-2">
                                            <input type="text" className={'form-control liqair-input'+validationFeedback.name} name="name" placeholder="Name" 
                                            value={this.state.name} onChange={this.onChange} required />
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <input type="email" className={'form-control liqair-input'+validationFeedback.email} name="email" placeholder="Email Address" 
                                            value={this.state.email} onChange={this.onChange} required />
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <input type="tel" className={'form-control liqair-input'+validationFeedback.phone} name="phone" placeholder="Phone (Optional)" 
                                            value={this.state.phone} onChange={this.onChange}/>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <input type="text" className={'form-control liqair-input'+validationFeedback.message} name="message" placeholder="Message..." 
                                            value={this.state.message} onChange={this.onChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-1 order-md-2">
                                        <div className="liqair">
                                            <h6 className="text-center mb-0">&nbsp; &nbsp; I Need...</h6>
                                            <div className="checkbox-container p-lg-2">
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="branding-checkbox" checked={branding} readOnly
                                                    onClick={()=>this.props.checkCompanyService('branding','/assets/img/services/branding.png','/assets/img/services/branding_checked.png')} />
                                                    <label htmlFor="branding-checkbox">Branding</label>
                                                </div>
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="illustrations-checkbox" checked={illustrations} readOnly
                                                    onClick={()=>this.props.checkCompanyService('illustrations','/assets/img/services/illustrations.png','/assets/img/services/illustrations_checked.png')} />
                                                    <label htmlFor="illustrations-checkbox">illustrations</label>
                                                </div>
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="video_branding-checkbox" checked={video_branding} readOnly
                                                    onClick={()=>this.props.checkCompanyService('video_branding','/assets/img/services/video_branding.png','/assets/img/services/video_branding_checked.png')} />
                                                    <label htmlFor="video_branding-checkbox">Video Branding</label>
                                                </div>
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="motion_design-checkbox" checked={motion_design} readOnly
                                                    onClick={()=>this.props.checkCompanyService('motion_design','/assets/img/services/motion_design.png','/assets/img/services/motion_design_checked.png')} />
                                                    <label htmlFor="motion_design-checkbox">Motion Design</label>
                                                </div>
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="animation-checkbox" checked={animation} readOnly
                                                    onClick={()=>this.props.checkCompanyService('animation','/assets/img/services/animation.png','/assets/img/services/animation_checked.png')} />
                                                    <label htmlFor="animation-checkbox">Animation</label>
                                                </div>
                                                <div className="text-center p-1">
                                                    <input type="checkbox" id="broadcast_design-checkbox" checked={broadcast_design} readOnly
                                                    onClick={()=>this.props.checkCompanyService('broadcast_design','/assets/img/services/broadcast_design.png','/assets/img/services/broadcast_design_checked.png')} />
                                                    <label htmlFor="broadcast_design-checkbox">Broadcast Design</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0">
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-liqair">Send Us A Message</button>
                            </div>
                            <div className="col-12 text-center">
                                <small className="col">We'll reply as soon as we can.</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null,{setAlertAction, setMultiAlertAction, messageContentStoreAction})(CompanyServicesModal);
