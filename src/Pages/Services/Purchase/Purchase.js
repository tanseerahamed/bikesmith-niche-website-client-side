import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();

    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/cycles/${_id}`)
        .then(res => res.json())
        .then(data => setService(data));
    } , [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <img className="w-50" src={service.img} alt="" />
            <p>{service.description}</p>
            <h3>Price: {service.price}</h3>
            <button className="btn btn-info m-3 p-2"><Link className="text-decoration-none fw-bolder text-dark" to='/purchaseConfirmed'>Book Now: {service.name}</Link></button>
        </div>
    );
};

export default Purchase;