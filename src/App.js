import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

import {Link, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <div>
           <Header />
           <Link to="/">Home</Link>
           <Link to="/cart">Cart</Link>

           <Routes>
               <Route path="/" element={<Photos/>}/>

               <Route path="/cart" element={<Cart />}/>
           </Routes>
        </div>
    )
}