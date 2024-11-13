export default function Orderpage() {
    return (
        <>
            <div className="container my-5">
                <h1>Order #12345</h1>

                {/* <!-- Loading Spinner --> 
                <div id="loadingBox" style={{display: "none"}} className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                {/* 
                <!-- Error Message --> 
                <div id="messageBox" style={{display: "none"}}  className="alert alert-danger" role="alert">
                    Error loading order details
                </div>*/}

                {/* <!-- Order Details --> */}
                <div id="orderDetails" style={{display: "none"}} >
                    <div className="row">
                        <div className="col-md-8">
                            {/* <!-- Shipping Card --> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Shipping</h5>
                                    <p><strong>Name:</strong> John Doe</p>
                                    <p><strong>Address:</strong> 123 Main St, Springfield, IL</p>
                                    <div id="deliveryStatus" className="alert alert-warning">Not Delivered</div>
                                </div>
                            </div>
                            {/* 
        <!-- Payment Card --> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Payment</h5>
                                    <p><strong>Method:</strong> PayPal</p>
                                    <div id="paymentStatus" className="alert alert-warning">Not Paid</div>
                                </div>
                            </div>

                            {/* <!-- Items Card --> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Items</h5>
                                    <ul className="list-group list-group-flush" id="itemsList">
                                        {/* <!-- Items will be dynamically populated here --> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            {/* <!-- Order Summary Card --> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Order Summary</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Items</span>
                                            <span>$200.00</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Shipping</span>
                                            <span>$15.00</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Tax</span>
                                            <span>$10.00</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <strong>Order Total</strong>
                                            <strong>$225.00</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- PayPal Button Placeholder --> */}
                            <div id="paypalButtonContainer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}