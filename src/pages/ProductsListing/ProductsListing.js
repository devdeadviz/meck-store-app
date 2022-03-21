import { Filter, Footer, Navbar } from "../../components";
import "./ProductsListing.css";

const ProductsListing = () => {
  return (
    <>
      <Navbar />
      <section class="store-section flex">
        <Filter />
      </section>
      <Footer />
    </>
  );
};

export { ProductsListing };
