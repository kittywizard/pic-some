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

    return (
        <Context.Provider value={{picsArray}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
