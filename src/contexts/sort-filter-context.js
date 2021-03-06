import { createContext, useContext, useReducer } from "react";
import { sortAndFilterReducer } from "../reducers";

const initialSortFilterValue = {
  sortBy: null,
  categories: {
    compactKeyboards: false,
    customKeyboards: false,
    standardKeyboards: false,
    splitKeyboards: false,
    shortKeyboards: false,
  },
  price: 40000,
  rating: 0
};

const SortAndFilterContext = createContext(initialSortFilterValue);

const SortFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sortAndFilterReducer,
    initialSortFilterValue
  );
  return (
    <SortAndFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </SortAndFilterContext.Provider>
  );
};

const useSortFilter = () => useContext(SortAndFilterContext);

export { SortFilterProvider, useSortFilter };
