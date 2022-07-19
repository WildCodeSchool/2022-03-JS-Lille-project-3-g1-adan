import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SMusicStyleCard from "./style";

export default function MusicStyleCard({
  firstname,
  lastname,
  city,
  id,
  name,
  cityBand,
  idBand,
}) {
  return (
    <Link
      to={!firstname ? `/band/${idBand}` : `/artist/${id}`}
      style={{ textDecoration: "none" }}
    >
      <SMusicStyleCard>
        <h1>{firstname + lastname || name}</h1>
        <h2>{city || cityBand}</h2>
      </SMusicStyleCard>
    </Link>
  );
}

MusicStyleCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cityBand: PropTypes.string.isRequired,
  idBand: PropTypes.number.isRequired,
};
