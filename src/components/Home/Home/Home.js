import React from 'react';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import ClientInfo from '../ClientInfo/ClientInfo';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientInfo></ClientInfo>
            <Service></Service>
            <Slider></Slider>
            <ClientFeedBack></ClientFeedBack>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;