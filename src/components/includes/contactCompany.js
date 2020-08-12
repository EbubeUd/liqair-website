import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction, setMultiAlertAction } from '../../redux/actions/masterAlertActions';
import {contactCompanyAction} from '../../redux/actions/companyContactAction';

export class ContactCompany extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            phone:'',
            subject:'',
            message:'',
            validationFeedback:{
                username:'',
                email:'',
                phone:'',
                subject:'',
                message:'',
            }
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    validateForm = (inputs) => {
        const {username, email, subject, message} = inputs;
        let errors = [];
        let feedback = {username:'', email:'', phone:'', message:''};

        if (!username || username.length < 3) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A name is required'});
            feedback.username = 'is-invalid';
        } else {feedback.username = 'is-valid';}

        if (!email) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'An email address is required'});
            feedback.email = 'is-invalid';
        } else {feedback.email = 'is-valid';}

        if (!subject || subject.length < 4) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A subject is required'});
            feedback.subject = 'is-invalid';
        } else {feedback.subject = 'is-valid';}

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

            const data = this.state;
            delete data.validationFeedback;
            this.props.contactCompanyAction(data);
        }
    }


    render() {
        const {validationFeedback} = this.state;
        return (
            <div className="container my-5">

                <div className="mb-5 text-center">
                    <h2>CONTACT US</h2>
                </div>

                <form onSubmit={this.onSubmit} className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 mb-2">
                                <input type="text" className={'form-control liqair-input'+validationFeedback.username} name="username" placeholder="Name" 
                                value={this.state.username} onChange={this.onChange} required />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="email" className={'form-control liqair-input'+validationFeedback.email} name="email" placeholder="Email Address" 
                                value={this.state.email} onChange={this.onChange} required />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="phone" className={'form-control liqair-input'+validationFeedback.phone} name="phone" placeholder="Phone (Optional)" 
                                value={this.state.phone} onChange={this.onChange}/>
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" className={'form-control liqair-input'+validationFeedback.subject} name="subject" placeholder="Subject" 
                                value={this.state.subject} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12 mb-2 mt-3">
                                <textarea type="text" className={'form-control liqair-textarea'+validationFeedback.message} name="message" placeholder="Message" 
                                value={this.state.message} onChange={this.onChange} rows="7" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-top-0 mt-5">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-liqair">Send Us A Message</button>
                        </div>
                        <div className="col-12 text-center">
                            <small className="col">We'll reply as soon as we can.</small>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{setAlertAction, setMultiAlertAction, contactCompanyAction})(ContactCompany);
