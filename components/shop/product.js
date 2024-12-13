import { useEffect, useContext } from "react";
import Link from 'next/link';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CartContext } from '@/components/contexts/cartContext';

const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;


export default function Products({ categoryData }) {

    const router = useRouter()

    const { addItems } = useContext(CartContext);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    if (!categoryData) {
        return <div>Loading...</div>;
    }

    const handleRedirect = (id) => {
        { isAuthenticated ? addItems(id) : router.push('/sign-in') }
    }

    return (
        <>
            <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            {/* <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div> */}
                            {/* <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Latest</a>
                                        <a className="dropdown-item" href="#">Popularity</a>
                                        <a className="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">10</a>
                                        <a className="dropdown-item" href="#">20</a>
                                        <a className="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {categoryData.length > 0 ? (
                        categoryData.map((pro, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={index}>
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        {/* {pro.images?.map((p) => {
                                            
                                        })} */}
                                        <img className="img-fluid w-100" src={`${ADMIN_API_URL}/${pro.images[0]?.url}`} alt={pro.name} />
                                        <div className="product-action">
                                            <button
                                                className="btn btn-outline-dark btn-square"
                                                onClick={() => handleRedirect(pro._id)}
                                            >
                                                <i className="fa fa-shopping-cart"></i>
                                            </button>
                                            {/* <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a> */}
                                            <Link href={`/products/${pro.slug}`} className="btn btn-outline-dark btn-square">
                                                <i className="fa fa-search "></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="h6 text-decoration-none text-truncate" href="">{pro.name}</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>${pro.price}</h5>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="far fa-star text-primary mr-1"></small>
                                            <small className="far fa-star text-primary mr-1"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found in this category.</p>
                    )}

                    {/* <div className="col-12">
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
            </div>
        </>
    );
}
