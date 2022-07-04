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
          <Link to="/register/employer">
            <button className="registerContainerInput" type="button">
              Je recherche un artiste
            </button>
          </Link>
        </div>
      </div>
    </SRegisterOne>
  );
}
