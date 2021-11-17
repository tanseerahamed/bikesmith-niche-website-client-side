import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import user1 from '../../../images/user-1.png';
import user2 from '../../../images/user-2.png';

const Review = () => {
    return (
        
        <div>
            <h1 className="text-center text-success fw-bold m-3">HAPPY CLIENTS SAY</h1>
            <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="w-50 fluid d-block mx-auto my-auto" variant="top" src={user1} />
                <Card.Body>
                    <Card.Title className="text-center fs-4 my-2">Abdullah Ahsan</Card.Title>
                    <Card.Text className="my-2">
                    I find this bycycle so well-equipped that I must admire BIKESMITH! Recommend Everyone without any hesitation and second thought.
                    </Card.Text>
                    <Card.Text>
                    <div className="d-flex justify-content-center my-2">
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="far fa-star px-1 text-warning"></i>
                    </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="w-50 fluid d-block mx-auto my-auto" variant="top" src={user2} />
                <Card.Body>
                    <Card.Title className="text-center fs-4 my-2">Raihana Mahmud</Card.Title>
                    <Card.Text className="my-2">
                    I find this bycycle so well-equipped that I must admire BIKESMITH! Recommend Everyone without any hesitation and second thought.
                    </Card.Text>
                    <Card.Text>
                    <div className="d-flex justify-content-center my-2">
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="far fa-star px-1 text-warning"></i>
                    </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>            
            <Card style={{ width: '18rem' }}>
                <Card.Img className="w-50 fluid d-block mx-auto my-auto" variant="top" src={user1} />
                <Card.Body>
                    <Card.Title className="text-center fs-4 my-2">Niaz Morshed</Card.Title>
                    <Card.Text className="my-2">
                    I find this bycycle so well-equipped that I must admire BIKESMITH! Recommend Everyone without any hesitation and second thought.
                    </Card.Text>
                    <Card.Text>
                    <div className="d-flex justify-content-center my-2">
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="fas fa-star heading-font-color px-1"></i>
                        <i className="far fa-star px-1 text-warning"></i>
                    </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Review;



