import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const ReviewForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [clientReview, setClientReview] = useState({ ...loggedInUser });
    const handleBlur = event => {
        const newReview = { ...clientReview }
        newReview[event.target.name] = event.target.value;
        setClientReview(newReview);
        console.log(newReview);
    }
    const onSubmit = data => {
        // console.log(data);
        fetch('https://stormy-temple-56876.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review added successfully')
                }
            })

    };
    return (
        <div style={{ backgroundColor: '#F4F7FC', height: '100vh' }} className="order-form">
            <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" onBlur={handleBlur} ref={register({ required: true })} name="company" placeholder="Company Name Designation" className="form-control" />
                    {errors.company && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group">
                    <textarea onBlur={handleBlur} ref={register({ required: true })} name="description" className="form-control" placeholder="Description"></textarea>
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;