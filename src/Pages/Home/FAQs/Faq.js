import React from 'react';
import { Accordion, Card, CardGroup } from 'react-bootstrap';
import faq from '../../../images/faq.png';

const Faq = () => {
    return (
    <div>
        <h1 className="text-center text-success fw-bold my-3">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
        <CardGroup>
        <Card.Text className="col-lg-6 col-md-12">
            <Card.Img className="w-75 fluid" variant="top" src={faq} />
        </Card.Text>
        <Card.Text className="col-lg-6 col-md-12">
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header> What are the most important things I should know about riding a cycle?</Accordion.Header>
            <Accordion.Body>
            Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>How can I tell if my helmet is old and I need a new one?</Accordion.Header>
            <Accordion.Body>
            It can be difficult to find the things that will help you, as different things help different people. It’s important to be open to a range of approaches and to be committed to finding the right help and to continue to be hopeful, even when some things don’t work out.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>My cycle has been in storage. Is it safe to ride?</Accordion.Header>
            <Accordion.Body>
            Make sure your drive train shifts gears correctly. Ride around and shift up and down making sure you can access all your gear combinations. Cable stretching can also make this not work correctly.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header> What rules should I follow when riding my cycle?</Accordion.Header>
            <Accordion.Body>
            Make sure your drive train shifts gears correctly. Ride around and shift up and down making sure you can access all your gear combinations. Cable stretching can also make this not work correctly.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header> How can I tell if my helmet is old and I need a new one?</Accordion.Header>
            <Accordion.Body>
            Be visible at all times. - Wear bright and visible clothes. Reflective stripes ads viability. Always stay out of blind zones. Alert other drivers before entering their blind zone.
            Everyone in the road is dumb and partially blind. - Well, just imagine so and be prepared for an unexpected turn or braking.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Card.Text>
        </CardGroup>
    </div>        

    );
};

export default Faq;
