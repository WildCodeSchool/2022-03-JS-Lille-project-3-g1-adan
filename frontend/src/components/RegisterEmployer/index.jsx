import axios from "axios";
import { useState } from "react";
import Logo from "@assets/logo/Logo_ADAN.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SRegisterEmployer from "./style";

export default function RegisterEmployer() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    status: "",
    password: "",
    companyName: "",
    companyStatus: "",
    numberSiret: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currStep, setCurrStep] = useState(1);
  const hNext = () => {
    setCurrStep(Math.min(2, currStep + 1));
  };
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
        delete formData.password;
        dispatch({ type: "LOGIN", payload: data });
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/employer`, {
            ...formData,
            user_id: id,
          })
          .then(({ data: dataEmployer }) => {
            dispatch({ type: "LOGIN", payload: dataEmployer });
            navigate(`/employer/${dataEmployer.id}`);
          });
      });
  };

  return (
    <SRegisterEmployer>
      <div className="register">
        <img src={Logo} className="imgLogo" alt="logo ADAN" />
        <fieldset className={currStep === 1 ? "active" : "inactive"}>
          <div className="registerContainer">
            <h1>Organisateur</h1>
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
            </form>
            <button className="btnNext" type="button" onClick={hNext}>
              Suite
            </button>
          </div>
        </fieldset>

        <fieldset className={currStep === 2 ? "active" : "inactive"}>
          <div className="registerContainer">
            <h1>Organisateur</h1>
            <form className="registerForm" onSubmit={hSubmit}>
              <input
                className="inputForm"
                type="text"
                name="numberSiret"
                placeholder="N° SIRET"
                value={formData.numberSiret}
                onChange={hChangeFormData}
              />
              <input
                className="inputForm"
                type="text"
                name="companyStatus"
                placeholder="Catégorie juridique"
                value={formData.companyStatus}
                onChange={hChangeFormData}
              />
              <input
                className="inputForm"
                type="text"
                name="companyName"
                placeholder="Raison Sociale"
                value={formData.companyName}
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
                Validez
              </button>
            </form>
          </div>
        </fieldset>
      </div>
    </SRegisterEmployer>
  );
}
