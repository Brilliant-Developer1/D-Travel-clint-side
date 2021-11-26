import './About.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about">
            <div className="about-card">
            <h1 className="text-center mb-4">
            Creating Experiences of a Lifetime</h1>
            <Row>
                <Col sm={6}>
                    <img className="img-fluid" src={"https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/a7cdd1dd-9281-6c87-eee7-a394e58f4833/630x355.jpg"} alt="" />
                </Col>
                <Col sm={6}>
                    <p>About Going Places is a travel planning agency that was founded on a family’s love for traversing the globe. Each vacation specialist has extensive, personal experience traveling the world. We transfer our passion for planning to each client we work with.</p>
                </Col>
            </Row>
            </div>

            <div className="about-card">
            <h1 className="text-center mb-4">Our Collaborative Qualification Process:</h1>
            <Row>
                <Col sm={6}>
                <p>The internet has perpetuated the commoditization of travel.  Our goal is to make planning travel a personal experience again.  We work in tandem with our clients to attain detailed knowledge of likes, dislikes, past experiences, hobbies, expectations, dietary restrictions, mobility, etc.  This qualification process coupled with our constantly updated product knowledge offers our clientele high level options perfectly suited for each travel experience.</p>
                </Col>
                <Col sm={6}>
                <img className="img-fluid" src={"https://worldscholarshipforum.com/wp-content/uploads/2020/01/how-to-become-a-Travel-Agent.jpg"} alt="" />
                    
                </Col>
            </Row>
            </div>
            <div className="about-card">
            <h1 className="text-center mb-4">Travel can take on a different meaning to people, at different times.</h1>
            <Row>
                <Col sm={6}>
                    <img className="img-fluid" src={"https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwYWdlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"} alt="" />
                </Col>
                <Col sm={6}>
                    <ul>
                        <li>Did you just complete a large project at work and want a quick getaway to celebrate and relax?</li>
                        <li>Do you want to take your family on a vacation where there is an educational aspect –and the kids not know it is happening?
                        </li>
                        <li>Have you been dreaming of a destination since childhood and finally have the time and resources…but wanted to make sure the experience is perfect?
                        </li>
                        <li>Have you been to a destination a number of times and want a familiar but high touch experience?
                        </li>
                        <li>Do you want to step outside of your comfort zone and try something new?  Wellness, adventure, expedition, culinary immersion?
                        </li>
                    </ul>
                </Col>
            </Row>
            </div>
        </Container>
    );
};

export default About;