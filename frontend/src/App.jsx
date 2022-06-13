import Navbar from "@components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
      <Route path="/profile/:profileId" element={<Profile />} />
       </Routes>
     </div>

  );
}

export default App;
