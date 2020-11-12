import React, { Component } from 'react';
import {isEmpty} from '../../helpers/helper';
import { SplideSlide } from '@splidejs/react-splide';
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

    // componentDidUpdate(prevProps){
    //     if (this.props.client.index !== prevProps.client.index) {
    //         if (!isEmpty(this.props.client.index) && !isEmpty(this.props.client.index.data)) {
    //             let clientImages = this.props.client.index.data.map((item,key)=>{
    //                 return {...item, picture:process.env.REACT_APP_API_PUBLIC_URL+item.picture}
    //             })
    //             !isEmpty(clientImages) && this.setState({clientImages:clientImages});
    //         }
    //     }
    // }

    renderSlides = (data) => {
        if (isEmpty(data)) {
            return false;
        }

        return (
            data.map((item,key)=>{
                return (
                    <SplideSlide key={key}>
                        <div className="card justify-content-center bg-transparent border-0 liqair-client-gray-out" style={{width: '10rem'}}>
                            <img alt="card image" className="card-img-top" src={item.picture} alt={'client '+key} />
                        </div>
                    </SplideSlide>
                )
            })
        )
    }

    render() {
        return (
           
        <div className="container" style={{padding: "50px 0px"}}>
            <div className="row">
           <div className="col-4 col-md-4 text-center">
          <img alt="oma" src="/assets/img/clients/oma.png" style={{maxWidth: "50%"}} style={{maxWidth: "50%", filter: "grayscale(100%) brightness(293%)"}}/>
           </div>
           <div className="col-4 col-md-4 text-center">
          <img alt="Quiva Games" src="/assets/img/clients/quiva_games.png" style={{maxWidth: "50%"}} />
           </div>
           <div className="col-4 col-md-4 text-center">
          <img alt="Ugarsoft" src="/assets/img/clients/ugarsoft.png" style={{maxWidth: "50%", filter: "grayscale(100%) brightness(293%)"}} />
           </div>
           </div>
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
