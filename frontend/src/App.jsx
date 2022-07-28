import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Search from "@pages/Search";
import Home from "@pages/Home";
import SignupArtist from "@components/SignupArtist";
import Register from "@pages/Register";
import Calendar from "@pages/Calendar";
import RegisterEmployer from "@components/RegisterEmployer";
import Employer from "@pages/Employer";
import About from "@pages/About";
import SearchResult from "@pages/Result";
import FavoritesPage from "@pages/FavoritesPage";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/artist/:profileId" element={<Profile />} />
        <Route path="/employer/:employerId" element={<Employer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/artist" element={<SignupArtist />} />
        <Route path="/register/employer" element={<RegisterEmployer />} />
        <Route path="/calendar/:profileId" element={<Calendar />} />
        <Route path="/band/:bandId" element={<SearchResult />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/artist/:profileId/favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="/employer/:employerId/favorites"
          element={<FavoritesPage />}
        />
        <Route path="/band/:bandId/favorites" element={<FavoritesPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}
export default App;
