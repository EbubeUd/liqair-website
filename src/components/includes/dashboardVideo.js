import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmptyArray } from '../../helpers/helper';

export class DashboardVideo extends Component {

    constructor(props){
        super(props);
        this.state={
            videoItems:[
                {id:Math.random(5),order:1,name:'video good bot 1',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:2,name:'video good bot 2',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:3,name:'video good bot 3',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:4,name:'video good bot 4',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
            ],
            videoEditModal:{},
            videoDeleteModal:{}
        }
    }

    renderVideoItems = (data) => {
        if (isEmptyArray(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <tr key={key}>
                        <td>{item.order}</td>
                        <td>{item.name}</td>
                        <td>{item.createdAt}</td>
                        <td>
                            <button type="button" className="btn btn-info mx-1" onClick={()=>this.setState({videoEditModal:item})} 
                            data-toggle="modal" data-target="#videoEditModal">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" onClick={()=>this.setState({videoDeleteModal:item})} 
                            data-toggle="modal" data-target="#videoDeleteModal">Delete</button>
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
                        <h6 className="mb-0 text-dark lh-100" id="video">Video</h6>
                        <span className="text-dark">List of current video items</span>
                    </div>
                    <div>
                        <button data-toggle="modal" data-target="#videoAddModal" type="button" className="btn btn-success my-auto">Add</button>
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

                <div className="text-dark">
                    {/* Large modal */}
                    <div id="videoAddModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="videoAddModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h4>Add</h4>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Large modal */}
                    <div id="videoEditModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="videoEditModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-body">
                                    {this.state.videoEditModal.name}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Small modal */}
                    <div id="videoDeleteModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="videoDeleteModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-body">
                                    {this.state.videoDeleteModal.name}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
});

const mapActionToProps = {
    setAlertAction, 
}

export default connect(mapStateToProps, mapActionToProps)(DashboardVideo);
