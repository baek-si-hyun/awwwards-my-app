import { createSlice } from "@reduxjs/toolkit";
    
const featuredListSlice = createSlice({
  name: "featuredListSlice",
  initialState: {
    featuredList: [
      {
        id: 1,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/dec35422-c8a7-470c-7b7c-664b8d231f00/music",
        title: "TiK ToK(feat. Liinii)",
        artist: "Helion 및 Olympis",
        album: "TiK ToK • 2020",
        url: "https://www.youtube.com/embed/2mOMCDiC5pw",
      },
      {
        id: 2,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5e842309-78b1-4da3-44c7-3e7a8160c200/music",
        title: "Sweater Weather (Gaullin Remix)",
        artist: "The Neighbourhood",
        album: "House Nation",
        url: "https://www.youtube.com/embed/6iPDdCJ1lEM",
      },
      {
        id: 3,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/b463cee8-b947-4c14-b587-cf2a080b9300/music",
        title: "Reminder",
        artist: "2Scratch & Young Jae",
        album: "Reminder • 2019",
        url: "https://www.youtube.com/embed/NiRDlWJ11AA",
      },
      {
        id: 4,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/d12cc161-ac5e-4b92-3086-1574164ff300/music",
        title: "Motley Crew",
        artist: "Post Malone",
        album: "Motley Crew • 2021",
        url: "https://www.youtube.com/embed/9Aaom1TZ52g",
      },
      {
        id: 5,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a70a8bc7-58ba-44d3-e7a9-0905ddd2bc00/music",
        title: "Heartless",
        artist: "The Weeknd",
        album: "After Hours • 2020",
        url: "https://www.youtube.com/embed/-uj9b9JCIJM",
      },
      {
        id: 6,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5fa46bc8-8528-425a-eb28-4908416e4000/music",
        title: "Moth To A Flame",
        artist: "Swedish House Mafia 및 The Weeknd",
        album: "Paradise Again • 2022",
        url: "https://www.youtube.com/embed/WbzmQcFLPE8",
      },

      {
        id: 7,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ee98cfa7-dfdf-4a99-1ff8-e0fc812dfe00/music",
        title: "Party Monster",
        artist: "The Weeknd",
        album: "Starboy • 2016",
        url: "https://www.youtube.com/embed/j9Hije4z6O4",
      },
      {
        id: 8,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f3da4867-f065-4b8b-1fe7-7948eaa9db00/music",
        title: "On the Road(feat. Meek Mill, 릴 베이비)",
        artist: "Post Malone",
        album: "Hollywood's Bleeding • 2019",
        url: "https://www.youtube.com/embed/yw_ShLNyHTk",
      },
      {
        id: 9,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a70a8bc7-58ba-44d3-e7a9-0905ddd2bc00/music",
        title: "After Hours",
        artist: "The Weeknd",
        album: "After Hours • 2020",
        url: "https://www.youtube.com/embed/ygTZZpVkmKg",
      },
      {
        id: 10,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/547d1f8b-9f95-4ef6-e1e6-c86829f04c00/music",
        title: "Might Be(feat. Emmi)",
        artist: "Mindme",
        album: "Change • 2019",
        url: "https://www.youtube.com/embed/xmlcDsDFouQ",
      },
      {
        id: 11,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/22288b6f-c860-4476-1db9-42003337a500/music",
        title: "Get Me out of Here(feat. 밀바)",
        artist: "Mindme",
        album: "Get Me out of Here • 2020",
        url: "https://www.youtube.com/embed/FtmaQLZ65_I",
      },
      {
        id: 12,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/7240d9ba-006c-408e-516a-1e341757af00/music",
        title: "More Of My Life(feat. 자슬린 에드가)",
        artist: "BLAEKER",
        album: "More Of My Life • 2019",
        url: "https://www.youtube.com/embed/j3qxWRfaPfY",
      },
      {
        id: 13,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/677e6453-2b36-48ca-3f0d-2c70bd8f3200/music",
        title: "SHOOTING STAR",
        artist: "XG",
        album: "SHOOTING STAR • 2023",
        url: "https://www.youtube.com/embed/BHuwkHd0j4w",
      },
      {
        id: 14,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/677e6453-2b36-48ca-3f0d-2c70bd8f3200/music",
        title: "LEFT RIGHT",
        artist: "XG",
        album: "SHOOTING STAR • 2023",
        url: "https://www.youtube.com/embed/Yj-LoyPitFU",
      },
      {
        id: 15,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9e3b960d-b511-493c-10f5-cef12ed4c500/music",
        title: "사장님 도박은 재미로 하셔야 합니다",
        artist: "비비(BIBI)",
        album: "사장님 도박은 재미로 하셔야 합니다 • 2020",
        url: "https://www.youtube.com/embed/7pC3cdeeqm4",
      },

      {
        id: 16,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/cdb3964e-ede2-4634-a5ce-a3fe1b892100/music",
        title: "Trndsttr (Lucian Remix)",
        artist: "Black Coast 및 M. Maggie",
        album: "Trndsttr (Lucian Remix) • 2016",
        url: "https://www.youtube.com/embed/vBdnfyfBSKg",
      },

      {
        id: 17,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/51655026-3d54-4b43-9d90-6438fcb59400/music",
        title: "완벽한 시대 Summer Night",
        artist: "소녀시대",
        album: "FOREVER 1 - The 7th Album • 2022",
        url: "https://www.youtube.com/embed/1BeMGup6HKw",
      },
      {
        id: 18,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/8f61ec0a-7a2d-470b-cc86-67b19d6fe700/music",
        title: "에잇(feat. SUGA )",
        artist: "아이유(IU)",
        album: "에잇 • 2020",
        url: "https://www.youtube.com/embed/LFiffwrhLn8",
      },
      {
        id: 19,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/bbed2fdb-087d-4c49-f254-5d9957da2700/music",
        title: "Leave Before You Love Me",
        artist: "Marshmello 및 Jonas Brothers",
        album: "Leave Before You Love Me • 2021",
        url: "https://www.youtube.com/embed/-vptQ2hGAD8",
      },
      {
        id: 20,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/b386ee69-1191-4b64-d5a6-0a0950d96600/music",
        title: "Jubël - Triple A (feat. NLE Choppa)",
        artist: "Jubël",
        album: "Triple A • 2023",
        url: "https://www.youtube.com/embed/N3Xbg-Hrc8s",
      },
      {
        id: 21,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/c01ec9a7-41b4-4eea-4013-c944c3211d00/music",
        title: "Beam (Dannic Mix)",
        artist: "Mako feat. Angel Taylor",
        album: "Beam (Dannic Mix) • 2013",
        url: "https://www.youtube.com/embed/Og5ovhUbw3g",
      },
      {
        id: 22,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/decbe4ba-6509-41ad-e942-4ecb48d20600/music",
        title: "안녕",
        artist: "조이(JOY)",
        album: "안녕 • 2021",
        url: "https://www.youtube.com/embed/6tD58fV-v14",
      },
      {
        id: 23,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/524dd8a6-019c-417d-bed6-0346d066e400/music",
        title: "다시 여기 바닷가",
        artist: "싹쓰리 (유두래곤&린다G&비룡)",
        album: "다시 여기 바닷가 • 2020",
        url: "https://www.youtube.com/embed/vIfIzA9xHxI",
      },
      {
        id: 24,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/44c531e4-68f4-4517-bae4-2ea5c2e92800/music",
        title: "톡톡(TOK TOK)(feat.SOYA)",
        artist: "마이티 마우스",
        album: "Mighty Fresh • 2011",
        url: "https://www.youtube.com/embed/Tc0Cdl38CXY",
      },
      {
        id: 25,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/64482895-afbf-459a-7a37-b51c56035200/music",
        title: "No-Return (Into the unknown)",
        artist: "LE SSERAFIM",
        album: "UNFORGIVEN • 2023",
        url: "https://www.youtube.com/embed/wrRu7R7eEBo",
      },
      {
        id: 26,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/fb8ca221-2ef0-4ef5-2d01-63fb06cf9400/music",
        title: "Phoenix",
        artist: "Netrum & Halvorsen",
        album: "NCS10 Release • 2022",
        url: "https://www.youtube.com/embed/yH88qRmgkGI",
      },
      {
        id: 27,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/02420833-5619-4fc3-90bd-e16693a66800/music",
        title: "Yêu 5 (Remix)",
        artist: "Rhymastic",
        album: "Yêu 5 (Remix) • 2020",
        url: "https://www.youtube.com/embed/aVMlPZDxd5U",
      },
      {
        id: 28,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e09752ef-edae-485f-0de2-40b04efe1900/music",
        title: "Starving(feat. Zedd(제드))",
        artist: "헤일리 스타인펠드 및 그레이",
        album: "Starving • 2016",
        url: "https://www.youtube.com/embed/bV_Qff_c87w",
      },
      {
        id: 29,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e107ae35-49a3-4bba-f571-9e684118a700/music",
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
