import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import "./App.css";

function App() {
  return (
      <div className="App">
      <Navbar />
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>

  );
}

export default App;
