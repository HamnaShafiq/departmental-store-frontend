export default function Placeorder() {
    //   const cart = {
    //     shippingAddress: {
    //       fullName: "John Doe",
    //       address: "123 Street Name",
    //       city: "City",
    //       postalCode: "12345",
    //       country: "Country"
    //     },
    //     paymentMethod: "PayPal",
    //     cartItems: [
    //       { _id: 1, name: "Product 1", slug: "product-1", image: "/images/p1.jpg", quantity: 1, price: 50 },
    //       { _id: 2, name: "Product 2", slug: "product-2", image: "/images/p2.jpg", quantity: 2, price: 30 }
    //     ],
    //     itemsPrice: 110,
    //     shippingPrice: 10,
    //     taxPrice: 16.5,
    //     totalPrice: 136.5,
    //   };

    return (

        <div className="container">
            <h1 className="my-3">Preview Order</h1>

            {/* <!-- Checkout Steps --> */}
            <div className="row checkout-steps mb-4">
                <div className="col active">Sign-In</div>
                <div className="col active">Shipping</div>
                <div className="col active">Payment</div>
                <div className="col">Place Order</div>
            </div>
            <div className="row">
                {/* <!-- Shipping and Payment Information --> */}
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Shipping</h5>
                            <p className="card-text">
                                <strong>Name:</strong> John Doe <br />
                                <strong>Address:</strong> 123 Street Name, City, 12345, Country
                            </p>
                            <a href="/shipping-add" className="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Payment</h5>
                            <p className="card-text">
                                <strong>Method:</strong> PayPal
                            </p>
                            <a href="/pay-method" className="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Items</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <img src="img/product-4.jpg" alt="Product 1" className="img-fluid rounded thumbnail" />
                                            <a href="/product/product-1">Product 1</a>
                                        </div>
                                        <div className="col-md-3">1</div>
                                        <div className="col-md-3">$50.00</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <img src="img/product-5.jpg" alt="Product 2" className="img-fluid rounded thumbnail" />
                                            <a href="/product/product-2">Product 2</a>
                                        </div>
                                        <div className="col-md-3">2</div>
                                        <div className="col-md-3">$30.00</div>
                                    </div>
                                </li>
                            </ul>
                            <a href="/cart" className="btn btn-link">Edit</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Order Summary --> */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">Items</div>
                                        <div className="col text-right">$110.00</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">Shipping</div>
                                        <div className="col text-right">$10.00</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">Tax</div>
                                        <div className="col text-right">$16.50</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col"><strong>Order Total</strong></div>
                                        <div className="col text-right"><strong>$136.50</strong></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Place Order</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
