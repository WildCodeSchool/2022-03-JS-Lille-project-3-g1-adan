import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Home from "@pages/Home";
import RegisterArtist from "@components/RegisterArtist";
import Register from "@pages/Register";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/artist" element={<RegisterArtist />} /> 
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
