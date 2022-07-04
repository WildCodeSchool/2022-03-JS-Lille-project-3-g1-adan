import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Search from "@pages/Search";
import Home from "@pages/Home";
import SignupArtist from "@components/SignupArtist";
import RegisterArtist from "@components/RegisterArtistLast";
import Register from "@pages/Register";
import RegisterEmployer from "@components/RegisterEmployer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/artist" element={<SignupArtist />} />
        <Route
          path="/register/artist/validation"
          element={<RegisterArtist />}
        />
        <Route path="/register/employer" element={<RegisterEmployer />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
