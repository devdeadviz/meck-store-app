import { useCart } from "../../contexts";
import "./PriceCard.css";

const PriceCard = () => {
  const { cartItems } = useCart();

  const amountCalculator = (accu, current) =>
    (accu += current.price * current.qty);

  const amount = cartItems.reduce(amountCalculator, 0);

  return (
    <div className="vertical-card-wrapper price-card-wrapper">
      <div className="vertical-card-header price-card-header">
        <h2 className="m-4">PRICE DETAILS</h2>
      </div>
      <hr className="mx-4" />
      <div className="vertical-card-body m-4">
        <div className="flex flexJustifyBetween mt-3">
          <span>Price({cartItems.length} items)</span>
          <span>Rs.{amount}</span>
        </div>
        <div className="flex flexJustifyBetween mt-3">
          <span>Discount</span>
          <span>Rs. {(amount * 0.1).toFixed(0)}</span>
        </div>
        <div className="flex flexJustifyBetween my-3">
          <span>Delivery Charges</span>
          <span>Rs. {amount > 0 ? 500 : 0} </span>
        </div>
        <hr />
        <div className="vertical-card-price-wrapper my-4">
          <div className="flex flexJustifyBetween mb-4">
            <span className="product-discount-price">TOTAL AMOUNT</span>
            <span className="ml-5">
              Rs. {amount > 0 ? amount - amount * 0.1 + 500 : 0}
            </span>
          </div>
        </div>
      </div>
      <hr className="mx-4" />
      <div className="vertical-card-footer">
        <p className="m-4">
          You will save Rs. {(amount * 0.1).toFixed(0)} on this order
        </p>
        <button type="button" className="btn btn-primary order-btn">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export { PriceCard };
