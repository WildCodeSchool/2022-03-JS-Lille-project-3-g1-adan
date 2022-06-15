import ImgProfile from "@assets/imgProfile/unnamed.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SGroupMember from "./style";

function GroupMember() {
  const [artistData, setArtistData] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/artist/${profileId}`).then(({ data }) => {
      setArtistData(data);
    });
  }, []);
  return (
    <SGroupMember>
      <div className="groupContainer">
        <img src={ImgProfile} className="avatar" alt="ProfileImg" />
        <div className="test">
          <ul>
            <li>
              {artistData.firstname}Jacob Jones{artistData.lastname}
            </li>
            Bassiste
            <li />
          </ul>
        </div>
      </div>
    </SGroupMember>
  );
}

export default GroupMember;
