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

        <div classname="container">
            <h1 classname="my-3">Preview Order</h1>

            {/* <!-- Checkout Steps --> */}
            <div classname="row checkout-steps mb-4">
                <div classname="col active">Sign-In</div>
                <div classname="col active">Shipping</div>
                <div classname="col active">Payment</div>
                <div classname="col">Place Order</div>
            </div>
            <div classname="row">
                {/* <!-- Shipping and Payment Information --> */}
                <div classname="col-md-8">
                    <div classname="card mb-3">
                        <div classname="card-body">
                            <h5 classname="card-title">Shipping</h5>
                            <p classname="card-text">
                                <strong>Name:</strong> John Doe <br />
                                <strong>Address:</strong> 123 Street Name, City, 12345, Country
                            </p>
                            <a href="/shipping-add" classname="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div classname="card mb-3">
                        <div classname="card-body">
                            <h5 classname="card-title">Payment</h5>
                            <p classname="card-text">
                                <strong>Method:</strong> PayPal
                            </p>
                            <a href="/pay-method" classname="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div classname="card mb-3">
                        <div classname="card-body">
                            <h5 classname="card-title">Items</h5>
                            <ul classname="list-group list-group-flush">
                                <li classname="list-group-item">
                                    <div classname="row align-items-center">
                                        <div classname="col-md-6">
                                            <img src="img/product-4.jpg" alt="Product 1" classname="img-fluid rounded thumbnail" />
                                            <a href="/product/product-1">Product 1</a>
                                        </div>
                                        <div classname="col-md-3">1</div>
                                        <div classname="col-md-3">$50.00</div>
                                    </div>
                                </li>
                                <li classname="list-group-item">
                                    <div classname="row align-items-center">
                                        <div classname="col-md-6">
                                            <img src="img/product-5.jpg" alt="Product 2" classname="img-fluid rounded thumbnail" />
                                            <a href="/product/product-2">Product 2</a>
                                        </div>
                                        <div classname="col-md-3">2</div>
                                        <div classname="col-md-3">$30.00</div>
                                    </div>
                                </li>
                            </ul>
                            <a href="/cart" classname="btn btn-link">Edit</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Order Summary --> */}
                <div classname="col-md-4">
                    <div classname="card">
                        <div classname="card-body">
                            <h5 classname="card-title">Order Summary</h5>
                            <ul classname="list-group list-group-flush">
                                <li classname="list-group-item">
                                    <div classname="row">
                                        <div classname="col">Items</div>
                                        <div classname="col text-right">$110.00</div>
                                    </div>
                                </li>
                                <li classname="list-group-item">
                                    <div classname="row">
                                        <div classname="col">Shipping</div>
                                        <div classname="col text-right">$10.00</div>
                                    </div>
                                </li>
                                <li classname="list-group-item">
                                    <div classname="row">
                                        <div classname="col">Tax</div>
                                        <div classname="col text-right">$16.50</div>
                                    </div>
                                </li>
                                <li classname="list-group-item">
                                    <div classname="row">
                                        <div classname="col"><strong>Order Total</strong></div>
                                        <div classname="col text-right"><strong>$136.50</strong></div>
                                    </div>
                                </li>
                                <li classname="list-group-item">
                                    <div classname="d-grid">
                                        <button type="button" classname="btn btn-primary btn-block">Place Order</button>
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
