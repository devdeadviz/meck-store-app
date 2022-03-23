import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Homepage, ProductsListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
