import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TopNavBar from './topNavBar';
import PeakNavBar from './peakNavBar';
import { isEmpty } from '../../helpers/helper';

const RenderNavBar = withRouter((props) => { 
    return props.isAdminPath(props.location.pathname) && props.isAdmin()? <PeakNavBar /> : <TopNavBar />
});

export class Navigation extends Component {

    isAdminPath = (path) => {
        return path.split('/')[1] === 'admin';
    }

    isAdmin = () => {
        if (!isEmpty(this.props.auth.user) && !isEmpty(this.props.auth.user.roles) && this.props.auth.user.roles.includes('owner')) {
            return true
        }
    
        return false;
    }

    render() {
        return (
            <RenderNavBar isAdmin={this.isAdmin} isAdminPath={this.isAdminPath} />
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

export default connect(mapStateToProps,null)(Navigation);
