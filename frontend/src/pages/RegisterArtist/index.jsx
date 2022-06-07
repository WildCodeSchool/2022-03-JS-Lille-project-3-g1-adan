import Logo from "@assets/Logo_ADAN.png";
import Checkbox from "@components/Checkbox";
import { useState } from "react";
import SRegisterArtist from "./style";

export default function RegisterArtist() {
  const [active, setActive] = useState(false);
  const [activeBis, setActiveBis] = useState(false);

  const handleChange = () => {
    setActive(!active);
    setActiveBis(false);
  };
  const handleChangeBis = () => {
    setActiveBis(!activeBis);
    setActive(false);
  };
  return (
    <SRegisterArtist>
      <img className="imgLogo" src={Logo} alt="Logo ADAN" />
      <div className="register">
        <div className="registerContainer">
          <h1>Artiste</h1>
          <form className="registerForm">
            <input
              className="inputForm"
              type="text"
              name="lastname"
              placeholder="Nom"
            />
            <input
              className="inputForm"
              type="text"
              name="firstname"
              placeholder="Prénom"
            />
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="inputForm"
              type="text"
              name="secuNum"
              placeholder="Numéro de sécurité sociale"
            />
            <div className="select">
              <Checkbox check={handleChange} act={active} />
              <span>Groupe</span>
              <Checkbox check={handleChangeBis} act={activeBis} />
              <span>Solo</span>
            </div>

            <button className="btnNext" type="submit">
              SUITE
            </button>
          </form>
        </div>
      </div>
    </SRegisterArtist>
  );
}
