import "./WishlistCard.css";

const WishlistCard = ({ title, price, image, _id }) => {
  return (
    <div className="vertical-card-wrapper wishlist-card-wrapper">
      <div className="vertical-card-image-wrapper pos-rel">
        <img className="responsive-image" src={image} alt="Wishlist Items" />
        <div className="wishlist-icon">
          <i className="fas fa-heart"></i>
        </div>
      </div>
      <div className="vertical-card-header wishlist-card-header">
        <h2 className="my-3 mx-3">{title}</h2>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <div className="vertical-card-price-wrapper mt-2">
          <div className="mb-4 mx-2">
            <span className="product-discount-price wishtlist-product-discount-price">
              Rs. {price}
            </span>
          </div>
        </div>
      </div>
      <div className="vertical-card-footer">
        <button
          type="button"
          className="btn btn-primary add-btn move-to-cart-btn my-4 mx-2"
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export { WishlistCard };
