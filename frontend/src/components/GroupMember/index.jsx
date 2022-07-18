import ImgProfile from "@assets/imgProfile/unnamed.png";
import PropTypes from "prop-types";
import SGroupMember from "./style";

export default function GroupMember({ avatar, firstname, lastname, label }) {
  return (
    <SGroupMember>
      <div className="groupContainer">
        {avatar === null ? (
          <img src={ImgProfile} className="avatar" alt="ProfileImg" />
        ) : (
          <img src={avatar} className="avatar" alt="ProfileImg" />
        )}
        <div className="memberName">
          <ul>
            <li>
              {firstname} {lastname}
            </li>
            <li>{label}</li>
          </ul>
        </div>
      </div>
    </SGroupMember>
  );
}

GroupMember.propTypes = {
  avatar: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  label: PropTypes.string,
};
GroupMember.defaultProps = {
  avatar: "",
  firstname: "",
  lastname: "",
  label: "",
};
