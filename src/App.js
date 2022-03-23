import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Homepage, Login, ProductsListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
