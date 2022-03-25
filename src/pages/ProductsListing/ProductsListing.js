import { Filter, Footer, Navbar, ProductsCard } from "../../components";
import { useProducts, useSortFilter } from "../../contexts";
import { sortFunc } from "../../helpers/sortFunc";
import "./ProductsListing.css";

const ProductsListing = () => {
  const { products: availableProducts } = useProducts();
  const { state } = useSortFilter();

  const sortedProdData = sortFunc(availableProducts, state.sortBy);

  console.log("Sortedd", sortedProdData);

  return (
    <>
      <Navbar />
      <section class="store-section flex">
        <Filter />
        <section class="store-product">
          <div class="product-header">
            <h3 class="product-heading">
              Showing All Products
              <small>( Showing {sortedProdData.length} products )</small>
            </h3>
          </div>
          <div class="product-listing-wrapper flex flexWrap flexJustifyCenter">
            {sortedProdData.map(
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
