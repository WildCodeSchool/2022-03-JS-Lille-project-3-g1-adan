import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Search from "@pages/Search";
import Home from "@pages/Home";
import SignupArtist from "@components/SignupArtist";
import RegisterArtist from "@components/RegisterArtistLast";
import RegisterOne from "@components/RegisterOne";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/register" element={<RegisterOne />} />
        <Route path="/register/artist" element={<SignupArtist />} />
        <Route
          path="/register/artist/validation"
          element={<RegisterArtist />}
        />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
