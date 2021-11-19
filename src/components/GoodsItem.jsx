import React, { useContext } from "react";
import { ShopContext } from "../context.jsx";

function GoodsItem(props) {
  const { id, name, description, price, image } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="row" id={id}>
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <button
              onClick={() =>
                addToCart({
                  id,
                  name,
                  price,
                })
              }
              className="btn"
            >
              add
            </button>
            <p className="right">{price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GoodsItem };
