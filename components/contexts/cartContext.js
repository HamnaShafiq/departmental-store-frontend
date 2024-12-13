import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CartContext = createContext();

const PRIVATE_API_URL = process.env.NEXT_PUBLIC_USER_API_URL;

export const CartProvider = ({ children, isAuthenticated }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchAllCartItems = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get(
                `${PRIVATE_API_URL}/api/cart/`,
                { headers: { 'x-access-token': token } }
            );
            setCartItems(response.data.data)
        } catch (error) {
            console.log("Error in adding to cart", error);
            toast.error(error.response?.data?.msg || "Failed to read cart.");
        }
    };

    const addItems = async (productId) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${PRIVATE_API_URL}/api/cart/addItem/${productId}`,
                { headers: { "x-access-token": token } }
            );

            setCartItems(response.data.data)

            await fetchAllCartItems();

            toast.success("Product added to cart.");
        } catch (error) {
            console.log("Error in adding to cart", error);

            toast.error(error.response?.data?.msg || "Failed to add to cart.");
        }
    };

    const removeItem = async (itemId) => {
        try {
            const token = localStorage.getItem("token");

            await axios.get(
                `${PRIVATE_API_URL}/api/cart/removeItem/${itemId}`,
                { headers: { "x-access-token": token } }
            );

            const removeIt = cartItems.items.filter((it) => it._id.toString() !== itemId)

            console.log('removeIt',  removeIt)

            // console.log('CartItems', cartItems);
            
            setCartItems({...cartItems , items:removeIt})

            await fetchAllCartItems();

            toast.success("Product removed from cart.");
        } catch (error) {
            console.log("Error in removing item from cart", error);

            toast.error(error.response?.data?.msg || "Failed to removing item from cart.");
        }
    };


    const updateQuantity = async (productId, quantity) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${PRIVATE_API_URL}/api/cart/updateQuantity`,
                { productId, quantity },
                { headers: { "x-access-token": token } }
            );

            setCartItems(response.data.data)

            toast.success("Product updated from cart.");
        } catch (error) {
            console.log("Error in adding to cart", error);

            toast.error(error.response?.data?.msg || "Failed to add to cart.");
        }
    };

    useEffect(() => {
        { isAuthenticated && fetchAllCartItems(); }
    }, [isAuthenticated]);

    return (
        <CartContext.Provider value={{ addItems, cartItems, removeItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
