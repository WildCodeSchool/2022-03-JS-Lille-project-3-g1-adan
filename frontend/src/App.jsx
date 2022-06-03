import { Routes, Route } from "react-router-dom";
import Register from "@pages/Register";
import RegisterArtist from "@pages/RegisterArtist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/inscription" element={<Register />} />
        <Route path="/inscription/artiste" element={<RegisterArtist />} />
      </Routes>
    </div>
  );
}

export default App;
