import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';





// const serviceData = [
//     {
//         id: 1,
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         icon: webDesign
//     },
//     {
//         id: 2,
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         icon: graphicsDesign
//     }
// ]


const AdminServiceList = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[userAddedService, setUserAddedService] = useState([]);

    useEffect(() =>{
        fetch('https://stormy-temple-56876.herokuapp.com/adminUserService')
        .then(res => res.json())
        .then(data => setUserAddedService(data))
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminDashboardSidebar></AdminDashboardSidebar>
                </div>
                <div className="col-md-10 mt-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Service List</h3>
                        </div>
                        <div>
                            <h2>{loggedInUser.name}</h2>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#F4F7FC', height:'100vh'}} className="row p-5">
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{width:'20%'}}>Name</th>
                                    <th style={{width:'20%'}}>Email</th>
                                    <th style={{width:'20%'}}>Service</th>
                                    <th style={{width:'25%'}}>Project Details</th>
                                    <th style={{width:'10%'}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userAddedService.map(addedService=>{
                                        return <AdminServiceListDetails addedService={addedService}></AdminServiceListDetails>
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;