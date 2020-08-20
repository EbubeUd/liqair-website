import React, { Component } from 'react';
import { inputFileToBase64, fileNameFromPath } from '../../helpers/helper';

export class DashboardModifiedAddModal extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            order:'',
            video:'',
            portraits:[],
            photoName:'Choose file'
        }
    }

    onChange = (e) => {
        if (e.target.name === 'portraits') {

            let photoName = fileNameFromPath(e.target.value);
            inputFileToBase64(e.target.files[0],(data)=>{
                let portraits = []; portraits.push(data);
                this.setState({...this.state, 'portraits':portraits,'photoName':photoName });
            });

        } else {
            this.setState({...this.state, [e.target.name]:e.target.value});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.onClose();
        this.props.onSubmit(this.state);
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
                <button id={this.props.id+'ModalOpen'} type="button" className="d-none" data-toggle="modal" data-target={'#'+this.props.id+'ModifiedAddModal'}>Open</button>

                <div id={this.props.id+'ModifiedAddModal'} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="modifiedAddModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md" role="document">
                        <form onSubmit={this.onSubmit} className="modal-content">
                            <div className="modal-body">
                                <h4>Add Item</h4>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.onChange} required/>
                                    </div>
                                    <div className="col">
                                        <input type="text" name="order" className="form-control" placeholder="Order" value={this.state.order} onChange={this.onChange} required/>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <div className="col">
                                        <input type="text" name="video" className="form-control" placeholder="Video Link" value={this.state.video} onChange={this.onChange} required/>
                                    </div>
                                </div>
                                <div className="input-group my-3">
                                    <div className="custom-file">
                                        <input type="file" name="portraits" className="custom-file-input" id={this.props.id+'UploadImage'} value="" onChange={this.onChange}/>
                                        <label className="custom-file-label" htmlFor={'#'+this.props.id+'UploadImage'}>{this.state.photoName}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id={this.props.id+'ModalClose'} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardModifiedAddModal;
