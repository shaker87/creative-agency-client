import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ContactForm from '../../Home/ContactForm/ContactForm';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="dashboard">
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
                                {loggedInUser &&<h2>{loggedInUser.name}</h2>}
                            </div>
                        </div>
                        <div className="">
                            <OrderForm></OrderForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;