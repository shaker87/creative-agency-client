import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,  faShoppingCart, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const AdminDashboardSidebar = () => {
    const[loggedInUser, setLoggedInUser]= useContext(UserContext);
    const[isAdmin, setIsAdmin]= useState([])
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <img className="pb-5" src={logo} alt="" srcset=""/>
                <li>
                    <Link to="/admin-service-list" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin-add-service" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/add-admin" className="text-dark">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Admin</span>
                    </Link>
                </li>
     
            </ul>
            <div>
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminDashboardSidebar;