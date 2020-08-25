import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString, keyBy } from '../../helpers/helper';
import * as usersActions from '../../redux/actions/userActions';
import * as rolesActions from '../../redux/actions/roleActions';
import DashboardManageModal from '../modals/dashboardManageModal';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardUsers extends Component {

    constructor(props){
        super(props);
        this.state={
            usersList:[],
            rolesList:[],
            userManageModal:{},
            userDeleteModal:{}
        }
        this.deleteModalRef = React.createRef();
        this.manageModalRef = React.createRef();
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.manageModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.userIndexAction();
        this.props.roleIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.users.index !== prevProps.users.index) {
            this.setState({usersList:this.props.users.index.data})
        }

        if (this.props.roles.index !== prevProps.roles.index) {
            this.setState({rolesList:this.props.roles.index.data})
        }
    }

    refreshUserIndex = () => {
        this.props.userIndexAction();
    }

    openDeleteModal = () => {
        this.deleteModalRef.current.onOpen();
    }

    openManageModal = () => {
        this.manageModalRef.current.onOpen();
    }

    deleteUser = (data) => {
        this.props.userDeleteAction({user_id:data.id});
    }

    handleAdmin = (data,type) => {
        let rolesList = keyBy(this.state.rolesList,'name');
        type==='admin'?
        this.props.roleAssignAction({user_id:data.id,role_id:rolesList.owner.id},this.refreshUserIndex):
        this.props.roleRetractAction({user_id:data.id,role_id:rolesList.owner.id},this.refreshUserIndex);
        this.manageModalRef.current.onClose();
    }

    handleStatus = (data,type) => {
        type==='deactivate'?this.props.userBlockAction({user_id:data.id}):this.props.userUnblockAction({user_id:data.id});
        this.manageModalRef.current.onClose();
    }
 
    renderUsersItems = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <tr key={key}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{new Date(item.created_at).toLocaleString()}</td>
                        <td>
                            <button type="button" className="btn btn-warning mx-1" 
                            onClick={ ()=>this.setState({userManageModal:item},this.openManageModal()) }>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" 
                            onClick={ ()=>this.setState({userDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                        </td>
                    </tr>
                )
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* Users Settings */}
                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="userss">Users</h6>
                        <span className="text-dark">List of current users</span>
                    </div>
                </div>
                <div className="table-responsive rounded shadow-sm">
                    <table className="table table-striped table-hover table-light">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Manage</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsersItems(this.state.usersList)}
                        </tbody>
                    </table>
                </div>

                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.userDeleteModal} onSubmit={(data)=>{this.deleteUser(data)}} />
                <DashboardManageModal ref={this.manageModalRef} id={this.manageModalId} data={this.state.userManageModal} 
                handleAdmin={(data,type)=>{this.handleAdmin(data,type)}} handleStatus={(data,type)=>{this.handleStatus(data,type)}}/>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    users: state.user.user,
    roles: state.role.role,
});

const mapActionToProps = {
    setAlertAction, 
    ...usersActions,
    ...rolesActions
}

export default connect(mapStateToProps, mapActionToProps)(DashboardUsers);
