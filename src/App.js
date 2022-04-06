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
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose="3000"
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
        progress="undefined"
      />
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
