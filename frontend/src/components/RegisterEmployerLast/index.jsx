import { useState } from "react";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [siret, setSiret] = useState("");
  const [categoryJur, setCategoryJur] = useState("");
  const [nin, setNin] = useState("");

  const hChangeSiret = (evt) => {
    setSiret(evt.target.value);
  };
  const hChangeCategoryJur = (evt) => {
    setCategoryJur(evt.target.value);
  };
  const hChangeNin = (evt) => {
    setNin(evt.target.value);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <SRegisterEmployer>
      <div className="register">
        <div className="registerContainer">
          <h1>Employeur</h1>
          <form className="registerForm">
            <input
              className="inputForm"
              type="text"
              name="siret"
              placeholder="N° SIRET"
              value={siret}
              onChange={hChangeSiret}
            />
            <input
              className="inputForm"
              type="text"
              name="categorie juridique"
              placeholder="Catégorie juridique"
              value={categoryJur}
              onChange={hChangeCategoryJur}
            />
            <input
              className="inputForm"
              type="text"
              name="raison sociale"
              placeholder="Raison Sociale"
              value={nin}
              onChange={hChangeNin}
            />

            <button className="btnNext" type="submit" onChange={hSubmit}>
              Validez
            </button>
          </form>
        </div>
      </div>
    </SRegisterEmployer>
  );
}
