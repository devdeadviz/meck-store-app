import { Filter, Footer, Navbar, ProductsCard } from "../../components";
import { useProducts, useSortFilter } from "../../contexts";
import {
  sortFunc,
  categoryFilterFunc,
  priceSliderFunc,
  ratingFilterFunc,
} from "../../helpers";
import "./ProductsListing.css";

const ProductsListing = () => {
  const { products: availableProducts } = useProducts();
  const {
    state: { sortBy, categories, price, rating },
  } = useSortFilter();

  const categoryFilteredProdData = categoryFilterFunc(
    availableProducts,
    categories
  );
  const sortedFilteredProdData = sortFunc(categoryFilteredProdData, sortBy);
  const pricedProductData = priceSliderFunc(sortedFilteredProdData, price);
  const ratedProdData = ratingFilterFunc(pricedProductData, rating);

  return (
    <>
      <Navbar />
      <section class="store-section flex">
        <Filter />
        <section class="store-product">
          <div class="product-header">
            <h3 class="product-heading">
              Showing All Products
              <small>( Showing {ratedProdData.length - 2} products )</small>
            </h3>
          </div>
          <div class="product-listing-wrapper flex flexWrap flexJustifyCenter">
            {ratedProdData.map(
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
