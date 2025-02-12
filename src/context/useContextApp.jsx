import { createContext, useContext, useEffect, useState } from "react";

export const ContextApi = createContext();

export const ContextApiProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncing, setDebouncing ] = useState('');
    const [addCart, setAddCart] = useState(0);

    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const response = await fetch('https://dummyjson.com/products');
                const json = await response.json();
                console.log(json.products);

                if(json.products){
                    setProducts(json.products || [])
                }
                else{
                    console.log('products not found')

                }
            }
            catch(error)
                {
                    console.log(error);

            }
        }
        fetchProducts();

    }, []);

    return (
        <ContextApi.Provider value={{products, setProducts, searchTerm, setSearchTerm,  addCart, setAddCart,
         debouncing, setDebouncing}}>
            {children}
        </ContextApi.Provider>
    )
}

// Custome hooks
export const useContextGlobalApi = () => {
    const contextGlobalApi =  useContext(ContextApi);
    if(!contextGlobalApi){
        throw new Error(
            "useContextGlobalApi must be used within a ContextProvider"
          );
    }

    return contextGlobalApi;
}
