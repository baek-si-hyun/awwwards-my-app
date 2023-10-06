import { createSlice } from "@reduxjs/toolkit";

const featuredListSlice = createSlice({
  name: "featuredListSlice",
  initialState: {
    featuredList: [
      {
        id: 1,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0dd72f8c-1b9b-441a-a14a-13e215784b00/music",
        title: "Wit It This Christmas",
        artist: "Ariana Grande",
        album: "Christmas & Chill • 2015",
        url: "https://www.youtube.com/embed/El79WQpXyPQ",
      },
      {
        id: 2,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/14d81662-7ab6-43da-2f5f-4f5a1bce0500/music",
        title: "Loneliest Time Of Year",
        artist: "Mabel",
        album: "Loneliest Time Of Year • 2019",
        url: "https://www.youtube.com/embed/7PbkUUccZGQ",
      },
      {
        id: 3,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a627efc4-208f-46a0-9f5f-d37b82759100/music",
        title: "Daydreamin'",
        artist: "Ariana Grande",
        album: "Yours Truly • 2013",
        url: "https://www.youtube.com/embed/eLQMGYHVJ_I",
      },
      {
        id: 4,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/275330c8-0050-454d-089b-91d6fa428e00/music",
        title: "Christmas Without You",
        artist: "Ava Max",
        album: "Christmas Without You • 2020",
        url: "https://www.youtube.com/embed/L1KEJzfsQEY",
      },
      {
        id: 5,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ef3cc147-385b-4eea-ee70-1679b36a5400/music",
        title: "Last Christmas",
        artist: "Ariana Grande",
        album: "Christmas Kisses • 2013",
        url: "https://www.youtube.com/embed/ReK9MVrOq0w",
      },
      {
        id: 6,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/34f2b59b-457a-40f3-0161-f3c76c49f700/music",
        title: "Santa Tell Me",
        artist: "Ariana Grande",
        album: "Santa Tell Me • 2014",
        url: "https://www.youtube.com/embed/jnXxxKZ57Tw",
      },
      {
        id: 7,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ef3cc147-385b-4eea-ee70-1679b36a5400/music",
        title: "Love Is Everything",
        artist: "Ariana Grande",
        album: "Christmas Kisses • 2013",
        url: "https://www.youtube.com/embed/yOQAvI-5wds",
      },
      {
        id: 8,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0d4d0d3c-ca4b-407d-7469-d682f6f28200/music",
        title: "Make It To Christmas",
        artist: "Alessia Cara",
        album: "Make It To Christmas • 2019",
        url: "https://www.youtube.com/embed/QLrmP9GBd3c",
      },

      {
        id: 9,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/6bfa1e90-f379-4bb4-06f5-2633a5608000/music",
        title: "Like It's Christmas",
        artist: "Jonas Brothers",
        album: "Like It's Christmas • 2019",
        url: "https://www.youtube.com/embed/d_Bb8wRx_T4",
      },
      {
        id: 10,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/7f53781e-ce9e-464b-f6ae-4c1cbd8f8700/music",
        title: "All I Want for Christmas Is You",
        artist: "Mariah Carey",
        album: "Merry Christmas • 1994",
        url: "https://www.youtube.com/embed/Ronofs_4XjE",
      },
      {
        id: 11,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/02ec080c-c466-4871-123d-1f9aa63c0500/music",
        title: "Magic Day(feat. Mia Niles)",
        artist: "Loving Caliber",
        album: "Magic Day • 2019",
        url: "https://www.youtube.com/embed/Xv09s5kA6Lk",
      },
      {
        id: 12,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/48d1c82e-7f3b-4243-cb9b-9b9ce057e900/music",
        title: "Underneath the Tree",
        artist: "Kelly Clarkson",
        album: "Wrapped In Red • 2013",
        url: "https://www.youtube.com/embed/YfF10ow4YEo",
      },
      {
        id: 13,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/3f39cd46-066c-447a-9732-fd6d59997100/music",
        title: "Christmas Eve",
        artist: "Kelly Clarkson",
        album: "Christmas Eve • 2017",
        url: "https://www.youtube.com/embed/X9liud9wiwQ",
      },
      {
        id: 14,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f53da333-5694-40ea-6e51-b30bf0b12e00/music",
        title: "Santa, Can’t You Hear Me",
        artist: "Kelly Clarkson 및 Ariana Grande",
        album: "Can’t You Hear Me • 2022",
        url: "https://www.youtube.com/embed/I8sxgPRZCL8",
      },
      {
        id: 15,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5db739ad-86f9-43a1-9bb8-bf5fc2bdef00/music",
        title: "My Only Wish (This Year)",
        artist: "Britney Spears",
        album: "Platinum Christmas • 2000",
        url: "https://www.youtube.com/embed/_MzumcY3lpk",
      },
      {
        id: 16,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/fa7d6b84-57c1-4864-3bb7-210959ba6900/music",
        title: "Christmas in My Heart (Dylan Sitts Remix)",
        artist: "Dylan Sitts",
        album: "Xmas In My Heart • 2019",
        url: "https://www.youtube.com/embed/2uAQjcVQdWw",
      },
      {
        id: 17,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/722804c1-b569-4d50-5fb5-5c18b92ba100/music",
        title: "크리스마스니까",
        artist: "성시경",
        album: "Jelly Christmas 2012 HEART PROJECT • 2012",
        url: "https://www.youtube.com/embed/pay5EQNPA-I",
      },
      {
        id: 18,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/cdc8a3d6-e734-495f-d323-413a91918300/music",
        title: "Must Have Love",
        artist: "SG Wannabe 및 Brown Eyed Girls",
        album: "SG워너비&브라운아이드걸스 싱글 • 2006",
        url: "https://www.youtube.com/embed/KJyWJ2ofHuI",
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

// [
//   {
//     id: 1,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5e842309-78b1-4da3-44c7-3e7a8160c200/music",
//     title: "Sweater Weather (Gaullin Remix)",
//     artist: "The Neighbourhood",
//     album: "House Nation",
//     url: "https://www.youtube.com/embed/6iPDdCJ1lEM",
//   },
//   {
//     id: 2,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9c2f57c6-05c2-4ac5-fc2a-a4fade4b1500/music",
//     title: "OTW(feat. 6LACK, Ty Dolla $ign)",
//     artist: "Khalid",
//     album: "OTW • 2018",
//     url: "https://www.youtube.com/embed/N1haopXXTKc",
//   },
//   {
//     id: 3,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a70a8bc7-58ba-44d3-e7a9-0905ddd2bc00/music",
//     title: "Heartless",
//     artist: "The Weeknd",
//     album: "After Hours • 2020",
//     url: "https://www.youtube.com/embed/-uj9b9JCIJM",
//   },
//   {
//     id: 4,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5fa46bc8-8528-425a-eb28-4908416e4000/music",
//     title: "Moth To A Flame",
//     artist: "Swedish House Mafia 및 The Weeknd",
//     album: "Paradise Again • 2022",
//     url: "https://www.youtube.com/embed/WbzmQcFLPE8",
//   },
//   {
//     id: 5,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ee98cfa7-dfdf-4a99-1ff8-e0fc812dfe00/music",
//     title: "Party Monster",
//     artist: "The Weeknd",
//     album: "Starboy • 2016",
//     url: "https://www.youtube.com/embed/j9Hije4z6O4",
//   },
//   {
//     id: 6,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f3da4867-f065-4b8b-1fe7-7948eaa9db00/music",
//     title: "On the Road(feat. Meek Mill, 릴 베이비)",
//     artist: "Post Malone",
//     album: "Hollywood's Bleeding • 2019",
//     url: "https://www.youtube.com/embed/yw_ShLNyHTk",
//   },
//   {
//     id: 7,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a70a8bc7-58ba-44d3-e7a9-0905ddd2bc00/music",
//     title: "After Hours",
//     artist: "The Weeknd",
//     album: "After Hours • 2020",
//     url: "https://www.youtube.com/embed/ygTZZpVkmKg",
//   },
//   {
//     id: 8,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/677e6453-2b36-48ca-3f0d-2c70bd8f3200/music",
//     title: "SHOOTING STAR",
//     artist: "XG",
//     album: "SHOOTING STAR • 2023",
//     url: "https://www.youtube.com/embed/BHuwkHd0j4w",
//   },
//   {
//     id: 9,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/677e6453-2b36-48ca-3f0d-2c70bd8f3200/music",
//     title: "LEFT RIGHT",
//     artist: "XG",
//     album: "SHOOTING STAR • 2023",
//     url: "https://www.youtube.com/embed/Yj-LoyPitFU",
//   },
//   {
//     id: 10,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5f8cf9ae-0829-4a7a-0101-7aeebe909a00/music",
//     title: "Impurities",
//     artist: "LE SSERAFIM",
//     album: "ANTIFRAGILE • 2022",
//     url: "https://www.youtube.com/embed/-uZcrLYNwfE",
//   },
//   {
//     id: 11,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/291b27d3-26ff-47fb-7f02-772240607800/music",
//     title: "Thirsty",
//     artist: "aespa",
//     album: "MY WORLD - The 3rd Mini Album • 2023",
//     url: "https://www.youtube.com/embed/Ysz8_LZL52c",
//   },
//   {
//     id: 12,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9e3b960d-b511-493c-10f5-cef12ed4c500/music",
//     title: "사장님 도박은 재미로 하셔야 합니다",
//     artist: "비비(BIBI)",
//     album: "사장님 도박은 재미로 하셔야 합니다 • 2020",
//     url: "https://www.youtube.com/embed/7pC3cdeeqm4",
//   },

//   {
//     id: 13,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5d685afa-98aa-44b7-649f-4999a9720700/music",
//     title: "AEAO",
//     artist: "다이나믹 듀오 및 DJ 프리미어",
//     album: "A Giant Step • 2014",
//     url: "https://www.youtube.com/embed/mDzF12pf4fc",
//   },
//   {
//     id: 14,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/8f61ec0a-7a2d-470b-cc86-67b19d6fe700/music",
//     title: "에잇(feat. SUGA )",
//     artist: "아이유(IU)",
//     album: "에잇 • 2020",
//     url: "https://www.youtube.com/embed/LFiffwrhLn8",
//   },
//   {
//     id: 15,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/7319699b-f250-48cc-4b52-49ac4c45ea00/music",
//     title: "좋아",
//     artist: "Jay Park",
//     album: "좋아 • 2013",
//     url: "https://www.youtube.com/embed/wuf9xgOLocY",
//   },
//   {
//     id: 16,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/bbed2fdb-087d-4c49-f254-5d9957da2700/music",
//     title: "Leave Before You Love Me",
//     artist: "Marshmello 및 Jonas Brothers",
//     album: "Leave Before You Love Me • 2021",
//     url: "https://www.youtube.com/embed/-vptQ2hGAD8",
//   },

//   {
//     id: 17,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/b386ee69-1191-4b64-d5a6-0a0950d96600/music",
//     title: "Jubël - Triple A (feat. NLE Choppa)",
//     artist: "Jubël",
//     album: "Triple A • 2023",
//     url: "https://www.youtube.com/embed/N3Xbg-Hrc8s",
//   },

//   {
//     id: 18,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/decbe4ba-6509-41ad-e942-4ecb48d20600/music",
//     title: "안녕",
//     artist: "조이(JOY)",
//     album: "안녕 • 2021",
//     url: "https://www.youtube.com/embed/6tD58fV-v14",
//   },
//   {
//     id: 19,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/524dd8a6-019c-417d-bed6-0346d066e400/music",
//     title: "다시 여기 바닷가",
//     artist: "싹쓰리 (유두래곤&린다G&비룡)",
//     album: "다시 여기 바닷가 • 2020",
//     url: "https://www.youtube.com/embed/vIfIzA9xHxI",
//   },
//   {
//     id: 20,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/44c531e4-68f4-4517-bae4-2ea5c2e92800/music",
//     title: "톡톡(TOK TOK)(feat.SOYA)",
//     artist: "마이티 마우스",
//     album: "Mighty Fresh • 2011",
//     url: "https://www.youtube.com/embed/Tc0Cdl38CXY",
//   },
//   {
//     id: 21,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/64482895-afbf-459a-7a37-b51c56035200/music",
//     title: "No-Return (Into the unknown)",
//     artist: "LE SSERAFIM",
//     album: "UNFORGIVEN • 2023",
//     url: "https://www.youtube.com/embed/wrRu7R7eEBo",
//   },
//   {
//     id: 22,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/02420833-5619-4fc3-90bd-e16693a66800/music",
//     title: "Yêu 5 (Remix)",
//     artist: "Rhymastic",
//     album: "Yêu 5 (Remix) • 2020",
//     url: "https://www.youtube.com/embed/aVMlPZDxd5U",
//   },
//   {
//     id: 23,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e09752ef-edae-485f-0de2-40b04efe1900/music",
//     title: "Starving(feat. Zedd(제드))",
//     artist: "헤일리 스타인펠드 및 그레이",
//     album: "Starving • 2016",
//     url: "https://www.youtube.com/embed/bV_Qff_c87w",
//   },
//   {
//     id: 24,
//     img:
//       "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e107ae35-49a3-4bba-f571-9e684118a700/music",
//     title: "3LAU - Star Crossed (J3SH & LHB Remix)",
//     artist: "T. S.",
//     album: "2018",
//     url: "https://www.youtube.com/embed/1dtVbJy3eHU",
//   },
// ]
