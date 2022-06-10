import logo from "@assets/homePageImg/logo.svg";
import Style from "./style";

export default function Home() {
  return (
    <Style>
      <section className="banner">
        <img src={logo} className="logo" alt="logo-adan" />
        <p>
          ADAN, un outil simple, intuitif, qui garantit aux artistes et à leur
          employeur une <br /> cadre sécurisé et légal dédié à la mise en place
          de prestations
        </p>
      </section>
    </Style>
  );
}
