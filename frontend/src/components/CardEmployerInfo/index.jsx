import agenda from "@assets/imgProfile/agenda.svg";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import SCardProfile from "./style";

function CardEmployerInfo() {
  const [employerData, setEmployerData] = useState([]);
  const { employerId } = useParams();
  const { id } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    companyName: "",
    companyStatus: "",
    avatar: "",
    banner: "",
    descriptionShort: "",
    status: "",
    numberSiret: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const navigate = useNavigate();

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
      .put(`${import.meta.env.VITE_BACKEND_URL}/employer/${employerId}`, {
        ...formData,
      })
      .then(({ data }) => {
        setIsOpen2(false);
        toast.success("Mise à jour effectuée", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmployerData(data);
        setFormData(data);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/employer/${employerId}`)
      .then(({ data }) => {
        setEmployerData(data);
        setFormData(data);
      });
  }, []);

  const deleteEmployer = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/employer/${employerId}`)
      .then(() => {
        toast.success("profil employeur supprimé", {
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
    setIsFollow(!isFollow);
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
      textAlign: "center",
    },
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
    },
  };

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
          <button className="descriptionBtn" type="button" onClick={openModal}>
            + d'information
          </button>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Description"
          >
            <h2>Description</h2>
            <p> {employerData.descriptionShort}</p>
            <button type="button" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>

        <div>
          <Link to="/calendar">
            <img className="imgAgenda" src={agenda} alt="Logo agenda" />
          </Link>
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
        {parseInt(employerId, 10) === id && (
          <button
            type="button"
            label="validation"
            onClick={openModal2}
            className="editButton"
          />
        )}
        <Modal
          isOpen={modalIsOpen2}
          style={customStyles2}
          contentLabel="Description"
        >
          <form className="registerForm" onSubmit={hSubmit}>
            <h1> Modifier mon profil</h1>
            <div>
              <label htmlFor="firstname">
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
            </div>
            <div>
              <label htmlFor="lastname">
                Nom :
                <input
                  className="inputForm"
                  type="text"
                  name="lastname"
                  placeholder="Nom de famille"
                  value={formData.lastname}
                  onChange={hChangeFormData}
                />
              </label>
            </div>
            <div>
              <label htmlFor="phone">
                Tél :
                <input
                  className="inputForm"
                  type="text"
                  name="phone"
                  placeholder="numéro de téléphone"
                  value={formData.phone}
                  onChange={hChangeFormData}
                />
              </label>
            </div>

            <div>
              <label htmlFor="address">
                Adress :
                <input
                  className="inputForm"
                  type="text"
                  name="address"
                  placeholder="adresse"
                  value={formData.address}
                  onChange={hChangeFormData}
                />
              </label>
            </div>

            <div>
              <label htmlFor="zipcode">
                Code postal :
                <input
                  className="inputForm"
                  type="text"
                  name="zipcode"
                  placeholder="code postal"
                  value={formData.zipcode}
                  onChange={hChangeFormData}
                />
              </label>
            </div>

            <div>
              <label htmlFor="city">
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
              <label htmlFor="companyName">
                Société :
                <input
                  className="inputForm"
                  type="text"
                  name="companyName"
                  placeholder="nom de la société"
                  value={formData.companyName}
                  onChange={hChangeFormData}
                />
              </label>
            </div>

            <div>
              <label htmlFor="compagnyStatus">
                Forme juridique :
                <input
                  className="inputForm"
                  type="text"
                  name="companyStatus"
                  placeholder="statut de la société(ex : SARL, SAS...)"
                  value={formData.companyStatus}
                  onChange={hChangeFormData}
                />
              </label>
            </div>

            <div>
              <label htmlFor="avatar">
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
              <label htmlFor="banner">
                Bannière :
                <input
                  className="inputForm"
                  type="text"
                  name="banner"
                  placeholder="bannière"
                  value={formData.banner}
                  onChange={hChangeFormData}
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description :
                <input
                  className="inputForm"
                  type="text"
                  name="descriptionShort"
                  placeholder="description"
                  value={formData.descriptionShort}
                  onChange={hChangeFormData}
                />
              </label>
            </div>
            <div>
              <label htmlFor="status">
                Status :
                <input
                  className="inputForm"
                  type="text"
                  name="status"
                  placeholder="statut de l'employeur (ex : privé, publique...)"
                  value={formData.status}
                  onChange={hChangeFormData}
                />
              </label>
            </div>
            <div>
              <label htmlFor="numberSiret">
                Siret :
                <input
                  className="inputForm"
                  type="text"
                  name="numberSiret"
                  placeholder="numéro de siret"
                  value={formData.numberSiret}
                  onChange={hChangeFormData}
                />
              </label>
            </div>
            <button type="submit" className="editButton">
              validez
            </button>
          </form>
          <button type="button" onClick={deleteEmployer}>
            Supprimer votre profil
          </button>
          <button type="button" onClick={closeModal2}>
            close
          </button>
        </Modal>
      </div>
    </SCardProfile>
  );
}

export default CardEmployerInfo;
