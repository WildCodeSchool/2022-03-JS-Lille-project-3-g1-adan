import React, { useState } from "react";
import SBurger from "./style";

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <SBurger open={open}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div />
        <div />
        <div />
      </button>
      <ul className="desktopMenu">
        <li className="navBarItem ">Recherche</li>
        <li className="navBarItem ">Accueil</li>
        <li className="navBarItem "> Contactez nous</li>
        <li className="navBarItem "> Profil</li>
      </ul>
    </SBurger>
  );
}

export default Burger;
