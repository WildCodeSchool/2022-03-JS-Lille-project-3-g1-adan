import { Link } from "react-router-dom";
import SRegister from "./style";

export default function Register() {
  return (
    <Link to="/register" style={{ textDecoration: "none" }}>
      <SRegister className="register" type="button">
        INSCRIPTION
      </SRegister>
    </Link>
  );
}
