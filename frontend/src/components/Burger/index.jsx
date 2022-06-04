import React, { useState } from "react";
import SBurger from "./style";

function Burger() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <SBurger>
      <nav>
        {toggleMenu && (
          <ul className="liste">
            <li className="picture">Acceuil</li>
            <li className="picture">Acceuil</li>
            <li className="picture">Acceuil</li>
            <li className="picture">Acceuil</li>
          </ul>
        )}
        <button type="button" onClick={toggleNav} className="btn">
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
//         onClick={() => {
//           setOpen(!open);
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
