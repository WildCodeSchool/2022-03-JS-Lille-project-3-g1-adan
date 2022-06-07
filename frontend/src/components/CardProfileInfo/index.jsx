import Avatar from "@assets/imgProfile/unnamed.png";
import Banner from "@assets/imgProfile/banner.jpg";
import insta from "@assets/imgProfile/insta.svg";
import linkedin from "@assets/imgProfile/linkedin.svg";
import agenda from "@assets/imgProfile/agenda.svg";
import DemoProfile from "@components/DemoProfile";
import SCardProfile from "./style";

function CardProfileInfo() {
  return (
    <SCardProfile>
      <img src={Banner} className="bannerImg" alt="" />
      <div className="profileInfo">
        <div>
          <img src={Avatar} className="avatarImg" alt="" />
          <h1>artisteName</h1>
          <p>role</p>
        </div>
        <ul>
          <li>Bandname</li>
          <li>Lieu</li>
          <li>Cachet</li>
        </ul>
        <div>
          <button type="button">follow</button>
          <img src={agenda} alt="" />
          <img src={insta} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
      <div>
        <button type="button">Avis</button>
        <button type="button">MP</button>
      </div>
      <DemoProfile />
    </SCardProfile>
  );
}

export default CardProfileInfo;
