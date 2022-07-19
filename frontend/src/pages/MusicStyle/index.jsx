import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicStyleCard from "@components/MusicStyleCard";
import SMusicStyle from "./style";

export default function MusicStyle() {
  const [MusicStyleData, setMusicStyleData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/musicStyle/${id}`)
      .then(({ data }) => {
        setMusicStyleData(data);
      });
  }, []);
  // if (!MusicStyleData.length) {
  //   return null;
  // }
  return (
    <SMusicStyle>
      <h1>Style : </h1>
      <div className="groupContainer">
        {MusicStyleData.artist.map((card) => {
          return (
            <MusicStyleCard
              firstname={card.firstname}
              lastname={card.lastname}
              city={card.city}
              id={card.id}
            />
          );
        })}
        {MusicStyleData.band.map((card) => {
          return (
            <MusicStyleCard
              name={card.name}
              cityBand={card.city}
              idBand={card.id}
            />
          );
        })}
      </div>
    </SMusicStyle>
  );
}
