export default function Paymethod() {
    return (
        <>
            <div className="container small-container my-5">
                <h1 className="my-3">Payment Method</h1>

                {/* <!-- Checkout Steps --> */}
                <div className="row checkout-steps mb-4">
                    <div className="col active">Sign-In</div>
                    <div className="col active">Shipping</div>
                    <div className="col active">Payment</div>
                    <div className="col">Place Order</div>
                </div>

                {/* <!-- Payment Method Form --> */}
                <form id="paymentForm">
                    <div className="mb-3">
                        <input type="radio" className="form-check-input" name="paymentMethod" id="PayPal" value="PayPal" checked />
                        <label className="form-check-label" for="PayPal">PayPal</label>
                    </div>
                    <div className="mb-3">
                        <input type="radio" className="form-check-input" name="paymentMethod" id="Stripe" value="Stripe" />
                        <label className="form-check-label" for="Stripe">Stripe</label>
                    </div>
                    <div className="mb-3">
                        <button type="button" id="continueButton" className="btn btn-primary">Continue</button>
                    </div>
                </form>
            </div>
        </>
    )
}