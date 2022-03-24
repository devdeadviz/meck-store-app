import "./ProductsCard.css";

const ProductsCard = ({ title, image, price }) => {
  return (
    <div class="vertical-card-wrapper product-card-wrapper">
      <div class="vertical-card-image-wrapper">
        <img class="responsive-image" src={image} alt={title} />
      </div>
      <div class="vertical-card-header product-card-header">
        <h2 class="my-3 mx-3">{title}</h2>
      </div>
      <div class="vertical-card-body my-4 mx-2">
        <div class="vertical-card-price-wrapper mt-2">
          <div class="mb-4 mx-2">
            <span class="product-discount-price">Rs. {price}</span>
          </div>
        </div>
      </div>
      <div class="vertical-card-footer">
        <button type="button" class="btn btn-primary add-btn my-4 mx-2">
          <i class="fas fa-shopping-cart mr-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductsCard };
