import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
        
    };
    return (
        <div className="contact-form">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="email" placeholder="Enter your email..." className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="phone" placeholder="Your name or company name here..." className="form-control" />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea className="form-control"></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;