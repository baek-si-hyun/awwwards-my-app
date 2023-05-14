import styled from "styled-components";
import { Tr } from "../CoinList";
import { Namediv } from "./Tbody/TbodyTr";

const TdFixed = styled.td`
  padding: 3.5px;
  text-align: end;
  vertical-align: middle;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`;

const TdNomalDivFixed = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: flex-end;
`;

const Skeleton = styled.div`
  background-color: #ececec;
  border-radius: 5px;
  padding: 13px 10px;
`;
const SkeletonName = styled(Skeleton)`
  width: 100%;
`;
const SkeletonPrice = styled(Skeleton)`
  width: 100%;
`;
const SkeletonChangePrice = styled(Skeleton)`
  width: 40%;
`;
const SkeletonChangePer = styled(Skeleton)`
  width: 50%;
`;
const SkeletonVolume = styled(Skeleton)`
  width: 90%;
`;
const SkeletonVolumePrice = styled(Skeleton)`
  width: 90%;
`;
const SkeletonSupply = styled(Skeleton)`
  width: 90%;
`;
const SkeletonMarketCap = styled(Skeleton)`
  width: 90%;
`;
const SkeletonChart = styled(Skeleton)`
  width: 100%;
  height: 50px;
`;

function SkeletonUI() {
  return (
    <Tr>
      <TdFixed>
        <Namediv>
          <SkeletonName />
        </Namediv>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonPrice />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonChangePrice />
          <SkeletonChangePer />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonVolume />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonVolumePrice />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonSupply />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <TdNomalDivFixed>
          <SkeletonMarketCap />
        </TdNomalDivFixed>
      </TdFixed>
      <TdFixed>
        <SkeletonChart />
      </TdFixed>
    </Tr>
  );
}
export default SkeletonUI;
