export default function Shippingadd() {
    return (
        <>

            <div className="container small-container my-5">
                <h1 className="my-3">Shipping Address</h1>

                {/* <!-- Checkout Steps --> */}
                <div className="row checkout-steps mb-4">
                    <div className="col active">Sign-In</div>
                    <div className="col active">Shipping</div>
                    <div className="col">Payment</div>
                    <div className="col">Place Order</div>
                </div>

                {/* <!-- Shipping Address Form --> */}
                <form id="shippingForm">
                    <div className="mb-3">
                        <label for="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" required />
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" required />
                    </div>
                    <div className="mb-3">
                        <label for="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" required />
                    </div>
                    <div className="mb-3">
                        <label for="postalCode" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" id="postalCode" required />
                    </div>
                    <div className="mb-3">
                        <label for="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" required />
                    </div>
                    <button type="button" id="continueButton" className="btn btn-primary">Continue</button>
                </form>
            </div>
        </>
    )
}