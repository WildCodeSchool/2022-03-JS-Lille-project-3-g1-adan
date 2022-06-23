import PropTypes from "prop-types";
import SSearchInput from "./style";

function SearchInput({ hChange, formData }) {
  return (
    <SSearchInput>
      <input
        type="text"
        placeholder="Taper votre recherche"
        value={formData.search}
        name="search"
        onChange={hChange}
      />
    </SSearchInput>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  hChange: PropTypes.func,
  formData: PropTypes.shape({
    search: PropTypes.string,
  }),
};
SearchInput.defaultProps = {
  hChange: () => {},
  formData: PropTypes.shape({
    question: "",
    category: "",
  }),
};
