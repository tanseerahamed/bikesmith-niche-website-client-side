import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/cycles', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h2 className="fs-1 fw-bold text-success">PLEASE ADD A SERVICE</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true})} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image URL" />
            <input className="btn btn-warning" type="submit" />
        </form>
        </div>
    );
};

export default AddService;