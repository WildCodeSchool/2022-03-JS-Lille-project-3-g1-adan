import agenda from "@assets/imgProfile/agenda.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import { useSelector } from "react-redux";
import SGroupInfo from "./style";

function GroupInfo() {
  const [bandData, setBandData] = useState([]);
  const { bandId } = useParams();
  const location = useLocation();
  const api = useApi();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/band/${bandId}`)
      .then(({ data }) => {
        setBandData(data);
      });
  }, []);

  const [isFollow, setIsFollow] = useState(false);
  const handleIsFollow = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post("/favorites", { location })
      .then(() => {
        setIsFollow(!isFollow);
        toast.success(`${bandData[0].name}  a été ajouté à vos favoris`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Oups, une erreur s'est produite", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  if (!bandData.length) {
    return null;
  }

  return (
    <SGroupInfo src={bandData[0].logo}>
      <div
        className={
          bandData.logo === null || bandData.logo === ""
            ? "imgBandDefault"
            : "imgBand"
        }
      />
      <h1>{bandData[0].style}</h1>
      <p>🌍 {bandData[0].city}</p>
      <p>{bandData[0].cachet}€</p>
      <Link to="/calendar">
        <img src={agenda} alt="agenda" />
      </Link>
      <button
        type="button"
        className={`followButton ${isFollow ? "isNotFollowed" : "isFollowed"}`}
        onClick={handleIsFollow}
      >
        Suivre
      </button>
      <div className="member">Membres:</div>
      <div className="groupContainer">
        {bandData.map((artist) => {
          return (
            <div className="cardMember" key={artist.id}>
              <img src={artist.avatar} className="avatar" alt="ProfileImg" />
              <div className="memberName">
                <ul>
                  <Link to={`/artist/${artist.id}`}>
                    <li>
                      {artist.firstname} {artist.lastname}
                    </li>
                  </Link>
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
