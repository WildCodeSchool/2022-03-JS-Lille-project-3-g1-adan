import { Routes, Route } from "react-router-dom";
import Register from "@pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/inscription" element={<Register />} />
      </Routes>
      <Register />
    </div>
  );
}

export default App;
