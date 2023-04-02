import styled from "styled-components";

const Tr = styled.tr`
  border-bottom: 1px solid #e2e2e2;
  :first-child {
    border-top: 1px solid #e2e2e2;
  }
`;
const NameTh = styled.th`
  text-align: start;
  vertical-align: middle;
  padding: 10px;
  padding-left: 1vw;
  position: sticky;
  top: 0;
  left: -2px;
  z-index: 10;
  background-color: #f8f8f8;
  @media (max-width: 1279px) {
    & {
      ::before {
        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        width: 30px;
        transform: translateX(100%);
        transition: box-shadow 0.3s;
        content: "";
        pointer-events: none;
      }
    }
  }
`;
const Th = styled.th`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  font-weight: 900;
  white-space: nowrap;
  :last-child {
    padding-right: 1vw;
  }
`;
function Thead() {
  return (
    <thead>
      <Tr>
        <NameTh>
          <span>Name</span>
        </NameTh>
        <Th>
          <span>Price</span>
        </Th>
        <Th>
          <span>Change (24h)</span>
        </Th>
        <Th>
          <span>Volume (24h)</span>
        </Th>
        <Th>
          <span>Volume Price (24h)</span>
        </Th>
        <Th>
          <span>Circulating Supply</span>
        </Th>
        <Th>
          <span>Market Cap</span>
        </Th>
        <Th>
          <span>Last 30 Days</span>
        </Th>
      </Tr>
    </thead>
  );
}
export default Thead;
