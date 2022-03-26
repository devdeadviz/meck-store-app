const sortAndFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "COMPACT":
      return {
        ...state,
        categories: {
          ...state.categories,
          compactKeyboards: !state.categories.compactKeyboards,
        },
      };
    case "CUSTOM":
      return {
        ...state,
        categories: {
          ...state.categories,
          customKeyboards: !state.categories.customKeyboards,
        },
      };
    case "STANDARD":
      return {
        ...state,
        categories: {
          ...state.categories,
          standardKeyboards: !state.categories.standardKeyboards,
        },
      };
    case "SPLIT":
      return {
        ...state,
        categories: {
          ...state.categories,
          splitKeyboards: !state.categories.splitKeyboards,
        },
      };
    case "SHORT":
      return {
        ...state,
        categories: {
          ...state.categories,
          shortKeyboards: !state.categories.shortKeyboards,
        },
      };
    case "PRICE_SLIDER":
      return { ...state, price: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export { sortAndFilterReducer };
