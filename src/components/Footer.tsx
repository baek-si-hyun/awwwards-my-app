import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  padding: 8vw 2.7vw 3vw 2.7vw;
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
  gap: 0.5vw;
  line-height: 1.3;
`;
const Ko = styled.div`
  font-family: "Pretendard";
`;
const En = styled.div``;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vw;
  font-weight: bold;
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
    font-weight: bold;
  }
`;
const LinkBarUl = styled.ul`
  display: flex;
  gap: 1vw;
`;
const LinkBarLi = styled.li``;
const Links = styled.a`
  font-family: "ApercuL";
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
              awwwards, YoutubeMusic의 디자인을 참고하였습니다.
              <br />
              framer-motion, styled-components, react-beautiful-dnd,
              react-fast-marquee, usehooks-ts, recoil, @emailjs/browser 가
              사용되었습니다.
            </p>
          </Ko>
          <En>
            <p>
              I referred to the design of awwwards and YoutubeMusic. <br />
              framer-motion, styled-components, react-beautiful-dnd,
              react-fast-marquee, usehooks-ts, recoil, @emailjs/browser has been
              used
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
            <a href="">Resume</a>
          </Resume>
        </Nav>
      </TextAndNav>
      <LinkBar>
        <div>Contact: </div>
        <LinkBarUl>
          <LinkBarLi>
            <Links href="https://github.com/baek-si-hyun">github</Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links href="https://www.instagram.com/b_2.19/">instagram</Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links href="https://www.facebook.com/profile.php?id=100007773606487">
              facebook
            </Links>
          </LinkBarLi>
          <LinkBarLi>
            <Links href="https://blog.naver.com/qortlgus100">blog</Links>
          </LinkBarLi>
        </LinkBarUl>
      </LinkBar>
    </Container>
  );
}
export default Footer;
