import React, { useContext, useEffect, useState } from 'react';
import './Service.css';

import ServiceDetails from '../ServiceDetails.js/ServiceDetails';




const Service = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect( () => {
        fetch('https://stormy-temple-56876.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
        <section className="service">
            <div className="container">
                <h2 className="text-center font-weight-bold mb-5">Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
                <div className="row">
                    {
                        serviceData.map(services => <ServiceDetails service={services} key={services.title}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;