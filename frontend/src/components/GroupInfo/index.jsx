import agenda from "@assets/imgProfile/agenda.svg";
import ImgProfile from "@assets/imgProfile/unnamed.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupMember from "@components/GroupMember";
import SGroupInfo from "./style";

function GroupInfo() {
  const [bandData, setBandData] = useState([]);
  const { bandId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/band/${bandId}`).then(({ data }) => {
      setBandData(data);
    });
  }, []);

  return (
    <SGroupInfo>
      <div className="imgband" />
      {bandData && bandData[0] ? (
        <>
          <h1>{bandData[0].style}</h1>
          <p>🌍 {bandData[0].city}</p>
          <p>{bandData[0].cachet}€</p>
          <img src={agenda} alt="agenda" />
          <div className="member">Membres:</div>
        </>
      ) : null}
      <div className="groupContainer">
        {bandData.map((artist) => {
          return (
            <div className="cardMember">
              <img src={artist.avatar} className="avatar" alt="ProfileImg" />
              <div className="memberName">
                <ul>
                  <li>
                    {artist.firstname} {artist.lastname}
                  </li>
                  <li>{artist.label}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </SGroupInfo>
  );
}

export default GroupInfo;
