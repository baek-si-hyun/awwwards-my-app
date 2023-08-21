import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInterval } from "usehooks-ts";

const Container = styled.div`
  margin-top: 2.1vw;
  overflow: hidden;
  aspect-ratio: 16/7;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: flex-end;
  @media (max-width: 650px) {
    & {
      aspect-ratio: 4/3;
    }
  }
`;

const HeaderImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  object-fit: cover;
  @media (max-width: 650px) {
    & {
      aspect-ratio: 4/3;
    }
  }
`;
const MotionBox = styled.div`
  width: 100%;
  padding: 1vw 3vw;
  display: grid;
  grid-template-rows: 1.7vw 5.8vw auto;
  gap: clamp(0.1rem, 1vw, 1rem);
`;

const MotionTop = styled.div`
  position: relative;
  overflow: hidden;
  height: clamp(10px, 1.3vw, 41px);
`;
const MotionBottom = styled.div`
  position: relative;
  overflow: hidden;
  height: clamp(30px, 6.2vw, 182px);
`;
const TopBox = styled(motion.div)`
  font-size: clamp(10px, 1.3vw, 35px);
  position: absolute;
  top: 0;
  left: 0;
`;
const BottomBox = styled(motion.div)`
  font-size: clamp(25px, 5.7vw, 165px);
  font-weight: Bold;
  position: absolute;
  top: 0;
  left: 0;
`;
function HeaderMainImg() {
  const topList = ["tools", "by", "Date"];
  const bottomList = ["Figma", "Si Hyun Baek", "2022. 12. 28."];
  const [visible, setVisible] = useState(0);
  useInterval(() => {
    setVisible((visible) => (visible + 1) % 3);
  }, 4000);
  return (
    <Container>
      <HeaderImg
        src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/6509b68f-1d66-4538-8286-1da5d6680500/public"
        alt="headerimg"
        loading="lazy"
        decoding="async"
      />
      <MotionBox>
        <MotionTop>
          <AnimatePresence>
            <TopBox
              key={visible}
              transition={{ type: "tween", duration: 0.5 }}
              initial={{ y: 50, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              {topList[visible]}
            </TopBox>
          </AnimatePresence>
        </MotionTop>
        <MotionBottom>
          <AnimatePresence>
            <BottomBox
              key={visible}
              transition={{ type: "tween", duration: 0.5 }}
              initial={{ y: 100, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
            >
              {bottomList[visible]}
            </BottomBox>
          </AnimatePresence>
        </MotionBottom>
      </MotionBox>
    </Container>
  );
}
export default HeaderMainImg;
