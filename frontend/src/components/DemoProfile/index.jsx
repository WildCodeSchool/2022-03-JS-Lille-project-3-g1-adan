import ReactPlayer from "react-player";
import datas from "@assets/imgProfile/data.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SDemoProfile from "./style";

function DemoProfile() {
  const [artistData, setArtistData] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/artist/${profileId}`).then(({ data }) => {
      setArtistData(data);
    });
  }, []);

  return (
    <SDemoProfile>
      <div className="player-wrapper">
        <ReactPlayer
          url={artistData.demo}
          controls
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="pictureContainer">
        {datas.map((data) => {
          return <img src={data.src} key={data.id} alt="cover" />;
        })}
      </div>
    </SDemoProfile>
  );
}

export default DemoProfile;
