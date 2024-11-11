export default function Paymethod() {
    return (
        <>
            <div classname="container small-container my-5">
                <h1 classname="my-3">Payment Method</h1>

                {/* <!-- Checkout Steps --> */}
                <div classname="row checkout-steps mb-4">
                    <div classname="col active">Sign-In</div>
                    <div classname="col active">Shipping</div>
                    <div classname="col active">Payment</div>
                    <div classname="col">Place Order</div>
                </div>

                {/* <!-- Payment Method Form --> */}
                <form id="paymentForm">
                    <div classname="mb-3">
                        <input type="radio" classname="form-check-input" name="paymentMethod" id="PayPal" value="PayPal" checked />
                        <label classname="form-check-label" for="PayPal">PayPal</label>
                    </div>
                    <div classname="mb-3">
                        <input type="radio" classname="form-check-input" name="paymentMethod" id="Stripe" value="Stripe" />
                        <label classname="form-check-label" for="Stripe">Stripe</label>
                    </div>
                    <div classname="mb-3">
                        <button type="button" id="continueButton" classname="btn btn-primary">Continue</button>
                    </div>
                </form>
            </div>
        </>
    )
}