import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context.jsx";

function Alert() {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1500);
    return () => {
      clearInterval(timerId);
    };
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} added to the basket</div>
    </div>
  );
}

export { Alert };
