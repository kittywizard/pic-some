import React, { useEffect } from "react";
import { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}) {

    const [picsArray, setPicsArray] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(data => data.json())
            .then(data => {
                setPicsArray(data);
            })
    }, []);

    function toggleFavorite(id) {
        console.log(id)
        const updatedObj = picsArray.filter(pic => pic.id === id)
        console.log(updatedObj)

        setPicsArray(prevState => {
            return [
                ...prevState,
                updatedObj
            ]
        })
    }

    return (
        <Context.Provider value={{picsArray, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
