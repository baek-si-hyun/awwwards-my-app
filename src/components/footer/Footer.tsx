import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IResize } from "../../interface/iproject";
import Marquee from "react-fast-marquee";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  margin-top: -6rem;
  padding: 5vw 0 7vw 0;
  position: relative;
  z-index: 5;
  background-color: #f8f8f8;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.3);
  font-size: 1vw;

  @media (max-width: 1024px) {
    & {
      padding: 6vw 2.7vw 9rem 2.7vw;
    }
  }
  @media (max-width: 430px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
const Logo = styled.div`
  padding: 0 2.7vw 0 2.7vw;
`;
const TextAndNav = styled.div`
  display: flex;
  gap: 10vw;
  padding: 0 2.7vw 1vw 2.7vw;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  line-height: 1.3;
  width: 60vw;
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
const Wrap = styled.div``;
const InnerWrap = styled(Marquee)`
  padding: 0.5rem 0;
  font-weight: lighter;
`;
const MarqueeText = styled.div`
  overflow: hidden;
  span {
    font-weight: bold;
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
  padding: 0 2.7vw 0 2.7vw;
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
const LinkItem = styled.a`
  font-weight: 100;
  :hover {
    color: #757575;
  }
`;

function Footer() {
  const getResizeWidth = useSelector(
    ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) => {
      return resizeWidthSlice.resizeWidth;
    }
  );
  const [speed, setSpeed] = useState(130);

  useEffect(() => {
    const graphMode = () => {
      if (getResizeWidth > 1280) {
        setSpeed(130);
      }
      if (getResizeWidth <= 1280) {
        setSpeed(90);
      }
      if (getResizeWidth <= 768) {
        setSpeed(60);
      }
      if (getResizeWidth <= 429) {
        setSpeed(40);
      }
    };
    graphMode();
  }, [getResizeWidth]);
  return (
    <Container>
      <Logo>
        <svg width="30" height="16" viewBox="0 0 30 16">
          <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
        </svg>
      </Logo>
      <TextAndNav>
        <Text>
          <Ko>
            <span>
              redux-toolkit, styled-components, @tanstack/react-query 가
              사용되었습니다. 영어는 번역기의 도움을 받았으며, <br />
              상업적인 목적이 아닌 취업 목적의 프로젝트임을 알려드립니다.
            </span>
          </Ko>
          <En>
            <span>
              redux-toolkit, styled-components, @tanstack/react-query used.
              English was helped by a translator, <br />
              and we inform you that this project is for employment purposes,
              not for profit.
            </span>
          </En>
        </Text>
        <Nav>
          <div>
            <NavLink to="/Faqs">FAQs</NavLink>
          </div>
          <Contact>
            <NavLink to="/Contact">Contact Me</NavLink>
          </Contact>
          <Resume>
            <a
              href="https://drive.google.com/file/d/1k3z0Juk50mcl7OIIrfIktsi8PiC15FMO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Description
            </a>
          </Resume>
        </Nav>
      </TextAndNav>
      <Wrap>
        <InnerWrap play={true} gradient={false} speed={speed}>
          <MarqueeText>
            {" "}
            Thank you for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> - Thank you for watching -{" "}
            <span>SiHyun Baek</span> - portfolio - <span>2023</span> - Thank you
            for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> -{" "}
          </MarqueeText>
          <MarqueeText>
            {" "}
            Thank you for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> - Thank you for watching -{" "}
            <span>SiHyun Baek</span> - portfolio - <span>2023</span> - Thank you
            for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> -{" "}
          </MarqueeText>
          <MarqueeText>
            {" "}
            Thank you for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> - Thank you for watching -{" "}
            <span>SiHyun Baek</span> - portfolio - <span>2023</span> - Thank you
            for watching - <span>SiHyun Baek</span> - portfolio -{" "}
            <span>2023</span> -{" "}
          </MarqueeText>
        </InnerWrap>
      </Wrap>
      <LinkBar>
        <div>Contact: </div>
        <LinkBarUl>
          <li>
            <LinkItem href="https://github.com/baek-si-hyun" target="_blank">
              github
            </LinkItem>
          </li>
          <li>
            <LinkItem
              href="https://careerly.co.kr/profiles/569272?utm_campaign=user-share"
              target="_blank"
            >
              careerly
            </LinkItem>
          </li>
          <li>
            <LinkItem href="https://www.instagram.com/b_2.19/" target="_blank">
              instagram
            </LinkItem>
          </li>
          <li>
            <LinkItem
              href="https://www.facebook.com/profile.php?id=100007773606487"
              target="_blank"
            >
              facebook
            </LinkItem>
          </li>
        </LinkBarUl>
      </LinkBar>
    </Container>
  );
}
export default Footer;
