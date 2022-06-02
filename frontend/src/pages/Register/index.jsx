import Logo from "@assets/Logo_ADAN.png";
import SRegister from "./style";

export default function Register() {
  return (
    <div>
      <SRegister>
        <img src={Logo} alt="Logo ADAN" />
        <div className="register">
          <h1>Inscription</h1>
        </div>
      </SRegister>
    </div>
  );
}
