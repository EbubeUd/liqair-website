import React, { Component } from 'react';
import {isEmptyArray} from '../../helpers/helper';

export class Carousel extends Component {

    constructor(props){
        super(props)
        this.state={
            carouselImages:[
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/youtube_banner.png'},
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/car_ad.png'},
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/slides/oma_ad.png'},
            ]
        }
    }

    renderSlidesIndicator = (data) => {
        if (isEmptyArray(data)) {
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
        if (isEmptyArray(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <div key={key} className={key===0?"carousel-item  active":"carousel-item"}>
                        <img className="d-block w-100" src={item.image_url} alt="slide images" />
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

export default Carousel
