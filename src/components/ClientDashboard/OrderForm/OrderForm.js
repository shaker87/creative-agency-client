import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const OrderForm = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    // const [form, setForm]=useState({
    //     title:loggedInUser.service?.title,
    //      description:loggedInUser.service?.description,
    //      icon:loggedInUser.service.image.img,
    //      email:loggedInUser.email,
    //      name:loggedInUser.name
    //     });
    const [formData, setFormData] = useState({
         title:loggedInUser.service?.title,
         description:loggedInUser.service?.description,
         email:loggedInUser.email,
         name:loggedInUser.name,
        //  icon:loggedInUser.service.img
        });

    const handleBlur = event => {
        const newForm = {...formData}
        newForm[event.target.name] = event.target.value;
        setFormData(newForm);
        console.log(newForm);
    }

    const onSubmit = () => {
        console.log(formData)
        fetch('https://stormy-temple-56876.herokuapp.com/userAddedService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push(`/service-list`)
            }
        })
        
    };
    return (
        <div style={{backgroundColor: '#F4F7FC', height:'100vh'}} className="order-form">
            <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <input type="text" defaultValue={formData.name} ref={register({ required: true })} name="name" placeholder="Your name or company name here..." className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" defaultValue={formData.email} ref={register({ required: true })} name="email" placeholder="Enter your email..." className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" defaultValue={formData.title} ref={register({ required: true })} name="service" placeholder="Service" className="form-control" />
                    {errors.service && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea onBlur={handleBlur} className="form-control" placeholder="Project Details" name="details"></textarea>
                    {errors.details && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group d-flex justify-content-between">
                    <input className="w-25" onBlur={handleBlur} type="number" ref={register({ required: true })} name="price" placeholder="Price" className="form-control" />
                    {errors.price && <span className="text-danger">This field is required</span>}
                    <input type="file" id="myfile" name="myfile"></input>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Send</button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;