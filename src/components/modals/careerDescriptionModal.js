import React, { Component } from 'react';

export class CareerDescriptionModal extends Component {

    constructor(props){
        super(props);
        this.state = {
      
        }
    }



    onChange = (e) => {
    }

   goToForm = (url) =>
   {
       window.open(url, '_blank');
   }


    render() {
        return (
            <div id="careerDescriptionModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="gridModalLabel" style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{pointerEvents: "all"}}>
                    <div className="text-center" style={{backgroundColor: "rgb(45, 45, 45)", padding: "20px"}}>
                <span className="font-snapHand text-center" style={{fontSize: "2rem", color: "#9fa7ab"}}>DESCRIPTION</span>
                <br/>
                {this.props.description}
                <br />
                <span className="font-snapHand text-center" style={{fontSize: "2rem", color: "#9fa7ab", margin: "auto", float: "center"}}>REQUIREMENTS</span>
                <br/>
                {this.props.requirements}
                <br/>
                <span className="btn btn-liqair font-october" onClick={() =>this.goToForm(this.props.form_url)} style={{boxShadow: "-2px 2px 0px white", fontSize: "1.7em", paddingBottom: "0px"}} >Proceed</span>
                </div>
                </div>
            </div>
        )
    }
}

export default CareerDescriptionModal
