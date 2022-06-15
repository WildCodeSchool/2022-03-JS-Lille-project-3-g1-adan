import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Home from "@pages/Home";
import Register from "@pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/register/artistLast" element={<RegisterArtistLast />} />
      </Routes>
    </div>
  );
}

export default App;
