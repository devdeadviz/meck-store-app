import axios from "axios";
import { CartProductCard, PriceCard } from "../../components";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { useToast } from "../../custom-hooks";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const { setWishlistItems } = useWishlist();

  const {
    state: { encodedToken },
  } = useAuth();
  const {showToast} = useToast()

  const removeFromCartHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
      showToast("Item removed from the Cart!", "success");
    } catch (error) {
      showToast(error.response.data, "error");
    }
  };

  const productsQuantityHandler = async (productId, btnType) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: btnType } },
        { headers: { authorization: encodedToken } }
      );

      const currentProduct = response.data.cart.find(
        (e) => e._id === productId
      );

      if (currentProduct.qty < 1) {
        removeFromCartHandler(productId);
      } else {
        setCartItems(response.data.cart);
      }
    } catch (error) {
      showToast(error.response.data, "error");
    }
  };

  const moveToWishlistHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setWishlistItems(response.data.wishlist);
      showToast("Item moved to the Wishlist!", "success");
      removeFromCartHandler(product._id);
    } catch (error) {
      showToast(error.response.data, "error");
    }
  };

  return (
    <>
      <h1 className="cart-heading text-center">MY CART ({cartItems.length})</h1>
      {cartItems.length < 1 && (
        <h2 className="text-center my-4"> Your Cart Is Empty! </h2>
      )}
      <section className="cart-wrapper flex flexJustifyCenter mb-5">
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
              moveToWishlistHandler={moveToWishlistHandler}
            />
          ))}
        </section>
        {cartItems.length > 0 && <PriceCard />}
      </section>
    </>
  );
};

export { Cart };
