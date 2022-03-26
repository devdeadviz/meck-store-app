import { useSortFilter } from "../../contexts";
import "./Filter.css";

const Filter = () => {
  const {
    state: {
      sortBy,
      categories: {
        compactKeyboards,
        customKeyboards,
        standardKeyboards,
        splitKeyboards,
        shortKeyboards,
      },
      price,
      rating,
    },
    dispatch,
  } = useSortFilter();

  return (
    <section className="store-filter">
      <div className="filter-header flex flexAlignContentCenter flexJustifyBetween">
        <h3 className="filter-heading">Filters</h3>
        <button
          type="button"
          className="btn btn-outline-dark clear-btn"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      </div>
      <div className="filter-price my-5">
        <h3 className="filter-heading">Price</h3>
        <datalist
          id="filter-slider-values"
          className="flex flexJustifyBetween mt-4"
        >
          <option value="0" label="0"></option>
          <option value="10000" label="10k"></option>
          <option value="20000" label="20k"></option>
          <option value="30000" label="30k"></option>
          <option value="40000" label="40k"></option>
        </datalist>
        <input
          className="filter-slider my-4"
          list="filter-slider-values"
          type="range"
          min="0"
          max="40000"
          step="10000"
          value={price}
          onChange={(e) =>
            dispatch({ type: "PRICE_SLIDER", payload: e.target.value })
          }
        />
      </div>
      <div className="filter-category my-5">
        <h3 className="filter-heading">Category</h3>
        <form id="filter-category" action="#">
          <fieldset form="filter-category">
            <div>
              <input
                className="my-3 mr-2"
                type="checkbox"
                id="compactkeyboard"
                value="compactkeyboard"
                checked={compactKeyboards}
                onChange={() => dispatch({ type: "COMPACT" })}
              />
              <label htmlFor="compactkeyboard"> Compact Keyboard</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="checkbox"
                id="customkeyboard"
                value="customkeyboard"
                checked={customKeyboards}
                onChange={() => dispatch({ type: "CUSTOM" })}
              />
              <label htmlFor="customkeyboard"> Custom Keyboard</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="checkbox"
                id="standardkeyboard"
                value="standardkeyboard"
                checked={standardKeyboards}
                onChange={() => dispatch({ type: "STANDARD" })}
              />
              <label htmlFor="standardkeyboard"> Standard Keyboard</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="checkbox"
                id="splitkeyboard"
                value="splitkeyboard"
                checked={splitKeyboards}
                onChange={() => dispatch({ type: "SPLIT" })}
              />
              <label htmlFor="splitkeyboard"> Split Keyboard</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="checkbox"
                id="shortkeyboard"
                value="shortkeyboard"
                checked={shortKeyboards}
                onChange={() => dispatch({ type: "SHORT" })}
              />
              <label htmlFor="shortkeyboard"> Short Keyboard</label>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="filter-rating my-5">
        <h3 className="filter-heading">Rating</h3>
        <form id="filter-rating" action="#">
          <fieldset form="filter-rating">
            <div>
              <input
                className="my-3 mr-2"
                type="radio"
                id="rating1"
                name="rating"
                value="4starandabove"
                checked={rating === 4}
                onChange={() => dispatch({ type: "RATING", payload: 4 })}
              />
              <label htmlFor="rating1">4 Stars & above</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="radio"
                id="rating2"
                name="rating"
                value="3starandabove"
                checked={rating === 3}
                onChange={() => dispatch({ type: "RATING", payload: 3 })}
              />
              <label htmlFor="rating2">3 Stars & above</label>
            </div>
            <div>
              <input
                className="mt-2 mr-2"
                type="radio"
                id="rating3"
                name="rating"
                value="2starandabove"
                checked={rating === 2}
                onChange={() => dispatch({ type: "RATING", payload: 2 })}
              />
              <label htmlFor="rating3">2 Stars & above</label>
            </div>
            <div>
              <input
                className="mt-4 mr-2"
                type="radio"
                id="rating4"
                name="rating"
                value="1starandabove"
                checked={rating === 1}
                onChange={() => dispatch({ type: "RATING", payload: 1 })}
              />
              <label htmlFor="rating4">1 Stars & above</label>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="filter-sort-by my-5">
        <h3 className="filter-heading">Sort By</h3>
        <form id="price-sort-by" action="#">
          <fieldset form="price-sort-by">
            <div>
              <input
                className="my-3 mr-2"
                type="radio"
                id="price-sort-1"
                name="sortby"
                value="lowtohigh"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />
              <label htmlFor="price-sort-1">Price - Low to High</label>
            </div>
            <div>
              <input
                className="my-3 mr-2"
                type="radio"
                id="price-sort-2"
                name="sortby"
                value="hightolow"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />
              <label htmlFor="price-sort-2">Price - High to Low</label>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export { Filter };
