import BackButton from "@components/BackButton";
import GroupInfo from "@components/GroupInfo";
import GroupMember from "@components/GroupMember";
import SsearchResult from "./style";

function searchResult() {
  return (
    <SsearchResult>
      <BackButton />
      <GroupInfo />
      <GroupMember />
    </SsearchResult>
  );
}

export default searchResult;
