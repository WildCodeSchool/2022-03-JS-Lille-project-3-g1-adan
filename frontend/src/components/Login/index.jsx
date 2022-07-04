import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Style from "./style";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, formData)
      .then(() => {
        toast.success("Bienvenue !", {
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
        toast.error("Mauvais identifiants", {
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

  return (
    <Style>
      <div className="formBox">
        <form>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={hChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Mot de passe"
            onChange={hChange}
          />
          <input
            className="button"
            type="submit"
            onClick={hSubmit}
            value="connexion"
          />
        </form>
      </div>
    </Style>
  );
}
