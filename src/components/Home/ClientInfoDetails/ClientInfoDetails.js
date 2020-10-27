import React from 'react';
import './ClientInfoDetails.css';

const ClientInfoDetails = ({clientLogo}) => {
    return (
        <div className="col clientInfoDetails text-center">
            <img src={clientLogo.icon} alt="" srcset=""/>
        </div>
    );
};

export default ClientInfoDetails;