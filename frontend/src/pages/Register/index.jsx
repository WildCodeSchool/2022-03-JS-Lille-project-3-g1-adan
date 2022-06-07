import Logo from "@assets/Logo_ADAN.png";
import { Link } from "react-router-dom";
import SRegister from "./style";

export default function Register() {
  return (
    <div>
      <SRegister>
        <img className="imgLogo" src={Logo} alt="Logo ADAN" />
        <div className="register">
          <input className="registerInput" type="button" value="INSCRIPTION" />
          <div className="registerContainer">
            <Link to="/inscription/artiste">
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
      </SRegister>
    </div>
  );
}
