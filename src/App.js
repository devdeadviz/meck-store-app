import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Cart,
  Homepage,
  Login,
  ProductsListing,
  SignUp,
  Wishlist,
} from "./pages";
import { Footer, Navbar } from "./components";
import { useAuth } from "./contexts";

function ProtectedRoutes() {
  const location = useLocation();

  const {
    state: { isAuth },
  } = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
