import RegisterOne from "@components/RegisterOne";
import Logo from "@assets/logo/Logo_ADAN.png";
import SRegister from "./style";

export default function Register() {
  return (
    <SRegister>
      <img className="imgLogo" src={Logo} alt="Logo ADAN" />
      <RegisterOne />
    </SRegister>
  );
}
