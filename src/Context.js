import React, { useEffect } from "react";
import { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}) {

    const [picsArray, setPicsArray] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(data => data.json())
            .then(data => {
                setPicsArray(data);
            })
    }, []);

    function toggleFavorite(id) {
        const updatedArray = picsArray.map(pic => id === pic.id ? {...pic, isFavorite: !pic.isFavorite} : pic)

        setPicsArray(updatedArray)
    }

    function addToCart(id) {
        const cart = picsArray.filter(pic => id === pic.id); //pulling an array. just need the object 
        setCartItems(prevState => [...prevState, cart]);
    }

    return (
        <Context.Provider value={{picsArray, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
