import { useFormik } from "formik"
import * as Yup from 'yup';
import { CartContext } from '@/components/contexts/cartContext';
import { useContext } from "react";

const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

export default function Checkout() {

    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    const calculatePrice = (price, quantity) => {
        return price * quantity;
        console.log(price * quantity);
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            postalCode: "",
            city: "",
            totalAmount: "",
            addressLine1: "",
            items: "",
            totalAmount: "",
            PaymentMethod: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('firstName is required'),
            lastName: Yup.string().required('lastName is required'),
            phoneNumber: Yup.string().required('phoneNumber is required'),
            postalCode: Yup.string().required('postalCode is required'),
            city: Yup.string().required('city is required'),
            addressLine1: Yup.string().required('addressLine1 is required'),
            PaymentMethod: Yup.string().required('PaymentMethod is required')
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${PRIVATE_API_URL}/api/order/create`, values,
                    { headers: { "x-access-token": token } })
                console.log('values', values);

                toast.success("Order placed successfully.");
            } catch (error) {
                console.log("Error in adding to cart", error);

                toast.error(error.response?.data?.msg || "Failed to add to cart.");
            }
        }
    })
    return (
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row px-xl-5">
                        <div className="col-lg-8">
                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
                            <div className="bg-light p-30 mb-5">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="John" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text" placeholder="Doe" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="example@email.com" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="+123 456 789" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 1</label>
                                        <input className="form-control" type="text" placeholder="123 Street" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 2</label>
                                        <input className="form-control" type="text" placeholder="123 Street" />
                                    </div>

                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input className="form-control" type="text" placeholder="Lahore" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>ZIP Code</label>
                                        <input className="form-control" type="text" placeholder="123" />
                                    </div>
                                    {/* <div className="col-md-12 form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="newaccount" />
                                            <label className="custom-control-label" for="newaccount">Create an account</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="shipto" />
                                            <label className="custom-control-label" for="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="collapse mb-5" id="shipping-address">
                                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                                <div className="bg-light p-30">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label>First Name</label>
                                            <input className="form-control" type="text" placeholder="John" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text" placeholder="Doe" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>E-mail</label>
                                            <input className="form-control" type="text" placeholder="example@email.com" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Mobile No</label>
                                            <input className="form-control" type="text" placeholder="+123 456 789" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Address Line 1</label>
                                            <input className="form-control" type="text" placeholder="123 Street" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Address Line 2</label>
                                            <input className="form-control" type="text" placeholder="123 Street" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>Country</label>
                                            <select className="custom-select">
                                                <option selected>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>City</label>
                                            <input className="form-control" type="text" placeholder="New York" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>State</label>
                                            <input className="form-control" type="text" placeholder="New York" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label>ZIP Code</label>
                                            <input className="form-control" type="text" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
                            <div className="bg-light p-30 mb-5">
                                <div className="border-bottom">
                                    <h6 className="mb-3">Products</h6>
                                    {cartItems?.items?.map(item => (
                                        <div key={item.product._id} className="d-flex justify-content-between">
                                            <p>{item.product.name}</p>
                                            <p>${item.product.price}</p>
                                            <p>{item.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-bottom pt-3 pb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h6>Subtotal</h6>
                                        <h6>$150</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Shipping</h6>
                                        <h6 className="font-weight-medium">$10</h6>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>Total</h5>
                                        <h5>$160</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                                <div className="bg-light p-30">

                                    <div className="form-group mb-4">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" checked className="custom-control-input" name="payment" id="banktransfer" />
                                            <label className="custom-control-label" for="banktransfer">Cash on Delivery</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}