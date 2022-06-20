import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Search from "@pages/Search";
import Home from "@pages/Home";
import Register from "@pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />      
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<Profile />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
