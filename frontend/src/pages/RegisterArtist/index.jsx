import Logo from "@assets/Logo_ADAN.png";
import SRegisterArtist from "./style";

export default function RegisterArtist() {
  return (
    <SRegisterArtist>
      <img src={Logo} alt="Logo ADAN" />
      <div className="register">
        <div className="registerContainer">
          <h1>Artiste</h1>
          <form className="registerForm">
            <input
              className="inputForm"
              type="text"
              name="lastname"
              placeholder="Nom"
            />
            <input
              className="inputForm"
              type="text"
              name="firstname"
              placeholder="Prénom"
            />
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="inputForm"
              type="text"
              name="secunum"
              placeholder="Numéro de sécurité sociale"
            />
            <div className="checkbox">
              <input type="checkbox" name="band" />
              <span>Groupe</span>
              <input type="checkbox" name="band" />
              <span>Solo</span>
            </div>
            <button type="submit">Suite</button>
          </form>
        </div>
      </div>
    </SRegisterArtist>
  );
}
