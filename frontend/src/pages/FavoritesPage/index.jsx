import Favorites from "@components/Favorites";
import SFavorites from "./style";

export default function FavoritesPage() {
  return (
    <SFavorites>
      <h2>Mes favoris</h2>
      <Favorites />
    </SFavorites>
  );
}
