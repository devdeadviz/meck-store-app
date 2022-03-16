import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
