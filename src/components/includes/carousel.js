import React, { Component } from 'react';
import {isEmpty} from '../../helpers/helper';
import { connect } from 'react-redux';
import * as carouselActions from '../../redux/actions/contentCarouselActions';

export class Carousel extends Component {

    constructor(props){
        super(props)
        this.state={
            carouselImages:[
                {picture:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/youtube_banner.png'},
                {picture:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/car_ad.png'},
                {picture:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/oma_ad.png'},
            ]
        }
    }

    componentDidMount(){
        this.props.carouselContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.carousel.index !== prevProps.carousel.index) {
            if (!isEmpty(this.props.carousel.index.data)) {
                let carouselImages = this.props.carousel.index.data.map((item,key)=>{
                    return {...item, picture:process.env.REACT_APP_API_PUBLIC_URL+item.picture}
                })
                !isEmpty(carouselImages) && this.setState({carouselImages:carouselImages});
            }
        }
    }

    renderSlidesIndicator = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <li key={key} data-target="#carouselIndicators" data-slide-to={key} className={key===0?"active":""} />
                )
            })
        )
    }

    renderSlides = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <div key={key} className={key===0?"carousel-item  active":"carousel-item"}>
                        <img className="d-block w-100" src={item.picture} alt="slide images" />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div id="carouselIndicators" className="carousel slide pt-0 pt-md-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.renderSlidesIndicator(this.state.carouselImages)}
                </ol>
                <div className="carousel-inner">
                    {this.renderSlides(this.state.carouselImages)}
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carousel: state.content.carousel
});

const mapActionToProps = {
    ...carouselActions
}

export default connect(mapStateToProps, mapActionToProps)(Carousel);

