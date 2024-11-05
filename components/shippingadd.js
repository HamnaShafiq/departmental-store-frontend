export default function Shippingadd() {
    return (
        <>

            <div class="container small-container my-5">
                <h1 class="my-3">Shipping Address</h1>

                {/* <!-- Checkout Steps --> */}
                <div class="row checkout-steps mb-4">
                    <div class="col active">Sign-In</div>
                    <div class="col active">Shipping</div>
                    <div class="col">Payment</div>
                    <div class="col">Place Order</div>
                </div>

                {/* <!-- Shipping Address Form --> */}
                <form id="shippingForm">
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" required />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" required />
                    </div>
                    <div class="mb-3">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" required />
                    </div>
                    <div class="mb-3">
                        <label for="postalCode" class="form-label">Postal Code</label>
                        <input type="text" class="form-control" id="postalCode" required />
                    </div>
                    <div class="mb-3">
                        <label for="country" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country" required />
                    </div>
                    <button type="button" id="continueButton" class="btn btn-primary">Continue</button>
                </form>
            </div>
        </>
    )
}