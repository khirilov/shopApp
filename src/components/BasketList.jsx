import React, { useContext } from "react";
import { ShopContext } from "../context.jsx";
import { BasketItem } from "./BasketItem.jsx";

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul class="collection basket-list">
      <li class="collection-item active">Goods:</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li class="collection-item">Nothing here</li>
      )}
      <li class="collection-item active">Total price: {totalPrice}$</li>
      <i className="material-icons close-basket" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
