import "./Homepage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesCard, UpcomingsCard } from "../../components";
import { useProducts } from "../../contexts/products-context";
import { Link } from "react-router-dom";
import { useSortFilter } from "../../contexts";

const Homepage = () => {
  const { products: upcomingProducts } = useProducts();

  const [productCategories, setProductCategories] = useState([]);

  const { dispatch } = useSortFilter();

  useEffect(() => {
    (async () => {
      try {
        const productData = await axios.get("/api/categories");
        setProductCategories(productData.data.categories);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="store-image-wrapper">
        <img
          className="store-image"
          src="https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="homepage"
        />
      </div>
      <div className="store-image-content flex flexCol">
        <h1>Meck Store</h1>
        <a href="#store-categories">
          <button type="button" className="btn btn-primary m-2">
            Explore More
          </button>
        </a>
      </div>
      <h1 className="store-heading text-center" id="store-categories">
        CATEGORIES
      </h1>
      <div className="store-cards-wrapper flex flexWrap flexJustifyCenter m-5">
        {productCategories.map(({ categoryName, _id, image }) => (
          <Link
            className="link"
            to="/products"
            onClick={() => dispatch({ type: categoryName.toUpperCase() })}
            key={_id}
          >
            <CategoriesCard categoryName={categoryName} image={image} />
          </Link>
        ))}
      </div>
      <h1 className="store-heading text-center">UPCOMINGS</h1>
      <div className="store-cards-wrapper flex flexWrap flexJustifyAround m-5">
        {upcomingProducts.map(
          ({ _id, title, subTitle, price, image, upcoming }) =>
            upcoming && (
              <UpcomingsCard
                key={_id}
                title={title}
                subTitle={subTitle}
                price={price}
                image={image}
              />
            )
        )}
      </div>
    </>
  );
};

export { Homepage };
