import agenda from "@assets/imgProfile/agenda.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <h1>{bandData.name}</h1>
      <p>🌍 {bandData.city}</p>
      <p>{bandData.cachet}€</p>
      <img src={agenda} alt="agenda" />
      <div className="member">Membres:</div>
    </SGroupInfo>
  );
}

export default GroupInfo;
