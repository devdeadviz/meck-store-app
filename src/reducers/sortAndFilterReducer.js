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
    case "CLEAR":
      return {
        ...state,
        sortBy: null,
        categories: {
          ...state.categories,
          compactKeyboards: false,
          customKeyboards: false,
          standardKeyboards: false,
          splitKeyboards: false,
          shortKeyboards: false,
        },
        price: 40000,
        rating: 0,
      };
    default:
      return state;
  }
};

export { sortAndFilterReducer };
