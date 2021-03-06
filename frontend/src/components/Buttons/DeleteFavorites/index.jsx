import { toast } from "react-toastify";
import useApi from "@services/useApi";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SDeleteFavorites from "./style";

export default function DeleteFavorites({
  followedType,
  followedTypeId,
  favName,
  setFavorites,
}) {
  const api = useApi();
  const { token } = useSelector((state) => state.user);

  const handleUnfollow = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .delete(`/favorites/${followedType}-${followedTypeId}`)
      .then(({ data }) => {
        setFavorites(data);
        toast.success(`${favName} a été supprimé de vos favoris`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Oups, une erreur s'est produite", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <SDeleteFavorites className="delete" type="button" onClick={handleUnfollow}>
      Supprimer
    </SDeleteFavorites>
  );
}
DeleteFavorites.propTypes = {
  followedType: PropTypes.string,
  followedTypeId: PropTypes.number,
  favName: PropTypes.string,
  setFavorites: PropTypes.func,
};
DeleteFavorites.defaultProps = {
  followedType: "",
  followedTypeId: 0,
  favName: "",
  setFavorites: () => {},
};
