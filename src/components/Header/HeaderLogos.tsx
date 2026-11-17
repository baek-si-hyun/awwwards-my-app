import { m } from "motion/react";
import styled from "styled-components";
import { IMAGES } from "../../constants/images";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

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

const AnimatedShadowWrapper = styled(m.div)`
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

// 오른쪽에서 차례로 들어오는 로고 4개. glow 는 지금 쓰는 로고(흰 그림자 반짝임) 표시.
const LOGOS = [
  { src: IMAGES.HEADER.LOGO.LOGO4, duration: 0.5, delay: 0.2, glow: false },
  { src: IMAGES.HEADER.LOGO.LOGO3, duration: 0.8, delay: 0.3, glow: true },
  { src: IMAGES.HEADER.LOGO.LOGO2, duration: 0.8, delay: 0.4, glow: false },
  { src: IMAGES.HEADER.LOGO.LOGO1, duration: 0.8, delay: 0.5, glow: false },
];

function HeaderLogos() {
  return (
    <RightBox>
      {LOGOS.map(({ src, duration, delay, glow }) => (
        <ItemBox key={src}>
          <m.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration, delay, ease: [0.1, 0, 0, 1] }}
          >
            {glow ? (
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
                <ColorShadowImg sources={src} alt="headerimg" fullWidth fullHeight />
              </AnimatedShadowWrapper>
            ) : (
              <Img sources={src} alt="headerimg" fullWidth fullHeight />
            )}
          </m.div>
        </ItemBox>
      ))}
    </RightBox>
  );
}

export default HeaderLogos;
