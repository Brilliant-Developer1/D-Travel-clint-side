import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import { useEffect } from 'react';
import HomePackages from '../HomePackages/HomePackages';
import banner from "../../img/hero.jpg";
import Visa from '../Visa/Visa';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    const [services, setServices] = useState([]);
    
    // Receive Packages data from server
    useEffect(() => {
        fetch('https://enigmatic-sierra-17809.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
        <Container className="mt-5">
        
        <img src={banner} alt="Banner" width="100%" />
        </Container>
        <Container className="flex-wrap">
        <h2 className="text-center mt-5 mb-5">Our Packages</h2>
        <Row xs={1} md={3} className="g-4">
        {
            services.map(service => <HomePackages
                key={service.id}
                service={service}
                ></HomePackages>)
          }
        </Row>
        </Container>
        <Visa></Visa>
        <Feedback></Feedback>
        </div>
    );
};

export default Home;