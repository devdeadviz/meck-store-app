import axios from "axios";
import { WishlistCard } from "../../components";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { useToast } from "../../custom-hooks";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useWishlist();
  const {
    state: { encodedToken },
  } = useAuth();
  const { setCartItems } = useCart();
  const { showToast } = useToast();

  const moveToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartItems(response.data.cart);
      showToast("Item Moved to the Cart!", "success");
      removeFromWishlistHandler(product._id);
    } catch (error) {
      showToast(error.response.data, "error");
    }
  };

  const removeFromWishlistHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setWishlistItems(response.data.wishlist);
      showToast("Item removed from the Wishlist!", "success");
    } catch (error) {
      showToast(error.response.data, "error");
    }
  };

  return (
    <>
      <h1 className="wishlist-heading text-center">
        My Wishlist ({wishlistItems.length})
      </h1>
      {wishlistItems.length < 1 && (
        <h2 className="text-center my-4"> Your Wishlist Is Empty! </h2>
      )}
      <section className="wishlist-card-container flex flexWrap">
        {wishlistItems.map(({ title, price, image, _id }) => (
          <WishlistCard
            key={_id}
            title={title}
            price={price}
            image={image}
            _id={_id}
            moveToCartHandler={() =>
              moveToCartHandler({ title, price, image, _id })
            }
            removeFromWishlistHandler={removeFromWishlistHandler}
          />
        ))}
      </section>
    </>
  );
};

export { Wishlist };
