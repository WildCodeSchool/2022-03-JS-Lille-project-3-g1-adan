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
          ADAN, un outil simple, intuitif, qui garantit aux artistes et à leur
          employeur une cadre sécurisé et légal dédié à la mise en place de
          prestations
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
          <h1>Qui sommes nous ?</h1>
          <p>
            Par notre éducation, nos expériences, nos rencontres et nos
            sensibilités propres, nous portons toutes un intérêt à l’univers
            artistique et aux acteurs qui le font vivre : les artistes.
          </p>
          <Link to="/about">
            <h2>En savoir plus</h2>
          </Link>
        </div>
      </section>
    </SHome>
  );
}
