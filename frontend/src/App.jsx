import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Register from "@pages/Register";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
