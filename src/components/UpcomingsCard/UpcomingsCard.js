import "./UpcomingsCard.css";

const UpcomingsCard = ({ title, subTitle, price, image }) => {
  return (
    <div class="horizontal-card-wrapper flex m-5">
      <div class="horizontal-card-image-wrapper flex flexAlignItemsCenter">
        <img class="responsive-image px-2" src={image} alt={title} />
      </div>
      <div class="card-body-wrapper flex flexCol">
        <div class="horizontal-card-header">
          <h2 class="my-3 mx-4">{title}</h2>
          <small class="my-2 mx-4">{subTitle}</small>
          <div class="simple-rating-wrapper flex mx-4">
            <div class="mt-3 mr-2">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
          </div>
        </div>
        <div class="horizontal-card-price-wrapper flex flexCol mt-4 mb-2 mx-4">
          <div>
            <span class="product-discount-price">{price}</span>
          </div>
        </div>
        <div class="horizontal-card-footer mx-5 mb-5">
          <button
            type="button"
            class="btn btn-outline-primary wishlist-btn mt-4"
          >
            <i class="fas fa-bell mr-2"></i>
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
};

export { UpcomingsCard };
