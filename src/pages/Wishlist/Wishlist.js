import axios from "axios";
import { Footer, Navbar, WishlistCard } from "../../components";
import { useAuth, useCart, useWishlist } from "../../contexts";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useWishlist();
  const {
    state: { encodedToken },
  } = useAuth();
  const { setCartItems } = useCart();

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
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlistHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: encodedToken },
      });
      setWishlistItems(response.data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="wishlist-heading text-center">
        My Wishlist ({wishlistItems.length})
      </h1>
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
      <Footer />
    </>
  );
};

export { Wishlist };
