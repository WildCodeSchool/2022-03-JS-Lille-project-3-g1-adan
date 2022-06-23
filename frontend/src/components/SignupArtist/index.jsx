import Checkbox from "@components/Checkbox";
import axios from "axios";
import { useState } from "react";
import SSignupArtist from "./style";

export default function SignupArtist() {
  const [formData, setFormData] = useState({
    bandName: "",
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);

  const handleChange = () => {
    setCheckOne(!checkOne);
    setCheckTwo(false);
  };
  const handleChangeBis = () => {
    setCheckTwo(!checkTwo);
    setCheckOne(false);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formData);
  };

  return (
    <SSignupArtist>
      <div className="register">
        <div className="registerContainer">
          <h1>Artiste</h1>
          <form className="registerForm" onSubmit={hSubmit}>
            <div className="select">
              <Checkbox check={handleChange} act={checkOne} type="button" />
              <span>Groupe</span>
              <Checkbox check={handleChangeBis} act={checkTwo} />
              <span>Solo</span>
            </div>
            {checkOne ? (
              <input
                className="inputBandName"
                type="text"
                name="bandName"
                placeholder="Nom du groupe"
                value={formData.bandName}
              />
            ) : (
              <>
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
              </>
            )}

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
            <input
              className="inputForm"
              type="text"
              name="secuNum"
              placeholder="Numéro de sécurité sociale"
              value={formData.secuNum}
              onChange={hChangeFormData}
            />

            <button className="btnNext" type="submit">
              SUITE
            </button>
          </form>
        </div>
      </div>
    </SSignupArtist>
  );
}
