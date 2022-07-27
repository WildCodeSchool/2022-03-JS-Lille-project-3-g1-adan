import logo from "@assets/homePageImg/logo.svg";
import thisIsUs from "@assets/homePageImg/thisIsUs.png";
import Register from "@components/Buttons/Register";
import Login from "@components/Login";
import { Link } from "react-router-dom";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <section className="banner">
        <img src={logo} className="logo" alt="logo-adan" />
        <p>
          "45.000 euros et 3 ans de prison : c'est ce que risquent les
          employeurs et travailleurs <br /> au noir au pénal"
        </p>
      </section>
      <section className="connection">
        <p>
          ADAN, un outil simple, intuitif, qui garantit aux artistes et à leurs
          employeurs un cadre sécurisé et légal dédié à la mise en place de
          prestations.
        </p>
        <div className="login">
          <Login />
        </div>
        <div className="register">
          <Register />
        </div>
      </section>
      <section className="about">
        <img src={thisIsUs} className="thisIsUs" alt="thisIsUs" />
        <div className="description">
          <h1>A propos :</h1>
          <p>
            ADAN est un outil né de l'imagination d'Emeline et Calista,
            étudiantes à l'Université de Technologies de Compiègne. Baignées
            dans les notions de création et d'innovation nous avons mis au point
            ADAN afin de rendre les tâches administratives des artistes et de
            leurs employeurs plus simples.
          </p>
          <Link to="/about">
            <h2>En savoir plus</h2>
          </Link>
        </div>
      </section>
    </SHome>
  );
}
