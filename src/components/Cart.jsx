import React, { useContext } from "react";
import { ShopContext } from "../context.jsx";

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className="cart indigo lighten-2white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
