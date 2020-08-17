import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmptyArray } from '../../helpers/helper';

export class DashboardMessage extends Component {

    constructor(props){
        super(props);
        this.state={
            companyMessages:[
                {id:Math.random(5),order:1,name:'message good bot 1',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:2,name:'message good bot 2',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:3,name:'message good bot 3',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:4,name:'message good bot 4',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
            ],
            serviceMessages:[
                {id:Math.random(5),order:1,name:'message good bot 1',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:2,name:'message good bot 2',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:3,name:'message good bot 3',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
                {id:Math.random(5),order:4,name:'message good bot 4',createdAt:'2020-05-27 16:53:07',image:'https://api.unsplash.com/photos/random'},
            ],
            messageModal:{},
            messageDeleteModal:{}
        }
    }

    renderCompanyMessages = (data) => {
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
                            <button type="button" className="btn btn-info mx-1" onClick={()=>this.setState({messageModal:item})} 
                            data-toggle="modal" data-target="#messageModal">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" onClick={()=>this.setState({messageDeleteModal:item})} 
                            data-toggle="modal" data-target="#messageDeleteModal">Delete</button>
                        </td>
                    </tr>
                )
            })
        );
    }

    renderServiceMessages = (data) => {
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
                            <button type="button" className="btn btn-info mx-1" onClick={()=>this.setState({messageModal:item})} 
                            data-toggle="modal" data-target="#messageModal">View</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" onClick={()=>this.setState({messageDeleteModal:item})} 
                            data-toggle="modal" data-target="#messageDeleteModal">Delete</button>
                        </td>
                    </tr>
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
                        <h6 className="mb-0 text-dark lh-100" id="message">Message</h6>
                        <span className="text-dark">List of current messages</span>
                    </div>
                </div>
                <div className="text-center py-2">Company Messages</div>
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
                            {this.renderCompanyMessages(this.state.companyMessages)}
                        </tbody>
                    </table>
                </div>
                <div className="text-center py-2">Service Messages</div>
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
                            {this.renderServiceMessages(this.state.serviceMessages)}
                        </tbody>
                    </table>
                </div>

                <div className="text-dark">
                    {/* Large modal */}
                    <div id="messageModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-body">
                                    {this.state.messageModal.name}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Small modal */}
                    <div id="messageDeleteModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="messageDeleteModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-body">
                                    {this.state.messageDeleteModal.name}
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

export default connect(mapStateToProps, mapActionToProps)(DashboardMessage);
