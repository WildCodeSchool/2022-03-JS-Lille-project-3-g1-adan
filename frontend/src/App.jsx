import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";

import Search from "@pages/Search";

import "./App.css";

import Home from "@pages/Home";

function App() {
  return (
   <div className="App">
    <Navbar />
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
    </Routes>
  </div>
  );
}

export default App;
