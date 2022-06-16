import Style from "./style";

export default function Login() {
  return (
    <Style>
      <div className="formBox">
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Mot de passe" />
          <input className="button" type="submit" value="connexion" />
        </form>
      </div>
    </Style>
  );
}
