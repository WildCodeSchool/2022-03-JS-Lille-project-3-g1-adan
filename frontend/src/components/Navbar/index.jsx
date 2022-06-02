import Burger from "@components/Burger";
import React from "react";
import SNavbar from "./style";

function Navbar() {
  return (
    <SNavbar>
      <div className="menu">
        <ul>
          <li> about</li>
          <li> home</li>
          <li> diff</li>
          <li> rest</li>
          <li> plop</li>
        </ul>
      </div>
      <Burger />
    </SNavbar>
  );
}

export default Navbar;
