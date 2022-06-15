import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import RegisterEmployer from "@components/RegisterEmployer";
import Home from "@pages/Home";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/RegisterEmployer" element={<RegisterEmployer />} />
      <Route path="/profile/:profileId" element={<Profile />} />
    </Routes>
</div>
  );
}

export default App;
