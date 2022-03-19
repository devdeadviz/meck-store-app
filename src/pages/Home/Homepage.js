import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesCard, Navbar } from "../../components";
import "./Homepage.css";

const Homepage = () => {
  const [productCategories, setProductCategories] = useState([]);

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

  return (
    <div>
      <Navbar />
      <div class="store-image-wrapper">
        <img
          class="store-image"
          src="https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="homepage"
        />
      </div>
      <div class="store-image-content flex flexCol">
        <h1>Meck Store</h1>
        <a href="#store-categories">
          <button type="button" class="btn btn-primary m-2">
            Explore More
          </button>
        </a>
      </div>
      <h1 class="store-heading text-center" id="store-categories">
        CATEGORIES
      </h1>
      <div class="store-cards-wrapper flex flexWrap flexJustifyCenter m-5">
        {productCategories.map(({ categoryName, _id, image }) => (
          <CategoriesCard key={_id} categoryName={categoryName} image={image} />
        ))}
      </div>
    </div>
  );
};

export { Homepage };
