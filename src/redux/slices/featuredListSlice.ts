import { createSlice } from "@reduxjs/toolkit";
import yeu5 from "../../assets/img/recommended_song/yeu5.jpg";
import star from "../../assets/img/recommended_song/star.jpg";
import sweater from "../../assets/img/recommended_song/sweater.jpg";
import triple from "../../assets/img/recommended_song/triple.jpg";
import iu from "../../assets/img/recommended_song/iu.jpg";
import beam from "../../assets/img/recommended_song/beam.jpg";
import joy from "../../assets/img/recommended_song/joy.jpg";
import girls from "../../assets/img/recommended_song/girls.jpg";
import blaeker from "../../assets/img/recommended_song/blaeker.jpg";
import bibi from "../../assets/img/recommended_song/bibi.jpg";
import lesserafim from "../../assets/img/recommended_song/lesserafim.jpg";
import marshmello from "../../assets/img/recommended_song/marshmello.jpg";
import mindme1 from "../../assets/img/recommended_song/mindme1.jpg";
import mindme2 from "../../assets/img/recommended_song/mindme2.jpg";
import phoenix from "../../assets/img/recommended_song/phoenix.jpg";
import post1 from "../../assets/img/recommended_song/post1.jpg";
import post2 from "../../assets/img/recommended_song/post2.jpg";
import reminder from "../../assets/img/recommended_song/reminder.jpg";
import tiktok from "../../assets/img/recommended_song/tiktok.jpg";
import trndsttr from "../../assets/img/recommended_song/trndsttr.jpg";
import xg from "../../assets/img/recommended_song/xg.jpg";
import weeknd1 from "../../assets/img/recommended_song/weeknd1.jpg";
import weeknd2 from "../../assets/img/recommended_song/weeknd2.jpg";
import weeknd3 from "../../assets/img/recommended_song/weeknd3.jpg";
import zedd from "../../assets/img/recommended_song/zedd.jpg";
import sakthree from "../../assets/img/recommended_song/sakthree.jpg";
import toktok from "../../assets/img/recommended_song/toktok.jpg";

const featuredListSlice = createSlice({
  name: "featuredListSlice",
  initialState: {
    featuredList: [
      {
        id: 1,
        img: tiktok,
        title: "TiK ToK(feat. Liinii)",
        artist: "Helion 및 Olympis",
        album: "TiK ToK • 2020",
        url: "https://www.youtube.com/embed/2mOMCDiC5pw",
      },
      {
        id: 2,
        img: sweater,
        title: "Sweater Weather (Gaullin Remix)",
        artist: "The Neighbourhood",
        album: "House Nation",
        url: "https://www.youtube.com/embed/6iPDdCJ1lEM",
      },
      {
        id: 3,
        img: reminder,
        title: "Reminder",
        artist: "2Scratch & Young Jae",
        album: "Reminder • 2019",
        url: "https://www.youtube.com/embed/NiRDlWJ11AA",
      },
      {
        id: 4,
        img: post1,
        title: "Motley Crew",
        artist: "Post Malone",
        album: "Motley Crew • 2021",
        url: "https://www.youtube.com/embed/9Aaom1TZ52g",
      },
      {
        id: 5,
        img: weeknd1,
        title: "Heartless",
        artist: "The Weeknd",
        album: "After Hours • 2020",
        url: "https://www.youtube.com/embed/-uj9b9JCIJM",
      },
      {
        id: 6,
        img: weeknd2,
        title: "Moth To A Flame",
        artist: "Swedish House Mafia 및 The Weeknd",
        album: "Paradise Again • 2022",
        url: "https://www.youtube.com/embed/WbzmQcFLPE8",
      },

      {
        id: 7,
        img: weeknd3,
        title: "Party Monster",
        artist: "The Weeknd",
        album: "Starboy • 2016",
        url: "https://www.youtube.com/embed/j9Hije4z6O4",
      },
      {
        id: 8,
        img: post2,
        title: "On the Road(feat. Meek Mill, 릴 베이비)",
        artist: "Post Malone",
        album: "Hollywood's Bleeding • 2019",
        url: "https://www.youtube.com/embed/yw_ShLNyHTk",
      },
      {
        id: 9,
        img: weeknd1,
        title: "After Hours",
        artist: "The Weeknd",
        album: "After Hours • 2020",
        url: "https://www.youtube.com/embed/ygTZZpVkmKg",
      },
      {
        id: 10,
        img: mindme1,
        title: "Might Be(feat. Emmi)",
        artist: "Mindme",
        album: "Change • 2019",
        url: "https://www.youtube.com/embed/xmlcDsDFouQ",
      },
      {
        id: 11,
        img: mindme2,
        title: "Get Me out of Here(feat. 밀바)",
        artist: "Mindme",
        album: "Get Me out of Here • 2020",
        url: "https://www.youtube.com/embed/FtmaQLZ65_I",
      },
      {
        id: 12,
        img: blaeker,
        title: "More Of My Life(feat. 자슬린 에드가)",
        artist: "BLAEKER",
        album: "More Of My Life • 2019",
        url: "https://www.youtube.com/embed/j3qxWRfaPfY",
      },
      {
        id: 13,
        img: xg,
        title: "SHOOTING STAR",
        artist: "XG",
        album: "SHOOTING STAR • 2023",
        url: "https://www.youtube.com/embed/BHuwkHd0j4w",
      },
      {
        id: 14,
        img: xg,
        title: "LEFT RIGHT",
        artist: "XG",
        album: "SHOOTING STAR • 2023",
        url: "https://www.youtube.com/embed/Yj-LoyPitFU",
      },
      {
        id: 15,
        img: bibi,
        title: "사장님 도박은 재미로 하셔야 합니다",
        artist: "비비(BIBI)",
        album: "사장님 도박은 재미로 하셔야 합니다 • 2020",
        url: "https://www.youtube.com/embed/xwUFywmH5t4",
      },

      {
        id: 16,
        img: trndsttr,
        title: "Trndsttr (Lucian Remix)",
        artist: "Black Coast 및 M. Maggie",
        album: "Trndsttr (Lucian Remix) • 2016",
        url: "https://www.youtube.com/embed/vBdnfyfBSKg",
      },

      {
        id: 17,
        img: girls,
        title: "완벽한 시대 Summer Night",
        artist: "소녀시대",
        album: "FOREVER 1 - The 7th Album • 2022",
        url: "https://www.youtube.com/embed/1BeMGup6HKw",
      },
      {
        id: 18,
        img: iu,
        title: "에잇(feat. SUGA )",
        artist: "아이유(IU)",
        album: "에잇 • 2020",
        url: "https://www.youtube.com/embed/LFiffwrhLn8",
      },
      {
        id: 19,
        img: marshmello,
        title: "Leave Before You Love Me",
        artist: "Marshmello 및 Jonas Brothers",
        album: "Leave Before You Love Me • 2021",
        url: "https://www.youtube.com/embed/-vptQ2hGAD8",
      },
      {
        id: 20,
        img: triple,
        title: "Jubël - Triple A (feat. NLE Choppa)",
        artist: "Jubël",
        album: "Triple A • 2023",
        url: "https://www.youtube.com/embed/N3Xbg-Hrc8s",
      },
      {
        id: 21,
        img: beam,
        title: "Beam (Dannic Mix)",
        artist: "Mako feat. Angel Taylor",
        album: "Beam (Dannic Mix) • 2013",
        url: "https://www.youtube.com/embed/Og5ovhUbw3g",
      },
      {
        id: 22,
        img: joy,
        title: "안녕",
        artist: "조이(JOY)",
        album: "안녕 • 2021",
        url: "https://www.youtube.com/embed/6tD58fV-v14",
      },
      {
        id: 23,
        img: sakthree,
        title: "다시 여기 바닷가",
        artist: "싹쓰리 (유두래곤&린다G&비룡)",
        album: "다시 여기 바닷가 • 2020",
        url: "https://www.youtube.com/embed/vIfIzA9xHxI",
      },
      {
        id: 24,
        img: toktok,
        title: "톡톡(TOK TOK)(feat.SOYA)",
        artist: "마이티 마우스",
        album: "Mighty Fresh • 2011",
        url: "https://www.youtube.com/embed/Tc0Cdl38CXY",
      },
      {
        id: 25,
        img: lesserafim,
        title: "No-Return (Into the unknown)",
        artist: "LE SSERAFIM",
        album: "UNFORGIVEN • 2023",
        url: "https://www.youtube.com/embed/wrRu7R7eEBo",
      },
      {
        id: 26,
        img: phoenix,
        title: "Phoenix",
        artist: "Netrum & Halvorsen",
        album: "NCS10 Release • 2022",
        url: "https://www.youtube.com/embed/yH88qRmgkGI",
      },
      {
        id: 27,
        img: yeu5,
        title: "Yêu 5 (Remix)",
        artist: "Rhymastic",
        album: "Yêu 5 (Remix) • 2020",
        url: "https://www.youtube.com/embed/aVMlPZDxd5U",
      },
      {
        id: 28,
        img: zedd,
        title: "Starving(feat. Zedd(제드))",
        artist: "헤일리 스타인펠드 및 그레이",
        album: "Starving • 2016",
        url: "https://www.youtube.com/embed/bV_Qff_c87w",
      },
      {
        id: 29,
        img: star,
        title: "3LAU - Star Crossed (J3SH & LHB Remix)",
        artist: "T. S.",
        album: "2018",
        url: "https://www.youtube.com/embed/1dtVbJy3eHU",
      },
    ],
  },
  reducers: {
    featuredRedux: (state, action) => {
      state.featuredList = action.payload;
    },
  },
});

export default featuredListSlice;
export const { featuredRedux } = featuredListSlice.actions;
