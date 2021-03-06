import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id,name, price, description, img} = props.service;
    return (
        <div className="single-member">
            <img className="mt-2" src={img} alt="" fluid />
            <h4 className='text-success fw-bolder'>{name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
            <Link to={`/purchase/${_id}`}>
            <button className="btn btn-warning mb-2">Get Your DREAM! : {name}</button>
            </Link>
        </div>
    );
};

export default Service;