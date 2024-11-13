import { useContext } from "react"
import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-toastify";
import { ProductCategoryContext } from '@/components/contexts/ProductCategoryContext';
import { CartContext } from '@/components/contexts/cartContext';

const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

export default function Featured() {

    const { products } = useContext(ProductCategoryContext);

    const { addItems } = useContext(CartContext);

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
                                                onClick={() => addItems(pro._id)}
                                            >
                                                <i className="fa fa-shopping-cart"></i>
                                            </button>
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