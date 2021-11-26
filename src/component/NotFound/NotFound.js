import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css';
import errorImg from "../../img/error-page/error-img.jpg";
import { HashLink } from 'react-router-hash-link';
const NotFound = () => {
    return (
        <div className="text-center notfound">
            <img width="100%" src={errorImg} alt="" />
            <Button className="back-home"> 
            <HashLink to="/home">Back To Home</HashLink>
            </Button>
        </div>
    );
};

export default NotFound;