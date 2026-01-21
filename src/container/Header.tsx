import { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { IMAGES } from "../constants/images";
import ImageWithSkeleton from "../components/common/ImageWithSkeleton";

const Container = styled.header`
  width: 100%;
  background: url(${IMAGES.HEADER.BACKGROUND}) repeat;
  position: sticky;
  top: 0;
  z-index: -1;
`;

const Inner = styled.div`
  padding: 1rem 2.7vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100vh;
  @media (max-width: 1050px) {
    & {
      padding: 8vw 2.7vw;
    }
  }
  @media (max-width: 430px) {
    & {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
const LeftBox = styled.div`
  padding: 2vw 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 430px) {
    & {
      gap: 20rem;
    }
  }
`;
const Title = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 11vw;
  letter-spacing: -6px;
  line-height: 0.85;
  @media (max-width: 430px) {
    & {
      font-size: 15vw;
      letter-spacing: -3px;
    }
  }
`;
const SubTitle = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 3vw;
  @media (max-width: 430px) {
    & {
      font-size: 5vw;
    }
  }
`;
const Discription = styled.p`
  font-size: 1.5vw;
  padding-top: 1rem;
  @media (max-width: 430px) {
    & {
      padding: 0.3rem;
      font-size: 1.5vw;
    }
  }
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1050px) {
    & {
      gap: 0;
    }
  }
  @media (max-width: 430px) {
    & {
      flex-direction: row;
      justify-content: center;
    }
  }
`;
const ItemBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:nth-child(even) {
    padding-right: 10vw;
  }
  @media (max-width: 430px) {
    &:nth-child(even) {
      padding-right: 0;
    }
    & {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const Img = styled(ImageWithSkeleton)`
  width: 12vw;
  height: 12vw;
  max-width: 218px;
  max-height: 218px;
  border-radius: clamp(5px, 20vw, 40px);
  box-shadow: 0 0 5rem rgba(0, 0, 0, 1);

  @media (max-width: 1920px) {
    & {
      border-radius: 45.42px;
    }
  }
  @media (max-width: 1550px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 1280px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 1050px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 430px) {
    & {
      border-radius: 10px;
      width: 20vw;
      height: 20vw;
    }
  }
`;
const ColorShadowImg = styled(Img)`
  box-shadow: none;
`;

const AnimatedShadowWrapper = styled(motion.div)`
  display: inline-block;
  border-radius: clamp(5px, 20vw, 40px);
  overflow: visible;
  
  @media (max-width: 1920px) {
    border-radius: 45.42px;
  }
  @media (max-width: 1550px) {
    border-radius: 30px;
  }
  @media (max-width: 1280px) {
    border-radius: 30px;
  }
  @media (max-width: 1050px) {
    border-radius: 30px;
  }
  @media (max-width: 430px) {
    border-radius: 10px;
  }
`;

function Header() {
  const homeHeader = useRef(null);

  return (
    <Container id="home" ref={homeHeader}>
      <Inner>
        <LeftBox>
          <Title>
            I'm SH B<br /> Portfolio/24
          </Title>
          <SubTitle>
            Web Developer
            <br />
            <Discription>
              Welcome! You can explore the projects
              <br /> I've created while studying <br />
              and discover the features I've wanted to build
            </Discription>
          </SubTitle>
        </LeftBox>
        <RightBox>
          <ItemBox>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.1, 0, 0, 1] }}
            >
              <Img
                sources={IMAGES.HEADER.LOGO.LOGO4}
                alt="headerimg"
                fullWidth
                fullHeight
              />
            </motion.div>
          </ItemBox>
          <ItemBox>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.1, 0, 0, 1] }}
            >
              <AnimatedShadowWrapper
                animate={{
                  boxShadow: [
                    "0 0 2rem rgba(255, 255, 255, 0.6), 0 0 4rem rgba(255, 255, 255, 0.3)",
                    "0 0 5rem rgba(255, 255, 255, 0.8), 0 0 8rem rgba(255, 255, 255, 0.5)",
                    "0 0 2.5rem rgba(255, 255, 255, 0.55), 0 0 4.5rem rgba(255, 255, 255, 0.25)",
                    "0 0 4rem rgba(255, 255, 255, 0.75), 0 0 7rem rgba(255, 255, 255, 0.45)",
                    "0 0 3rem rgba(255, 255, 255, 0.7), 0 0 5.5rem rgba(255, 255, 255, 0.4)",
                    "0 0 2rem rgba(255, 255, 255, 0.6), 0 0 4rem rgba(255, 255, 255, 0.3)",
                    "0 0 4.5rem rgba(255, 255, 255, 0.85), 0 0 9rem rgba(255, 255, 255, 0.55)",
                    "0 0 2rem rgba(255, 255, 255, 0.6), 0 0 4rem rgba(255, 255, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 0.95, 1],
                  ease: "easeInOut",
                }}
              >
                <ColorShadowImg
                  sources={IMAGES.HEADER.LOGO.LOGO3}
                  alt="headerimg"
                  fullWidth
                  fullHeight
                />
              </AnimatedShadowWrapper>
            </motion.div>
          </ItemBox>
          <ItemBox>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.1, 0, 0, 1] }}
            >
              <Img
                sources={IMAGES.HEADER.LOGO.LOGO2}
                alt="headerimg"
                fullWidth
                fullHeight
              />
            </motion.div>
          </ItemBox>
          <ItemBox>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.1, 0, 0, 1] }}
            >
              <Img
                sources={IMAGES.HEADER.LOGO.LOGO1}
                alt="headerimg"
                fullWidth
                fullHeight
              />
            </motion.div>
          </ItemBox>
        </RightBox>
      </Inner>
    </Container>
  );
}
export default Header;
