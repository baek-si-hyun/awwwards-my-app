import nexflix1 from "../assets/img/project_img/projectnetflix1.jpg";
import nexflix2 from "../assets/img/project_img/projectnetflix2.jpg";
import nomad from "../assets/img/main_img/nomadicon.png";
import shb from "../assets/img/main_img/shbicon.png";
import myapp1 from "../assets/img/project_img/projectmyapp1.jpg";
import myapp2 from "../assets/img/project_img/projectmyapp2.jpg";
import myapp3 from "../assets/img/project_img/projectmyapp3.jpg";
import myapp4 from "../assets/img/project_img/projectmyapp4.jpg";
import kanban1 from "../assets/img/project_img/projectkanban1.jpg";
import kanban2 from "../assets/img/project_img/projectkanban2.jpg";
import kanban3 from "../assets/img/project_img/projectkanban3.jpg";
import kanban4 from "../assets/img/project_img/projectkanban4.jpg";
import coin2 from "../assets/img/project_img/projectcoin1.jpg";
import coin1 from "../assets/img/project_img/projectcoin2.jpg";
import coin3 from "../assets/img/project_img/projectcoin3.jpg";
import coin4 from "../assets/img/project_img/projectcoin4.jpg";
import airbnb1 from "../assets/img/project_img/projectairbnb1.jpg";
import airbnb2 from "../assets/img/project_img/projectairbnb2.jpg";
import airbnb3 from "../assets/img/project_img/projectairbnb3.jpg";
import airbnb4 from "../assets/img/project_img/projectairbnb4.jpg";
import airbnb from "../assets/img/main_img/airbnb.webp";
import coin from "../assets/img/main_img/coin.webp";
import todo from "../assets/img/main_img/todo.webp";
import myapp from "../assets/img/main_img/myapp.webp";
import netflix from "../assets/img/main_img/netflix.webp";
import { IScheduleData } from "../interface/interface";
export const projectsData = [
  {
    id: "Netflix",
    date: "SOON",
    name: "NETFLIX CLONE",
    thumbnail: netflix,
    logo: nomad,
    by: "Nomad Coders, SiHyun Baek",
    img: [nexflix1, nexflix2],
    fonts: ["SourceSansPro"],
    colors: ["#e51013"],
    ko: `"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, framer-motion을 사용하였습니다. 해당 프로젝트는 "framer-motion"을 활용하기 위해 제작되었습니다. 안타깝게도 해당 프로젝트의 완성이 늦춰지고 있습니다. 사유는 1.데이터를 제공해주는 TMDB의 회원가입이 거부당하는 문제가 있습니다.(제보한지 1달이 넘었는데도 답변 안오고, 문제 해결도 안됨) 2.강의에 찍힌 넷플릭스의 홈페이지가 리메이크 되면서 클론코딩을 하기 어려워졌습니다.(리메이크전 홈페이지구조를 알 방법이 없다. 그렇다고 리메이크된 홈페이지를 클론코딩하자니 framer-motion을 사용할 필요가 없어 프로젝트 취지에 어긋남) 해당 문제들이 해결될 경우 프로젝트가 다시 진행될 예정입니다.'`,
    en: `Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, framer-motion were used. that project Built to take advantage of "framer-motion". Unfortunately Completion of the project is being delayed. Reason 1. Data The problem of being denied join the membership of TMDB provided There is. (It has been more than a month since I reported it, but there is no answer, and there is a problem 2. Netflix's homepage taken in the lecture was remade It has become difficult to do clone coding. no method. So, let's clone-code the remade homepage? No need to use framer-motion, which goes against the purpose of the project) The project will resume once these issues are resolved.`,
  },
  {
    id: "Kanban",
    date: "2022. 2. 1.",
    name: "KANBAN BOARD",
    thumbnail: todo,
    logo: nomad,
    by: "Nomad Coders, SiHyun Baek",
    img: [kanban1, kanban2, kanban3, kanban4],
    fonts: ["Pretendard"],
    colors: ["#efefef", "#626262"],
    ko: `"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, react beautiful dnd, react hook form을 사용하였습니다. 디자인은 "김주이(te6-in)" 님의 코드 챌린지를 참고했습니다. 해당 프로젝트는 "보드 옮기기", "새로운 보드 생성하기", "localStorage에 저장 및 로드하기"의 업데이트를 준비중입니다.`,
    en: `Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, Recoil, react beautiful dnd, react hook form Used. The design is "Kim Joo-i (te6-in)"'s code challenge Referenced. The project is "Move Board", "New Board" Update "Creating", "Saving and Loading to localStorage" Coming soon.`,
  },
  {
    id: "Coin",
    date: "2023. 1. 11.",
    name: "CRYPTO TRACKER",
    thumbnail: coin,
    logo: nomad,
    by: "Nomad Coders, SiHyun Baek",
    img: [coin1, coin2, coin3, coin4],
    fonts: ["Pretendard"],
    colors: ["#3b3b3b", "#222222"],
    ko: `"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, React Query, apexcharts를 사용하였습니다.`,
    en: `Due to a code challenge conducted on a lecture site called "nomadcoders" it was created React and typescript combined and different styled Components, Recoil, React Query and apexcharts were used.`,
  },
  {
    id: "Myapp",
    date: "2022. 12. 25.",
    name: "MY APP",
    thumbnail: myapp,
    logo: shb,
    by: "SiHyun Baek",
    img: [myapp1, myapp2, myapp3, myapp4],
    fonts: ["Yasashii", "Exo2", "NanumSquareRound"],
    colors: ["#3e9d89", "#1e3d5c"],
    ko: `제가 처음 리액트를 배운것들을 활용해 보기 위해 제작 되었습니다. module css를 사용했으며 다른 특별한 라이브러리들은 사용하지 않은 순수 리액트 프로젝트입니다. 첫 Header 컴포넌트의 디자인은 프론트엔드 프리랜서 "henriheymans"님의 개인 사이트를 참고하여 제작했습니다. Contact 컴포넌트의 디자인은 "wanderful" 이라는 해외 숙소 소개 사이트를 참고하였습니다.`,
    en: `It is built to use what you first learned about React. I used module css and no other special libraries. This is a pure React project. The design of the first header component is as follows. Refer to the personal homepage of front-end freelancer "henriheymans" production. The design of the Contact component was referred to an overseas accommodation introduction site called "wanderful".`,
  },
  {
    id: "Airbnb",
    date: "2022. 9. 1.",
    name: "AIRBNB CLONE",
    thumbnail: airbnb,
    logo: shb,
    by: "SiHyun Baek, 4 others",
    img: [airbnb1, airbnb2, airbnb3, airbnb4],
    fonts: ["GothamMedium", "Helvetica", "ProductSans", "Roboto"],
    colors: ["#ff385c"],
    ko: `국비지원학원에서 팀프로젝트로 만든 최초의 프로젝트 입니다. 팀은 총 5명으로 이루어 졌으며 1명 프론트 1명 백엔드로 짝을 이뤄 프로젝트를 진행했습니다. 나머지 1명은 DB를 관리 및 설계 하였습니다. 해당 프로젝트에는 백엔드는 JAVA, Spring, Spring Boot, Oracle Cloud를 사용 하였으며 프론트엔드는 주로 JQuery를 사용했고 javascript, Vue는 배운것을 활용해 보기위해 중간중간 사용하였습니다. 총 2달 동안 진행된 이 프로젝트는 1달은 설계 및 사이트분석을 하였고 나머지 1달은 개발을 진행하였습니다. 시간 관계상 html과 css 개발은 기존 에어비앤비의 코드를 가져와 사용하였고 기능, 기술구현만 직접 개발 하였습니다.`,
    en: `This is the first project made as a team project at a government-supported academy. The team consisted of 5 people, 1 front-end and 1 back-end. The other managed and designed the DB. did. The backend of the project is JAVA, Spring, Spring Boot, Oracle Cloud was used, and the front end mainly used JQuery. Javascript, Vue is a medium to use what you learn. used. This project, which took a total of two months, took one month to design and manufacture. We spent the rest of the month analyzing and developing the site. hour html and css development brought the existing Airbnb code as it is. I have used it and developed only the features and technology implementation myself.`,
  },
];

export const gameName: string[] = [
  "League of Legends",
  "War Thunder",
  "Black Desert",
];

export const scheduleData: IScheduleData[] = [
  {
    id: 0,
    text: ["academy project", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Institution training & Team Project",
    date: "2022. 04 ~ 2022 .09",
  },
  {
    id: 1,
    text: ["Surgery & Recovery", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Surgery & Recovery",
    date: "2022. 09 ~ 2023 .12",
  },
  {
    id: 2,
    text: ["My app", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 11 ~ 2023 .12",
  },
  {
    id: 3,
    text: ["COIN market cap", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 12 ~ 2023 .01",
  },
  {
    id: 4,
    text: ["KANBAN Borad", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023 .02",
  },
  {
    id: 5,
    text: ["NETFLIX clone", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023 .02",
  },
  {
    id: 6,
    text: ["awwwards My app", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "apply project",
    date: "2023. 02 ~ 2023 .03",
  },
  {
    id: 7,
    text: [
      "",
      "2022. 6",
      "2022. 7",
      "2022. 8",
      "2022. 9",
      "2022. 10",
      "2022. 11",
      "2022. 12",
      "2022. 1",
      "2022. 2",
      "2022. 3",
    ],
    absoluteBox: "",
    date: "",
  },
];
