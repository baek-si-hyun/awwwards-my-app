"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[827],{1891:(i,e,n)=>{n.r(e),n.d(e,{default:()=>Y});var s=n(4574),r=n(5843),d=n(2087),o=n(8728),t=n(5043),a=n(3003),l=n(9141),c=n(9839),p=n(2151),x=n(579);const h=s.Ay.div`
  position: absolute;
  opacity: ${i=>!0===i.isPlaying?.9:0};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
`,g=s.Ay.button`
  width: 100%;
  height: 100%;
  padding: 0;
  opacity: ${i=>!0===i.isPlaying?1:0};
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: #fff;
    font-size: clamp(30px, 2vw, 60px);
  }
`;const m=function(i){let{videoUrl:e}=i;const[n,s]=(0,t.useState)(!1),r=(0,a.wA)(),d=(0,p.t)((i=>i.playingVideoInfoSlice.videoInfo));return(0,t.useEffect)((()=>{d.videoUrl===e&&s(d.playing),d.videoUrl!==e&&s(!1)}),[d,e]),(0,x.jsx)(h,{isPlaying:n,children:(0,x.jsx)(g,{onClick:()=>(()=>{const i=!n;s(i),r((0,l.i)({...d,playing:i,videoUrl:e})),r((0,c.X)(!0))})(),isPlaying:n,children:n?(0,x.jsx)("span",{className:"material-symbols-rounded",children:"pause"}):(0,x.jsx)("span",{className:"material-symbols-rounded",children:"play_arrow"})})})};var u=n(8001);const j=s.Ay.div`
  width: 100%;
  padding: 8vw 0 15vw 0;
  background-color: #000;
  color: #fff;
  z-index: 3;
`,f=s.Ay.div`
  padding: 0px 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 480px) {
    & {
      padding: 0px 20px;
    }
  }
`,b=s.Ay.div`
  padding: 10px 2vw;
  background-color: ${i=>i.isDragging?"#1d1d1d":"transparent"};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  font-size: 1vw;
  border-bottom: 1px solid #1d1d1d;
  border-radius: ${i=>i.isDragging?"10px":"none"};
  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  will-change: background-color, border-radius;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: #1d1d1d;
    ${h} {
      opacity: 0.9;
    }
    ${g} {
      opacity: 1;
    }
  }
  @media (max-width: 650px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 429px) {
    & {
      font-size: 0.6rem;
    }
  }
`,y=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 7%;
  :nth-child(2) {
    padding-left: 20%;
  }
  :nth-child(3) {
    padding-left: 20%;
  }
  @media (max-width: 768px) {
    & {
    }
  }
  @media (max-width: 650px) {
    & {
      :last-child {
        display: none;
      }
    }
  }
`,w=s.Ay.div`
  position: relative;
`,v=s.Ay.div``,A=s.Ay.img`
  width: clamp(40px, 4vw, 128px);
`;function k(){const i=(0,p.t)((i=>{let{newJeansListSlice:e}=i;return e.newjeansList})),e=(0,a.wA)();return(0,x.jsx)(o.JY,{onDragEnd:n=>{let{destination:s,source:r}=n;if(s&&s){const n=[...i],d=n[r.index];n.splice(r.index,1),n.splice(null===s||void 0===s?void 0:s.index,0,d),e((0,u.K)(n))}},children:(0,x.jsx)(j,{children:(0,x.jsx)(o.gL,{droppableId:"one",children:e=>(0,x.jsxs)(f,{ref:e.innerRef,...e.droppableProps,children:[i.map(((i,e)=>(0,x.jsx)(o.sx,{draggableId:i.title,index:e,children:(e,n)=>(0,x.jsxs)(b,{isDragging:n.isDragging,ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,children:[(0,x.jsxs)(y,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(A,{src:i.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,x.jsx)(m,{videoUrl:i.url})]}),(0,x.jsx)(v,{children:(0,x.jsx)("span",{children:i.title})})]}),(0,x.jsx)(y,{children:(0,x.jsx)("span",{children:i.artist})}),(0,x.jsx)(y,{children:(0,x.jsx)("span",{children:i.album})})]})},i.title))),e.placeholder]})})})})}const z=t.memo(k);var P=n(657);const U=s.Ay.img`
  width: clamp(40px, 4vw, 128px);
`;function C(){const i=(0,p.t)((i=>{let{lolChampionsListSlice:e}=i;return e.lolChampionsList})),e=(0,a.wA)();return(0,x.jsx)(o.JY,{onDragEnd:n=>{let{destination:s,source:r}=n;if(s&&s){const n=[...i],d=n[r.index];n.splice(r.index,1),n.splice(null===s||void 0===s?void 0:s.index,0,d),e((0,P.Y)(n))}},children:(0,x.jsx)(j,{children:(0,x.jsx)(o.gL,{droppableId:"one",children:e=>(0,x.jsxs)(f,{ref:e.innerRef,...e.droppableProps,children:[i.map(((i,e)=>(0,x.jsx)(o.sx,{draggableId:i.title,index:e,children:(e,n)=>(0,x.jsxs)(b,{isDragging:n.isDragging,ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,children:[(0,x.jsxs)(y,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(U,{src:i.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,x.jsx)(m,{videoUrl:i.url})]}),(0,x.jsx)(v,{children:(0,x.jsx)("span",{children:i.title})})]}),(0,x.jsx)(y,{children:(0,x.jsx)("span",{children:i.artist})}),(0,x.jsx)(y,{children:(0,x.jsx)("span",{children:i.album})})]})},i.title))),e.placeholder]})})})})}const D=t.memo(C),I=n.p+"static/media/newjeansmv.24720a0f18d32a9f9ec1.mp4",S=n.p+"static/media/musicvideo.b685b12c8ba7f862c4d0.mp4";var _=n(6344);const L=s.Ay.section`
  width: 100%;
  padding-top: 3vw;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  margin-top: -6rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`,N=s.Ay.div`
  width: 100%;
`,$=(0,s.Ay)(d.fI)`
  position: sticky;
  top: 0;
`,R=s.Ay.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 5vw 5vw 0 0;
  overflow: hidden;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`,V=s.Ay.div`
  position: relative;
`,E=s.Ay.img`
  width: 100%;
  object-fit: cover;
`,J=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${i=>i.inView?1:0};
  transition: opacity 0.3s 1s ease-in-out;
  position: absolute;
  left: 0;
  top: -0.2rem;
`,M=s.Ay.video`
  width: 100vw;
`,K=s.Ay.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  div {
    position: absolute;
    left: 5%;
    bottom: 0;
  }
  h2 {
    font-weight: bold;
    font-size: 2.5vw;
    margin-bottom: 1vw;
  }
  p {
    font-size: 1.2vw;
  }
  @media (max-width: 650px) {
    & {
      p {
        font-size: 2vw;
      }
    }
  }
`,W=(0,s.Ay)(K)`
  background: linear-gradient(
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  div {
    bottom: 10%;
  }
`;const Y=function(){const{ref:i,inView:e}=(0,r.Wx)(),{ref:n,inView:s}=(0,r.Wx)();return(0,x.jsx)(L,{id:"music",children:(0,x.jsxs)(N,{children:[(0,x.jsxs)($,{children:[(0,x.jsx)(d.ku,{children:"Music List"}),(0,x.jsxs)(d.y_,{children:[(0,x.jsx)("br",{}),"\uc0ac\uc774\ud2b8\ub97c \ubcf4\uc2dc\uba74\uc11c \uc74c\uc545\uc744 \uac10\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\uc81c \ucde8\ud5a5 \ud31d\uc1a1\uacfc \ub274\uc9c4\uc2a4 \ub178\ub798\ub4e4\uc785\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\ubba4\uc9c1 \ub9ac\uc2a4\ud2b8\ub294 \uc704\uc5d0\uc11c \ubd80\ud130 \ucc28\ub840\ub300\ub85c \uc7ac\uc0dd\ub429\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\uc7ac\uc0dd \uc21c\uc11c\ub97c \ubc14\uafb8\uc2e4\uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,x.jsxs)(R,{children:[(0,x.jsxs)(V,{ref:i,children:[(0,x.jsx)(E,{src:_.n.MUSIC.BACKGROUND.NEWJEANS,alt:"famous artist",loading:"lazy",decoding:"async"}),(0,x.jsx)(J,{inView:e,children:(0,x.jsx)(M,{controls:!1,autoPlay:!0,loop:!0,muted:!0,children:(0,x.jsx)("source",{src:I,type:"video/mp4"})})}),(0,x.jsx)(K,{children:(0,x.jsx)("div",{children:(0,x.jsx)("h2",{children:"NewJeans"})})})]}),(0,x.jsx)(z,{}),(0,x.jsxs)(V,{ref:n,children:[(0,x.jsx)(E,{src:_.n.MUSIC.BACKGROUND.MUSIC,alt:"newjeans",loading:"lazy",decoding:"async"}),(0,x.jsx)(J,{inView:s,children:(0,x.jsx)(M,{controls:!1,autoPlay:!0,loop:!0,muted:!0,children:(0,x.jsx)("source",{src:S,type:"video/mp4"})})}),(0,x.jsx)(W,{children:(0,x.jsx)("div",{children:(0,x.jsx)("h2",{children:"FavoriteSong"})})})]}),(0,x.jsx)(D,{})]})]})})}}}]);
//# sourceMappingURL=827.be4e4a89.chunk.js.map