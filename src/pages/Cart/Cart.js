import { CartProductCard, Footer, Navbar } from "../../components";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <Navbar />
      <h1 class="cart-heading text-center">MY CART (2)</h1>
      <section>
        <CartProductCard />
      </section>
      <Footer />
    </>
  );
};

export { Cart };
