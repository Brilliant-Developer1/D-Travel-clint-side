import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feedback.css';
import img from "../../img/feedback.jpg"

const Feedback = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">What Customers Say About Us-</h1>
            <Row>
                <Col sm>
                    <img width="100%" src={img} alt="img" />
                </Col>
                <Col sm className="mt-4 text-center">
                    <div>
                    <p>
                    Farooq & the team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using D-Travel  for my holiday bookings again in the future!  
                    </p>
                    <small>- Mashrafi Bin M</small>
                    </div>
                    <div className="mt-4">
                    <p>
                    We were very happy with our holiday booking and our accommodation. We would book with D-Travel Agency again and definitely recommend their services to others.  
                    </p>
                    <small>- Shahana Maria</small>
                    </div>
                    <div className="mt-4">
                    <p>
                    Our booking was very easy to do online, I needed to make a few changes that I felt was not handled well at all.
                    Once I spoke to the Team Manager, he was absolutely amazing. Couldn't do enough to sort our issue out. Went way above a 5 star service. More then happy to use snd recommend this company.  
                    </p>
                    <small>- Jamal Sheikh</small>
                    </div>
                    <div className="mt-4">
                    <p>
                    Very friendly and easy communication. Prompt response to email questions. Kept me well informed about the trip. Thank you very much. Will definitely book my future trips with D-Travel again.  
                    </p>
                    <small>- Faria Tasnim</small>
                    </div>
                    <div className="mt-4">
                    <p>
                    Very professional service, I had one query and it was answered in a very timely manner.
                    I would be confident and happy to book through your company again.
                    <br />
                    Thank you  
                    </p>
                    <small>- Hassan Rahman</small>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Feedback;