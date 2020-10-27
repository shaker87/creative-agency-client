import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/home" class="navbar-brand"><><img src={logo} alt="" srcset=""/></></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-3">
                        <li class="nav-item active">
                            <Link to="/home"><a class="nav-link mr-4">Home <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/portfolio"><a class="nav-link mr-4">Our Portfolio</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/team"><a class="nav-link mr-4">Our Team</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact"><a class="nav-link mr-4">Contact Us</a></Link>
                        </li>
                        <li class="nav-item">
                            {loggedInUser.email? <h6>{loggedInUser.name}</h6>
                            :<Link to="/service-order"><button className="btn btn-dark">Login</button></Link>
                            }
                        </li>
                        <li class="nav-item">
                            <Link to="/admin-add-service"><button className="btn btn-dark ml-2">Admin</button></Link>
                        </li>
                     
                    </ul>   
                </div>
            </nav>
        </div>
        
      
    );
};

export default Navbar;