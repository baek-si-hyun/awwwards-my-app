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