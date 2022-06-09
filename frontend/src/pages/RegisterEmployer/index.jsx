import { useState } from "react";
import Logo from "@assets/imgProfile/logoAdanblanc.png";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [secuNum, setSecuNum] = useState("");

  const hChangeLastname = (evt) => {
    setLastname(evt.target.value);
  };
  const hChangeFirstname = (evt) => {
    setFirstname(evt.target.value);
  };
  const hChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const hChangeSecuNum = (evt) => {
    setSecuNum(evt.target.value);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <SRegisterEmployer>
      <img className="imgLogo" src={Logo} alt="Logo ADAN" />
      <div className="register">
        <div className="registerContainer">
          <h1>Employeur</h1>
          <form className="registerForm">
            <input
              className="inputForm"
              type="text"
              name="lastname"
              placeholder="Nom"
              value={lastname}
              onChange={hChangeLastname}
            />
            <input
              className="inputForm"
              type="text"
              name="firstname"
              placeholder="Prénom"
              value={firstname}
              onChange={hChangeFirstname}
            />
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={hChangeEmail}
            />

            <select
              className="inputForm"
              value={secuNum}
              onChange={hChangeSecuNum}
            >
              <option value="" disabled selected hidden>
                Selectionner Privé/Public ...
              </option>
              <option value="0">Privé </option>
              <option value="1">Public</option>
            </select>

            <button className="btnNext" type="submit" onChange={hSubmit}>
              SUITE
            </button>
          </form>
        </div>
      </div>
    </SRegisterEmployer>
  );
}
