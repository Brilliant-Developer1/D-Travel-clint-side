import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourPackages from '../TourPackages/TourPackages';

const TourPackes = () => {
    const [services, setServices] = useState([]);
    
    // Receive Packages data from server
    useEffect(() => {
        fetch('https://enigmatic-sierra-17809.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className="mt-5 pt-4">
        <Container className="flex-wrap">
        <h2 className="text-center mt-5 mb-5">Our Tour Packages</h2>
        <Row xs={1} md={3} className="g-4">
        {
            services.map(service => <TourPackages
                key={service.id}
                service={service}
                ></TourPackages>)
          }
        </Row>
        </Container>
        </div>
    );
};

export default TourPackes;