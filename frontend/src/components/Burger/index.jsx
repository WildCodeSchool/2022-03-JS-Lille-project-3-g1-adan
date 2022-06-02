import React, { useState } from "react";
import SBurger from "./style";

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <SBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </SBurger>
      <div>
        <ul className="burgerMenu">
          <li className="navBarItem slideInDown1">about</li>
          <li className="navBarItem slideInDown2">home</li>
          <li className="navBarItem slideInDown3"> diff</li>
          <li className="navBarItem slideInDown4"> rest</li>
          <li className="navBarItem slideInDown5"> plop</li>
        </ul>
      </div>
    </nav>
  );
}

export default Burger;
