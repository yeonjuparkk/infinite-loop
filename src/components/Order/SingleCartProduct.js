import React, { useState, useEffect } from "react";
import { fetchProductOrderById, fetchProductById } from "../../axios-services";

const SingleCartProduct = ({
  handleAddToCart,
  cart,
  setCart,
  cartProducts,
  setCartProducts,
  quantity,
  setQuantity,
}) => {
  console.log("singlecartProduct.js", cart);
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleCartProducts = async () => {
    // based on the orderId, grabbing all the products in an array!
    const orderCartProducts = await fetchProductOrderById(cart.id);
    setCartProducts(orderCartProducts);
    console.log("orderCartProduct", orderCartProducts);
    let productsStorage = [];
    for (let i = 0; i < orderCartProducts.length; i++) {
      const orderProductId = orderCartProducts[i].productId;
      const fetchedProduct = await fetchProductById(orderProductId);
      productsStorage[i] = fetchedProduct;
      console.log("fetchedProduct", fetchedProduct);
    }
    console.log("productsStorage", productsStorage);
    setProducts(productsStorage); // [{}, {}, {}]
  };

  useEffect(() => {
    handleCartProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        const { name, price } = product;
        return (
          <>
            <div>{name}</div>
            <div>Price ${price}</div>
          </>
        );
      })}
      <div>
        {cartProducts.map((cartProduct) => {
          const { quantity } = cartProduct;
          return (
            <div>
              <button> + </button>
              <div>{quantity}</div>
              <button> - </button>
            </div>
          );
        })}
        {/* {`${productQuantity}`} */}
      </div>
      <button> delete </button>
    </>
  );
};

export default SingleCartProduct;
