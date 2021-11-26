import './Footer.css';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-style">
        <Container>
            <Row>
            <Col sm>
            <h3 className="text-center">D-Travel
                </h3>
        <small className="text-center d-block">Dream Travel Agency</small>
                <p className="p-3">D-Travel.com is a BD online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. It is headquartered in Dhaka. The website has over 10 million listings. The site is available in 20 languages.</p>
            </Col>
            <Col sm>
        <h3 className="text-center">Packages</h3>
            <ul>
                <li>Visit Turkey & Egypt in 10 Days</li>
                <li>Explore Uzbekistan & India for 10 Days</li>
                <li>Umrah & Dubai Package - 15 Days</li>
                <li>Explore Vietnam & Cambodia in 10 Days</li>
                <li>10 Days Tast of Europe Tour</li>
                <li>Umrah & Turkey Package for 15 Days</li>
            </ul>
            </Col>
            <Col sm>
            <h3 className="text-center">Contact Us</h3>
            <span className="fw-bold">Address:</span>
            <p>Bashabo, Khilkhet, Dhaka- 1800</p>
            <span className="fw-bold">Number:</span>
            <p>+88 01712300000</p>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;