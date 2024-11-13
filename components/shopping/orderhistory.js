import { toast } from "react-toastify";
import axios from 'axios';
import { useEffect, useState } from "react"

const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

export default function History() {
    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get(
                `${PRIVATE_API_URL}/api/cart/`,
                { headers: { 'x-access-token': token } }
            );
            toast.success('All products fetched succcessfully.');
            console.log('response', response);
        } catch (error) {
            console.log("Error in adding to cart", error);
            toast.error(error.response?.data?.msg || "Failed to read cart.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div class="container mt-5">
                <h1>Order History</h1>

                {/* <div id="loadingBox"className="spinner-border text-primary" role="status">
                </div>

                <div id="messageBox" className="alert alert-danger" role="alert">
                    Error loading order history
                </div> */}

                <table class="table table-bordered mt-3" id="orderTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Delivered</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="orderBody">
                    </tbody>
                </table>
            </div>
        </>
    )
}