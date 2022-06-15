import agenda from "@assets/imgProfile/agenda.svg";
import test from "@assets/imgBand/bandImg.svg";
import SGroupInfo from "./style";

function GroupInfo() {
  return (
    <SGroupInfo>
      <img src={test} alt="ImgBand" />
      <h1>Jazz/Be pop</h1>
      <p>🌍 Nantes,Loire-Atlantique</p>
      <p>340€</p>
      <img src={agenda} alt="agenda" />
      <div className="member">Membres:</div>
    </SGroupInfo>
  );
}

export default GroupInfo;
