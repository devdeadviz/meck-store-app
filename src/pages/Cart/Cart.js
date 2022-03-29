import axios from "axios";
import { CartProductCard, Footer, Navbar, PriceCard } from "../../components";
import { useAuth, useCart } from "../../contexts";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  const {
    state: { encodedToken },
  } = useAuth();

  const removeFromCartHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const productsQuantityHandler = async (productId, btnType) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: btnType } },
        { headers: { authorization: encodedToken } }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="cart-heading text-center">MY CART ({cartItems.length})</h1>
      <section className="flex flexJustifyCenter mb-5">
        <section className="flex flexCol flexAlignItemsCenter">
          {cartItems.map(({ title, price, image, _id, qty }) => (
            <CartProductCard
              title={title}
              price={price}
              image={image}
              _id={_id}
              key={_id}
              qty={qty}
              productsQuantityHandler={productsQuantityHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))}
        </section>
        <PriceCard />
      </section>
      <Footer />
    </>
  );
};

export { Cart };
