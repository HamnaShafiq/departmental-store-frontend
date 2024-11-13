import { useEffect, useState } from "react"
import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

export default function Featured() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/product/`);
            setProducts(response.data.data);
            console.log('products', products);
        } catch (error) {
            console.log("Error in fetching categories", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRedirect = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            console.log('token', token);
            
            const response = await axios.get(
                `${PRIVATE_API_URL}/api/cart/addItem/${productId}`, 
                { headers: { 'x-access-token': token } }
            );
            toast.success('Product added to cart.');
        } catch (error) {
            console.log("Error in adding to cart", error);
            toast.error(error.response?.data?.msg || "Failed to add to cart.");
        }
    };

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    {products.filter((pro) => pro.featuredProduct).map((pro) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                        <div className="product-action">
                                        <button
                                            className="btn btn-outline-dark btn-square"
                                            onClick={() => handleRedirect(pro._id)}
                                        >
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                            <a className="btn btn-outline-dark btn-square" href=""><i
                                                className="far fa-heart"></i></a>
                                            <Link href={`/products/${pro.slug}`} className="btn btn-outline-dark btn-square">
                                                <i className="fa fa-search "></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="text-center py-4">
                                        <a className="h6 text-decoration-none text-truncate" href="">{pro.name}</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>${pro.price}</h5>
                                            <h6 className="text-muted ml-2">
                                                <del>$123.00</del>
                                            </h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}