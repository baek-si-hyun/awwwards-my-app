import styled, { keyframes } from "styled-components";
import { Tr } from "../../container/CoinList";
const Namediv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const TdFixed = styled.td`
  padding: 3.5px;
  text-align: end;
  vertical-align: middle;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`;

const TdNomalDivFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: flex-end;
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const Skeleton = styled.div`
  background: linear-gradient(90deg, #ececec 25%, #f5f5f5 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
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
  @media (max-width: 768px) {
    height: 44px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
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
