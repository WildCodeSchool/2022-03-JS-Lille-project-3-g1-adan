import { useState } from "react";
import SRegisterArtistLast from "./style";

export default function RegisterArtistLast() {
  const [siren, setSiren] = useState("");
  const [selection, setSelection] = useState("");

  const hChangeSiren = (evt) => {
    setSiren(evt.target.value);
  };
  const hChangeSelection = (evt) => {
    setSelection(evt.target.value);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <SRegisterArtistLast>
      <div className="register">
        <div className="registerContainer">
          <h1>Employeur</h1>
          <form className="registerForm">
            <select className="inputForm" onChange={hChangeSelection}>
              <option value={selection} disabled selected hidden>
                Statut...
              </option>
              <option value="0">Intermittent du spectacle </option>
              <option value="1">Artiste-auteur </option>
              <option value="2">Auto-entrepreneur </option>
            </select>

            <input
              className="inputForm"
              type="text"
              name="siren"
              placeholder="Numéro de SIREN"
              value={siren}
              onChange={hChangeSiren}
            />
            <button className="btnNext" type="submit" onChange={hSubmit}>
              VALIDEZ
            </button>
          </form>
        </div>
      </div>
    </SRegisterArtistLast>
  );
}
