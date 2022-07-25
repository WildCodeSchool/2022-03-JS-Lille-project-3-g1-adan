import { Link, useLocation } from "react-router-dom";
import SMyFavorites from "./style";

export default function MyFavorites() {
  const location = useLocation();
  return (
    <Link to={`${location.pathname}/favorites`}>
      <SMyFavorites>Mes favoris</SMyFavorites>
    </Link>
  );
}
