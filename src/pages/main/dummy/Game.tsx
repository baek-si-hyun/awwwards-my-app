import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import war from "../../../assets/img/main_img/war.webp";
import bdo from "../../../assets/img/main_img/bdo.webp";
import lol from "../../../assets/img/main_img/lol.webp";
import { gameName } from "../../../services/listData";

const Container = styled.div`
  position: relative;
  height: 50vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 48vw;
  border-radius: 13px;
  z-index: 2;
  @media (max-width: 480px) {
    & {
      width: 100%;
      height: 85%;
    }
  }
  @media (max-width: 429px) {
    & {
      height: 100%;
    }
  }
`;

const BoxText = styled(motion.div)<{ isboxhover: boolean }>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  border-radius: 13px;
  color: #fff;
  font-size: 3vw;
  opacity: ${(props) => (props.isboxhover ?  "1" : "0")};
  transition: all 0.3s ease-in-out;
  position: relative;
  span {
    position: absolute;
    left: 6vw;
    bottom: 6vw;
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 1%;
  background: none;
  border: none;
  width: 10rem;
  height: 10%;
  cursor: pointer;
  z-index: 3;
  span {
    font-size: 40px;
    color: #fff;
    transition: text-shadow 0.2s ease-in-out;
  }
  :hover {
    span {
      text-shadow: 0px 0px 10px #fff;
    }
  }
  @media (max-width: 480px) {
    & {
      width: 4rem;
      height: 15%;
    }
  }
`;
const NextButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 1%;
  background: none;
  border: none;
  width: 10rem;
  height: 10%;
  cursor: pointer;
  z-index: 3;
  span {
    font-size: 40px;
    color: #fff;
    transition: text-shadow 0.2s ease-in-out;
  }
  :hover {
    span {
      text-shadow: 0px 0px 10px #fff;
    }
  }
  @media (max-width: 480px) {
    & {
      width: 4rem;
      right: 0%;
      height: 15%;
    }
  }
`;
const boxVariants = {
  enter: (direction: boolean) => ({
    x: direction ? -window.outerWidth : window.outerWidth,
  }),
  center: {
    x: 0,
  },
  exit: (direction: boolean) => ({
    x: direction ? window.outerWidth : -window.outerWidth,
  }),
};

function Game() {
  const [boxHover, setBoxHover] = useState(false);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const src = [lol, war, bdo];
  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === 2 ? prev - 2 : prev + 1));
  };
  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? prev + 2 : prev - 1));
  };
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  return (
    <Container>
      <AnimatePresence mode="wait" custom={back} initial={false}>
        <Box
          key={visible}
          src={src[visible]}
          custom={back}
          variants={boxVariants}
          transition={{ type: "tween" }}
          initial="enter"
          animate="center"
          exit="exit"
          onMouseOver={() => setBoxHover(true)}
          onMouseOut={() => setBoxHover(false)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -1000) {
              nextBtn();
            } else if (swipe > 1000) {
              prevBtn();
            }
          }}
        >
          <BoxText isboxhover={boxHover}>
            <span>{gameName[visible]}</span>
          </BoxText>
        </Box>
      </AnimatePresence>
      <PrevButton onClick={prevBtn}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </PrevButton>
      <NextButton onClick={nextBtn}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </NextButton>
    </Container>
  );
}
export default Game;
