import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminAddService from '../AdminAddService/AdminAddService';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';


const AdminDashboard = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminDashboardSidebar></AdminDashboardSidebar>
                    </div>
                    <div className="col-md-10 mt-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3>Add Service</h3>
                            </div>
                            <div>
                                {loggedInUser &&<h2>{loggedInUser.name}</h2>}
                            </div>
                        </div>
                        <div className="">
                            <AdminAddService></AdminAddService>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;