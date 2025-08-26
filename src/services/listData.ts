import {
  IFaqsLists,
  IProjectsData,
  IScheduleData,
} from "../interface/iproject";

export const siteList = [
  {
    img: "49cd31ba-6549-4f5c-823e-06ee522be100",
    alt: "Awwwards",
    href: "https://www.awwwards.com/",
    icon: "e1f7fdb0-746c-4598-7dd0-c37a0b344d00",
  },
  {
    img: "089bbc9a-4241-44ab-90a2-5702bbe90d00",
    alt: "YoutubeMusic",
    href: "https://music.youtube.com/",
    icon: "7aa1d7a9-d1ec-478e-e06c-25204d9b0000",
  },
  {
    img: "b55e5689-87bc-4c9d-5ab6-f151077beb00",
    alt: "CoinMarketCap",
    href: "https://coinmarketcap.com/ko/",
    icon: "00f10618-d1f1-42ce-0ede-651abcd38200",
  },
];

export const gameName: string[] = [
  "League of Legends",
  "War Thunder",
  "Black Desert",
];
export const projectData: IProjectsData[] = [
  {
    projects_code: "selleaf",
    projects_name: "SELLEAF",
    projects_date: "2024. 05. 25",
    projects_tools: [
      "html5",
      "css3",
      "javascript",
      "django",
      "mysql",
      "amazonec2",
      "amazonroute53",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/750557ee-1dce-482a-6348-5b5564b0f100/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/17d7fdf7-8207-4730-8c95-2f2588b78000/icon",
    projects_by: "SiHyun Baek, 3 others",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/fa19f9f8-5c22-488f-c7d4-bf77fc802f00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/04cd89fa-7fb0-49b6-c8ee-2a2564bd2700/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/11980221-befc-42b9-aad4-ebd81abde200/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/db8e4fa4-ec7c-457e-7288-7f58004d6a00/public",
    ],
    projects_fonts: ["Pretendard"],
    projects_colors: ["#134F2C", "#c06888"],
    projects_ko:
      "셀리프는 홈 가드닝을 통한 내수 경제 활성화에 목표를 두고 있습니다. 식물 직거래, 홈 가드닝 관련 용품 거래 등의 개인 거래와 커뮤니티를 통한 소통을 제공하여 홈 가드닝을 취미로 둔 이용자를 타겟으로 하며, 식물과 관련한 다양한 정보를 제공하고, 일반인이 강사가 되어 식물에 대한 무엇이던 자신의 경험을 강의로 제공할 수 있도록 하는 강의 중개를 제공합니다. 이를 통하여 개인의 취미가 수익으로 이어질 수 있는 플랫폼을 제공하는 프로젝트입니다.",
    projects_en:
      "Selleaf aims to revitalize the domestic economy through home gardening. We target users who have home gardening as a hobby by providing personal transactions such as direct plant trading and home gardening related product trading and communication through the community. We also provide a variety of information related to plants, and allow the general public to become instructors and learn what to know about plants. We provide lecture brokerage that allows you to provide your own experience as a lecture. Through this, it is a project that provides a platform where individual hobbies can lead to profit.",
  },
  {
    projects_code: "project-house",
    projects_name: "PROJECT HOUSE",
    projects_date: "in progress",
    projects_tools: [
      "html5",
      "css3",
      "tailwindcss",
      "typescript",
      "react",
      "reactquery",
      "redux",
      "prisma",
      "planetscale",
      "nodedotjs",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/da43e839-59a5-4b31-0ba2-4b49618c7600/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/859f2cf1-1491-44bc-065d-dfca90cc7100/icon",
    projects_by: "SiHyun Baek, 1 others",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/6fd47895-228d-40b4-fc97-51462e176f00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0ca145e3-7001-4ed6-63fe-ffcedb7e4800/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/570d30d3-9860-4325-da9c-3449d6a88200/public",
      "",
    ],
    projects_fonts: ["Pretendard"],
    projects_colors: ["#1c64f2", "#f3f4f6"],
    projects_ko:
      '우리와 같이 취업 준비 중인 분들이 포트폴리오를 구축하기 위해 프로젝트를 진행하고 있는데, 이런 프로젝트들이 자주 Github에 방치되어 있어서 아쉬웠습니다. 그래서 저희는 "Project House"를 만들게 되었습니다. Project House는 프로젝트를 기획하고 진행할 때 역할 분담, 스케줄 관리, 일정 계획을 돕는 동시에, 완료한 프로젝트들을 게시하고 커뮤니티를 형성하여, 다른 취준생 분들에게 프로젝트 경험을 공유할 수 있는 플랫폼입니다. 이렇게 프로젝트 하우스는 취업 준비하는 분들에게 가치 있는 리소스가 될 것입니다.',
    projects_en:
      'We noticed that many individuals preparing for employment, just like us, often leave their projects neglected on GitHub. Thats why we decided to create "Project House." Project House is a platform designed to assist in project planning and execution, including role assignment, schedule management, and task planning. Additionally, it allows users to showcase completed projects and build a community where aspiring job seekers can share their project experiences. In this way, Project House aims to become a valuable resource for individuals preparing for employment.',
  },

  {
    projects_code: "carrot-market",
    projects_name: "CARROT MARKET",
    projects_date: "2023. 09. 21",
    projects_tools: [
      "html5",
      "css3",
      "tailwindcss",
      "typescript",
      "nextdotjs",
      "prisma",
      "planetscale",
      "cloudflare",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/fec1b1e6-86f9-41e4-7f75-2b8427ac4d00/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/133c48bb-0759-46c9-442a-91cb852e5b00/icon",
    projects_by: "Nomad Coders, SiHyun Baek",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0392332a-d04e-47ed-8ced-52bc1e42f400/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/05b5afee-0d55-4f23-43f8-96e1dddc7b00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f16275f8-db74-4bfd-8a07-60326b9e4500/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/916d8825-ad6b-4967-92f3-84e01a6f7100/public",
    ],
    projects_fonts: ["ui-sans-serif", "system-ui"],
    projects_colors: ["#f97316"],
    projects_ko:
      '"nomadcoders"라는 강의 사이트에서 진행하는 코드챌린지로 인해 제작되었습니다. 코드챌린지는 강사와 함께 프로젝트를 진행하며 배우고 일부기능은 직접 혼자 구현해보는 제도입니다. NextJS와 TypeScript를 조합하였습니다. TailWind CSS를 사용하였고 그 외에 SWR, Prisma, PScale, CloudFlare를 사용였습니다. 현재는 판매자와 구매자간의 메세지 기능, 채팅방 업데이트를 준비중입니다.',
    projects_en:
      'It was created as a result of a code challenge conducted on a lecture site called "nomadcoders". Code Challenge is a system where you learn and implement some features yourself while working on a project with an instructor. A combination of NextJS and TypeScript. TailWind CSS was used, and additionally SWR, Prisma, PScale, and CloudFlare were used. We are currently preparing to update the message function and chat room between sellers and buyers.',
  },
  {
    projects_code: "awwwards",
    projects_name: "AWWWARDS MY APP",
    projects_date: "2023. 08. 27",
    projects_tools: [
      "html5",
      "css3",
      "styledcomponents",
      "typescript",
      "react",
      "reactquery",
      "redux",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/09e9189a-ee66-4858-4e6a-b9da9e26e700/icon",
    projects_by: "SiHyun Baek",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9a3c9ee7-1f22-43ad-e386-35d840d5e700/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/79e41cb5-4331-4c4f-e5e4-a020d9792e00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e1420fd4-c745-473f-e405-d97976b69000/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/c3898e1e-6ef4-413e-1d76-71a560b39a00/public",
    ],
    projects_fonts: ["Apercu", "Pretendard"],
    projects_colors: ["#d7d7d7", "#3e3e3e"],
    projects_ko:
      "제가 만든 프로젝트들를 보실분들이 일일히 프로젝트 하나하나 링크 눌러가며 보지않고 편하고 색다르게 볼 수 있을거라 생각해 만들게 되었습니다. 프론트는 React와 TypeScript를 조합하였고 Styled Components, React Query를 사용하였습니다. 그 외에 이전에 배운 라이브러리들을 조금씩 연습겸 사용해 보았습니다. 백엔드는 MySQL과 NodeJS로 REST api를 만들어 PROJECTS 파트에 사용하고 있습니다. 프론트는 GitHub, 백엔드는 CloudType, DB는 RDS로 배포하고 있으며 서버같은 경우엔 무료 서비스이기 때문에 속도가 느립니다. 앞으로 공부하는 기술들을 이 프로젝트에 적용할 것 입니다.",
    projects_en:
      'I made it because I thought that people who see my project would be able to see it comfortably and specially without clicking on each link. The front combines React and TypeScript and uses Styled Components and React Query. And I practiced and used the previously learned libraries bit by bit. The backend uses MySQL and NodeJS to create a REST API for the PROJECTS part. The frontend is in "Github", the backend is in "CloudType", the DB is in "RDS", and the server is slow because it is a free service. The researched technology will be applied to this project in the future.',
  },

  {
    projects_code: "kanban",
    projects_name: "KANBAN BOARD",
    projects_date: "2023. 2. 1",
    projects_tools: [
      "html5",
      "css3",
      "styledcomponents",
      "typescript",
      "react",
      "recoil",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/54315859-5a93-4c3e-6fdb-98bf43011100/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/133c48bb-0759-46c9-442a-91cb852e5b00/icon",
    projects_by: "Nomad Coders, SiHyun Baek",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/37239698-4c13-4cf2-f28f-bc58aa85c200/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/3d3d1ae9-2c80-4968-8e95-efb1b92a9b00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/8647f462-2de5-4c79-098a-ae5f7651b600/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/58528ccc-6ee2-4387-08e1-9fa58b34f500/public",
    ],
    projects_fonts: ["Pretendard"],
    projects_colors: ["#efefef", "#626262"],
    projects_ko:
      '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, react beautiful dnd, react hook form을 사용하였습니다. 디자인은 "김주이(te6-in)" 님의 코드 챌린지를 참고했습니다.',
    projects_en:
      'Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, Recoil, react beautiful dnd, react hook form Used. The design is "Kim Joo-i (te6-in)"s code challenge Referenced. The project is "Move Board", "New Board" Update "Creating", "Saving and Loading to localStorage" Coming soon.',
  },

  {
    projects_code: "coin",
    projects_name: "CRYPTO TRACKER",
    projects_date: "2023. 1. 11",
    projects_tools: [
      "html5",
      "css3",
      "styledcomponents",
      "typescript",
      "react",
      "recoil",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5c752596-2cd7-416c-5361-563f864c8300/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/133c48bb-0759-46c9-442a-91cb852e5b00/icon",
    projects_by: "Nomad Coders, SiHyun Baek",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/4b52eb81-55ec-40ad-ae8c-96454a403c00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9d5ba73e-f972-409b-313d-11ae62d1d400/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ef19e8c3-209e-4d3f-74e9-f438f2d71b00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/22c60983-660e-4f69-32a6-b7ad657a4400/public",
    ],
    projects_fonts: ["Pretendard"],
    projects_colors: ["#3b3b3b", "#222222"],
    projects_ko:
      '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, React Query, apexcharts를 사용하였습니다.',
    projects_en:
      'Due to a code challenge conducted on a lecture site called "nomadcoders" it was created React and typescript combined and different styled Components, Recoil, React Query and apexcharts were used.',
  },
  {
    projects_code: "myapp",
    projects_name: "MY APP",
    projects_date: "2022. 12. 25",
    projects_tools: ["html5", "css3", "cssmodules", "javascript", "react"],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/bbc21380-cd4b-4fcb-0c5d-6272a4d20600/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/09e9189a-ee66-4858-4e6a-b9da9e26e700/icon",
    projects_by: "SiHyun Baek",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/782af772-bca9-407b-c5ec-fd02980f4000/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e4ba8107-b1e4-4f98-7616-8755de1e3100/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/13e0649a-61b1-4d00-67ae-1f07d8783d00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5a18aaac-83d3-4489-5993-3fd9e09a5100/public",
    ],
    projects_fonts: ["Yasashii", "Exo2", "NanumSquareRound"],
    projects_colors: ["#3e9d89", "#1e3d5c"],
    projects_ko:
      '제가 처음 리액트를 배운것들을 활용해 보기 위해 제작 되었습니다. module css를 사용했으며 다른 특별한 라이브러리들은 사용하지 않은 순수 리액트 프로젝트입니다. 첫 Header 컴포넌트의 디자인은 프론트엔드 프리랜서 "henriheymans"님의 개인 사이트를 참고하여 제작했습니다. Contact 컴포넌트의 디자인은 "wanderful" 이라는 해외 숙소 소개 사이트를 참고하였습니다.',
    projects_en:
      'It is built to use what you first learned about React. I used module css and no other special libraries. This is a pure React project. The design of the first header component is as follows. Refer to the personal homepage of front-end freelancer "henriheymans" production. The design of the Contact component was referred to an overseas accommodation introduction site called "wanderful".',
  },
  {
    projects_code: "airbnb",
    projects_name: "AIRBNB CLONE",
    projects_date: "2022. 9. 1",
    projects_tools: [
      "html5",
      "css3",
      "javascript",
      "jquery",
      "spring",
      "oracle",
    ],
    projects_thumbnail:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/1a7004f4-b14f-4ffc-2ca7-bfa7ff694700/public",
    projects_logo:
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/09e9189a-ee66-4858-4e6a-b9da9e26e700/icon",
    projects_by: "SiHyun Baek, 4 others",
    projects_prev_img: [
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/00d3b975-1962-4945-23f7-c7e9002d2a00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/085f21dc-4a38-4e05-90a3-9695a4ff3b00/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/3e076449-cb3c-4530-fc3a-c3f165946600/public",
      "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/d5fb0909-2136-4010-4401-4c654e4cb200/public",
    ],
    projects_fonts: ["GothamMedium", "Helvetica", "ProductSans", "Roboto"],
    projects_colors: ["#ff385c"],
    projects_ko:
      "국비지원학원에서 팀프로젝트로 만든 최초의 프로젝트 입니다. 팀은 총 5명으로 이루어 졌으며 1명 프론트 1명 백엔드로 짝을 이뤄 프로젝트를 진행했습니다. 나머지 1명은 DB를 관리 및 설계 하였습니다. 해당 프로젝트에는 백엔드는 JAVA, Spring, Spring Boot, Oracle Cloud를 사용 하였으며 프론트엔드는 주로 JQuery를 사용했고 javascript, Vue는 배운것을 활용해 보기위해 중간중간 사용하였습니다. 총 2달 동안 진행된 이 프로젝트는 1달은 설계 및 사이트분석을 하였고 나머지 1달은 개발을 진행하였습니다. 시간 관계상 html과 css 개발은 기존 에어비앤비의 코드를 가져와 사용하였고 기능, 기술구현만 직접 개발 하였습니다.",
    projects_en:
      "This is the first project made as a team project at a government-supported academy. The team consisted of 5 people, 1 front-end and 1 back-end. The other managed and designed the DB. did. The backend of the project is JAVA, Spring, Spring Boot, Oracle Cloud was used, and the front end mainly used JQuery. Javascript, Vue is a medium to use what you learn. used. This project, which took a total of two months, took one month to design and manufacture. We spent the rest of the month analyzing and developing the site. hour html and css development brought the existing Airbnb code as it is. I have used it and developed only the features and technology implementation myself.",
  },
];

export const faqList: IFaqsLists[] = [
  {
    q: "국비지원학원을 다니기 전엔 무엇을 하셧나요?",
    a: "다리 조인트 교체 및 설치 노동을 했습니다.",
  },
  {
    q: "국비지원학원을 다니게 된 계기가 있나요?",
    a: "효율적이고 빠르게 취업하고 싶어하는 저에게 군대 동기가 추천해주었습니다.",
  },
  {
    q: "대학을 안나온? 못나온? 이유가 있나요?",
    a: "대학을 나올정도의 성적은 되었지만 대학에 대해 굉장히 부정적이어서 가지 않았습니다.",
  },
  {
    q: "고졸 문제는 어떻게 해결하실 건가요?",
    a: "취업 후 제가 회사에 민폐 끼치질 않을 정도의 실력되면 사이버대학으로 졸업장을 취득할거같습니다.",
  },
  {
    q: "대학에 관심이 없었다면 왜 특성화고에 가지 않았나요?",
    a: "부모님의 반대가 매우 심했습니다. 개발자라는 직업도 마찬가지 였지만 지금은 설득에 성공했습니다.",
  },
  {
    q: "프론트엔드에 개발자가 되기로 마음먹은 이유가 있나요?",
    a: "팀 프로젝트를 진행하며 백, 프론트 둘다 해보니 프론트엔드 쪽이 백엔드보다 잘맞는거같았고 더 재밋다고 느껴서 마음 먹었습니다. 하지만 풀스택을 목표로 하고 있습니다.",
  },
  {
    q: "사용할줄 아는 언어, 라이브러리, 프레임워크는 뭔가요?",
    a: "javascript, jquery, react, typescript가 있습니다. 지금은 nextjs를 공부중에 있습니다.",
  },
  {
    q: "java, spring, python, DB도 배웠다던데 사용 할줄 아시나요?",
    a: "프로젝트에서 조금이나마 사용은 해봤지만 지금은 다시 공부해야 합니다.",
  },
];

export const schedule: IScheduleData[] = [
  {
    id: 0,
    text: ["Academy Study", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Institution training",
    date: "2022. 04 ~ 2022. 09",
  },
  {
    id: 1,
    text: ["Academy Project", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Team Project",
    date: "2022. 06 ~ 2022. 09",
  },
  {
    id: 2,
    text: ["React", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Study",
    date: "2022. 11 ~ 2023. 9",
  },
  {
    id: 3,
    text: ["MY APP", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 11 ~ 2022. 12",
  },
  {
    id: 4,
    text: ["CRYPTO Tracker", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 12 ~ 2023. 01",
  },
  {
    id: 5,
    text: ["KANBAN Borad", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023. 02",
  },
  {
    id: 6,
    text: ["AWWWARDS MY APP", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 03 ~ 2023. 09",
  },
  {
    id: 7,
    text: ["Computer Science", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Study",
    date: "2023. 04 ~ 2023. 06",
  },
  {
    id: 8,
    text: [
      "Next.js, CarrotMarket",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Study project",
    date: "2023. 07 ~ 2023. 12",
  },
  {
    id: 9,
    text: ["Project House", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "team project in progress",
    date: "2023. 09 ~ ",
  },
  {
    id: 10,
    text: [
      "PRE-ONBOARDING (FE, BE)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Challenge",
    date: "2023. 09 ~ 2023. 10",
  },
  {
    id: 11,
    text: [
      "Academy Study (KDT)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Institution training",
    date: "2023. 12 ~ 2024. 06",
  },
  {
    id: 12,
    text: [
      "Academy Project (KDT)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "4 Team Project",
    date: "2024. 02 ~ 2024. 07",
  },

  {
    id: 13,
    text: [
      "",
      "2022. 6",
      "2022. 9",
      "2022. 12",
      "2023. 3",
      "2023. 6",
      "2023. 9",
      "2023. 12",
      "2024. 3",
      "2024. 6",
      "2024. 9",
      "2024. 12",
    ],
    absoluteBox: "",
    date: "",
  },
];
