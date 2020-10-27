import React from 'react';
import './HeaderMain.css';
import frame from '../../../images/logos/frame.png';

const HeaderMain = () => {
    return (
        <div className="container headerMain">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <div className="headerMainText">
                        <h1 className="text-brand">Let’s Grow Your <br/>
                            Brand To The <br/>
                            Next Level
                        </h1>
                        <p className="text-brand">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Tenetur dolores sed officia pariatur libero remlain
                        </p>
                        <button className="btn btn-dark">Hire Us</button>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={frame} alt="" srcset=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;