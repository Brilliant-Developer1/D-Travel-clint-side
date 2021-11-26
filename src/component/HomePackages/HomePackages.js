import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './HomePackages.css';


const HomePackages = (props) => {
    const {img, details,name,id, price} = props.service
    return (
        <Col >
        <Card>
            <Card.Img height="270px" variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="text-end price">
            <small >Starting From: ৳{price}</small> <br />
            <small>per person</small>
            </div>
            <Card.Text> <p>{details}</p> </Card.Text>
            <Button className="details-btn "> <HashLink to={`/placeOrder/${id}`}>Book Now</HashLink> </Button>
            </Card.Body>
        </Card>
        </Col>
     
            
    );
};

export default HomePackages;

/* 

*/