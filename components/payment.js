export default function Paymethod() {
    return (
        <>
            <div class="container small-container my-5">
                <h1 class="my-3">Payment Method</h1>

                {/* <!-- Checkout Steps --> */}
                <div class="row checkout-steps mb-4">
                    <div class="col active">Sign-In</div>
                    <div class="col active">Shipping</div>
                    <div class="col active">Payment</div>
                    <div class="col">Place Order</div>
                </div>

                {/* <!-- Payment Method Form --> */}
                <form id="paymentForm">
                    <div class="mb-3">
                        <input type="radio" class="form-check-input" name="paymentMethod" id="PayPal" value="PayPal" checked />
                        <label class="form-check-label" for="PayPal">PayPal</label>
                    </div>
                    <div class="mb-3">
                        <input type="radio" class="form-check-input" name="paymentMethod" id="Stripe" value="Stripe" />
                        <label class="form-check-label" for="Stripe">Stripe</label>
                    </div>
                    <div class="mb-3">
                        <button type="button" id="continueButton" class="btn btn-primary">Continue</button>
                    </div>
                </form>
            </div>
        </>
    )
}