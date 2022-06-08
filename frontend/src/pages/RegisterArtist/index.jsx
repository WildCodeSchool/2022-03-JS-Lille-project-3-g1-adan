import Logo from "@assets/logo/Logo_ADAN.png";
import Checkbox from "@components/Checkbox";
import axios from "axios";
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

  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    secuNum: "",
  });

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post("http://localhost:5000/artist");
  };

  return (
    <SRegisterArtist>
      <img className="imgLogo" src={Logo} alt="Logo ADAN" />
      <div className="register">
        <div className="registerContainer">
          <h1>Artiste</h1>
          <form className="registerForm" onSubmit={hSubmit}>
            <input
              className="inputForm"
              type="text"
              name="lastname"
              placeholder="Nom"
              value={formData.lastname}
              onChange={hChangeFormData}
            />
            <input
              className="inputForm"
              type="text"
              name="firstname"
              placeholder="Prénom"
              value={formData.firstname}
              onChange={hChangeFormData}
            />
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={hChangeFormData}
            />
            <input
              className="inputForm"
              type="text"
              name="secuNum"
              placeholder="Numéro de sécurité sociale"
              value={formData.secuNum}
              onChange={hChangeFormData}
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
