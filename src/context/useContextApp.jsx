import { createContext, useContext, useEffect, useState } from "react";

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncing, setDebouncing] = useState('');
    
    // ✅ Initialize cart from localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // ✅ Initialize addCart count from localStorage
    const [addCart, setAddCart] = useState(cart.length);

    // ✅ Function to add item to cart
    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        setAddCart(updatedCart.length);  // ✅ Update addCart count
        localStorage.setItem("cart", JSON.stringify(updatedCart));  // ✅ Store in localStorage
    };

    // ✅ Function to remove item from cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        setAddCart(updatedCart.length);  // ✅ Update addCart count
        localStorage.setItem("cart", JSON.stringify(updatedCart));  // ✅ Update localStorage
    };

    // ✅ Sync addCart count with localStorage when cart changes
    useEffect(() => {
        setAddCart(cart.length);
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const json = await response.json();
                if (json.products) {
                    setProducts(json.products || []);
                } else {
                    console.log('Products not found');
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ContextApi.Provider value={{
            products, setProducts, searchTerm, setSearchTerm,
            addCart, setAddCart, debouncing, setDebouncing,
            cart, setCart, addToCart, removeFromCart
        }}>
            {children}
        </ContextApi.Provider>
    );
};

// Custom hook
export const useContextGlobalApi = () => {
    const contextGlobalApi = useContext(ContextApi);
    if (!contextGlobalApi) {
        throw new Error("useContextGlobalApi must be used within a ContextProvider");
    }
    return contextGlobalApi;
};
