import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Cart,
  Homepage,
  Login,
  ProductsListing,
  SignUp,
  Wishlist,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
