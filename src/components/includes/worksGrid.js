import React from "react";

function worksGrid(props) {
  let gridStyle = props.gridStyle;

  let imgUrl = gridStyle.view =="clients" ? "/assets/img/works-grid/addidas.png" : "/assets/img/works-grid/fixed-ratio.png";
  let rowMargin = gridStyle.spacing ? "20px" : "0px";
  let imgGridStyle = gridStyle.spacing ? {} : {"padding": "0px 15px", position: "relative", top: "-15px"};
  let worksImgGridStyle = gridStyle.spacing ? "padding-spacing works-grid" : "padding-nospacing";
  let imageOverlayStyle = gridStyle.spacing ? {} : {width: "100%"};
  let imageOverlayDisplay = gridStyle.displayOverlay ? {} : {display: "none"};
  let showSecondRow = (props.imageUrls && props.imageUrls.length) > 2 ? 'flex' : 'none';


  let view = gridStyle.view == "clients" ? ( 
  <div className="fluid img-grid-main-holder" style={imgGridStyle}>
  <div className="row" style={{ display: "flex", marginBottom: rowMargin }}>
  <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
    <a href="/client/demo_reel">
      <img src="/assets/img/pictures/demo real.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100" } style={imageOverlayDisplay}>
      <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">PERSONAL</h4>
          <p className="grid-middle-item">Demo Reel</p>
        </div>
      </div>
      </a>
    </div>
    <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
    <a href="/client/umc">
      <img src="/assets/img/pictures/use my car1.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100"} style={imageOverlayDisplay}>
      <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">UMC</h4>
          <p className="grid-middle-item">Getting To Know UMC</p>
      </div>
      </div>
      </a>
    </div>
    <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
    <a href="/client/umc">

      <img src="/assets/img/pictures/use my car2.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100"} style={imageOverlayDisplay}>
      <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">UMC</h4>
          <p className="grid-middle-item">User Benefits</p>
      </div>
      </div>
      </a>
    </div>
  
   </div>
  <div className="row" style={{ display: "flex", marginBottom: rowMargin }}>
  <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
      <a href="/client/bad_hair">
      <img src="/assets/img/pictures/bad hair day.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100" } style={imageOverlayDisplay}>
        <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">PERSONAL</h4>
          <p className="grid-middle-item">Bad Hair Day</p>
        </div>
      </div>
      </a>
    </div>
  <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
    <a href="/client/life">
      <img src="/assets/img/pictures/life.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100"} style={imageOverlayDisplay}>
      <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">PERSONAL</h4>
          <p className="grid-middle-item">Life Happens Everyday</p>
      </div>
      </div>
      </a>
    </div>
  <div className={"col-md-4 works-grid-img-holder " + worksImgGridStyle} >
  <a href="/client/oma">
      <img src="/assets/img/clients/oma/oma.jpg" className="img-responsive grid-image" />
      <div className={"works-grid-img-overlay h-100" } style={imageOverlayDisplay}>
      <div className="grid-middle-text clickable">
          <img className="grid-middle-item"
            src="/assets/img/spinners/liqair-loader-small.gif"
            style={{ margin: "auto", maxWidth: "7%" }}
          />
          <h4 className="caption-header grid-middle-item">OMA</h4>
          <p className="grid-middle-item">An Advert Concept Animation for our Client Oma</p>
        </div>
      </div>
      </a>
    </div>
</div>
</div>
) : (   <div className="fluid img-grid-main-holder" style={imgGridStyle}>

<div className="row" style={{ display: "flex", marginBottom: rowMargin }}>
<div className={"col-md-6 works-grid-img-holder " + worksImgGridStyle} >
    <img src={"/assets/img/clients" + props.imageUrls[0]} className="img-responsive grid-image" />
    <div className={"works-grid-img-overlay h-100" } style={imageOverlayDisplay}>
    <div className="grid-middle-text clickable">
        <img className="grid-middle-item"
          src="/assets/img/spinners/liqair-loader-small.gif"
          style={{ margin: "auto", maxWidth: "7%" }}
        />
        <h4 className="caption-header grid-middle-item">ADDIDAS</h4>
        <p className="grid-middle-item">Featured work</p>
      </div>
    </div>
  </div>
  <div className={"col-md-6 works-grid-img-holder " + worksImgGridStyle} >
    <img src={"/assets/img/clients" + props.imageUrls[1]} className="img-responsive grid-image" />
    <div className={"works-grid-img-overlay h-100"} style={imageOverlayDisplay}>
    <div className="grid-middle-text clickable">
        <img className="grid-middle-item"
          src="/assets/img/spinners/liqair-loader-small.gif"
          style={{ margin: "auto", maxWidth: "7%" }}
        />
        <h4 className="caption-header grid-middle-item">ADDIDAS</h4>
        <p className="grid-middle-item">Featured work</p>
    </div>
    </div>
  </div>
 </div>
 <div className="row" style={{ display: showSecondRow, marginBottom: rowMargin }} >
<div className={"col-md-6 works-grid-img-holder " + worksImgGridStyle} >
    <img src={"/assets/img/clients" + props.imageUrls[2]} className="img-responsive grid-image" />
    <div className={"works-grid-img-overlay h-100" } style={imageOverlayDisplay}>
    <div className="grid-middle-text clickable">
        <img className="grid-middle-item"
          src="/assets/img/spinners/liqair-loader-small.gif"
          style={{ margin: "auto", maxWidth: "7%" }}
        />
        <h4 className="caption-header grid-middle-item">ADDIDAS</h4>
        <p className="grid-middle-item">Featured work</p>
      </div>
    </div>
  </div>
  <div className={"col-md-6 works-grid-img-holder " + worksImgGridStyle} >
    <img src={"/assets/img/clients" + props.imageUrls[3]} className="img-responsive grid-image" />
    <div className={"works-grid-img-overlay h-100"} style={imageOverlayDisplay}>
    <div className="grid-middle-text clickable">
        <img className="grid-middle-item"
          src="/assets/img/spinners/liqair-loader-small.gif"
          style={{ margin: "auto", maxWidth: "7%" }}
        />
        <h4 className="caption-header grid-middle-item">ADDIDAS</h4>
        <p className="grid-middle-item">Featured work</p>
    </div>
    </div>
  </div>
 </div>

</div>
);

if(props.imageUrls)
{
  if(props.imageUrls.length == 0)
  {
    view = ("");
  }
}
  return (
    view
   );
}
export default worksGrid;
