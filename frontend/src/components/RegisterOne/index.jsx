import { Link } from "react-router-dom";
import SRegisterOne from "./style";

export default function RegisterOne() {
  return (
    <SRegisterOne>
      <div className="register">
        <input className="registerInput" type="button" value="INSCRIPTION" />
        <div className="registerContainer">
          <Link to="/register/artist">
            <button className="registerContainerInput" type="button">
              Je suis un artiste
            </button>
          </Link>
          <input
            className="registerContainerInput"
            type="button"
            value="Je recherche un artiste"
          />
        </div>
      </div>
    </SRegisterOne>
  );
}
