import "./CartProductCard.css";

const CartProductCard = ({ title, price, image }) => {
  return (
    <div class="horizontal-card-wrapper cart-card-wrapper box-shadow flex">
      <div class="horizontal-card-image-wrapper cart-card-image-wrapper flex flexAlignItemsCenter">
        <img class="responsive-image px-2" src={image} alt="keyboard" />
      </div>
      <div class="card-body-wrapper flex flexCol">
        <div class="horizontal-card-header cart-card-header">
          <h2 class="my-3 mx-4">{title}</h2>
        </div>
        <div class="horizontal-card-price-wrapper flex flexCol my-4 mx-4">
          <div>
            <span class="product-discount-price">Rs. {price}</span>
          </div>
          <div class="product-quantity flex flexAlignItemsCenter my-2">
            <p>Quantity:</p>
            <div class="quantity-btn flex">
              <i class="fas fa-minus"></i>
              <input type="number" class="quantity-input" value="1" />
              <i class="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div class="horizontal-card-footer my-1 mx-4">
          <button type="button" class="btn btn-primary remove-btn">
            <i class="fas fa-shopping-cart mr-2"></i>
            Remove from Cart
          </button>
          <button
            type="button"
            class="btn btn-outline-primary cart-wishlist-btn mt-4"
          >
            <i class="fas fa-heart mr-2"></i>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartProductCard };
