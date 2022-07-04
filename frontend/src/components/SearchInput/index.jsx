import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SSearchInput from "./style";

function SearchInput() {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!formData.search) {
      setSearchResults([]);
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/searchs?needle=${
            formData.search
          }`
        )
        .then(({ data }) => {
          setSearchResults(data);
        });
    }
  }, [formData]);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <SSearchInput>
      <input
        type="text"
        placeholder="Taper votre recherche"
        value={formData.search}
        name="search"
        onChange={hChange}
      />{" "}
      <ul>
        {searchResults.map((searchResult) => {
          return (
            <li>
              {searchResult.displayName}
              <Link to={`/${searchResult.type}/${searchResult.id}`}>voir</Link>
            </li>
          );
        })}
      </ul>
    </SSearchInput>
  );
}

export default SearchInput;
