import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString } from '../../helpers/helper';
import * as videoActions from '../../redux/actions/contentVideoActions';
import DashboardAddModal from '../modals/dashboardModifiedAddModal';
import DashboardEditModal from '../modals/dashboardModifiedEditModal.js';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardVideo extends Component {

    constructor(props){
        super(props);
        this.state={
            videoItems:[],
            videoEditModal:{},
            videoDeleteModal:{}
        }
        this.addModalRef = React.createRef();
        this.editModalRef = React.createRef();
        this.deleteModalRef = React.createRef();
        this.addModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.editModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.videoContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.video.index !== prevProps.video.index) {
            this.setState({videoItems:this.props.video.index.data})
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

    storeVideoItem = (data) => {
        this.props.videoContentStoreAction(data);
    }

    updateVideoItem = (data) => {
        this.props.videoContentUpdateAction(data);
    }

    deleteVideoItem = (data) => {
        this.props.videoContentDeleteAction(data);
    }

    renderVideoItems = (data) => {
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
                            onClick={ ()=>this.setState({videoEditModal:item},this.openEditModal()) }>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" 
                            onClick={ ()=>this.setState({videoDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                        </td>
                    </tr>
                )
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* Video Settings */}
                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="videos">Video</h6>
                        <span className="text-dark">List of current video items</span>
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
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderVideoItems(this.state.videoItems)}
                        </tbody>
                    </table>
                </div>

                <DashboardAddModal ref={this.addModalRef} id={this.addModalId} onSubmit={(data)=>{this.storeVideoItem(data)}} />
                <DashboardEditModal ref={this.editModalRef} id={this.editModalId} data={this.state.videoEditModal} onSubmit={(data)=>{this.updateVideoItem(data)}} />
                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.videoDeleteModal} onSubmit={(data)=>{this.deleteVideoItem(data)}} />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    video: state.content.video
});

const mapActionToProps = {
    setAlertAction, 
    ...videoActions
}

export default connect(mapStateToProps, mapActionToProps)(DashboardVideo);
