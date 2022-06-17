import { useState } from "react";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
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
    <SRegisterEmployer>
      <div className="register">
        <div className="registerContainer">
          <h1>Employeur</h1>
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
            <select
              className="inputForm"
              name="status"
              onChange={hChangeFormData}
            >
              <option>Type d'employeur ...</option>
              <option value="private">Privé </option>
              <option value="public">Public </option>
              <option value="personal">Personnel </option>
            </select>
            <button className="btnNext" type="submit">
              SUITE
            </button>
          </form>
        </div>
      </div>
    </SRegisterEmployer>
  );
}
