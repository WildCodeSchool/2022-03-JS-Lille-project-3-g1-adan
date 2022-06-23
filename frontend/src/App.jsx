import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import Result from "@pages/Result";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/result/:bandId" element={<Result />} />
    </Routes>
  );
}

export default App;
