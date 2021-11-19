import React, { useState, useEffect, useContext } from "react";

import { ShopContext } from "../context.jsx";

import { Preloader } from "./Preloader.jsx";
import { GoodsList } from "./GoodsList.jsx";
import { Cart } from "./Cart.jsx";
import { BasketList } from "./BasketList.jsx";
import { Alert } from "./Alert.jsx";

function Shop() {
  const { goods, loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function load() {
    fetch(`https://fortniteapi.io/v1/shop?lang=en`, {
      headers: {
        Authorization: "38474adb-62d5d427-75febe65-7817268c",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
