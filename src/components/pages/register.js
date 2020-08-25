import React, { Component } from 'react';
import {connect} from 'react-redux';
import { registerUserAction } from '../../redux/actions/masterAuthActions';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { passwordStrengthMeter, isEmptyObject } from '../../helpers/helper';
import { Redirect } from 'react-router-dom';

export class Register extends Component {

    state = {
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        redirect:false,
    }

    componentDidMount(){
        if (this.props.auth && !isEmptyObject(this.props.auth.user) ) {
            this.props.setAlertAction({
                id:Math.random(),
                alertType:'warning',
                alertMessage:'You are currently logged in, Please Logout'
            })
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    validateForm = (inputs) => {
        const {name, email, password, password_confirmation} = inputs;
        let errors = [];

        if (!name) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A name is required'});
        }

        if (!email) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'An email address is required'});
        }

        if (!password || passwordStrengthMeter(password)<20) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A password with a higher difficulty is required'});
        }

        if (password !== password_confirmation ) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'Password confirmation is incorrect'});
        }

        if (errors.length === 0) {
            return true;
        }

        this.props.setMultiAlertAction(...errors);
        return false;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state)) {
            this.props.registerUserAction(this.state,this.redirectToLogin);
        }
    }

    passwordStrength = (string) => {
        let score = passwordStrengthMeter(string);

        if (score>60){
            return <span className="font-weight-700" style={{color:'purple'}}>super strong</span>;
        } else if (score>50){
            return <span className="text-light font-weight-700">very strong</span>;
        } else if(score>40) {
            return <span className="text-success font-weight-700">strong</span>;
        } else if(score>30) {
            return <span className="text-info font-weight-700">above average</span>;
        } else if(score>20) {
            return <span className="text-primary font-weight-700">average</span>;
        } else if(score>10){
            return <span className="text-warning font-weight-700">weak</span>;      
        } else {
            return <span className="text-danger font-weight-700">very weak</span>;
        }
    }

    renderRedirectToLogin = () =>{
        if (this.state.redirect) {
            return (<Redirect to='/admin/login' />);
        }
    }

    redirectToLogin = () => {
        this.setState({redirect:true});
    }

    render() {
        const {user} = this.props.auth

        return (
            <div className="container mt-5 pt-5" style={{minHeight:'100vh'}}>
                {this.renderRedirectToLogin()}
                {isEmptyObject(user)? null: <Redirect to='/admin/dashboard' />}
                <form onSubmit={this.onSubmit} className="mt-5 col-lg-6 col-md-8 mx-auto">
                    <div className="text-center mb-4">
                        <img className=" img-fluid mb-4" src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liquid.png'} alt="logo" width={72} height={72} />
                        <h1 className="h3 mb-3 font-weight-normal">Liqair Studio</h1>
                        <p>Create an account to access the <code>Admin Panel.</code> What !!!?
                        <a href="/" className="liqair-hover"> Take me back, right now!!</a></p>
                    </div>
                    <div className="form-label-group my-3">
                        <input type="text" className="form-control liqair-input" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required autoFocus />
                    </div>
                    <div className="form-label-group my-3">
                        <input type="email" className="form-control liqair-input" placeholder="Email address" name="email" value={this.state.email} onChange={this.onChange} required />
                    </div>
                    <div className="form-label-group my-3">
                        <input type="password" className="form-control liqair-input" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required />
                    </div>
                    <div className="form-label-group my-3">
                        <input type="password" className="form-control liqair-input" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onChange} required />
                    </div>
                    <div className="text-muted font-italic"><small>password strength: {this.passwordStrength(this.state.password)} </small></div>
                    <button className="btn btn-lg btn-liqair btn-block my-4" type="submit">Create Account</button>
                </form>
                <div className="row mt-3 col-lg-6 col-md-8 mx-auto">
                    <div className="col-6">
                        <a href="/admin/forgot" className="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div className="col-6 text-right">
                        <a href="/admin/login" className="text-light"><small>Login</small></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

export default connect(mapStateToProps, {registerUserAction,setAlertAction})(Register); 
