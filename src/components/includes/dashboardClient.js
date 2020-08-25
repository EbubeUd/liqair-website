import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString } from '../../helpers/helper';
import * as clientActions from '../../redux/actions/contentClientActions';
import DashboardAddModal from '../modals/dashboardAddModal';
import DashboardEditModal from '../modals/dashboardEditModal';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardClient extends Component {

    constructor(props){
        super(props);
        this.state={
            clientItems:[],
            clientEditModal:{},
            clientDeleteModal:{}
        }
        this.addModalRef = React.createRef();
        this.editModalRef = React.createRef();
        this.deleteModalRef = React.createRef();
        this.addModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.editModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.clientContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.client.index !== prevProps.client.index) {
            this.setState({clientItems:this.props.client.index.data})
        }
    }

    openAddModal = () => {
        this.addModalRef.current.onOpen();
    }

    openEditModal = () => {
        this.editModalRef.current.onOpen();
    }

    openDeleteModal = () => {
        this.deleteModalRef.current.onOpen();
    }

    storeClientItem = (data) => {
        this.props.clientContentStoreAction(data);
    }

    updateClientItem = (data) => {
        this.props.clientContentUpdateAction(data);
    }

    deleteClientItem = (data) => {
        this.props.clientContentDeleteAction(data);
    }

    renderClientItems = (data) => {
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
                            onClick={ ()=>this.setState({clientEditModal:item},this.openEditModal()) }>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" 
                            onClick={ ()=>this.setState({clientDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                        </td>
                    </tr>
                )
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* Client Settings */}
                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="clients">Client</h6>
                        <span className="text-dark">List of current client items</span>
                    </div>
                    <div>
                        <button onClick={this.openAddModal} type="button" className="btn btn-success my-auto">Add</button>
                    </div>
                </div>
                <div className="table-responsive rounded shadow-sm">
                    <table className="table table-striped table-hover table-light">
                        <thead>
                            <tr>
                                <th scope="col">Order</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">&nbsp;&nbsp;Edit</th>
                                <th scope="col">&nbsp;&nbsp;Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderClientItems(this.state.clientItems)}
                        </tbody>
                    </table>
                </div>

                <DashboardAddModal ref={this.addModalRef} id={this.addModalId} onSubmit={(data)=>{this.storeClientItem(data)}} />
                <DashboardEditModal ref={this.editModalRef} id={this.editModalId} data={this.state.clientEditModal} onSubmit={(data)=>{this.updateClientItem(data)}} />
                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.clientDeleteModal} onSubmit={(data)=>{this.deleteClientItem(data)}} />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    client: state.content.client
});

const mapActionToProps = {
    setAlertAction, 
    ...clientActions
}

export default connect(mapStateToProps, mapActionToProps)(DashboardClient);
