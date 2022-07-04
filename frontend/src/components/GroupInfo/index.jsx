import agenda from "@assets/imgProfile/agenda.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    <SGroupInfo src={bandData.logo && bandData[0].logo}>
      <div
        className={
          bandData.logo === null || bandData.logo === undefined
            ? "imgBandDefault"
            : "imgBand"
        }
      />
      {bandData && bandData[0] ? (
        <>
          <h1>{bandData[0].style}</h1>
          <p>🌍 {bandData[0].city}</p>
          <p>{bandData[0].cachet}€</p>
          <Link to="/calendar">
            <img src={agenda} alt="agenda" />
          </Link>
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
                    {artist.firstname} {artist.lastname}{" "}
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
