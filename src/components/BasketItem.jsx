import React, { useContext } from "react";
import { ShopContext } from "../context.jsx";

function BasketItem(props) {
  const { id, price, name, quantity } = props;
  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);

  return (
    <li class="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{" "}
      = {price * quantity}$
      <span className="secondary-content">
        <i className="material-icons" onClick={() => removeFromBasket(id)}>
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
