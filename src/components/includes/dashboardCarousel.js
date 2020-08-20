import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlertAction } from '../../redux/actions/masterAlertActions';
import { isEmpty, randomString } from '../../helpers/helper';
import * as carouselActions from '../../redux/actions/contentCarouselActions';
import DashboardAddModal from '../modals/dashboardAddModal';
import DashboardEditModal from '../modals/dashboardEditModal';
import DashboardDeleteModal from '../modals/dashboardDeleteModal';

export class DashboardCarousel extends Component {

    constructor(props){
        super(props);
        this.state={
            carouselItems:[],
            carouselEditModal:{},
            carouselDeleteModal:{}
        }
        this.addModalRef = React.createRef();
        this.editModalRef = React.createRef();
        this.deleteModalRef = React.createRef();
        this.addModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.editModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        this.deleteModalId = randomString(8,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    }

    componentDidMount(){
        this.props.carouselContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.carousel.index !== prevProps.carousel.index) {
            this.setState({carouselItems:this.props.carousel.index.data})
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

    storeCarouselItem = (data) => {
        this.props.carouselContentStoreAction(data);
    }

    updateCarouselItem = (data) => {
        this.props.carouselContentUpdateAction(data);
    }

    deleteCarouselItem = (data) => {
        this.props.carouselContentDeleteAction(data);
    }

    renderCarouselItems = (data) => {
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
                            onClick={ ()=>this.setState({carouselEditModal:item},this.openEditModal()) }>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mx-1" 
                            onClick={ ()=>this.setState({carouselDeleteModal:item},this.openDeleteModal()) }>Delete</button>
                        </td>
                    </tr>
                )
            })
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* Carousel Settings */}
                <div className="d-flex align-items-center justify-content-between p-3 my-3 bg-light rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-dark lh-100" id="carousel">Carousel</h6>
                        <span className="text-dark">List of current carousel items</span>
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
                            {this.renderCarouselItems(this.state.carouselItems)}
                        </tbody>
                    </table>
                </div>

                <DashboardAddModal ref={this.addModalRef} id={this.addModalId} onSubmit={(data)=>{this.storeCarouselItem(data)}} />
                <DashboardEditModal ref={this.editModalRef} id={this.editModalId} data={this.state.carouselEditModal} onSubmit={(data)=>{this.updateCarouselItem(data)}} />
                <DashboardDeleteModal ref={this.deleteModalRef} id={this.deleteModalId} data={this.state.carouselDeleteModal} onSubmit={(data)=>{this.deleteCarouselItem(data)}} />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.master.auth,
    carousel: state.content.carousel
});

const mapActionToProps = {
    setAlertAction, 
    ...carouselActions
}

export default connect(mapStateToProps, mapActionToProps)(DashboardCarousel);
