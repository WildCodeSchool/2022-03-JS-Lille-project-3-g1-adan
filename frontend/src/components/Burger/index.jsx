import React, { useState } from "react";
import contact from "@assets/pictureNavMob/contact.png";
import SBurger from "./style";

function Burger() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <SBurger toggleNav={toggleNav}>
      <nav>
        {toggleMenu && (
          <ul>
            <li className="picture">Page d'accueil</li>
            <li className="picture">Mon profil</li>
            <li className="picture">Mon agenda</li>
            <li className="picture">A propos</li>
            <li className="picture">Déconnexion</li>
          </ul>
        )}
        <img src={contact} alt="profil" className="pict" />
        <button
          type="button"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          className="btn"
        >
          BTN
        </button>
      </nav>
    </SBurger>
  );
}

export default Burger;

// import React, { useState } from "react";
// import SBurger from "./style";

// function Burger() {
//   const [open, setOpen] = useState(false);
//   return (
//     <SBurger open={open}>
//       <button
//         type="button"
// onClick={() => {
//   setOpen(!open);
//         }}
//       >
//         <div />
//         <div />
//         <div />
//       </button>
//       <ul className="desktopMenu">
//         <button type="button" className="picture">
//           Acc
//         </button>
//         <button type="button" className="picture">
//           Acc
//         </button>
//         <button type="button" className="picture">
//           Acc
//         </button>
//         <button type="button" className="picture">
//           Acc
//         </button>
//       </ul>
//     </SBurger>
//   );
// }

// export default Burger;
