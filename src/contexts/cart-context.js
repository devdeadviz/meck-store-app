import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const cartData = await axios.get("/api/user/cart", {
          headers: {
            authorization: "token",
          },
        });
        setCartItems(cartData.data.cart);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
