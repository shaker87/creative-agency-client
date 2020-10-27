import React, { useContext } from 'react';
import './ServiceDetails.css';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    const titleStyle = {color: '#22253F', fontWeight: 'bold'};
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleOrderService = (title, service) => {
        const newAddedService = {...loggedInUser,service:service};
        console.log(newAddedService)
        setLoggedInUser(newAddedService);
        history.push(`/service/${title}`);
        
    }
    
   
    return (
        <div className="col-md-4">
            <Card onClick={()=>handleOrderService(service.title, service)} className="service-card text-center">
                <div className="card-img">
                <img src={`data:${service.img.contentType};base64,${service.img.img}`} alt="icon" srcset=""/>
                </div>
                <Card.Body>
                    <Card.Title style={titleStyle}>{service.title}</Card.Title>
                    <Card.Text className="text-secondary">
                        {service.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;