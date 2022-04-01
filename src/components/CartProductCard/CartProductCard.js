import "./CartProductCard.css";

const CartProductCard = ({
  title,
  price,
  image,
  _id,
  qty,
  productsQuantityHandler,
  removeFromCartHandler,
  moveToWishlistHandler,
}) => {
  return (
    <div className="horizontal-card-wrapper cart-card-wrapper box-shadow flex">
      <div className="horizontal-card-image-wrapper cart-card-image-wrapper flex flexAlignItemsCenter">
        <img className="responsive-image px-2" src={image} alt="keyboard" />
      </div>
      <div className="card-body-wrapper flex flexCol">
        <div className="horizontal-card-header cart-card-header">
          <h2 className="my-3 mx-4">{title}</h2>
        </div>
        <div className="horizontal-card-price-wrapper flex flexCol my-4 mx-4">
          <div>
            <span className="product-discount-price">Rs. {price}</span>
          </div>
          <div className="product-quantity flex flexAlignItemsCenter my-2">
            <p>Quantity:</p>
            <div className="quantity-btn flex">
              <i
                className="fas fa-minus"
                onClick={() => productsQuantityHandler(_id, "decrement")}
              ></i>
              <span className="quantity-input">{qty}</span>
              <i
                className="fas fa-plus"
                onClick={() => productsQuantityHandler(_id, "increment")}
              ></i>
            </div>
          </div>
        </div>
        <div className="horizontal-card-footer my-1 mx-4">
          <button
            type="button"
            className="btn btn-primary remove-btn"
            onClick={() => removeFromCartHandler(_id)}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Remove from Cart
          </button>
          <button
            type="button"
            className="btn btn-outline-primary cart-wishlist-btn my-4"
            onClick={() => moveToWishlistHandler({ title, image, price, _id })}
          >
            <i className="fas fa-heart mr-2"></i>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartProductCard };
