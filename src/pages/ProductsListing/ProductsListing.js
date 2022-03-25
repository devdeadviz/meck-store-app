import { Filter, Footer, Navbar, ProductsCard } from "../../components";
import { useProducts, useSortFilter } from "../../contexts";
import { sortFunc, categoryFilterFunc } from "../../helpers";
import "./ProductsListing.css";

const ProductsListing = () => {
  const { products: availableProducts } = useProducts();
  const { state } = useSortFilter();

  const categoryFilteredProdData = categoryFilterFunc(
    availableProducts,
    state.categories
  );
  const sortedFilteredProdData = sortFunc(
    categoryFilteredProdData,
    state.sortBy
  );

  return (
    <>
      <Navbar />
      <section class="store-section flex">
        <Filter />
        <section class="store-product">
          <div class="product-header">
            <h3 class="product-heading">
              Showing All Products
              <small>
                ( Showing {sortedFilteredProdData.length} products )
              </small>
            </h3>
          </div>
          <div class="product-listing-wrapper flex flexWrap flexJustifyCenter">
            {sortedFilteredProdData.map(
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
