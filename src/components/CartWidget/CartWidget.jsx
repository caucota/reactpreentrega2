import React from "react";
import Cart from "../Cart/Cart";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <p className="numero__cart">2</p>
            <Cart />
        </div>
    );
};

export default CartWidget; 