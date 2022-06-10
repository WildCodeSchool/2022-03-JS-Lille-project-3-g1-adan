import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "@components/SearchInput";
import { Link } from "react-router-dom";
import SSearch from "./style";

export default function Search() {
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
    <SSearch>
      <h2>Recherche</h2>
      <SearchInput hChange={hChange} formData={formData} />
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
    </SSearch>
  );
}
