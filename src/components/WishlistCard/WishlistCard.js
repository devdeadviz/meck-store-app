import "./WishlistCard.css";

const WishlistCard = ({ title, price, image, _id }) => {
  return (
    <div class="vertical-card-wrapper wishlist-card-wrapper">
      <div class="vertical-card-image-wrapper pos-rel">
        <img class="responsive-image" src={image} alt="Wishlist Items" />
        <div class="wishlist-icon">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="vertical-card-header wishlist-card-header">
        <h2 class="my-3 mx-3">{title}</h2>
      </div>
      <div class="vertical-card-body my-4 mx-2">
        <div class="vertical-card-price-wrapper mt-2">
          <div class="mb-4 mx-2">
            <span class="product-discount-price wishtlist-product-discount-price">
              Rs. {price}
            </span>
          </div>
        </div>
      </div>
      <div class="vertical-card-footer">
        <button
          type="button"
          class="btn btn-primary add-btn move-to-cart-btn my-4 mx-2"
        >
          <i class="fas fa-shopping-cart mr-2"></i>
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export { WishlistCard };
