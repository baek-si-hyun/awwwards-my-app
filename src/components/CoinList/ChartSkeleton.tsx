import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const Box = styled.div`
  width: 164px;
  height: 50px;
  background: linear-gradient(90deg, #ececec 25%, #f5f5f5 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 5px;
  @media (max-width: 1279px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 48vw;
    height: 44px;
  }
  @media (max-width: 480px) {
    width: 56vw;
    height: 40px;
  }
`;

function ChartSkeleton() {
  return (
    <Box />
  );
}

export default ChartSkeleton;
