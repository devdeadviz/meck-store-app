import "./UpcomingsCard.css";

const UpcomingsCard = ({ title, subTitle, price, image }) => {
  return (
    <div className="horizontal-card-wrapper flex m-5">
      <div className="horizontal-card-image-wrapper flex flexAlignItemsCenter">
        <img className="responsive-image px-2" src={image} alt={title} />
      </div>
      <div className="card-body-wrapper flex flexCol">
        <div className="horizontal-card-header">
          <h2 className="my-3 mx-4">{title}</h2>
          <small className="my-2 mx-4">{subTitle}</small>
          <div className="simple-rating-wrapper flex mx-4">
            <div className="mt-3 mr-2">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
        </div>
        <div className="horizontal-card-price-wrapper flex flexCol mt-4 mb-2 mx-4">
          <div>
            <span className="product-discount-price">Rs. {price}</span>
          </div>
        </div>
        <div className="horizontal-card-footer mx-5 mb-5">
          <button
            type="button"
            className="btn btn-outline-primary wishlist-btn mt-4"
          >
            <i className="fas fa-bell mr-2"></i>
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
};

export { UpcomingsCard };
