import "./Filter.css";

const Filter = () => {
  return (
    <section class="store-filter">
      <div class="filter-header flex flexAlignContentCenter flexJustifyBetween">
        <h3 class="filter-heading">Filters</h3>
        <button type="button" class="btn btn-outline-dark clear-btn">
          Clear
        </button>
      </div>
      <div class="filter-price my-5">
        <h3 class="filter-heading">Price</h3>
        <datalist
          id="filter-slider-values"
          class="flex flexJustifyBetween mt-4"
        >
          <option value="0" label="0"></option>
          <option value="10000" label="10k"></option>
          <option value="20000" label="20k"></option>
          <option value="30000" label="30k"></option>
          <option value="40000" label="40k"></option>
        </datalist>
        <input
          class="filter-slider my-4"
          list="filter-slider-values"
          type="range"
          min="0"
          max="40000"
          step="10000"
          value="40000"
        />
      </div>
      <div class="filter-category my-5">
        <h3 class="filter-heading">Category</h3>
        <form id="filter-category" action="#">
          <fieldset className="fieldset" form="filter-category">
            <div>
              <input
                class="my-3 mr-2"
                type="checkbox"
                id="keyboard1"
                value="StandardKeyboard"
              />
              <label for="keyboard1"> Standard Keyboard</label>
            </div>
            <div>
              <input
                class="my-3 mr-2"
                type="checkbox"
                id="keyboard2"
                value="SplitKeyboard"
              />
              <label for="keyboard2"> Split Keyboard</label>
            </div>
            <div>
              <input
                class="my-3 mr-2"
                type="checkbox"
                id="keyboard3"
                value="CustomKeyboard"
              />
              <label for="keyboard3"> Custom Keyboard</label>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="filter-rating my-5">
        <h3 class="filter-heading">Rating</h3>
        <form id="filter-rating" action="#">
          <fieldset className="fieldset" form="filter-rating">
            <div>
              <input
                class="my-3 mr-2"
                type="radio"
                id="rating1"
                name="rating"
                value="4starandabove"
              />
              <label for="rating1">4 Stars & above</label>
            </div>
            <div>
              <input
                class="my-3 mr-2"
                type="radio"
                id="rating2"
                name="rating"
                value="3starandabove"
              />
              <label for="rating2">3 Stars & above</label>
            </div>
            <div>
              <input
                class="mt-2 mr-2"
                type="radio"
                id="rating3"
                name="rating"
                value="2starandabove"
              />
              <label for="rating3">2 Stars & above</label>
            </div>
            <div>
              <input
                class="mt-4 mr-2"
                type="radio"
                id="rating4"
                name="rating"
                value="1starandabove"
              />
              <label for="rating4">1 Stars & above</label>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="filter-sort-by my-5">
        <h3 class="filter-heading">Sort By</h3>
        <form id="price-sort-by" action="#">
          <fieldset className="fieldset" form="price-sort-by">
            <div>
              <input
                class="my-3 mr-2"
                type="radio"
                id="price-sort-1"
                name="sortby"
                value="lowtohigh"
              />
              <label for="price-sort-1">Price - Low to High</label>
            </div>
            <div>
              <input
                class="my-3 mr-2"
                type="radio"
                id="price-sort-2"
                name="sortby"
                value="hightolow"
              />
              <label for="price-sort-2">Price - High to Low</label>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export { Filter };
