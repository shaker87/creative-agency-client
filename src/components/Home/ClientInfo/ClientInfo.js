import React from 'react';
import './ClientInfo.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import ClientInfoDetails from '../ClientInfoDetails/ClientInfoDetails';
const clientLogo = [
    {
        title: 'Slack',
        icon: slack
    },
    {
        title: 'Google',
        icon: google
    },
    {
        title: 'Uber',
        icon: uber
    },
    {
        title: 'Netflix',
        icon: netflix
    },
    {
        title: 'Airbnb',
        icon: airbnb
    }
]

const ClientInfo = () => {
    return (
        <div className="container">
            <div className="clientInfo">
            <div className="row">
                {
                    clientLogo.map(clientLogo => <ClientInfoDetails clientLogo={clientLogo} key={clientLogo.title}></ClientInfoDetails>)
                }
            </div>
            </div>
          
        </div>
    );
};

export default ClientInfo;