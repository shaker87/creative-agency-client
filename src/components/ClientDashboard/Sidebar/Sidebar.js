import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,  faShoppingCart, faCommentDots, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <img className="pb-5" src={logo} alt="" srcset=""/>
                <li>
                    <Link to="/service-order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service-list" className="text-dark">
                        <FontAwesomeIcon icon={faLaptopHouse} /> <span>Service-list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/order-review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
     
            </ul>
            <div>
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;