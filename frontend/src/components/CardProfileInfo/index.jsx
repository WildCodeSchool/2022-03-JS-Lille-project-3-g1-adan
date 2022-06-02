import Avatar from "@assets/imgProfile/unnamed.png";
import Banner from "@assets/imgProfile/banner.jpg";
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
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </SCardProfile>
  );
}

export default CardProfileInfo;
