import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    const titleStyle = {color: '#22253F', fontWeight: 'bold'};
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="contact-text">
                            <h1 style={titleStyle}>Let us handle your<br/> project, professionally.</h1>
                            <p className="text-secondary mt-4">With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;