import styled from "styled-components";
import { useState } from "react";
import iconpng from "../../../assets/img/main_img/iconpng.png";
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
`;

const HeaderImg = styled.img`
  position: absolute;
  top: -1vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  object-fit: cover;
`;
const MotionBox = styled.div`
  width: 100%;
  padding: 1vw 3vw;
`;

const InnerMotionBox = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1.7vw 5.8vw auto;
  gap: 0.5rem;
`;

const MotionTop = styled.div`
  position: relative;
  overflow: hidden;
`;
const MotionBottom = styled.div`
  position: relative;
  overflow: hidden;
`;
const TopBox = styled(motion.div)`
  font-size: 1.3vw;
  position: absolute;
`;
const BottomBox = styled(motion.div)`
  font-size: 5.3vw;
  font-weight: Bold;
  position: absolute;
`;
function HeaderMainImg() {
  const topList = ["tools", "by", "Date"];
  const bottomList = ["Figma", "Si Hyun Baek", "2022. 12. 28."];
  const [visible, setVisible] = useState(0);
  useInterval(() => {
    if (visible !== 2) {
      setVisible(visible + 1);
    }
    if (visible === 2) {
      setVisible(0);
    }
  }, 6000);
  return (
    <Container>
      <HeaderImg src={iconpng} />
      <MotionBox>
        <InnerMotionBox>
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
        </InnerMotionBox>
      </MotionBox>
    </Container>
  );
}
export default HeaderMainImg;
