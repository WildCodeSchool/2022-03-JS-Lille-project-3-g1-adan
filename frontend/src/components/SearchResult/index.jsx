import BackButton from "@components/BackButton";
import GroupInfo from "@components/GroupInfo";
import SsearchResult from "./style";

function searchResult() {
  return (
    <SsearchResult>
      <BackButton />
      <GroupInfo />
    </SsearchResult>
  );
}

export default searchResult;
