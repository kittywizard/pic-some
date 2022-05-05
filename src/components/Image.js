import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import proptypes from "proptypes";

export default function Image({className, img}) {

    const [isHovered, setIsHovered] = useState(false);
    const {addToCart, toggleFavorite, cartItems, removeFromCart} = useContext(Context);

    function cartIcon() {
        //check array for cart items (use .some())
        const cartCheck = cartItems.some(pic => pic.id === img.id)
        if(cartCheck) {
            return <div className="cart" onClick={addToCart(img)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
                        </svg>
                    </div>
        } else {
            return <div className="cart" onClick={removeFromCart(img.id)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/>
                        </svg>
                    </div>
        }        
    }

    return (
        <div className={`${className} image-container`} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
        >
        <img src={img.url} 
            className="image-grid"
            alt="generic"
        />

        {isHovered &&
                <div>
                        <div className="favorite" onClick={() => toggleFavorite(img.id)}>
                            {img.isFavorite ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/>
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/>
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"/>
                                    </svg> 
                        }

                        </div>
                        {cartIcon()}
                </div>
        }
        </div>
    )
}

Image.propTypes = {
    className: proptypes.string,
    url: proptypes.string,
    idFavorite: proptypes.bool
}