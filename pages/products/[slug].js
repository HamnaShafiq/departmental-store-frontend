import { useEffect, useState, useContext } from "react"
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { ProductCategoryContext } from '@/components/contexts/ProductCategoryContext';
import { CartContext } from '@/components/contexts/cartContext';

const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export default function Product() {
    const router = useRouter();
    const { slug } = router.query;
    const [productData, setProductData] = useState(null);
    const { fetchProductBySlug } = useContext(ProductCategoryContext);

    const { addItems } = useContext(CartContext);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                const response = await fetchProductBySlug(slug);
                setProductData(response.data)
            };
            fetchData();
        }

    }, [fetchProductBySlug, slug]);



    const handleRedirect = (id) => {
        { isAuthenticated ? addItems(id) : router.push('/sign-in') }
    }

    return (
        <>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                {productData?.images?.map((img, i) =>
                                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <img className=" h-100 w-100" src={`${ADMIN_API_URL}/${img.url}`} alt="product image" />
                                    </div>
                                )}
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{productData?.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">{productData?.numReviews}</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                            <p className="mb-4">{productData?.description}</p>


                            <div className="d-flex align-items-center mb-4 pt-2">
                                {/* <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div> */}
                                <button className="btn btn-primary px-3" onClick={() => handleRedirect(productData._id)}>
                                    <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="bg-light p-30">
                        <div className="nav nav-tabs mb-4">
                            <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>{productData?.description}</p>
                            </div>

                            <div className="tab-pane fade" id="tab-pane-3">
                                <h4 className="mb-4">Leave a review</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="review-name">Your Name</label>
                                        <input type="text" className="form-control" id="review-name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review-email">Your Email</label>
                                        <input type="email" className="form-control" id="review-email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Rating</label>
                                        <div className="d-flex">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="rating" id="rating-1" value="1" />
                                                <label className="form-check-label" htmlFor="rating-1">1</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="rating" id="rating-2" value="2" />
                                                <label className="form-check-label" htmlFor="rating-2">2</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="rating" id="rating-3" value="3" />
                                                <label className="form-check-label" htmlFor="rating-3">3</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="rating" id="rating-4" value="4" />
                                                <label className="form-check-label" htmlFor="rating-4">4</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="rating" id="rating-5" value="5" />
                                                <label className="form-check-label" htmlFor="rating-5">5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review-message">Your Review</label>
                                        <textarea id="review-message" className="form-control" rows="4" placeholder="Write your review here" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit Review</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


