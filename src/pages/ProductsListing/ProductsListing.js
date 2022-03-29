import { Filter, Footer, Navbar, ProductsCard } from "../../components";
import { useAuth, useCart, useProducts, useSortFilter } from "../../contexts";
import {
  sortFunc,
  categoryFilterFunc,
  priceSliderFunc,
  ratingFilterFunc,
} from "../../helpers";
import axios from "axios";
import "./ProductsListing.css";

const ProductsListing = () => {
  const {
    state: { encodedToken },
  } = useAuth();

  const { products: availableProducts } = useProducts();

  const {
    state: { sortBy, categories, price, rating },
  } = useSortFilter();

  const { setCartItems } = useCart();

  const categoryFilteredProdData = categoryFilterFunc(
    availableProducts,
    categories
  );
  const sortedFilteredProdData = sortFunc(categoryFilteredProdData, sortBy);
  const pricedProductData = priceSliderFunc(sortedFilteredProdData, price);
  const ratedProdData = ratingFilterFunc(pricedProductData, rating);

  const addToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="store-section flex">
        <Filter />
        <section className="store-product">
          <div className="product-header">
            <h3 className="product-heading">
              Showing All Products
              <small>( Showing {ratedProdData.length - 2} products )</small>
            </h3>
          </div>
          <div className="product-listing-wrapper flex flexWrap flexJustifyCenter">
            {ratedProdData.map(
              ({ title, image, price, upcoming, _id }) =>
                !upcoming && (
                  <ProductsCard
                    key={_id}
                    title={title}
                    image={image}
                    price={price}
                    id={_id}
                    addToCartHandler={() =>
                      addToCartHandler({ title, image, price, _id })
                    }
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
