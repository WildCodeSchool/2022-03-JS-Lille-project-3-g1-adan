import agenda from "@assets/imgProfile/agenda.svg";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SCardProfile from "./style";

function CardEmployerInfo() {
  const [employerData, setEmployerData] = useState([]);
  const { employerId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employer/${employerId}`)
      .then(({ data }) => {
        setEmployerData(data);
      });
  }, []);

  const [isFollow, setIsFollow] = useState(false);
  const handleIsFollow = () => {
    setIsFollow(!isFollow);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <SCardProfile src={employerData}>
      <div
        className={
          employerData.banner === null || employerData.banner === ""
            ? "defaultBanner"
            : "bannerImg"
        }
      />
      <div className="profileInfo">
        <div
          className={
            employerData.avatar === null || employerData.avatar === ""
              ? "defaultAvatar"
              : "avatarImg"
          }
        />
        <div>
          <h1>
            {employerData.firstname} {employerData.lastname}
          </h1>
          <p>{employerData.role}</p>
        </div>
        <button
          type="button"
          className={`followButton ${
            isFollow ? "isNotFollowed" : "isFollowed"
          }`}
          onClick={handleIsFollow}
        >
          Suivre
        </button>
        <ul>
          <li>🌍 {employerData.city}</li>
        </ul>
        <div className="description">
          <button type="button" onClick={openModal}>
            + d'information
          </button>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Description"
          >
            <h2>Description</h2>
            <p> {employerData.description}</p>
            <button type="button" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>

        <div>
          <img className="imgAgenda" src={agenda} alt="Logo agenda" />
        </div>
      </div>
      <div className="bottomProfile">
        <button
          type="button"
          className="btnBottomProfile btnBottomProfileBorder"
        >
          Avis
        </button>
        <button type="button" className="btnBottomProfile">
          MP
        </button>
      </div>
    </SCardProfile>
  );
}

export default CardEmployerInfo;
