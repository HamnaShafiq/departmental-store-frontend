export default function Shippingadd() {
    return (
        <>

            <div classname="container small-container my-5">
                <h1 classname="my-3">Shipping Address</h1>

                {/* <!-- Checkout Steps --> */}
                <div classname="row checkout-steps mb-4">
                    <div classname="col active">Sign-In</div>
                    <div classname="col active">Shipping</div>
                    <div classname="col">Payment</div>
                    <div classname="col">Place Order</div>
                </div>

                {/* <!-- Shipping Address Form --> */}
                <form id="shippingForm">
                    <div classname="mb-3">
                        <label for="fullName" classname="form-label">Full Name</label>
                        <input type="text" classname="form-control" id="fullName" required />
                    </div>
                    <div classname="mb-3">
                        <label for="address" classname="form-label">Address</label>
                        <input type="text" classname="form-control" id="address" required />
                    </div>
                    <div classname="mb-3">
                        <label for="city" classname="form-label">City</label>
                        <input type="text" classname="form-control" id="city" required />
                    </div>
                    <div classname="mb-3">
                        <label for="postalCode" classname="form-label">Postal Code</label>
                        <input type="text" classname="form-control" id="postalCode" required />
                    </div>
                    <div classname="mb-3">
                        <label for="country" classname="form-label">Country</label>
                        <input type="text" classname="form-control" id="country" required />
                    </div>
                    <button type="button" id="continueButton" classname="btn btn-primary">Continue</button>
                </form>
            </div>
        </>
    )
}