import "./ProductsCard.css";

const ProductsCard = ({ title, image, price }) => {
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
        <button type="button" className="btn btn-primary add-btn my-4 mx-2">
          <i className="fas fa-shopping-cart mr-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductsCard };
