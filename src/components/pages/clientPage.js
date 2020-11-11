import React, { Component } from 'react';
import Carousel from '../includes/carousel';
import Caption from '../includes/caption';
import MidBorderTop from '../includes/midBorderTop';
import MidBorderBottom from '../includes/midBorderBottom';
import MediaPlayer from '../includes/mediaPlayer';
import CompanyServices from '../includes/companyServices';
import OurClients from '../includes/ourClients';
import ContactCompany from '../includes/contactCompany';
import BorderBottom from '../includes/borderBottom';
import Social from '../includes/social';
import Divider from '../includes/divider';
import PrePageLoader from '../loaders/prePageLoader';
import WorksGrid from '../includes/worksGrid';


export class ClientPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clients: 
            {
                "oma": 
                    {
                        "Name" : "Oma",
                        "Description": "A ride hailing app",
                        "VideoUrls": ["https://player.vimeo.com/video/477097063"],
                        "ClientImageUrls": ["/oma/proof 1.png", "/oma/proof 2.png", "/oma/proof 3.png", "/oma/proof 4.png"],
                        "CarouselImage": [{picture:"/assets/img/clients/oma/oma.jpg"}]
                    },
                "demo_reel":
                    {
                        "Name" : "Personal",
                        "Description": "Demo Reel",
                        "VideoUrls": ["https://player.vimeo.com/video/392476737"],
                        "ClientImageUrls": [],
                        "CarouselImage": [{picture:"/assets/img/clients/Demo reel/demo reel.jpg"}]
                    },
                    "umc":
                    {
                        "Name" : "UMC",
                        "Description": "UMC 1",
                        "VideoUrls": ["https://player.vimeo.com/video/392975454", "https://player.vimeo.com/video/392482733"],
                        "ClientImageUrls": ["/use my car/proof-1.png", "/use my car/proof-2.png"],
                        "CarouselImage": [{picture:"/assets/img/clients/use my car/use my car1.png"}]
                    },
                "bad_hair":
                    {
                        "Name" : "Personal",
                        "Description": "Bad Hair Day",
                        "VideoUrls": ["https://player.vimeo.com/video/392480730"],
                        "ClientImageUrls": ["/bad hair day/proof_1.jpg", "/bad hair day/proof_2.jpg", "/bad hair day/proof_3.jpg", "/bad hair day/proof_4.jpg"],
                        "CarouselImage": [{picture:"/assets/img/clients/bad hair day/bad hair day.jpg"}]
                    },
                "life":
                    {
                        "Name" : "Personal",
                        "Description": "Life Happens Every Day",
                        "VideoUrls": ["https://player.vimeo.com/video/392476737"],
                        "ClientImageUrls": [],
                        "CarouselImage": [{picture:"/assets/img/clients/life/life.jpg"}]
                    },
                }
            }
    }

    componentDidMount(){
        let client_key = this.props.match.params.id;
        if(!this.state.clients.hasOwnProperty(client_key))
        {
            window.open("/");
        }
    }

    getVideoUrls()
    {
        let client_key = this.props.match.params.id;

        if(!this.state.clients.hasOwnProperty(client_key))
        {
            console.log("open this shit")
            window.open("/");
            return [];
        }else{
            return this.state.clients[client_key].VideoUrls;
        }
        
    }

    getDescription(){
        let client_key = this.props.match.params.id;

        if(!this.state.clients.hasOwnProperty(client_key))
        {
            console.log("open this shit")
            window.open("/");
            return "";
        }else{
            return this.state.clients[client_key].Description;
        }
    }
    getName()
    {
        let client_key = this.props.match.params.id;

        if(!this.state.clients.hasOwnProperty(client_key))
        {
            console.log("open this shit")
            window.open("/");
            return "";
        }else{
            return this.state.clients[client_key].Name;
        }
    }

    getImageUrls =() =>
    {
        let client_key = this.props.match.params.id;
        if(!this.state.clients.hasOwnProperty(client_key))
        {
            console.log("open this shit")
            window.open("/");
            return "";
        }else{
            return this.state.clients[client_key].ClientImageUrls;
        }
    }

    getCarouselImageUrls = () =>
    {
        let client_key = this.props.match.params.id;
        if(!this.state.clients.hasOwnProperty(client_key))
        {
            console.log("open this shit")
            window.open("/");
            return "";
        }else{
            return this.state.clients[client_key].CarouselImage;
        }
    }


    render() {
      
        return (
            <React.Fragment>
            <PrePageLoader />
            <div>
                
            <div className="video-banner">
                <Carousel isClientPage={true} carouselImages={this.getCarouselImageUrls()} videos={this.getVideoUrls()}/>
            </div>
        

            <span id="home"></span>
            <div style={{backgroundColor: "#2d2d2d"}}>
                <div className="text-content " style={{top: "14px"}}>
                    <div className="container text-center caption-text align-middle">
                        <h6 className="caption-header">{this.getName()}</h6>
                        <h6 className="caption-body">{this.getDescription()}</h6>
                    </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>
           
                <span id="works"></span>
                
                <div style={{backgroundColor: "#2d2d2d", background: "transparent"}}>
                 <WorksGrid gridStyle={{"spacing": false, "displayOverlay": false}} imageUrls={this.getImageUrls()}  /> 
                 
                {/* <MediaPlayer /> */}
                {/* <MidBorderTop /> */}

                </div>
                <span id="services"></span>
                <span id="clients"></span>

                <div style={{}}>
                <BorderBottom />
                </div>
             
                <div style={{backgroundColor: "black"}}>
                <Social />
                </div>
            </div>
        
            </React.Fragment>
        )
    }
}

export default ClientPage;
