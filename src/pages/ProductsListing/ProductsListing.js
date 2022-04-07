import { useEffect } from "react";
import { Filter, ProductsCard } from "../../components";
import {
  useAuth,
  useCart,
  useProducts,
  useSortFilter,
  useWishlist,
} from "../../contexts";
import {
  sortFunc,
  categoryFilterFunc,
  priceSliderFunc,
  ratingFilterFunc,
} from "../../helpers";
import axios from "axios";
import "./ProductsListing.css";
import { useToast } from "../../custom-hooks";

const ProductsListing = () => {
  const { products: availableProducts } = useProducts();

  const {
    state: { sortBy, categories, price, rating },
  } = useSortFilter();

  const {
    state: { encodedToken },
  } = useAuth();

  const { setCartItems } = useCart();

  const { setWishlistItems } = useWishlist();

  const { showToast } = useToast();

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
      showToast("Item Added in the Cart!", "success");
    } catch (error) {
      showToast("You need to login first!", "warn");
    }
  };

  const addToWishlistHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      setWishlistItems(response.data.wishlist);
      showToast("Item Added in the Wishlist!", "success");
    } catch (error) {
      showToast("You need to login first!", "warn");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="store-section flex">
      <Filter />
      <section className="store-product">
        <div className="product-header">
          <h3 className="product-heading">
            Showing All Products
            <small>( Showing {ratedProdData.length > 2 ? ratedProdData.length - 2 : 0} products )</small>
          </h3>
        </div>
        <div className="product-listing-wrapper flex flexWrap">
          { ratedProdData.length < 1 && <h3 className="my-5">No Products Available!</h3> }
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
                  addToWishlistHandler={() =>
                    addToWishlistHandler({ title, image, price, _id })
                  }
                />
              )
          )}
        </div>
      </section>
    </section>
  );
};

export { ProductsListing };
