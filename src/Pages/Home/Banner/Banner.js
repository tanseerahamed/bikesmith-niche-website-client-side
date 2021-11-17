import React from 'react';
import { Card } from 'react-bootstrap';
import bannerImage from '../../../images/bannerImage.jpg'

const Banner = () => {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={bannerImage} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title className="text-warning fs-1 fw-bold">BikeSmith</Card.Title>
            <Card.Text className="text-warning fst-italic">
            Get Your Dream Cycle Right Now!
            </Card.Text>
        </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;