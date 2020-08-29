import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmptyObject, isEmpty } from '../../helpers/helper';
import DashboardCarousel from '../includes/dashboardCarousel';
import DashboardVideo from '../includes/dashboardVideo';
import DashboardClient from '../includes/dashboardClient';
import DashboardMessage from '../includes/dashboardMessage';
import DashboardUsers from '../includes/dashboardUsers';

export class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    isAdmin = () => {
        if (!isEmpty(this.props.auth.user) && !isEmpty(this.props.auth.user.roles) && this.props.auth.user.roles.includes('owner')) {
            return true
        }
        return false;
    }

    render() {
        const {user} = this.props.auth;

        return (
            <div className="container mt-5 pt-5" style={{minHeight:'100vh'}}>
                {isEmptyObject(user)?<Redirect to='/admin/login'/>:null}
                {this.isAdmin()?
                    <React.Fragment>
                        <DashboardCarousel />
                        <DashboardVideo />
                        <DashboardClient />
                        <DashboardMessage />
                        <DashboardUsers />
                    </React.Fragment>
                :
                    <Redirect to='/admin/logout'/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

const mapActionToProps = {
    setAlertAction, 
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);
