import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Showroom = () => {
    return (
        <div>
            <h1 class="text-center text-success fw-bold m-3">FIND US EASILY!</h1>
            <CardGroup className="row gx-5">
                <Card.Text className="col-lg-6 col-sm-12 my-3">
                <div class="p-3 border bg-dark">
                <h4 class="text-white bg-primary d-inline my-3">FIND SHOWROOMS</h4>
                <p class="text-white mt-3">Find your nearest showroom from our 200+ showrooms all across the country.</p>
                <a href="https://velocebike.com/bangladesh/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-warning">Find Now</button></a>
                </div>
                </Card.Text>
                <Card.Text className="col-lg-6 col-sm-12 my-3">
                <div class="p-3 border bg-dark">
                <h4 class="text-white bg-primary d-inline my-3">FIND SERVICE CENTERS</h4>
                <p class="text-white mt-3">Find your nearest service point from our 150+ service centers all across the country.</p>
                <a href="https://velocebike.com/bangladesh/" target="_blank" rel="noreferrer" ><button type="button" class="btn btn-warning">Find Now</button></a>
                </div>
                </Card.Text>
            </CardGroup>
        </div>
    );
};

export default Showroom;