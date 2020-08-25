import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import {retrievePersistedLastLogin} from '../../support/sessionSupport';
import {storeInstance} from '../../support/reducerSupport';
import { MASTER_LOGIN_USER } from '../../redux/actions/types';
import Alerts from '../includes/alerts';
import Landing from '../pages/landing';
import Missing from '../pages/missing';
import Footer from '../includes/footer';
import Navigation from '../navigation/navigation';
import AppStatusModal from '../includes/appStatusModal';
import ScrollToTop from '../buttons/scrollToTop';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Register from '../pages/register';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';
import VerifyEmail from '../pages/verifyEmail';


export class App extends Component {

  constructor(){
    super();

    // Get last login details, if any re-login user
    let user = retrievePersistedLastLogin('master_session');
    if (user) {
      storeInstance().dispatch((dispatch)=>{
          dispatch({type: MASTER_LOGIN_USER, payLoad: user.loginDetails});
      });
    }
  }

  render() {
    return (
      <Provider store={storeInstance()}>
        <Router>
          <Alerts />
          <Navigation />
          <AppStatusModal />
          <Switch>
            {/* Landing page*/}
            <Route exact path="/" component={Landing} />

            {/* Login page*/}
            <Route exact path="/admin/login" component={Login} />

            {/* Register page*/}
            <Route exact path="/admin/register" component={Register} />

            {/* Forgot password page*/}
            <Route exact path="/admin/forgot" component={ForgotPassword} />

            {/* Reset password page*/}
            <Route exact path="/admin/reset" component={ResetPassword} />

            {/* Verify email page*/}
            <Route exact path="/admin/verify" component={VerifyEmail} />

            {/* Dashboard page*/}
            <Route exact path="/admin/dashboard" component={Dashboard} />

            {/* Admin page*/}
            <Route exact path="/admin" component={Login} />

            {/* Not found page */}
            <Route path="*" component={Missing} />
          </Switch>
          <ScrollToTop />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
