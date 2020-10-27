import React from 'react';
import './ServiceListDetails.css';
import { Card } from 'react-bootstrap';

const ServiceListDetails = ({addedService}) => {
    const titleStyle = {color: '#22253F', fontWeight: 'bold'};
    return (
        <div className="col-md-5">
            <Card className="service-list-card">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="service-card-img">
                        <img src={addedService.icon} alt="icon" srcset=""/>
                    </div>
                    <div className="status">
                        <h6>Pending</h6>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title style={titleStyle}>{addedService.title}</Card.Title>
                    <Card.Text className="text-secondary">
                        {addedService.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceListDetails;