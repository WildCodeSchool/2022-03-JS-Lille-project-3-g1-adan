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
        <button type="button">Acc</button>
        <button type="button">Acc</button>
        <button type="button">Acc</button>
        <button type="button">Acc</button>
      </ul>
    </SBurger>
  );
}

export default Burger;
