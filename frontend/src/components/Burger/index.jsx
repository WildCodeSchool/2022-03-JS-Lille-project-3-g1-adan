import React, { useState } from "react";
import contact from "@assets/pictureNavMob/contact.png";
import logoAdangris from "@assets/pictureNavMob/logoAdangris.png";
import search from "@assets/pictureNavMob/Search.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SBurger from "./style";

function Burger() {
  const { type } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user);

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.error("Vous êtes déconnecté", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  return (
    <SBurger toggleNav={toggleNav} open={open}>
      <Link to="/">
        <img src={logoAdangris} alt="logo" className="logo" />
      </Link>{" "}
      {parseInt(id, 10) && toggleMenu ? (
        <ul>
          <Link to={`/${type}/${id}`}>
            <li className="picture">Mon profil</li>
          </Link>
          <Link to="/">
            <li className="picture">Accueil</li>
          </Link>
          <Link to={`/calendar/${id}`}>
            <li className="picture">Mon agenda</li>
          </Link>
          <Link to="/about">
            <li className="picture">A propos</li>
          </Link>
          <button type="submit" onClick={handleLogout}>
            Déconnexion
          </button>
        </ul>
      ) : (
        toggleMenu && (
          <ul>
            <Link to="/">
              <li className="picture">Accueil</li>
            </Link>
            <Link to="/about">
              <li className="picture">A propos</li>
            </Link>
          </ul>
        )
      )}
      <Link to="/search">
        <img src={search} alt="recherche" className="pict" />
      </Link>
      <Link to="/message">
        <img src={contact} alt="profil" className="contact" />
      </Link>
      <button
        type="button"
        onClick={() => {
          setToggleMenu(!toggleMenu);
          setOpen(!open);
        }}
        className="btn"
      >
        <div />
        <div />
        <div />
      </button>
    </SBurger>
  );
}

export default Burger;
