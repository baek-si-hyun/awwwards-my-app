/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import { ICoins } from "../../interface/icoin";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListBox = styled.div``;
const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

function Sidebar({ nameData }: { nameData: ICoins[] }) {
  return (
    <Container>
      <></>
      <></>
      <></>
      <ListBox>
        <ListUl>{nameData.map(<SidebarItem />)}</ListUl>
      </ListBox>
    </Container>
  );
}

export default Sidebar;
