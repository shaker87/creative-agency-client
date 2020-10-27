import React, { useEffect, useState } from 'react';
import './ClientFeedBack.css';
// import client1 from '../../../images/customer-1.png';
// import client2 from '../../../images/customer-2.png';
// import client3 from '../../../images/customer-3.png'
import ClientFeedBackDetails from '../ClientFeedBackDetails/ClientFeedBackDetails';


// const clientFeedBackData = [
//     {
//         name: 'Nash Patrik',
//         title: 'CEO, Manpol',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         icon: client1
//     },
//     {
//         name: 'Miriam Barron',
//         title: 'CEO, Manpol',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         icon: client2
//     },
//     {
//         name: 'Bria Malone',
//         title: 'CEO, Manpol',
//         description: '+With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         icon: client3
//     }
// ]

const ClientFeedBack = () => {
    const[review, setReview] = useState([])
    // console.log(review)
    useEffect(() => {
        fetch('https://stormy-temple-56876.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <section className="service">
            <div className="container">
                <h2 className="text-center font-weight-bold mb-5">Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
                <div className="row">
                    {
                        review.map(feedback => <ClientFeedBackDetails feedback={feedback} key={feedback.title}></ClientFeedBackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedBack;