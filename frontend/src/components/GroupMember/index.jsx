import ImgProfile from "@assets/imgProfile/unnamed.png";
import SGroupMember from "./style";

function GroupMember() {
  return (
    <SGroupMember>
      <div className="groupContainer">
        <img src={ImgProfile} className="avatar" alt="ProfileImg" />
        <div className="memberName">
          <ul>
            <li>Jacob Jones</li>
            <li>Bassiste</li>
          </ul>
        </div>
      </div>
    </SGroupMember>
  );
}

export default GroupMember;
