import SAbout from "./style";

export default function About() {
  return (
    <SAbout>
      <h2>A propos :</h2>
      <div className="container">
        <p>
          La profession d'artiste peut être dans certains cas synonyme de
          précarité dû à un système de rémunération assez mal connu. Cette
          situation concerne particulièrement les artistes encore peu connus,
          amateurs ou professionnels, dont la carrière n’est pas gérée par un
          agent. Il est courant que lors d’une prestation, ces « petits »
          artistes reçoivent en échange de leur services des prestations
          compensatoires ou encore un paiement de la main à la main aléatoire.
        </p>

        <p>
          Tout artiste a déjà reçu en échange d’une prestation « un verre offert
          par la maison », ou encore un petit billet mais moins que prévu car le
          patron du bar estime qu’il y avait finalement moins de clients que
          prévu. Ces rémunérations, qui n’en sont pas vraiment, ne permettent
          pas à ces artistes de recevoir un salaire à proprement dit, ni de
          cotiser pour leurs droits sociaux. Il existe des organismes, des
          associations et des aides de l'État pour aider ces artistes, mais
          encore faut-il les connaître et prendre le temps de faire les
          démarches.{" "}
        </p>

        <p>
          En effet, les répétitions, la recherche de prestation et les
          représentations prennent beaucoup de temps aux artistes qui souvent
          n’ont pas le temps pour toutes ces recherches et démarches
          administratives, et préfèrent la facilité même si elle reste plus
          précaire.
        </p>
        <p>
          C’est pourquoi, afin de répondre à ce besoin et de combler ce problème
          de rémunération, nous avons imaginé un outil simple, intuitif, qui
          garantit aux artistes et à leur employeur une cadre sécurisé et légal
          dédié à la mise en place de prestations : Une plateforme unique
          proposant une gestion administrative et législative de leurs
          évènements, ainsi qu’un réseau inter artistes, source infinie
          d’opportunités.
        </p>
      </div>
    </SAbout>
  );
}
