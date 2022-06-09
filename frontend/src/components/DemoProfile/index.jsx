import cover from "@assets/imgProfile/cover.jpg";
import ReactPlayer from "react-player";
import SDemoProfile from "./style";

function DemoProfile() {
  return (
    <SDemoProfile>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://youtu.be/F5tSoaJ93ac"
          controls="true"
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <img src={cover} alt="" />
    </SDemoProfile>
  );
}

export default DemoProfile;
