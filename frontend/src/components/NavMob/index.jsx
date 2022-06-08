import React from "react";
import recherche from "@assets/pictureNavMob/recherche.png";
import acceuil from "@assets/pictureNavMob/acceuil.png";
import contact from "@assets/pictureNavMob/contact.png";
import profil from "@assets/pictureNavMob/profil.png";
import SNavMob from "./style";

function NavMob() {
  return (
    <SNavMob>
      <nav className="mobile">
        <img src={recherche} alt="recherche" className="pict" />

        <img src={acceuil} alt="acceuil" className="pict" />

        <img src={contact} alt="contact" className="picto" />

        <img src={profil} alt="profil" className="pict" />
      </nav>
    </SNavMob>
  );
}

export default NavMob;
