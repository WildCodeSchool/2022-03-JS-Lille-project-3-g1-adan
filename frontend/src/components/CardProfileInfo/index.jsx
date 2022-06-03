import Avatar from "@assets/imgProfile/val1.png";
import Banner from "@assets/imgProfile/banner.png";
import insta from "@assets/imgProfile/insta.svg";
import linkedin from "@assets/imgProfile/linkedin.svg";
import agenda from "@assets/imgProfile/agenda.svg";
import DemoProfile from "@components/DemoProfile";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SCardProfile from "./style";

function CardProfileInfo() {
  const [artistData, setArtistData] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/artist/${profileId}`).then(({ data }) => {
      setArtistData(data);
    });
  }, [{ artistData }]);
  return (
    <SCardProfile>
      <img src={artistData.banner} className="bannerImg" alt="" />
      <div className="profileInfo">
        <div>
          <img src={artistData.avatar} className="avatarImg" alt="" />
          <h1>
            {artistData.firstname} {artistData.lastname}
          </h1>
          <p>{artistData.role}</p>
        </div>
        <ul>
          <li>{artistData.bandname}</li>
          <li>{artistData.city}</li>
          <li>{artistData.cachet}</li>
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
