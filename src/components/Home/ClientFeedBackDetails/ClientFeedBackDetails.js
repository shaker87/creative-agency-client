import React from 'react';
import './ClientFeedBackDetails.css';
import { Card } from 'react-bootstrap';

const ClientFeedBackDetails = ({feedback}) => {
    const headingStyle = {color: '#000000', fontWeight: 'bold'};
    return (
        <div className="col-md-4">
            <Card className="client-card">
               <div className="d-flex">
                   <div className="card-image">
                        <img src={feedback.photoURL} alt="" srcset=""/>
                   </div>
                   <div className="ml-3">
                        <h5 style={headingStyle}>{feedback.name}</h5>
                        <p style={headingStyle}>{feedback.company}</p>
                   </div>
               </div>
                <Card.Body>
                    <Card.Text className="text-secondary">
                        {feedback.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClientFeedBackDetails;