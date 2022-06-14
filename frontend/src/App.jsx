import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import "./App.css";
import RegisterEmployer from "@components/RegisterEmployer";
import Home from "@pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/RegisterEmployer" element={<RegisterEmployer />} />

      <Route path="/profile/:profileId" element={<Profile />} />

    </Routes>
  );
}

export default App;
