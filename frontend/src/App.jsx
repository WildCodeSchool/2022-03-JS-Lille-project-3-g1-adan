import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
