import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import RegisterEmployerLast from "@pages/RegisterEmployerLast";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/registeremployerlast" element={<RegisterEmployerLast />} />
    </Routes>
  );
}

export default App;
