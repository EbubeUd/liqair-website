import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmptyObject } from '../../helpers/helper';
import DashboardCarousel from '../includes/dashboardCarousel';
import DashboardVideo from '../includes/dashboardVideo';
import DashboardClient from '../includes/dashboardClient';
import DashboardMessage from '../includes/dashboardMessage';

export class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        const {user} = this.props.auth;

        return (
            <div className="container mt-5 pt-5" style={{minHeight:'100vh'}}>
                {isEmptyObject(user)?<Redirect to='/admin/login'/>:null}

                <DashboardCarousel />
                <DashboardVideo />
                <DashboardClient />
                <DashboardMessage />

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
