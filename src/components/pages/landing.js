import React, { Component } from "react";
import Carousel from "../includes/carousel";

import CompanyServices from "../includes/companyServices";
import OurClients from "../includes/ourClients";
import ContactCompany from "../includes/contactCompany";
import BorderBottom from "../includes/borderBottom";
import Social from "../includes/social";
import PrePageLoader from "../loaders/prePageLoader";
import WorksGrid from "../includes/worksGrid";
import Career from "../includes/career";

export class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <PrePageLoader />
        <div className="fluid" id="home" data-anchor="home">
          <Carousel />
        </div>

            <div className="fluid" id="works" data-anchor="works">
          <div  style={{ backgroundColor: "#2d2d2d" }} className="fluid">
            {/* <Caption /> */}

            {/* <MidBorderTop /> */}

            <div
              className="text-content"
   
            >
              <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">WORKS</h6>

                <h6 className="caption-body">
                  Disclaimer: This might blow your mind{" "}
                </h6>
              </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
          </div>

          <div
            style={{ backgroundColor: "#2d2d2d" }}
            className="container-fluid"
          >
            <WorksGrid
              gridStyle={{
                spacing: true,
                displayOverlay: true,
                view: "clients",
              }}
            />
            {/* <MediaPlayer /> */}
            {/* <MidBorderTop /> */}
          </div>
          </div>


          <div className="fluid"
            id="careers" data-anchor="careers"

          >
          <div style={{ backgroundColor: "#2d2d2d" }} className="fluid">
            <div className="text-content ">
              <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">CAREERS</h6>
                <h6 className="caption-body">
                  Your exciting journey begins here{" "}
                </h6>
              </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
          </div>

          <div
            style={{ backgroundColor: "#2d2d2d" }}
            className="container-fluid"
          >
            <Career />
          </div>
          </div>

          <div className="fluid"
            id="services" data-anchor="services"
         
          >
          <div style={{ backgroundColor: "#2d2d2d" }} className="fluid">
            <div className="text-content ">
              <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">SERVICES</h6>
                <h6 className="caption-body">Need Something? We got you</h6>
              </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
          </div>

          <div
            style={{ backgroundColor: "#2d2d2d" }}
            className="container-fluid"
          >
            <CompanyServices />
          </div>
          </div>

          <div className="fluid"
            id="clients" data-anchor="clients"
          
          >

          <div style={{ backgroundColor: "#2d2d2d" }} className="fluid">
            {/* <MidBorderTop /> */}
            <div className="text-content ">
              <div className="container text-center caption-text align-middle">
                <h6 className="caption-header">CLIENTS</h6>
                <h6 className="caption-body">Be our next happy customer</h6>
              </div>
            </div>
            {/* <MidBorderBottom bg="#2d2d2d" /> */}
          </div>

          <div
            style={{ backgroundColor: "#2d2d2d" }}
            className="container-fluid"
          >
            <OurClients />
          </div>
          </div>



          <div className="fluid"
            id="contact" data-anchor="contact"
           
          >
            <div style={{ backgroundColor: "#2d2d2d" }} className="fluid">
                {/* <MidBorderTop /> */}
                <div className="text-content ">
                <div className="container text-center caption-text align-middle">
                    <h6 className="caption-header">CONTACT US</h6>
                    <h6 className="caption-body">Be our next happy customer</h6>
                </div>
                </div>
                {/* <MidBorderBottom bg="#2d2d2d" /> */}
            </div>
        
            <div
                style={{ backgroundColor: "#2d2d2d" }}
                className="container-fluid"
            >
                <ContactCompany />
            </div>
          </div>
          
          <div style={{ backgroundColor: "black" }} className="fluid">
            <BorderBottom />
          </div>

          <div style={{ backgroundColor: "black" }} className="container-fluid">
            <Social />
          </div>
      </React.Fragment>
    );
  }
}

export default Landing;
