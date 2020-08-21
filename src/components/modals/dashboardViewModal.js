import React, { Component } from 'react';

export class DashboardViewModal extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            phone:'',
            subject:'',
            message:'',
            type:'',
            branding:'',
            illustrations:'',
            video_branding:'',
            motion_design:'',
            animation:'',
            broadcast_design:'',
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

    render() {
        return (
            <div className="text-dark">
                <button id={this.props.id+'ModalOpen'} type="button" className="d-none" data-toggle="modal" data-target={'#'+this.props.id+'ViewModal'}>Open</button>

                <div id={this.props.id+'ViewModal'} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4>View Item</h4>
                                <div className="row my-4">
                                    <div className="col-4 liqair-bg-off-color text-white">Name</div>
                                    <div className="col-8 liqair-bg-off-color text-white">{this.state.name}</div>

                                    <div className="col-4">Email</div>
                                    <div className="col-8">{this.state.email}</div>

                                    <div className="col-4 liqair-bg-off-color text-white">Phone</div>
                                    <div className="col-8 liqair-bg-off-color text-white">{this.state.phone}</div>

                                    <div className="col-4">Subject</div>
                                    <div className="col-8">{this.state.subject}</div>

                                    <div className="col-4 liqair-bg-off-color text-white">Message</div>
                                    <div className="col-8 liqair-bg-off-color text-white"><p>{this.state.message}</p></div>

                                    {this.state.type!=='services'?null:
                                        <React.Fragment>
                                            <div className="col-4">interest's</div>
                                            <div className="col-8">
                                                <div className="row">
                                                    <div className="col-8">branding</div>
                                                    <div className="col-4">{this.state.branding?'Yes':'Nope'}</div>
                                                
                                                    <div className="col-8">illustrations</div>
                                                    <div className="col-4">{this.state.illustrations?'Yes':'Nope'}</div>
                                                
                                                    <div className="col-8">video_branding</div>
                                                    <div className="col-4">{this.state.video_branding?'Yes':'Nope'}</div>
                                                
                                                    <div className="col-8">motion_design</div>
                                                    <div className="col-4">{this.state.motion_design?'Yes':'Nope'}</div>
                                                
                                                    <div className="col-8">animation</div>
                                                    <div className="col-4">{this.state.animation?'Yes':'Nope'}</div>
                                                
                                                    <div className="col-8">broadcast_design</div>
                                                    <div className="col-4">{this.state.broadcast_design?'Yes':'Nope'}</div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    }
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

export default DashboardViewModal;
