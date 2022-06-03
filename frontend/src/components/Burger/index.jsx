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
        <button type="button" className="picture">
          Acc
        </button>
        <button type="button" className="picture">
          Acc
        </button>
        <button type="button" className="picture">
          Acc
        </button>
        <button type="button" className="picture">
          Acc
        </button>
      </ul>
    </SBurger>
  );
}

export default Burger;
