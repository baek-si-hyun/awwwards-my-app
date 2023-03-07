import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import war from "../../../assets/img/main_img/war.jpg";
import bdo from "../../../assets/img/main_img/bdo.jpg";
import lol from "../../../assets/img/main_img/lol.jpg";

const Container = styled.div`
  position: relative;
  height: clamp(300px, 50vw, 1000px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: clamp(300px, 48vw, 1000px);
  border-radius: 13px;
  overflow: hidden;
  z-index: 2;
  clear: both;
`;

const BoxText = styled(motion.div)<{ isboxhover: boolean }>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 4vw;
  opacity: ${(props) => (props.isboxhover ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  position: relative;
  span {
    position: absolute;
    left: 6vw;
    bottom: 6vw;
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
`;

function Game() {
  const [boxHover, setBoxHover] = useState(false);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const src = [lol, war, bdo];
  const text = [
    "League of Legends (칼바람, 우르프)",
    "War Thunder (밀덕 아님)",
    "Black Desert (무 기약 휴식중)",
  ];
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 2 ? prev - 2 : prev + 1));
  };
  const prevPlease = () => {
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
              nextPlease();
            } else if (swipe > 1000) {
              prevPlease();
            }
          }}
        >
          <BoxText isboxhover={boxHover}>
            <span>{text[visible]}</span>
          </BoxText>
        </Box>
      </AnimatePresence>
      <PrevButton onClick={prevPlease}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </PrevButton>
      <NextButton onClick={nextPlease}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </NextButton>
    </Container>
  );
}
export default Game;
