import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ReviewForm from '../ReviewForm/ReviewForm';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        <div className="">
                            <ReviewForm></ReviewForm>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Review;