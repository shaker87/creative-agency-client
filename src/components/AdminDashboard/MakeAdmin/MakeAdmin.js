import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminForm from '../AddAdminForm/AdminForm';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';

const MakeAdmin = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)
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
                        <AdminForm></AdminForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MakeAdmin;