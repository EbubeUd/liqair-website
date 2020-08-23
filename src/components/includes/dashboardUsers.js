import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString } from '../../helpers/helper';
import * as usersActions from '../../redux/actions/contentUsersActions';
import DashboardAddModal from '../modals/dashboardAddModal';
import DashboardEditModal from '../modals/dashboardEditModal';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardUsers extends Component {

    constructor(props){
        super(props);
        this.state={
            usersList:[],
            usersEditModal:{},
            usersDeleteModal:{}
        }
        this.deleteModalRef = React.createRef();
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.usersContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.users.index !== prevProps.users.index) {
            this.setState({usersList:this.props.users.index.data})
        }
    }

    openDeleteModal = () => {
        this.deleteModalRef.current.onOpen();
    }

    deleteUsersItem = (data) => {
        this.props.usersContentDeleteAction(data);
    }

    renderUsersItems = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <tr key={key}>
                        <td>{item.order}</td>
                        <td>{item.name}</td>
                        <td>{new Date(item.created_at).toLocaleString()}</td>
                        <td>
                            <button type="button" className="btn btn-info mx-1" 
                            onClick={ ()=>this.setState({usersEditModal:item},this.openEditModal()) }>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" 
                            onClick={ ()=>this.setState({usersDeleteModal:item},this.openDeleteModal()) }>Delete</button>
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

                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.usersDeleteModal} onSubmit={(data)=>{this.deleteUsersItem(data)}} />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    users: state.content.users
});

const mapActionToProps = {
    setAlertAction, 
    ...usersActions
}

export default connect(mapStateToProps, mapActionToProps)(DashboardUsers);
