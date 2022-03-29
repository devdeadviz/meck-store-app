import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
