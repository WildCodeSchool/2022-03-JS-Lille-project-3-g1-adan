import { useNavigate } from "react-router-dom";
import SBackButton from "./style";

function BackButton() {
  const navigate = useNavigate();
  return (
    <SBackButton type="button" onClick={() => navigate(-1)}>
      &#10094;
    </SBackButton>
  );
}

export default BackButton;
