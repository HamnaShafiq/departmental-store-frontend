import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CartContext = createContext();

const PRIVATE_API_URL = process.env.NEXT_PUBLIC_PRIVATE_API_URL;

export const CartProvider = ({ children }) => {
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
            console.log('itemCount', cartItems);

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

            const response = await axios.get(
                `${PRIVATE_API_URL}/api/cart/removeItem/${itemId}`,
                { headers: { "x-access-token": token } }
            );

            setCartItems(response.data.data)

            await fetchAllCartItems();

            toast.success("Product removed from cart.");
        } catch (error) {
            console.log("Error in adding to cart", error);

            toast.error(error.response?.data?.msg || "Failed to add to cart.");
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
        fetchAllCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ addItems, cartItems, removeItem ,updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
