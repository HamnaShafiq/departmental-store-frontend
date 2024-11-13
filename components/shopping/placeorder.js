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

        <div class="container">

            {/* <!-- Checkout Steps --> */}
            <div class="row checkout-steps mb-4">
                <div class="col active">Sign-In</div>
                <div class="col active">Shipping</div>
                <div class="col active">Payment</div>
                <div class="col">Place Order</div>
            </div>
            <h1 class="my-3">Preview Order</h1>
            <div class="row">
                {/* <!-- Shipping and Payment Information --> */}
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Shipping</h5>
                            <p class="card-text">
                                <strong>Name:</strong> John Doe <br />
                                <strong>Address:</strong> 123 Street Name, City, 12345, Country
                            </p>
                            <a href="/shipping-add" class="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Payment</h5>
                            <p class="card-text">
                                <strong>Method:</strong> PayPal
                            </p>
                            <a href="/pay-method" class="btn btn-link">Edit</a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Items</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <img src="img/product-4.jpg" alt="Product 1" class="img-fluid rounded thumbnail" />
                                            <a href="/product/product-1">Product 1</a>
                                        </div>
                                        <div class="col-md-3">1</div>
                                        <div class="col-md-3">$50.00</div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <img src="img/product-5.jpg" alt="Product 2" class="img-fluid rounded thumbnail" />
                                            <a href="/product/product-2">Product 2</a>
                                        </div>
                                        <div class="col-md-3">2</div>
                                        <div class="col-md-3">$30.00</div>
                                    </div>
                                </li>
                            </ul>
                            <a href="/cart" class="btn btn-link">Edit</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Order Summary --> */}
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Order Summary</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col">Items</div>
                                        <div class="col text-right">$110.00</div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col">Shipping</div>
                                        <div class="col text-right">$10.00</div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col">Tax</div>
                                        <div class="col text-right">$16.50</div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col"><strong>Order Total</strong></div>
                                        <div class="col text-right"><strong>$136.50</strong></div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-grid">
                                        <button type="button" class="btn btn-primary btn-block">Place Order</button>
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