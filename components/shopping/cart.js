import { useContext, useState, useEffect } from "react";
import { CartContext } from '@/components/contexts/cartContext';
import axios from "axios";
import { toast } from "react-toastify";

export default function Cart() {
    const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
    const [updatedCartItems, setUpdatedCartItems] = useState(cartItems?.items || []);
    const [totalPrice, setTotalPrice] = useState(0);

    // Recalculate the subtotal and total price whenever cart items change
    useEffect(() => {
        if (updatedCartItems.length > 0) {
            const subtotal = updatedCartItems.reduce((acc, item) => {
                return acc + (item.product.price * item.quantity);
            }, 0);
            setTotalPrice(subtotal + 10); // Add shipping (e.g., $10)
        }
    }, [updatedCartItems]);

    // Update quantity in cart
    const handleUpdateQuantity = (productId, quantity) => {
        if (quantity < 1) return; // Prevent negative quantities

        updateQuantity(productId, quantity)
            .then(() => {
                // Fetch the updated cart items after quantity change
                setUpdatedCartItems(updatedCartItems.map(item => 
                    item.product._id === productId ? { ...item, quantity } : item
                ));
            })
            .catch(err => {
                toast.error("Failed to update quantity.");
            });
    };

    const handleIncrement = (productId) => {
        const item = updatedCartItems.find(item => item.product._id === productId);
        handleUpdateQuantity(productId, item.quantity + 1);
    };

    const handleDecrement = (productId) => {
        const item = updatedCartItems.find(item => item.product._id === productId);
        if (item.quantity > 1) {
            handleUpdateQuantity(productId, item.quantity - 1);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {updatedCartItems?.map((item) => (
                                <tr key={item._id}>
                                    <td className="align-middle">
                                        <img src="img/product-1.jpg" alt="" style={{ width: "50px" }} />
                                        {item.product?.name}
                                    </td>
                                    <td className="align-middle">${item.product?.price}</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-minus" onClick={() => handleDecrement(item.product._id)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm bg-secondary border-0 text-center"
                                                value={item.quantity}
                                                onChange={(e) => handleUpdateQuantity(item.product._id, parseInt(e.target.value))}
                                            />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-plus" onClick={() => handleIncrement(item.product._id)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.product._id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col-lg-4">
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span className="bg-secondary pr-3">Cart Summary</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>${totalPrice - 10}</h6> {/* Subtotal without shipping */}
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">$10</h6> {/* Shipping */}
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>${totalPrice}</h5> {/* Total with shipping */}
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
