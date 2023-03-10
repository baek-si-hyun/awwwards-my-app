import styled from "styled-components";
import coin from "../../../assets/img/main_img/coin.png";
import myapp from "../../../assets/img/main_img/myapp.png";
import todo from "../../../assets/img/main_img/todo.png";
import netflix from "../../../assets/img/main_img/netflix.png";
import nomad from "../../../assets/img/main_img/nomadicon.png";
import airbnb from "../../../assets/img/main_img/airbnb.png";
import shb from "../../../assets/img/main_img/shbicon.png";
import { Link } from "react-router-dom";
import { IId } from "../../../interface/interface";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
  @media (max-width: 768px) {
    & {
      font-size: 1.5vw;
    }
  }
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  text-align: center;
  width: 19vw;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
  @media (max-width: 768px) {
    & {
      width: 80%;
      font-size: 2.5vw;
    }
  }
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Box = styled(Link)`
  display: flex;
  gap: 2vw;
  padding: 3vw 0px;
  border-bottom: 1px black;
  transition: background-color 0.2s ease-in-out;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34, 1) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
  }
`;

const InnerBoxImg = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;
const Img = styled.img`
  aspect-ratio: 4/3;
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
`;
const InnerBoxText = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextTop = styled.div``;
const TextBottom = styled.div`
  line-height: 1.7;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    & {
      font-size: 2.5vw;
    }
  }
`;
const TextBottomInner = styled.div`
  display: flex;
  align-items: center;
`;

const InnerFigure = styled.figure`
  display: flex;
  align-items: center;

  img {
    margin: 0 0.3rem;
    object-fit: cover;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    @media (max-width: 480px) {
      & {
        width: 20px;
        height: 20px;
      }
    }
  }
  figcaption {
    span {
      font-weight: 600;
      font-size: 1.2vw;
      border-bottom: 2px solid #b7b7b7;
      @media (max-width: 768px) {
        & {
          font-size: 2vw;
        }
      }
    }
  }
`;

const Visited = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  display: flex;
  margin-top: 1vw;
  @media (max-width: 480px) {
    & {
      width: 90%;
    }
  }
`;

const VisitedInner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  :first-child {
    border-right: 1px solid black;
  }
`;

const VisitedInnerTop = styled.div`
  font-size: 0.4vw;
  padding: 0.2vw 0;
`;
const VisitedInnerBottom = styled.div`
  border-top: 1px solid black;
  font-size: 15px;
  padding: 0.3vw 0;
  font-weight: bold;
`;
function Projects({ id }: IId) {
  return (
    <Container id={id}>
      <InnerContainer>
        <TextBox>
          <TextBoxTop>
            <h2>Si Hyun Baek</h2>
          </TextBoxTop>
          <TextBoxMiddle>
            <h3>projects</h3>
          </TextBoxMiddle>
          <TextBoxbottom>
            <span>Projects are constantly improving!</span>
          </TextBoxbottom>
        </TextBox>
        <GridBox>
          <Box to="/Netflix">
            <InnerBoxImg>
              <Img src={netflix} />
            </InnerBoxImg>
            <InnerBoxText>
              <TextTop>
                <p>SOON</p>
              </TextTop>
              <TextBottom>
                <h4>NETFLIX clone</h4>
                <TextBottomInner>
                  <div>
                    <small>by</small>
                  </div>
                  <InnerFigure>
                    <img src={nomad} />
                    <figcaption>
                      <span>Nomad Coders, SiHyun Baek</span>
                    </figcaption>
                  </InnerFigure>
                </TextBottomInner>
                <Visited>
                  <VisitedInner>
                    <VisitedInnerTop>Visited Today</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                  <VisitedInner>
                    <VisitedInnerTop>Total Visited</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                </Visited>
              </TextBottom>
            </InnerBoxText>
          </Box>
          <Box to="/Kanban">
            <InnerBoxImg>
              <Img src={todo} />
            </InnerBoxImg>
            <InnerBoxText>
              <TextTop>
                <p>2023. 02. 01.</p>
              </TextTop>
              <TextBottom>
                <h4>KANBAN Borad</h4>
                <TextBottomInner>
                  <div>
                    <small>by</small>
                  </div>
                  <InnerFigure>
                    <img src={nomad} />
                    <figcaption>
                      <span>Nomad Coders, SiHyun Baek</span>
                    </figcaption>
                  </InnerFigure>
                </TextBottomInner>
                <Visited>
                  <VisitedInner>
                    <VisitedInnerTop>Visited Today</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                  <VisitedInner>
                    <VisitedInnerTop>Total Visited</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                </Visited>
              </TextBottom>
            </InnerBoxText>
          </Box>

          <Box to="/Coin">
            <InnerBoxImg>
              <Img src={coin} />
            </InnerBoxImg>
            <InnerBoxText>
              <TextTop>
                <p>2023. 01. 11.</p>
              </TextTop>
              <TextBottom>
                <h4>COIN market cap</h4>
                <TextBottomInner>
                  <div>
                    <small>by</small>
                  </div>
                  <InnerFigure>
                    <img src={nomad} />
                    <figcaption>
                      <span>Nomad Coders, SiHyun Baek</span>
                    </figcaption>
                  </InnerFigure>
                </TextBottomInner>
                <Visited>
                  <VisitedInner>
                    <VisitedInnerTop>Visited Today</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                  <VisitedInner>
                    <VisitedInnerTop>Total Visited</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                </Visited>
              </TextBottom>
            </InnerBoxText>
          </Box>
          <Box to="/Myapp">
            <InnerBoxImg>
              <Img src={myapp} />
            </InnerBoxImg>
            <InnerBoxText>
              <TextTop>
                <p>2022. 12. 25.</p>
              </TextTop>
              <TextBottom>
                <h4>MY APP</h4>
                <TextBottomInner>
                  <div>
                    <small>by</small>
                  </div>
                  <InnerFigure>
                    <img src={shb} />
                    <figcaption>
                      <span>SiHyun Baek</span>
                    </figcaption>
                  </InnerFigure>
                </TextBottomInner>
                <Visited>
                  <VisitedInner>
                    <VisitedInnerTop>Visited Today</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                  <VisitedInner>
                    <VisitedInnerTop>Total Visited</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                </Visited>
              </TextBottom>
            </InnerBoxText>
          </Box>
          <Box to="/Airbnb">
            <InnerBoxImg>
              <Img src={airbnb} />
            </InnerBoxImg>
            <InnerBoxText>
              <TextTop>
                <p>2022. 09. 01.</p>
              </TextTop>
              <TextBottom>
                <h4>AIRBNB clone</h4>
                <TextBottomInner>
                  <div>
                    <small>by</small>
                  </div>
                  <InnerFigure>
                    <img src={shb} />
                    <figcaption>
                      <span>SiHyun Baek, 4 others</span>
                    </figcaption>
                  </InnerFigure>
                </TextBottomInner>
                <Visited>
                  <VisitedInner>
                    <VisitedInnerTop>Visited Today</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                  <VisitedInner>
                    <VisitedInnerTop>Total Visited</VisitedInnerTop>
                    <VisitedInnerBottom>0</VisitedInnerBottom>
                  </VisitedInner>
                </Visited>
              </TextBottom>
            </InnerBoxText>
          </Box>
        </GridBox>
      </InnerContainer>
    </Container>
  );
}

export default Projects;
