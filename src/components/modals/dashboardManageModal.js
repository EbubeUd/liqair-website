import React, { Component } from 'react';
import { keyBy } from '../../helpers/helper';

export class DashboardManageModal extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            email:'',
            roles:'',
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.data !== prevProps.data) {
            this.setState(this.props.data);
        }
    }

    onOpen = (e) => {
        document.getElementById(this.props.id+'ModalOpen').click();
    }

    onClose = (e) => {
        document.getElementById(this.props.id+"ModalClose").click();
    }

    handleAdmin = (type) => {
        this.props.handleAdmin(this.state,type);
    }

    handleStatus = (type) => {
        this.props.handleStatus(this.state,type);
    }

    render() {
        let roles = keyBy(this.state.roles,'name');
        return (
            <div className="text-dark">
                <button id={this.props.id+'ModalOpen'} type="button" className="d-none" data-toggle="modal" data-target={'#'+this.props.id+'ManageModal'}>Open</button>

                <div id={this.props.id+'ManageModal'} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="manageModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4>Manage User</h4>
                                <div className="text-center p-4">
                                    <p>{this.state.name}</p>
                                    <p>{this.state.email}</p>
                                    <p>Status: <span className="text-info">{this.state.blocked?'Inactive':'Active'}</span></p>
                                    <p>Rank: <span className="text-info">{roles.owner?'Admin':'User'}</span></p>
                                </div>
                                <div className="row px-auto">
                                    <div className="col-6 text-center">
                                        {this.state.blocked?
                                            <button onClick={()=>this.handleStatus('activate')} className="btn btn-outline-dark">Activate User Account</button>
                                        :
                                            <button onClick={()=>this.handleStatus('deactivate')} className="btn btn-outline-dark">Deactivate User Account</button>
                                        }
                                    </div>
                                    <div className="col-6 text-center">
                                        {roles.owner?
                                            <button onClick={()=>this.handleAdmin('user')} className="btn btn-outline-danger">Make Admin A User</button>
                                        :
                                            <button onClick={()=>this.handleAdmin('admin')} className="btn btn-outline-danger">Make User An Admin</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id={this.props.id+'ModalClose'} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardManageModal;
