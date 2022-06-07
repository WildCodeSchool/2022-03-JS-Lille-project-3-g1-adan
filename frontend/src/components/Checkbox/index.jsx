import Black from "@assets/checkbox_black.png";
import White from "@assets/checkbox_white.png";
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
  act: propTypes.string.isRequired,
};
