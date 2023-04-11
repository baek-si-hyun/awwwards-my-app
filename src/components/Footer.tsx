import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  padding: 8vw 2.7vw 3vw 2.7vw;
  @media (max-width: 1024px) {
    & {
      padding: 8vw 2.7vw 9rem 2.7vw;
    }
  }
`;
const LogoBox = styled.div``;
const Logo = styled.div``;
const TextAndNav = styled.div`
  display: flex;
  gap: 10vw;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34, 1) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3vw;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  line-height: 1.3;
  width: 60vw;
  font-size: 1vw;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
const Ko = styled.div`
  font-family: "Pretendard", sans-serif;
`;
const En = styled.div`
  @media (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vw;
  font-weight: 900;
  @media (max-width: 768px) {
    & {
      font-size: 2vw;
    }
  }
`;
const Faqs = styled.div``;
const Resume = styled.div`
  a {
    :hover {
      color: #757575;
    }
  }
`;
const NavLink = styled(Link)`
  :hover {
    color: #757575;
  }
`;
const Contact = styled.div``;
const LinkBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1vw;
  font-size: 0.9rem;
  & > div {
    font-weight: 900;
  }
  @media (max-width: 768px) {
    & {
      font-size: 2vw;
    }
  }
`;
const LinkBarUl = styled.ul`
  display: flex;
  gap: 1vw;
`;
const LinkBarLi = styled.li``;
const Links = styled.a`
  font-weight: 100;
  :hover {
    color: #757575;
  }
`;

function Footer() {
  return (
    <Container>
      <LogoBox>
        <Logo>
          <svg width="30" height="16" viewBox="0 0 30 16">
            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
          </svg>
        </Logo>
      </LogoBox>
      <TextAndNav>
        <Text>
          <Ko>
            <p>
              awwwards, YoutubeMusic, coinmarketcap의 디자인을 참고하였습니다.
              <br />
              framer-motion, styled-components, @tanstack/react-query,
              react-beautiful-dnd, react-fast-marquee, usehooks-ts, recoil,
              @emailjs/browser 가 사용되었습니다.
            </p>
          </Ko>
          <En>
            <p>
              I referred to the designs of awwwards, YoutubeMusic and
              coinmarketcap. <br />
              framer-motion, styled-components, @tanstack/react-query,
              react-beautiful-dnd, react-fast-marquee, usehooks-ts, recoil,
              @emailjs/browser has been used
            </p>
          </En>
        </Text>
        <Nav>
          <Faqs>
            <NavLink to="/Faqs">FAQs</NavLink>
          </Faqs>
          <Contact>
            <NavLink to="/Contact">Contact Me</NavLink>
          </Contact>
          <Resume>
            <a
              href="https://www.canva.com/design/DAFcx-92esU/mFPFWmdCEmeahY5B8e0vQw/view?utm_content=DAFcx-92esU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Resume>
        </Nav>
      </TextAndNav>
      <LinkBar>
        <div>Contact: </div>
        <LinkBarUl>
          <LinkBarLi>
            <Links href="https://github.com/baek-si-hyun" target="_blank">
              github
            </Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links
              href="https://careerly.co.kr/profiles/569272?utm_campaign=user-share"
              target="_blank"
            >
              careerly
            </Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links href="https://www.instagram.com/b_2.19/" target="_blank">
              instagram
            </Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links
              href="https://www.facebook.com/profile.php?id=100007773606487"
              target="_blank"
            >
              facebook
            </Links>
          </LinkBarLi>
        </LinkBarUl>
      </LinkBar>
    </Container>
  );
}
export default Footer;
