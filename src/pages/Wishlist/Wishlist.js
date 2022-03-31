import { Footer, Navbar, WishlistCard } from "../../components";
import { useWishlist } from "../../contexts";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  return (
    <>
      <Navbar />
      <h1 className="wishlist-heading text-center">
        My Wishlist ({wishlistItems.length})
      </h1>
      <section className="wishlist-card-container flex flexWrap flexJustifyCenter">
        {wishlistItems.map(({ title, price, image, _id }) => (
          <WishlistCard
            key={_id}
            title={title}
            price={price}
            image={image}
            _id={_id}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export { Wishlist };
