import React, { useState } from "react";
import SBurger from "./style";

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <SBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </SBurger>
  );
}

export default Burger;
