import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';


const ServiceList = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[userAddedService, setUserAddedService] = useState([]);

    useEffect(() =>{
        fetch('https://stormy-temple-56876.herokuapp.com/userService?email='+loggedInUser.email,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setUserAddedService(data))
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Order</h3>
                        </div>
                        <div>
                            <h2>{loggedInUser.name}</h2>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#F4F7FC', height:'100vh'}} className="row p-5">
                        {
                            userAddedService.map(addedService => <ServiceListDetails addedService={addedService} key={addedService.id}></ServiceListDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;