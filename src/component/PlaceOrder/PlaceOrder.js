import React, { useEffect, useState } from 'react';
import { Card, Container, Form, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, handleSubmit, reset} = useForm();
    const {id} = useParams();
    const [packages, setPackages] = useState([]);
    const [tpackage, setPackage] = useState({});
    const {user} = useAuth();

    //Sending myOrders Details to Server
    const onSubmit = data => {
        data.order = id;
        fetch('https://enigmatic-sierra-17809.herokuapp.com/orders', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert("You Order is placed")
                reset();
            }
        })
    }
    // Receive Packages data from server
    useEffect( () => {
        fetch('https://enigmatic-sierra-17809.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
        
    } ,[])
    //Finding specific package from all packages.
    useEffect(() => {
    const foundService = packages.find(service => service.id == id)
        setPackage(foundService);
    } ,[packages, id, setPackage])
    return (
        <div>
            <h1 className="mt-5 pt-4 text-center">Package Details</h1>
            <Container className="mb-5 service-details">
            <Card className="text-center mx-auto" >
            <Card.Img variant="top" src={tpackage?.img} />
            <Card.Body>
            <Card.Title>{tpackage?.name}</Card.Title>
            <Card.Text>
                {tpackage?.details}
            </Card.Text>
            
            <h2 className="mt-5">Departure From Dhaka</h2>
            <p>{tpackage?.description}</p>
            <h5>Explore more</h5>
            <p>{tpackage?.description2}</p>
            </Card.Body>
            </Card>
            <h2 className="mt-5 text-warning text-center">Please Fill the form to place your Order</h2>
            <Form className="user-form mt-4" onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" {...register("name")} defaultValue={user.displayName} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" {...register("email", { required: true })} defaultValue={user.email} />
                </Form.Group>

                
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control {...register("address")} placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control {...register("address2")} placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control {...register("city")}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Post</Form.Label>
                <Form.Control {...register("post")}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control {...register("zip")}/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Accept Terms & Conditions" />
            </Form.Group>
            <input className="bg-warning p-2 rounded border-0" type="submit" value="Book this Package" />
            </Form>
            </Container>
        </div>
    );
};

export default PlaceOrder;