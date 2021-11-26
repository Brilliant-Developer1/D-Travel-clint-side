import axios from 'axios';
import React from 'react';
import './AddPackage.css';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://enigmatic-sierra-17809.herokuapp.com/packages',data)
        .then(res => {
            if(res.data.insertedId) {
                alert("Package Added");
                reset();
            }
        })
    };
    return (
        <Container className="add-form">
            <h1 className="mt-2 text-center mb-4">Add New Package here</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("name", { 
                    required:true,maxLength: 35 })} type="text" placeholder="Package Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Details
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("details", { 
                    required:true,maxLength: 35 })} type="text" placeholder="Package Details" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Package Id
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("id", { 
                    required:true})} type="number" placeholder="Package Id" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Image Url
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("img", { 
                    required:true})} type="text" placeholder="Image Url" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Price
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("price", { 
                    required:true})} type="number" placeholder="PackagePrice" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Description-1
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("description", { 
                    required:true})} type="text" placeholder="Description-1" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Description-2
                </Form.Label>
                <Col sm={10}>
                <Form.Control {...register("description2", { 
                    required:true})} type="text" placeholder="Description-2" />
                </Col>
            </Form.Group>
            
           
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="warning" type="submit">Add New</Button>
                </Col>
            </Form.Group>
            </Form>
        </Container>
    );
};

export default AddPackage;