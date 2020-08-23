import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loginUserAction } from '../../redux/actions/masterAuthActions';
import { setAlertAction,setMultiAlertAction } from '../../redux/actions/masterAlertActions';
import { Redirect } from 'react-router-dom';
import {isEmptyObject} from '../../helpers/helper';


export class Login extends Component {

    state = {
        email:'',
        password:'',
        remember:true,
    }

    componentDidMount(){
        if (this.props.auth && !isEmptyObject(this.props.auth.user) ) {
            this.props.setAlertAction({
                id:Math.random(),
                alertType:'warning',
                alertMessage:'You are currently logged in, Please Logout'
            });
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onChangeRemember = () => {
        this.setState({remember:!this.state.remember});
    }

    validateForm = (inputs) => {
        const {email, password} = inputs;
        let errors = [];

        if (!email) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'An email address is required'});
        }

        if (!password) {
            errors.push({id:Math.random(), alertType:'warning', alertMessage:'A password is required'});
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
            this.props.loginUserAction(this.state);
        }
    }

    render() {
        const {user} = this.props.auth

        return (
            <div className="container mt-5 pt-5" style={{minHeight:'100vh'}}>
                {isEmptyObject(user)? null: <Redirect to='/admin/dashboard' />}
                <form onSubmit={this.onSubmit} className="mt-5 col-lg-6 col-md-8 mx-auto">
                    <div className="text-center mb-4">
                        <img className=" img-fluid mb-4" src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/liquid.png'} alt="logo" width={72} height={72} />
                        <h1 className="h3 mb-3 font-weight-normal">Liqair Studio</h1>
                        <p>Build the landing page displays via the <code>Admin Panel.</code> What !!!?
                        <a href="/" className="liqair-hover"> Take me back, right now!!</a></p>
                    </div>
                    <div className="form-label-group my-3">
                        <input type="email" className="form-control liqair-input" placeholder="Email address" name="email" value={this.state.email} onChange={this.onChange} required autoFocus />
                    </div>
                    <div className="form-label-group my-3">
                        <input type="password" className="form-control liqair-input" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required />
                    </div>
                    <div className="checkbox my-3">
                        <label>
                            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.onChangeRemember} /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-liqair btn-block" type="submit">Sign In</button>
                </form>
                <div className="row mt-3 col-lg-6 col-md-8 mx-auto">
                    <div className="col-6">
                        <a href="/admin/forgot" className="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div className="col-6 text-right">
                        <a href="/admin/register" className="text-light"><small>Create new account</small></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

export default connect(mapStateToProps, {loginUserAction, setAlertAction, setMultiAlertAction})(Login);
