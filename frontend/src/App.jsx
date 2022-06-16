import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import RegisterEmployer from "@components/RegisterEmployer";
import Search from "@pages/Search";
import Home from "@pages/Home";

function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
      <Route path="/profile/:profileId" element={<Profile />} />
    </Routes>
    <Navbar />
</div> 
  );
}

export default App;
