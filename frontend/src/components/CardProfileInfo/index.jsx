import insta from "@assets/imgProfile/insta.svg";
import linkedin from "@assets/imgProfile/linkedin.svg";
import agenda from "@assets/imgProfile/agenda.svg";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import { useSelector } from "react-redux";
import MyFavorites from "@components/Buttons/MyFavorites";
import SCardProfile from "./style";

function CardProfileInfo() {
  const [artistData, setArtistData] = useState([]);
  const { profileId } = useParams();
  const location = useLocation();
  const api = useApi();
  const { token } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    nickname: "",
    avatar: "",
    banner: "",
    demo: "",
    description: "",
    gallery: "",
    cachet: "",
    instagram: "",
    linkedin: "",
    status: "",
    siren: "",
  });

  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/artist/${profileId}`, {
        ...formData,
      })
      .then(({ data }) => {
        setIsOpen(false);
        toast.success("Mise à jour effectuée", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setArtistData(data);
        setFormData(data);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/artist/${profileId}`)
      .then(({ data }) => {
        setArtistData(data);
        setFormData(data);
      });
  }, [location]);

  const deleteProfile = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/artist/${profileId}`)
      .then(() => {
        toast.success("profil artist supprimé", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .then(() => {
        navigate("/");
      });
  };

  const [isFollow, setIsFollow] = useState(false);
  const handleIsFollow = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post("/favorites", { location })
      .then(() => {
        setIsFollow(!isFollow);
        toast.success(
          `${artistData.firstname} ${artistData.lastname} a été ajouté à vos favoris`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      lineHeight: "2rem",
      textAlign: "center",
    },
  };

  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      lineHeight: "2rem",
    },
  };
  return (
    <SCardProfile src={artistData}>
      <div
        className={
          artistData.banner === null || artistData.banner === ""
            ? "defaultBanner"
            : "bannerImg"
        }
      />
      {parseInt(profileId, 10) === id && (
        <button type="button" onClick={openModal} className="editButton">
          {" "}
        </button>
      )}
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Form">
        <form className="form" onSubmit={hSubmit}>
          <h1> Modifier mon profil</h1>
          <div>
            <label htmlFor="lastname">
              Nom :
              <input
                className="inputForm"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Nom de famille"
                value={formData.lastname}
                onChange={hChangeFormData}
              />
            </label>
          </div>

          <label htmlFor="fistname">
            Prénom :
            <input
              className="inputForm"
              type="text"
              name="firstname"
              placeholder="Prénom"
              value={formData.firstname}
              onChange={hChangeFormData}
            />
          </label>

          <div>
            <label htmlFor="fistname">
              Ville :
              <input
                className="inputForm"
                type="text"
                name="city"
                placeholder="Ville"
                value={formData.city}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Avatar :
              <input
                className="inputForm"
                type="text"
                name="avatar"
                placeholder="Avatar"
                value={formData.avatar}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Bannière :
              <input
                className="inputForm"
                type="text"
                name="banner"
                placeholder="Banner"
                value={formData.banner}
                onChange={hChangeFormData}
              />{" "}
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Démo :
              <input
                className="inputForm"
                type="text"
                name="demo"
                placeholder="Démo"
                value={formData.demo}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Description :
              <input
                className="inputForm"
                type="text"
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Cachet :
              <input
                className="inputForm"
                type="text"
                name="cachet"
                placeholder="cachet"
                value={formData.cachet}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Instagram :
              <input
                className="inputForm"
                type="text"
                name="instagram"
                placeholder="Instagram"
                value={formData.instagram}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Linkedin :
              <input
                className="inputForm"
                type="text"
                name="linkedin"
                placeholder="Linkedin"
                value={formData.linkedin}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Tel :
              <input
                className="inputForm"
                type="text"
                name="phone"
                placeholder="Tel"
                value={formData.phone}
                onChange={hChangeFormData}
              />{" "}
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Adresse :
              <input
                className="inputForm"
                type="text"
                name="adress"
                placeholder="adresse"
                value={formData.address}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Code postal :
              <input
                className="inputForm"
                type="text"
                name="zipcode"
                placeholder="Code postal"
                value={formData.zipcode}
                onChange={hChangeFormData}
              />{" "}
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Pseudo :
              <input
                className="inputForm"
                type="text"
                name="nickname"
                placeholder="Pseudonyme"
                value={formData.nickname}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Galerie d'image :
              <input
                className="inputForm"
                type="text"
                name="galleryImg"
                placeholder="Galerie d'images"
                value={formData.galleryImg}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Statut :
              <input
                className="inputForm"
                type="text"
                name="status"
                placeholder="status"
                value={formData.status}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <div>
            <label htmlFor="fistname">
              Siren :
              <input
                className="inputForm"
                type="text"
                name="siren"
                placeholder="siren"
                value={formData.siren}
                onChange={hChangeFormData}
              />
            </label>
          </div>
          <button type="submit">validez</button>
        </form>
        <button type="button" onClick={deleteProfile}>
          Supprimer votre profil
        </button>
        <button type="button" onClick={closeModal}>
          fermer
        </button>
      </Modal>
      <div className="profileInfo">
        <div
          className={
            artistData.avatar === null || artistData.avatar === ""
              ? "defaultAvatar"
              : "avatarImg"
          }
        />
        <div>
          <h1>
            {artistData.firstname} {artistData.lastname}
          </h1>
          <p>{artistData.role}</p>
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
          <li>👥 {artistData.bandname} The goodman</li>
          <li>🌍 {artistData.city}</li>
          <li>€ {artistData.cachet}</li>
        </ul>
        <div className="description">
          <button type="button" onClick={openModal2} className="descriptionBtn">
            + d'informations
          </button>
          <Modal
            isOpen={modalIsOpen2}
            style={customStyles2}
            contentLabel="Description"
          >
            <h2>Description</h2>
            <p>{artistData.description}</p>
            <button type="button" onClick={closeModal2}>
              close
            </button>
          </Modal>
        </div>
        <div>
          <Link to={`/calendar/${profileId}`}>
            <img className="imgAgenda" src={agenda} alt="Logo agenda" />
          </Link>
          <a href={artistData.instagram}>
            <img className="imgInsta" src={insta} alt="Logo instagram" />
          </a>
          <a href={artistData.linkedin}>
            <img className="imgLinkedin" src={linkedin} alt="Logo linkedin" />
          </a>
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
      {parseInt(profileId, 10) === id && <MyFavorites />}
    </SCardProfile>
  );
}

export default CardProfileInfo;
