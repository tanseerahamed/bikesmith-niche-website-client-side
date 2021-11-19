import React, { useEffect, useState } from 'react';
import './ManageServices.css';


const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/cycles')
        .then(res => res.json())
        .then(data => setServices(data))
    } , []);

    const handleDelete = id => {
        const url = `http://localhost:5000/cycles/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted successfully')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })

    }
    return (
        <div>
            <h2 className="fs-1 fw-bold text-success">MANAGE SERVICES</h2>
            {
                services.map(service => 
                <div className="manage-service" key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-warning w-50  mx-auto">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;