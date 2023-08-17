import styled from "styled-components";
import { IVisited } from "../../../interface/iproject";

const Visited = styled.div`
  width: 50%;
  display: flex;
  margin-top: 1vw;
  @media (max-width: 1024px) {
    & {
      width: 60%;
    }
  }
`;

const VisitedInner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  :first-child {
    border-right: 1px solid #fff;
  }
`;

const VisitedInnerTop = styled.div`
  font-size: 1vw;
  padding: 0.5rem 0;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
const VisitedInnerBottom = styled.div`
  border-top: 1px solid #fff;
  font-size: 1vw;
  padding: 0.5rem 0;
  font-weight: 900;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;

function VisitedBox({
  visitedData,
  name,
}: {
  visitedData: IVisited[];
  name: string;
}) {
  const [visited] = visitedData;
  return (
    <Visited>
      <VisitedInner>
        <VisitedInnerTop>Visited Today</VisitedInnerTop>
        <VisitedInnerBottom>
          {name === "visual-coin"
            ? visited.visited_visaulcoin_today
            : name === "carrot-market"
            ? visited.visited_carrotmarket_today
            : name === "awwwards"
            ? visited.visited_awwwards_today
            : name === "kanban"
            ? visited.visited_kanban_today
            : name === "coin"
            ? visited.visited_coin_today
            : name === "myapp"
            ? visited.visited_myapp_today
            : name === "airbnb"
            ? visited.visited_airbnb_today
            : null}
        </VisitedInnerBottom>
      </VisitedInner>
      <VisitedInner>
        <VisitedInnerTop>Total Visited</VisitedInnerTop>
        <VisitedInnerBottom>
          {name === "visual-coin"
            ? visited.visited_visaulcoin_total
            : name === "carrot-market"
            ? visited.visited_carrotmarket_total
            : name === "awwwards"
            ? visited.visited_awwwards_total
            : name === "kanban"
            ? visited.visited_kanban_total
            : name === "coin"
            ? visited.visited_coin_total
            : name === "myapp"
            ? visited.visited_myapp_total
            : name === "airbnb"
            ? visited.visited_airbnb_total
            : null}
        </VisitedInnerBottom>
      </VisitedInner>
    </Visited>
  );
}
export default VisitedBox;
