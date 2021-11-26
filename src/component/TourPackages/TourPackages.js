import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./TourPackages.css"

const TourPackages = (props) => {
    const {img, details,name,id, price} = props.service;
    return (
        <div>
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
            <Button variant="warning" className="package-btn"> <HashLink to={`/placeOrder/${id}`}>Book Now</HashLink> </Button>
            </Card.Body>
        </Card>
        </Col>
        </div>
    );
};

export default TourPackages;