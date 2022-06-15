import { useState } from "react";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [formData, setFormData] = useState({
    nin: "",
    categoryJur: "",
    siret: "",
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
              value={formData.siret}
              onChange={hChangeFormData}
            />
            <input
              className="inputForm"
              type="text"
              name="categorieJuridique"
              placeholder="Catégorie juridique"
              value={formData.categoryJur}
              onChange={hChangeFormData}
            />
            <input
              className="inputForm"
              type="text"
              name="raisonSociale"
              placeholder="Raison Sociale"
              value={formData.nin}
              onChange={hChangeFormData}
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
