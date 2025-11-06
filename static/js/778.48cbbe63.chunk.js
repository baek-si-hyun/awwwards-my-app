"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[778],{9710:(i,e,n)=>{n.r(e),n.d(e,{default:()=>K});var s=n(4574),o=n(5843),t=n(2087),r=n(3003),d=n(5043),a=n(8001),l=n(2151),c=n(8728),p=n(9724),x=n(579);const h=s.Ay.div`
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
`;const u=function(i){let{song:e}=i;const{isPlaying:n,selectSong:s,isCurrentSong:o}=(0,p.A)(),t=o(e)&&n;return(0,x.jsx)(h,{isPlaying:t,children:(0,x.jsx)(g,{onClick:()=>s(e),isPlaying:t,children:t?(0,x.jsx)("span",{className:"material-symbols-rounded",children:"pause"}):(0,x.jsx)("span",{className:"material-symbols-rounded",children:"play_arrow"})})})},m=s.Ay.div`
  width: 100%;
  padding: 8vw 0 15vw 0;
  background-color: #000;
  color: #fff;
  z-index: 3;
`,b=s.Ay.div`
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
`,f=s.Ay.div`
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
`,j=s.Ay.div`
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
`,y=s.Ay.div``;var v=n(2997);const A=(0,s.Ay)(v.A)`
  width: clamp(40px, 4vw, 128px);
`;function k(i){let{droppableId:e,items:n,onReorder:s}=i;const o=(0,d.useCallback)((i=>{let{destination:e,source:o}=i;if(!e)return;if(e.index===o.index)return;const t=[...n],[r]=t.splice(o.index,1);t.splice(e.index,0,r),s(t)}),[n,s]);return(0,x.jsx)(c.JY,{onDragEnd:o,children:(0,x.jsx)(m,{children:(0,x.jsx)(c.gL,{droppableId:e,children:i=>(0,x.jsxs)(b,{ref:i.innerRef,...i.droppableProps,children:[n.map(((i,e)=>(0,x.jsx)(c.sx,{draggableId:String(i.id),index:e,children:(e,n)=>(0,x.jsxs)(f,{isDragging:n.isDragging,ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,children:[(0,x.jsxs)(j,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(A,{sources:i.img,alt:"album_photo",fullWidth:!0,fullHeight:!0,objectFit:"cover"}),(0,x.jsx)(u,{song:i})]}),(0,x.jsx)(y,{children:(0,x.jsx)("span",{children:i.title})})]}),(0,x.jsx)(j,{children:(0,x.jsx)("span",{children:i.artist})}),(0,x.jsx)(j,{children:(0,x.jsx)("span",{children:i.album})})]})},i.id))),i.placeholder]})})})})}const C=d.memo(k);function S(){const i=(0,l.t)((i=>i.newJeansListSlice.newjeansList)),e=(0,r.wA)(),n=(0,d.useCallback)((i=>{e((0,a.K)(i))}),[e]);return(0,x.jsx)(C,{droppableId:"newJeansSongs",items:i,onReorder:n})}const P=d.memo(S);var z=n(657);function I(){const i=(0,l.t)((i=>i.lolChampionsListSlice.lolChampionsList)),e=(0,r.wA)(),n=(0,d.useCallback)((i=>{e((0,z.Y)(i))}),[e]);return(0,x.jsx)(C,{droppableId:"favoriteSongs",items:i,onReorder:n})}const D=d.memo(I),N=n.p+"static/media/newjeansmv.24720a0f18d32a9f9ec1.mp4",R=n.p+"static/media/musicvideo.b685b12c8ba7f862c4d0.mp4";var $=n(6344);const _=s.Ay.section`
  width: 100%;
  padding-top: 3vw;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  margin-top: -6rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`,L=s.Ay.div`
  width: 100%;
`,W=(0,s.Ay)(t.fI)`
  position: sticky;
  top: 0;
`,J=s.Ay.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 5vw 5vw 0 0;
  overflow: hidden;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`,U=s.Ay.div`
  position: relative;
`,V=(0,s.Ay)(v.A)`
  width: 100%;
`,F=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${i=>i.inView?1:0};
  transition: opacity 0.3s 1s ease-in-out;
  position: absolute;
  left: 0;
  top: -0.2rem;
`,H=s.Ay.video`
  width: 100vw;
`,M=s.Ay.div`
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
`,E=(0,s.Ay)(M)`
  background: linear-gradient(
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  div {
    bottom: 10%;
  }
`;const K=function(){const{ref:i,inView:e}=(0,o.Wx)(),{ref:n,inView:s}=(0,o.Wx)();return(0,x.jsx)(_,{id:"music",children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(W,{children:[(0,x.jsx)(t.ku,{children:"Music List"}),(0,x.jsxs)(t.y_,{children:[(0,x.jsx)("br",{}),"\uc0ac\uc774\ud2b8\ub97c \ubcf4\uc2dc\uba74\uc11c \uc74c\uc545\uc744 \uac10\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\uc81c \ucde8\ud5a5 \ud31d\uc1a1\uacfc \ub274\uc9c4\uc2a4 \ub178\ub798\ub4e4\uc785\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\ubba4\uc9c1 \ub9ac\uc2a4\ud2b8\ub294 \uc704\uc5d0\uc11c \ubd80\ud130 \ucc28\ub840\ub300\ub85c \uc7ac\uc0dd\ub429\ub2c8\ub2e4.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\uc7ac\uc0dd \uc21c\uc11c\ub97c \ubc14\uafb8\uc2e4\uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,x.jsxs)(J,{children:[(0,x.jsxs)(U,{ref:i,children:[(0,x.jsx)(V,{sources:$.n.MUSIC.BACKGROUND.NEWJEANS,alt:"famous artist",fullWidth:!0,fullHeight:!0,objectFit:"cover"}),(0,x.jsx)(F,{inView:e,children:(0,x.jsx)(H,{controls:!1,autoPlay:!0,loop:!0,muted:!0,children:(0,x.jsx)("source",{src:N,type:"video/mp4"})})}),(0,x.jsx)(M,{children:(0,x.jsx)("div",{children:(0,x.jsx)("h2",{children:"NewJeans"})})})]}),(0,x.jsx)(P,{}),(0,x.jsxs)(U,{ref:n,children:[(0,x.jsx)(V,{sources:$.n.MUSIC.BACKGROUND.MUSIC,alt:"newjeans",fullWidth:!0,fullHeight:!0,objectFit:"cover"}),(0,x.jsx)(F,{inView:s,children:(0,x.jsx)(H,{controls:!1,autoPlay:!0,loop:!0,muted:!0,children:(0,x.jsx)("source",{src:R,type:"video/mp4"})})}),(0,x.jsx)(E,{children:(0,x.jsx)("div",{children:(0,x.jsx)("h2",{children:"FavoriteSong"})})})]}),(0,x.jsx)(D,{})]})]})})}}}]);
//# sourceMappingURL=778.48cbbe63.chunk.js.map