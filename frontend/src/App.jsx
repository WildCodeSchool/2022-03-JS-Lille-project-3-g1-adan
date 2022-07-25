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
import Band from "@pages/Band";

function App() {
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
        <Route path="/band/:bandId" element={<Band />} />
      </Routes>
      <Navbar />
    </div>
  );
}
export default App;
