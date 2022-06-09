import ReactPlayer from "react-player";
import datas from "@assets/imgProfile/data.json";
import SDemoProfile from "./style";

function DemoProfile() {
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
        {datas.map((data) => {
          return <img src={data.src} key={data.id} alt="cover" />;
        })}
      </div>

    </SDemoProfile>
  );
}

export default DemoProfile;
