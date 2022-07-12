import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import Style from "./style";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const api = useApi();

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, formData)
      .then(({ data }) => {
        const { user, token } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "LOGIN", payload: user });
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
      .catch((e) => {
        toast.error(`Mauvais identifiants${e}`, {
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
