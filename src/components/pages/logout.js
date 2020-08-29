import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isEmptyObject } from '../../helpers/helper';
import {logoutUserAction} from '../../redux/actions/masterAuthActions';


export class Logout extends Component {

    state = {}

    static getDerivedStateFromProps(props){

        const {user} = props.auth;
        if (!isEmptyObject(user)) {
            props.logoutUserAction();
        }

        return null;
    }

    render() {
        return (
            <React.Fragment>
                <Redirect to='/admin/login'/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

const mapActionToProps = {
    logoutUserAction, 
}

export default connect(mapStateToProps, mapActionToProps)(Logout);