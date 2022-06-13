import Logo from "@assets/imgProfile/logoAdanblanc.png";
import { useState } from "react";
import SRegisterEmployerLast from "./style";

export default function RegisterEmployerLast() {
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
    <SRegisterEmployerLast>
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
            <input
              className="inputForm"
              type="text"
              name="secuNum"
              placeholder="Numéro de sécurité sociale"
              value={secuNum}
              onChange={hChangeSecuNum}
            />

            <button className="btnNext" type="submit" onChange={hSubmit}>
              SUITE
            </button>
          </form>
        </div>
      </div>
    </SRegisterEmployerLast>
  );
}
