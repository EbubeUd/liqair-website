import React, { Component } from 'react';
import CareerDescriptionModal from '../modals/careerDescriptionModal';

export class Career extends Component {

    constructor(props){
        super(props);
        this.state={
            companyServices:{
                branding:false,
                illustrations:false,
                video_branding:false,
                motion_design:false,
                animation:false,
                broadcast_design:false,
            },
            activeModal : '',
            description: '',
            requirements: '',
            form_url: ''
        }
    }

  openModal = (modal) => {

    switch(modal)
    {
        case '2d':
            this.setState({description : (<p>Learn to bring your imaginations to life using 2D media.<br/>2D Art/Animation covers:<br/>Concept Drawing,<br/>Storyboarding,<br/>2D Animation, etc.</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/> If you're currently in school, you have to be in final year.<br/> Capability to work independently with minimum supervision.</p>)});
            this.setState({form_url: "https://forms.gle/sXVg9Wbu66hsLMvx6"});
            break;

        case '3d':
            this.setState({description : (<p>Learn to bring your imaginations to life using 3D media. <br/> 3D Art/Animation covers:<br/>3D Modeling<br/>Rigging<br/>Texturing<br/>3D Animation, etc</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/>If you're currently in school, you have to be in final year. <br/>Capability to work independently with minimum supervision.</p>)});
            this.setState({form_url: "https://forms.gle/T66HCMFa87As5aq9A"});
            break;

        case 'graphics':
            this.setState({description : (<p>Learn the process to make creative designs with professional design tools.</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/>If you're currently in school, you have to be in final year. <br/>Capability to work independently with minimum supervision.<br/>Must have some prior knowledge of Graphic Design.</p>)});
            this.setState({form_url: "https://forms.gle/2EoyeYWqT3AMBRe98"});
            break;

        case 'sound':
            this.setState({description : (<p>Learn to create beats, work with voice overs and add sound to projects.</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/>If you're currently in school, you have to be in final year. <br/>Capability to work independently with minimum supervision.<br/>Must have some prior knowledge of Sound Production.</p>)});
            this.setState({form_url: "https://forms.gle/fzPtVDxcARWKhQsD9"});
            break;
        case 'ui':
            this.setState({description : (<p>Learn to make great UI/UX design for games.</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/> If you're currently in school, you have to be in final year.<br/> Capability to work independently with minimum supervision.<br/>Must have some prior knowledge of a design software.</p>)});
            this.setState({form_url: "https://forms.gle/S11eJNc7sZ8TsixC7"});
            break;

         default:
            this.setState({description : (<p>Learn to make great UI/UX design for games.</p>)});
            this.setState({requirements : (<p>A Laptop  with at least 2gb RAM and a 3-button mouse. <br/> If you're currently in school, you have to be in final year.<br/> Capability to work independently with minimum supervision.<br/>Must have some prior knowledge of a design software.</p>)});
            this.setState({form_url: "https://forms.gle/S11eJNc7sZ8TsixC7"});
            break;
    }
  }

    render() {
        return (
       
                <div className="row" style={{paddingBottom: "40px"}}>
                    <div className="col-lg-12 text-center">
                    <img src="/assets/img/banners/Internship-design.jpg" alt="Intern Banner" style={{width: '100%', position: 'relative', top: '-10px'}}/>
                        <br></br>
                        <span className="font-snapHand" style={{fontSize: "5vh", color: "#9fa7ab"}}>INTERNSHIP</span>
                        <p className="text-center font-snapHand" style={{fontSize: "3vh", color: "#9fa7ab"}}>This is your opportunity to learn from professionals in the field and work closely on Animated works for film and Games. It's the shortest route to securing a full-time position</p>
                        <br/>
                        <span className="font-snapHand" style={{fontSize: "5vh", color: "#9fa7ab"}}>ROLES</span>
                        <div className="container">
                        <div className="row">
                            <div className="col-4 text-left" style={{ color: "#ffdd17", fontSize: "3vh"}}> <b className="font-belmist">2D Art/Animation</b></div>
                            <div className="col-4 text-center"><img alt="border" src="/assets/img/borders/line.png" style={{width: "70%"}} /></div>
                            <div className="col-4" > <span className="btn btn-liqair font-october" onClick={()=>this.openModal('2d')} style={{boxShadow: "-2px 2px 0px white", fontSize: "3vh", paddingBottom: "0px"}} data-toggle="modal" data-target="#careerDescriptionModal">APPLY</span></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-4 text-left" style={{color: "#ffdd17", fontSize: "3vh"}}> <b className="font-belmist">3D Art/Animation</b></div>
                            <div className="col-4 text-center"><img alt="border" src="/assets/img/borders/line.png" style={{width: "70%"}} /></div>
                            <div className="col-4" > <span className="btn btn-liqair font-october" onClick={()=>this.openModal('3d')} style={{boxShadow: "-2px 2px 0px white", fontSize: "3vh", paddingBottom: "0px"}} data-toggle="modal" data-target="#careerDescriptionModal">APPLY</span></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-4 text-left" style={{ color: "#ffdd17", fontSize: "3vh"}}> <b className="font-belmist">Graphic Design</b></div>
                            <div className="col-4 text-center"><img alt="border" src="/assets/img/borders/line.png" style={{width: "70%"}} /></div>
                            <div className="col-4"  > <span onClick={()=>this.openModal('graphics')} className="btn btn-liqair font-october" style={{boxShadow: "-2px 2px 0px white", fontSize: "3vh", paddingBottom: "0px"}} data-toggle="modal" data-target="#careerDescriptionModal">APPLY</span></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-4 text-left" style={{color: "#ffdd17", fontSize: "3vh"}}> <b className="font-belmist">Sound Production</b></div>
                            <div className="col-4 text-center"><img alt="border" src="/assets/img/borders/line.png" style={{width: "70%"}} /></div>
                            <div className="col-4" > <span  onClick={()=>this.openModal('sound')} className="btn btn-liqair font-october" style={{boxShadow: "-2px 2px 0px white", fontSize: "3vh", paddingBottom: "0px"}} data-toggle="modal" data-target="#careerDescriptionModal">APPLY</span></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-4 text-left" style={{color: "#ffdd17", fontSize: "3vh"}}> <b className="font-belmist">UI/UX</b></div>
                            <div className="col-4 text-center"><img alt="border" src="/assets/img/borders/line.png" style={{width: "70%"}} /></div>
                            <div className="col-4" > <span  onClick={()=>this.openModal('ui')} className="btn btn-liqair font-october" style={{boxShadow: "-2px 2px 0px white", fontSize: "3vh", paddingBottom: "0px"}} data-toggle="modal" data-target="#careerDescriptionModal">APPLY</span></div>
                        </div>
                        </div>
                    </div>
                    <CareerDescriptionModal description={this.state.description} requirements={this.state.requirements} form_url={this.state.form_url} />
                </div>
           
        )
    }
}

export default Career;
