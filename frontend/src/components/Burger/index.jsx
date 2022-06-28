import React, { useState } from "react";
import contact from "@assets/pictureNavMob/contact.png";
import logoAdangris from "@assets/pictureNavMob/logoAdangris.png";
import recherche from "@assets/pictureNavMob/Search.svg";
import { Link } from "react-router-dom";
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
          <Link to="/profile/:profileId">
            <li className="picture">Mon profil</li>
          </Link>
          <Link to="/">
            <li className="picture">Page d'accueil</li>
          </Link>
          <Link to="/agenda">
            <li className="picture">Mon agenda</li>
          </Link>
          <Link to="/about">
            <li className="picture">A propos</li>
          </Link>
          <Link to="/logout">
            <li className="picture">Déconnexion</li>
          </Link>
        </ul>
      )}
      <Link to="/search">
        <img src={recherche} alt="recherche" className="pict" />
      </Link>
      <Link to="/message">
        <img src={contact} alt="profil" className="contact" />
      </Link>
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
