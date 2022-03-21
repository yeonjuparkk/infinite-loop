import React from "react";
import "../../style/Cart.css";
import CartProducts from "./CartProducts";

const Cart = ({
  cart,
  setCart,
  handleAddToCart,
  cartProducts,
  setCartProducts,
}) => {

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch("/api/orders/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        }),
      });
      const { url } = await res.json();
      console.log("url", url);
      window.location = url;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>Cart</h2>
      {Object.keys(cart).length ? (
        Object.keys(cart).length > 0 && (
          <>
            <CartProducts
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
            <div className="checkout">
              <button className="checkout-button" onClick={handleSubmit}>
                continue to billing
              </button>
            </div>
          </>
        )
      ) : (
        <div> Oh no! Your cart is empty. </div>
      )}
    </>
  );
};

export default Cart;