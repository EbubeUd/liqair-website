import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TopNavBar from './topNavBar';
import SideNavBar from './sideNavBar';

const RenderNavBar = withRouter((props) => { 
    return props.isAdminPath(props.location.pathname) && props.isAdmin()? <SideNavBar /> : <TopNavBar />
});

export class Navigation extends Component {

    isAdminPath = (path) => {
        return path.split('/')[1] === 'admin';
    }

    isAdmin = () => {
        // return this.props.auth.user.rank === 'Admin';
        return true;
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
