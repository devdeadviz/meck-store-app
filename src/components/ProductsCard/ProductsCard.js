import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts";
import "./ProductsCard.css";

const ProductsCard = ({
  title,
  image,
  price,
  id,
  addToCartHandler,
  addToWishlistHandler,
}) => {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  return (
    <div className="vertical-card-wrapper product-card-wrapper">
      <div className="vertical-card-image-wrapper">
        <img className="responsive-image" src={image} alt={title} />
      </div>
      <div className="vertical-card-header product-card-header">
        <h2 className="my-3 mx-3">{title}</h2>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <div className="vertical-card-price-wrapper mt-2">
          <div className="mb-4 mx-2">
            <span className="product-discount-price">Rs. {price}</span>
          </div>
        </div>
      </div>
      <div className="vertical-card-footer">
        {cartItems.find((e) => e._id === id) ? (
          <button
            type="button"
            className="btn btn-primary add-btn my-1 mx-2"
            onClick={() => navigate("/cart")}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            View Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary add-btn my-1 mx-2"
            onClick={addToCartHandler}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Add to Cart
          </button>
        )}
        <button
          type="button"
          className="btn btn-outline-primary wishlist-btn mb-4"
          onClick={addToWishlistHandler}
        >
          <i className="fas fa-heart mr-2"></i>
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export { ProductsCard };
