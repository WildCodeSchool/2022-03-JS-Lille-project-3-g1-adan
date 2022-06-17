import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Register from "@pages/Register";
import Search from "@pages/Search";
import Home from "@pages/Home";

function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/register" element={<Register />} /> 
      <Navbar />
    </Routes>
  );
}

export default App;
