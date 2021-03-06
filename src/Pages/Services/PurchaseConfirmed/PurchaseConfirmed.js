import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth.js';
import { clearTheCart, getStoredCart } from '../../Utilities/fakedb.js';
import './PurchaseConfirmed.css';


const PurchaseConfirmed = () => {
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    };

    return (
        <div>
            <h2 className="text-primary fw-bold fs-1 text-center text-success">PLACE YOUR ORDER</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />

                    <input placeholder="City" defaultValue="" {...register("city")} />

                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input className="btn btn-success" type="submit" />
                    
                </form>
        </div>
    );
};

export default PurchaseConfirmed;