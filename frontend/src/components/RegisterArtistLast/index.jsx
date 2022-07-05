import { useState } from "react";
import Logo from "@assets/logo/Logo_ADAN.png";
import SRegisterArtistLast from "./style";

export default function RegisterArtistLast() {
  const [formData, setFormData] = useState({
    siren: "",
    status: "",
  });
  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <SRegisterArtistLast>
      <div className="register">
        <img src={Logo} alt="logo Adan" className="imgLogo" />
        <div className="registerContainer">
          <h1>Artiste</h1>
          <form className="registerForm">
            <select className="inputForm" onChange={hChangeFormData}>
              <option value={formData.status}>Statut...</option>
              <option value={formData.status}>Intermittent du spectacle</option>
              <option value={formData.status}>Artiste-auteur </option>
              <option value={formData.status}>Auto-entrepreneur </option>
            </select>

            <input
              className="inputForm"
              type="text"
              name="siren"
              placeholder="Numéro de SIREN"
              value={formData.siren}
              onChange={hChangeFormData}
            />
            <button className="btnNext" type="submit" onChange={hSubmit}>
              VALIDEZ
            </button>
          </form>
        </div>
      </div>
    </SRegisterArtistLast>
  );
}
