import React, { Component } from 'react';

export class DashboardDeleteModal extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    componentDidUpdate(prevProps){
        if (this.props.data !== prevProps.data) {
            this.setState(this.props.data)
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
                <button id={this.props.id+'ModalOpen'} type="button" className="d-none" data-toggle="modal" data-target={'#'+this.props.id+'DeleteModal'}>Open</button>

                <div id={this.props.id+'DeleteModal'} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md" role="document">
                        <form onSubmit={this.onSubmit} className="modal-content">
                            <div className="modal-body">
                                <h4>Delete Item</h4>
                                <div className="text-center my-2">
                                    Delete {this.state.name} ?
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id={this.props.id+'ModalClose'} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardDeleteModal;
