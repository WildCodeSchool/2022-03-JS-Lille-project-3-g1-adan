import Burger from "@components/Burger";
import NavMob from "@components/NavMob";
import SNavbar from "./style";

function Navbar() {
  return (
    <div>
      <SNavbar>
        <Burger />
        <NavMob />
      </SNavbar>
    </div>
  );
}

export default Navbar;
