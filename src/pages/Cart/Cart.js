import { CartProductCard, Footer, Navbar, PriceCard } from "../../components";
import { useCart } from "../../contexts";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <>
      <Navbar />
      <h1 className="cart-heading text-center">MY CART (2)</h1>
      <section className="flex flexJustifyCenter mb-5">
        <section className="flex flexCol flexAlignItemsCenter">
          {cartItems.map(({ title, price, image }) => (
            <CartProductCard title={title} price={price} image={image} />
          ))}
        </section>
        <PriceCard />
      </section>
      <Footer />
    </>
  );
};

export { Cart };
