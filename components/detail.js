
export default function Detail() {
    return (
        <>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src="img/product-1.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-2.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-3.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-4.jpg" alt="Image" />
                                </div>
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
                            <h3>Product Name Goes Here</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                            <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr 
                                erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                            {/* <div className="d-flex mb-3">
                                <strong className="text-dark mr-3">Sizes:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                        <label className="custom-control-label" htmlFor="size-1">XS</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                        <label className="custom-control-label" htmlFor="size-2">S</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                        <label className="custom-control-label" htmlFor="size-3">M</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                        <label className="custom-control-label" htmlFor="size-4">L</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                        <label className="custom-control-label" htmlFor="size-5">XL</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                        <label className="custom-control-label" htmlFor="color-1">Black</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                        <label className="custom-control-label" htmlFor="color-2">White</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                        <label className="custom-control-label" htmlFor="color-3">Red</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                        <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                        <label className="custom-control-label" htmlFor="color-5">Green</label>
                                    </div>
                                </form>
                            </div> */}
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: "130px" }}>
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
                                </div>
                                <button className="btn btn-primary px-3">
                                    <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                                </button>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="bg-light p-30">
                            <div className="nav nav-tabs mb-4">
                                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea...</p>
                                    {/* Further content */}
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea...</p>
                                    {/* Further content */}
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
            </div>
        </>
    )
}


