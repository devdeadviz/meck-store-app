import { CartProductCard, Footer, Navbar, PriceCard } from "../../components";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <Navbar />
      <h1 className="cart-heading text-center">MY CART (2)</h1>
      <section className="flex flexJustifyCenter mb-5">
        <section className="flex flexCol flexAlignItemsCenter">
          <CartProductCard />
        </section>
        <PriceCard />
      </section>
      <Footer />
    </>
  );
};

export { Cart };
