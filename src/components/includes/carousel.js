import React, { Component } from 'react';
import {isEmpty} from '../../helpers/helper';
import { connect } from 'react-redux';
import * as carouselActions from '../../redux/actions/contentCarouselActions';
import MediaPlayer from '../includes/mediaPlayer';

export class Carousel extends Component {

    constructor(props){
        super(props)
        this.state={
            carouselImages
            
            :[
                {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/slides/youtube_banner.png'},
                // {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/slides/use_my_car.png'},
                {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/slides/oma_ad.png'},
                {picture: '/assets/img/slides/use_my_car.png'}
            ]
        }
    }

    componentDidMount(){
        this.props.carouselContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.carousel.index !== prevProps.carousel.index) {
            if (!isEmpty(this.props.carousel.index) && !isEmpty(this.props.carousel.index.data)) {
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
                    <div key={key} className={key===0?"carousel-item  active":"carousel-item" } style={{height: "90vh"}}>
                        <img className="d-block w-100" src={item.picture} alt="slide images" />
                    </div>
                )
            })
        )
    }

    SwitchCarousel = () => 
    {
        this.fadeOut();
        setTimeout(this.fadeIn, 500);
    }

    fadeOut = () => {
        var element = document.getElementById("vidPlayBtn");
        element.style.opacity = 1;

        (function fade() {
            if ((element.style.opacity -= .1) < 0) {
                element.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    // ** FADE IN FUNCTION **
    fadeIn = (el, display) => {
        var element = document.getElementById("vidPlayBtn");
        element.style.opacity = 0;
        element.style.display = display || "block";
        (function fade() {
            var val = parseFloat(element.style.opacity);
            if (!((val += .1) > 1)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };


    render() {
        let isClientPage = this.props.isClientPage;
        let style = isClientPage ? {height: "100vh"} : {};
        let playButtonVisibility = isClientPage ? "" : "hidden";
        let carouselImages = isClientPage ? this.props.carouselImages : this.state.carouselImages;
         let nav = carouselImages.length > 1 ? (<span><a className="carousel-control-prev" onClick={this.SwitchCarousel} href="#carouselIndicators" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="sr-only">Previous</span></a><a className="carousel-control-next" onClick={this.SwitchCarousel} href="#carouselIndicators" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true" /> <span className="sr-only">Next</span></a></span>) : false;
         let videoList = this.props.videos ? this.props.videos : [];
         
         let button = isClientPage ?  (<div style={{position: "absolute", left: "50%", top:"50%"}}><button id="vidPlayBtn" data-toggle="modal" data-target="#videoDescriptionModal" className={playButtonVisibility} style={{position: "relative", top: "-50%", left: "-50%", maxWidth: "12vh", background: "transparent", border: "transparent", zIndex: "100", outlineColor: "transparent", outline: "0px"}}><img alt="btn"  data-target="#videoDescriptionModal" data-toggle="modal"  className="hover-item" src="/assets/img/buttons/button.png" style={{maxWidth: "100%"}} alt="Video Description" /> </button></div>) : ("");
        return (
            <div id="carouselIndicators"  className="carousel slide pt-0 pt-md-5" data-ride="carousel" style={style}>
                <ol className="carousel-indicators"  style={style}>
                    {this.renderSlidesIndicator(carouselImages)}
                </ol>
                <div className="carousel-inner"  style={style}>
                    {this.renderSlides(carouselImages)}
                </div>
                {nav}
                {button}

                <div id="videoDescriptionModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="gridModalLabel" style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-lg" ></div>)

                <MediaPlayer urls={videoList} style={{top: "20%", width: "80vh", margin: "auto"}} />
            </div>
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

