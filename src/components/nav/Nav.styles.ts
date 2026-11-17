import styled, { css } from "styled-components";

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  z-index: 999;
`;

export const Navi = styled.nav`
  border-radius: 10px;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  ${common}
  @media (max-width: 800px) {
    & {
      font-size: 0.7rem;
      padding: 0.3rem;
    }
  }
`;
export const NavBoxLeft = styled.div`
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: #222222;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    & {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const NavBoxInner = styled.div`
  display: flex;
`;
export const BugerNav = styled.div`
  border-radius: 10px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  ${common}
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 0;
    }
  }
  @media (max-width: 320px) {
    & {
      width: 100%;
    }
  }
`;
export const BugerInner = styled.div<{ menuSwitch: boolean }>`
  display: ${(props) => (props.menuSwitch ? "flex" : "none")};
  will-change: display;
  @media (max-width: 768px) {
    & {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 320px) {
    & {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }
`;
export const BugerLabel = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    display: block;
    width: 0.65rem;
    height: 1px;
    background: #fff;
    border-radius: 5px;
    margin: 1.5px 0;
  }
`;
