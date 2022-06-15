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
          <form className="registerForm">
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
              onChange={hChangeFirstname}
            />
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={hChangeFormData}
            />
            <select className="inputForm" onChange={hChangeSelection}>
              <option value={formData.status} >
                Type d'employeur ...
              </option>
              <option value={dataForm.status}>Privé </option>
              <option value={dataForm.status}>Public </option>
              <option value={dataForm.status}>Personnel </option>
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
