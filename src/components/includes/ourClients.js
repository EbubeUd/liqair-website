import React, { Component } from 'react';
import {isEmpty} from '../../helpers/helper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { connect } from 'react-redux';
import * as clientActions from '../../redux/actions/contentClientActions';

export class OurClients extends Component {

    constructor(props){
        super(props)
        this.state={
            clientImages:[
                {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/clients/oma.png'},
                {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/clients/quiva_games.png'},
                {picture:process.env.REACT_APP_PUBLIC_URL+'/assets/img/clients/ugarsoft.png'},
            ]
        }
    }

    componentDidMount(){
        this.props.clientContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.client.index !== prevProps.client.index) {
            if (!isEmpty(this.props.client.index) && !isEmpty(this.props.client.index.data)) {
                let clientImages = this.props.client.index.data.map((item,key)=>{
                    return {...item, picture:process.env.REACT_APP_API_PUBLIC_URL+item.picture}
                })
                !isEmpty(clientImages) && this.setState({clientImages:clientImages});
            }
        }
    }

    renderSlides = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <SplideSlide key={key}>
                        <div className="card justify-content-center bg-transparent border-0 liqair-client-gray-out" style={{width: '9rem'}}>
                            <img className="card-img-top" src={item.picture} alt={'client '+key} />
                        </div>
                    </SplideSlide>
                )
            })
        )
    }

    render() {
        return (
           
            <div className="container" style={{paddingTop: "40px"}}>
                <div className=" text-center">
                    {/* <h2>OUR CLIENTS</h2> */}
                </div>
                <Splide 
                    options={{perPage:5, perMove:1, gap:'2rem', pauseOnHover:false, autoplay:true, autoWidth:true, type:'loop', arrows:false, focus:'center', trimSpace:false}}
                    onMoved={( splide, newIndex ) => {/*console.log('moved', newIndex, splide)*/}}>
                    {this.renderSlides(this.state.clientImages)}
                </Splide>
            </div>
         
        )
    }
}

const mapStateToProps = state => ({
    client: state.content.client
});

const mapActionToProps = {
    ...clientActions
}

export default connect(mapStateToProps, mapActionToProps)(OurClients);
