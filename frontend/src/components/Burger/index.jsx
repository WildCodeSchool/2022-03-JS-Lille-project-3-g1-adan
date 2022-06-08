import React, { useState } from "react";
import contact from "@assets/pictureNavMob/contact.png";
import logoAdangris from "@assets/pictureNavMob/logoAdangris.png";
import SBurger from "./style";

function Burger() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [open, setOpen] = useState(false);

  return (
    <SBurger toggleNav={toggleNav} open={open}>
      <img src={logoAdangris} alt="logo" className="logo" />
      {toggleMenu && (
        <ul>
          <li className="picture">Page d'accueil</li>
          <li className="picture">Mon profil</li>
          <li className="picture">Mon agenda</li>
          <li className="picture">A propos</li>
          <li className="picture">Déconnexion</li>
        </ul>
      )}
      <img src={contact} alt="profil" className="contact" />
      <button
        type="button"
        onClick={() => {
          setToggleMenu(!toggleMenu);
          setOpen(!open);
        }}
        className="btn"
      >
        <div />
        <div />
        <div />
      </button>
    </SBurger>
  );
}

export default Burger;
