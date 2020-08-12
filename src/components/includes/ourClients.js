import React, { Component } from 'react';
import {isEmptyArray} from '../../helpers/helper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export class OurClients extends Component {

    constructor(props){
        super(props)
        this.state={
            carouselImages:[
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/clients/oma.png'},
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/clients/quiva_games.png'},
                {image_url:process.env.REACT_APP_PUBLIC_URL+'assets/img/clients/ugarsoft.png'},
            ]
        }
    }

    renderSlides = (data) => {
        if (isEmptyArray(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <SplideSlide key={key}>
                        <div className="card justify-content-center bg-transparent border-0" style={{width: '9rem'}}>
                            <img className="card-img-top" src={item.image_url} alt={'client '+key} />
                        </div>
                    </SplideSlide>
                )
            })
        )
    }

    render() {
        return (
            <div className="container my-5 bg-dark">
                <div className="mb-5 text-center">
                    <h2>OUR CLIENTS</h2>
                </div>
                <Splide 
                    options={{perPage:5, perMove:1, gap:'2rem', pauseOnHover:false, autoplay:true, autoWidth:true, type:'loop', arrows:false, focus:'center', trimSpace:false}}
                    onMoved={( splide, newIndex ) => {/*console.log('moved', newIndex, splide)*/}}>
                    {this.renderSlides(this.state.carouselImages)}
                </Splide>
            </div>
        )
    }
}

export default OurClients;
