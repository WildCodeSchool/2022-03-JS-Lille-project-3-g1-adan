import RegisterOne from "@components/RegisterOne";
import RegisterEmployer from "@components/RegisterEmployer";
import RegisterArtistLast from "@components/RegisterArtistLast";
import Logo from "@assets/logo/Logo_ADAN.png";
import SRegister from "./style";

export default function Register() {
  return (
    <SRegister>
      <img className="imgLogo" src={Logo} alt="Logo ADAN" />
      <RegisterOne />
      <RegisterEmployer />
      <RegisterArtistLast />
    </SRegister>
  );
}
