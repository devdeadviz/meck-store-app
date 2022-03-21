import { Filter, Footer, Navbar, ProductsCard } from "../../components";
import { useProducts } from "../../contexts/products-context";
import "./ProductsListing.css";

const ProductsListing = () => {
  const { products: availableProducts } = useProducts();

  return (
    <>
      <Navbar />
      <section class="store-section flex">
        <Filter />
        <section class="store-product">
          <div class="product-header">
            <h3 class="product-heading">
              Showing All Products
              <small>( Showing {availableProducts.length} products )</small>
            </h3>
          </div>
          <div class="product-card-wrapper flex flexWrap flexJustifyCenter">
            {availableProducts.map(
              ({ title, image, price, upcoming, _id }) =>
                !upcoming && (
                  <ProductsCard
                    key={_id}
                    title={title}
                    image={image}
                    price={price}
                  />
                )
            )}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export { ProductsListing };
