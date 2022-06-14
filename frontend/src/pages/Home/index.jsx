import logo from "@assets/homePageImg/logo.svg";
import thisIsUs from "@assets/homePageImg/thisIsUs.png";
import Style from "./style";

export default function Home() {
  return (
    <Style>
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
        <button className="register" type="button">
          inscription
        </button>
      </section>
      <section className="who">
        <img src={thisIsUs} className="thisIsUs" alt="thisIsUs" />
        <div className="description">
          <h1>Qui sommes nous ?</h1>
          <p>
            Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
            lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
            lorem ipsum, lorem ipsum, lorem ipsum ...
          </p>
          <h2>En savoir plus</h2>
        </div>
      </section>
    </Style>
  );
}
