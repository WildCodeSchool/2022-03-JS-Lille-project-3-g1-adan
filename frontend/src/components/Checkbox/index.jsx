import Black from "@assets/imgRegister/checkbox_black.png";
import White from "@assets/imgRegister/checkbox_white.png";
import propTypes from "prop-types";

export default function Checkbox({ check, act }) {
  return (
    <div className="checkbox">
      <button
        className={act ? "button-on" : "button-off"}
        onClick={check}
        type="button"
      >
        {act ? (
          <img src={Black} alt="Bouton check" />
        ) : (
          <img src={White} alt="Bouton à checker" />
        )}
      </button>
    </div>
  );
}

Checkbox.propTypes = {
  check: propTypes.func.isRequired,
  act: propTypes.bool.isRequired,
};
