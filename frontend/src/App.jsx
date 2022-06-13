import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import "./App.css";
import RegisterEmployer from "@components/RegisterEmployer";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/RegisterEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
}

export default App;
