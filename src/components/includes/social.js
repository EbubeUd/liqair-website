import React from 'react';

function social() {
    return (
        <div className="d-flex flex-row justify-content-around">
            <div className="row">
                <div className="col-md-5">
                    <p className="block text-center">Say <span className="liqair-color"> Hello, Yo, How far </span> or <span className="liqair-color"> Whatever</span> !?</p>
                    <a href="mailto:hello@liqair.art" className="liqair-mail-us py-1" target="_top">hello@liqair.art</a>
                    <a href="mailto:yo@liqair.art" className="liqair-mail-us py-1" target="_top">yo@liqair.art</a>
                    <a href="mailto:howfar@liqair.art" className="liqair-mail-us py-1" target="_top">howfar@liqair.art</a>
                    <a href="mailto:whatever@liqair.art" className="liqair-mail-us py-1" target="_top">whatever@liqair.art</a>
                </div>
                <div className="col-md-7">
                    <div className="mt-5 mt-md-0 mt-lg-0">
                        <div className="text-center pb-3 mb-2">
                            <span className="liqair-color">Want to stay updated? </span> Find us here:
                        </div>
                        <div className="d-flex flex-wrap justify-content-center py-3">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://www.instagram.com/liqair/" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/instagram.png'} height="40px" width="40px" alt="instagram" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://m.youtube.com/channel/UC4x_pzbceVaQQJ7W4zgHsRA" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/youtube.png'} height="40px" width="40px" alt="youtube" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://twitter.com/liqair?s=09" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/twitter.png'} height="40px" width="40px" alt="twitter" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://www.artstation.com/liqair" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/artstation.png'} height="40px" width="40px" alt="artstation" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://www.behance.net/Liqairltd332d" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/behance.png'} height="40px" width="40px" alt="behance" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://www.linkedin.com/company/liqair-studios" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/linkedin.png'} height="40px" width="40px" alt="linkedin" />
                                    </a>
                                </div>
                                <div className="liqair-social-icon-zoom">
                                    <a href="https://m.facebook.com/liqair/?ref=bookmarks" target="_blank" rel="noopener noreferrer" className="liqair-social-icon">
                                        <img src={process.env.REACT_APP_PUBLIC_URL+'assets/img/social/facebook.png'} height="40px" width="40px" alt="facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default social;
