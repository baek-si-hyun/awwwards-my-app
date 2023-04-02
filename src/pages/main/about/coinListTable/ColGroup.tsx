import styled from "styled-components";

const ColName = styled.col`
  width: 310;
  min-width: auto;
  @media (max-width: 1279px) {
    & {
      box-shadow: 0px 0px 2px rgba(128, 138, 157, 0.12),
        0px 0px 24px rgba(128, 138, 157, 0.14);
    }
  }
`;
const ColPrice = styled.col`
  width: 181px;
  min-width: auto;
`;
const ColChange1 = styled.col`
  width: 200px;
  min-width: auto;
`;
const ColChange2 = styled.col`
  width: 236px;
  min-width: auto;
`;
const ColVolume = styled.col`
  width: 236px;
  min-width: auto;
`;
const ColSupply = styled.col`
  width: 236px;
  min-width: auto;
`;
const ColCap = styled.col`
  width: 236px;
  min-width: auto;
`;
const ColChart = styled.col`
  width: 183px;
  min-width: auto;
`;
function Colgroup() {
  return (
    <colgroup>
      <ColName />
      <ColPrice />
      <ColChange1 />
      <ColChange2 />
      <ColVolume />
      <ColSupply />
      <ColCap />
      <ColChart />
    </colgroup>
  );
}
export default Colgroup;
