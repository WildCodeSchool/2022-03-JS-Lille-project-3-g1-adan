import cover from "@assets/imgProfile/cover.jpg";
// import ReactPlayer from "react-player";
import SDemoProfile from "./style";

function DemoProfile() {
  return (
    <SDemoProfile>
      {/* <ReactPlayer url="https://soundcloud.com/miami-nights-1984/accelerated" /> */}
      <img src={cover} alt="" />
    </SDemoProfile>
  );
}

export default DemoProfile;
