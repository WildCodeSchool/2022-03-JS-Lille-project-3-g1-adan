import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [musicStyles, setMusicStyles] = useState([]);
  const [artistRoles, setArtistRoles] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [formData, setFormData] = useState({
    searchType: "",
    artistRole: "",
    musicStyle: "",
    localisation: "",
    cachetMin: "",
    cachetMax: "",
    solo: true,
    band: true,
  });
  useEffect(() => {
    axios.get("http://localhost:5000/bands").then(({ data }) => {
      setMusicStyles(data);
    });
    axios.get("http://localhost:5000/artists").then(({ data }) => {
      setArtistRoles(data);
    });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleChange = (evt) => {
    const { name } = evt.target;
    let { value } = evt.target;
    if (evt.target.type === "checkbox") {
      value = evt.target.checked;
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2>Recherche</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="search type"
          id="searchType"
          onChange={(event) => {
            setSearchType(event.target.value);
          }}
        >
          <option value="" htmlFor="searchType">
            Type de Recherche
          </option>
          <option value="event" htmlFor="searchType">
            Evénement
          </option>
          <option value="artist" htmlFor="searchType">
            Artiste
          </option>
        </select>
        {searchType === "artist" ? (
          <>
            <select
              name="artistRole"
              value={formData.artistRole}
              onChange={handleChange}
            >
              {artistRoles.map((role) => (
                <option value={role.role}>{role.role}</option>
              ))}
            </select>
            <select
              name="musicStyle"
              value={formData.musicStyle}
              onChange={handleChange}
            >
              <option value="">Style de musique</option>
              {musicStyles.map((style) => (
                <option value={style.musicStyle}>{style.musicStyle}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="localisation"
              value={formData.localisation}
              name="localisation"
              onChange={handleChange}
            />
            <input type="date" name="dispo" min="2022-01-01" />
            <input
              type="number"
              placeholder="€ Cachet Min"
              value={formData.cachetMin}
              name="cachetMin"
              pattern="[0-9]{5}"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="€ Cachet Max"
              value={formData.cachetMax}
              name="cachetMax"
              pattern="[0-9]{5}"
              onChange={handleChange}
            />
            <div>
              Solo
              <input
                type="checkbox"
                name="solo"
                value="artist"
                onChange={handleChange}
                checked={formData.solo}
              />
            </div>
            <div>
              Groupe
              <input
                type="checkbox"
                name="band"
                value="band"
                onChange={handleChange}
                checked={formData.band}
              />
            </div>
            <button type="submit">Rechercher</button>
          </>
        ) : null}
      </form>
    </>
  );
}
