import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "@services/useApi";
import { useSelector } from "react-redux";
import DeleteFavorites from "@components/Buttons/DeleteFavorites";
import SFavorites from "./style";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const api = useApi();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get("/favorites/").then(({ data }) => {
      setFavorites(data);
    });
  }, []);

  if (!favorites.length) {
    return null;
  }

  return (
    <SFavorites>
      {favorites.map((favorite) => {
        return (
          <li key={favorite.followed_typeId}>
            <Link to={`/${favorite.favUrl}`}> {favorite.favName} </Link>
            <DeleteFavorites
              followedType={favorite.followedType}
              followedTypeId={favorite.followed_typeId}
              favName={favorite.favName}
              setFavorites={setFavorites}
            />
          </li>
        );
      })}
    </SFavorites>
  );
}
