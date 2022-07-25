import React from "react";
import recherche from "@assets/pictureNavMob/Search.svg";
import accueil from "@assets/pictureNavMob/Home.svg";
import contact from "@assets/pictureNavMob/contact.png";
import profil from "@assets/pictureNavMob/Profil.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SNavMob from "./style";

function NavMob() {
  const { type } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user);
  return (
    <SNavMob>
      <nav className="mobile">
        <Link to="/search">
          <img src={recherche} alt="recherche" className="pict" />{" "}
        </Link>
        <Link to="/">
          <img src={accueil} alt="accueil" className="pict" />
        </Link>
        <Link to="/message">
          <img src={contact} alt="contact" className="picto" />
        </Link>
        <Link to={`/${type}/${id}`}>
          <img src={profil} alt="profil" className="pict" />
        </Link>
      </nav>
    </SNavMob>
  );
}

export default NavMob;
