import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import SDemoProfile from "./style";

function DemoProfile() {
  const [artistImg, setArtistImg] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/artist/${profileId}`)
      .then(({ data }) => {
        setArtistImg(data);
      });
  }, []);
  return (
    <SDemoProfile>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://soundcloud.com/marev8/au-dd?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          controls
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="coverContainer">
        {artistImg.galleryImg &&
          artistImg.galleryImg.map((img) => {
            return <img src={img} key={img} alt="cover" />;
          })}
      </div>
    </SDemoProfile>
  );
}

export default DemoProfile;
