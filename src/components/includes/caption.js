import React from 'react';

function caption() {
    return (
        <div className="col my-2 pt-5">
            <div className="text-center mb-5">
                <h4>Yo! Nice to meet you</h4>
                <p>What do we do? Weeeeee maaakee cooool shtuff.</p>
            </div>
            <div className="mx-5">
                <div className="card-deck mx-5">
                    <div className="card bg-dark text-white">
                        <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/caption/b.jpg'} className="card-img" alt="caption" />
                        <div className="d-flex card-img-overlay justify-content-center">
                            <h5 className="align-self-end">Branding</h5>
                        </div>
                    </div>

                    <div className="card bg-dark text-white">
                        <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/caption/a.gif'} className="card-img" alt="caption" />
                        <div className="d-flex card-img-overlay justify-content-center">
                            <h5 className="align-self-end">Animation</h5>
                        </div>
                    </div>

                    <div className="card bg-dark text-white">
                        <img src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/caption/d.jpg'} className="card-img" alt="caption" />
                        <div className="d-flex card-img-overlay justify-content-center">
                            <h5 className="align-self-end">Design</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default caption;
