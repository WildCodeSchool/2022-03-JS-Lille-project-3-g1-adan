import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "@assets/logo/Logo_ADAN.png";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    status: "",
    password: "",
  });
  const navigate = useNavigate();
  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formData)
      .then(({ data }) => {
        const { id } = data.user;
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/employer`, {
          ...formData,
          user_id: id,
        });
      })
      .then(() => {
        navigate("/register/employer/validation");
      });
  };

  return (
    <SRegisterEmployer>
      <div className="register">
        <img src={Logo} className="imgLogo" alt="logo ADAN" />
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
            <input
              className="inputForm"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
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
