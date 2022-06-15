import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Home from "@pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:profileId" element={<Profile />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
