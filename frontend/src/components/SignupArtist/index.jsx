import { useNavigate } from "react-router-dom";
import Logo from "@assets/logo/Logo_ADAN.png";
import axios from "axios";
import { useState } from "react";
import SSignupArtist from "./style";

export default function SignupArtist() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    status: "",
    siren: "",
  });

  const [currStep, setCurrStep] = useState(1);

  const hNext = () => {
    setCurrStep(Math.min(2, currStep + 1));
  };

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
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/artist`, {
          ...formData,
          user_id: id,
        });
      })
      .then(() => {
        navigate("/profile");
      });
  };

  return (
    <SSignupArtist>
      <div className="register">
        <img src={Logo} className="imgLogo" alt="Logo ADAN" />
        <fieldset className={currStep === 1 ? "active" : "inactive"}>
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
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={hChangeFormData}
              />
            </form>
            <button className="btnNext" type="button" onClick={hNext}>
              SUIVANT
            </button>
          </div>
        </fieldset>
      </div>
      <fieldset className={currStep === 2 ? "active" : "inactive"}>
        <div className="registerContainerTwo">
          <h1>Artiste</h1>
          <form className="registerForm" onSubmit={hSubmit}>
            <select
              className="inputForm"
              name="status"
              onChange={hChangeFormData}
            >
              <option>Statut...</option>
              <option value="intermittentduspectacle">
                Intermittent du spectacle
              </option>
              <option value="artisteauteur">Artiste-auteur </option>
              <option value="autoentrepreneur">Auto-entrepreneur </option>
            </select>

            <input
              className="inputForm"
              type="text"
              name="siren"
              placeholder="Numéro de SIREN"
              value={formData.siren}
              onChange={hChangeFormData}
            />
            <button className="btnValidate" type="submit">
              VALIDEZ
            </button>
          </form>
        </div>
      </fieldset>
    </SSignupArtist>
  );
}
