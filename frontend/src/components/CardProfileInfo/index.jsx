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
  }, []);

  const [isFollow, setIsFollow] = useState(false);
  const handleIsFollow = () => {
    setIsFollow(!isFollow);
  };
  return (
    <SCardProfile src={artistData}>
      <div
        className={
          artistData.banner === null || artistData.banner === ""
            ? "defaultBanner"
            : "bannerImg"
        }
      />
      <div className="profileInfo">
        <div
          className={
            artistData.avatar === null || artistData.avatar === ""
              ? "defaultAvatar"
              : "avatarImg"
          }
        />
        {/* <div className="avatarImg"> </div> */}
        <div>
          <h1>
            {artistData.firstname} {artistData.lastname}
          </h1>
          <p>{artistData.role}</p>
        </div>
        <button
          type="button"
          className={`followButton ${
            isFollow ? "isNotFollowed" : "isFollowed"
          }`}
          onClick={handleIsFollow}
        >
          Suivre
        </button>
        <ul>
          <li>👥 {artistData.bandname} The goodman</li>
          <li>🌍 {artistData.city}</li>
          <li>€ {artistData.cachet}</li>
        </ul>
        <div className="description">
          <a href="www.google.com"> + d'information </a>{" "}
        </div>

        <div>
          <img className="imgAgenda" src={agenda} alt="" />
          <img className="imgInsta" src={insta} alt="" />
          <img className="imgLinkedin" src={linkedin} alt="" />
        </div>
      </div>
      <div className="bottomProfile">
        <button
          type="button"
          className="btnBottomProfile btnBottomProfileBorder"
        >
          Avis
        </button>
        <button type="button" className="btnBottomProfile">
          MP
        </button>
      </div>
      <DemoProfile />
    </SCardProfile>
  );
}

export default CardProfileInfo;
