import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString } from '../../helpers/helper';
import * as messageActions from '../../redux/actions/contentMessageActions';
import DashboardViewModal from '../modals/dashboardViewModal';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardMessage extends Component {

    constructor(props){
        super(props);
        this.state={
            messageItems:[],
            messageViewModal:{},
            messageDeleteModal:{}
        }
        this.viewModalRef = React.createRef();
        this.deleteModalRef = React.createRef();
        this.viewModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.messageContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.message.index !== prevProps.message.index) {
            this.setState({messageItems:this.props.message.index.data})
        }
    }

    openViewModal = (data) => {
        this.viewModalRef.current.onOpen();
        this.markAsReadMessageItem(data);
    }

    openDeleteModal = () => {
        this.deleteModalRef.current.onOpen();
    }

    markAsReadMessageItem = (data) => {
        if (!data.read) {
            if (!data.phone) {delete data.phone}
            if (!data.subject) {delete data.subject}
            this.props.messageContentUpdateAction({...data,read:true});
        }
    }

    deleteMessageItem = (data) => {
        this.props.messageContentDeleteAction(data);
    }

    renderCompanyMessages = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    item.type === 'contact'?
                        <tr key={key}>
                            <td>{item.mail}</td>
                            <td>{item.name}</td>
                            <td>
                                &nbsp;&nbsp; <span className={item.read?'dot bg-success':'dot'}></span>
                            </td>
                            <td>{new Date(item.created_at).toLocaleString()}</td>
                            <td>
                                <button type="button" className="btn btn-info mx-1" 
                                onClick={ ()=>this.setState({messageViewModal:item},this.openViewModal(item)) }>View</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger mx-1" 
                                onClick={ ()=>this.setState({messageDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                            </td>
                        </tr>
                    :null
                )
            })
        );
    }

    renderServiceMessages = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    item.type === 'services'?
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                &nbsp;&nbsp; <span className={item.read?'dot bg-success':'dot'}></span>
                            </td>
                            <td>{new Date(item.created_at).toLocaleString()}</td>
                            <td>
                                <button type="button" className="btn btn-info mx-1" 
                                onClick={ ()=>this.setState({messageViewModal:item},this.openViewModal(item)) }>View</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger mx-1" 
                                onClick={ ()=>this.setState({messageDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                            </td>
                        </tr>
                    :null
                )
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* Message Settings */}
                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="messages">Message</h6>
                        <span className="text-dark">List of current messages (Company Messages)</span>
                    </div>
                </div>
                <div className="table-responsive rounded shadow-sm">
                    <table className="table table-striped table-hover table-light">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">status</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCompanyMessages(this.state.messageItems)}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="messages">Message</h6>
                        <span className="text-dark">List of current messages (Service Messages)</span>
                    </div>
                </div>
                <div className="table-responsive rounded shadow-sm">
                    <table className="table table-striped table-hover table-light">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">status</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderServiceMessages(this.state.messageItems)}
                        </tbody>
                    </table>
                </div>

                <DashboardViewModal ref={this.viewModalRef} id={this.viewModalId} data={this.state.messageViewModal} />
                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.videoDeleteModal} onSubmit={(data)=>{this.deleteVideoItem(data)}} />
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    message: state.content.message
});

const mapActionToProps = {
    setAlertAction,
    ...messageActions,
}

export default connect(mapStateToProps, mapActionToProps)(DashboardMessage);
