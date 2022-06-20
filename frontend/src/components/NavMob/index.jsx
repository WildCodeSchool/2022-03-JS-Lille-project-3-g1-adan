import React from "react";
import recherche from "@assets/pictureNavMob/Search.svg";
import acceuil from "@assets/pictureNavMob/Home.svg";
import contact from "@assets/pictureNavMob/contact.png";
import profil from "@assets/pictureNavMob/Profil.svg";
import { Link } from "react-router-dom";
import SNavMob from "./style";

function NavMob() {
  return (
    <SNavMob>
      <nav className="mobile">
        <Link to="/search">
          <img src={recherche} alt="recherche" className="pict" />{" "}
        </Link>
        <Link to="/">
          <img src={acceuil} alt="acceuil" className="pict" />
        </Link>
        <Link to="/message">
          <img src={contact} alt="contact" className="picto" />
        </Link>
        <Link to="/profile/:profileId">
          <img src={profil} alt="profil" className="pict" />
        </Link>
      </nav>
    </SNavMob>
  );
}

export default NavMob;
