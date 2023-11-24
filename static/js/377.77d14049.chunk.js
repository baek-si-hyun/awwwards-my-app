"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[377],{1377:function(n,i,e){e.r(i),e.d(i,{default:function(){return sn}});var r,d,a=e(168),o=e(6444),t=e(1413),s=e(3433),l=e(3418),c=e(2791),p=e(9439),x=e(5048),h=e(5),u=e(6749),g=e(5397),f=e(184),b=o.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  opacity: ",";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  transition: opacity 0.2s ease-in-out;\n  will-change: opacity;\n"])),(function(n){return!0===n.isPlaying?.9:0})),m=o.ZP.button(d||(d=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n  will-change: opacity;\n  background: none;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  span {\n    color: #fff;\n    font-size: clamp(30px, 2vw, 60px);\n  }\n"])),(function(n){return!0===n.isPlaying?1:0}));var j,v,Z,w,y,P,k,z,I=function(n){var i=n.videoUrl,e=(0,c.useState)(!1),r=(0,p.Z)(e,2),d=r[0],a=r[1],o=(0,x.I0)(),s=(0,g.s)((function(n){return n.playingVideoInfoSlice.videoInfo}));return(0,c.useEffect)((function(){s.videoUrl===i&&a(s.playing),s.videoUrl!==i&&a(!1)}),[s,i]),(0,f.jsx)(b,{isPlaying:d,children:(0,f.jsx)(m,{onClick:function(){return function(){var n=!d;a(n),o((0,h.P)((0,t.Z)((0,t.Z)({},s),{},{playing:n,videoUrl:i}))),o((0,u.S)(!0))}()},isPlaying:d,children:d?(0,f.jsx)("span",{className:"material-symbols-rounded",children:"pause"}):(0,f.jsx)("span",{className:"material-symbols-rounded",children:"play_arrow"})})})},D=e(3469),_=o.ZP.div(j||(j=(0,a.Z)(["\n  width: 100%;\n  padding: 8vw 0 15vw 0;\n  background-color: #000;\n  color: #fff;\n  z-index: 3;\n"]))),L=o.ZP.div(v||(v=(0,a.Z)(["\n  padding: 0px 40px;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media (max-width: 480px) {\n    & {\n      padding: 0px 20px;\n    }\n  }\n"]))),U=o.ZP.div(Z||(Z=(0,a.Z)(["\n  padding: 10px 2vw;\n  background-color: ",";\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  font-size: 1vw;\n  border-bottom: 1px solid #1d1d1d;\n  border-radius: ",";\n  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;\n  will-change: background-color, border-radius;\n  :last-child {\n    border-bottom: none;\n  }\n  :hover {\n    background-color: #1d1d1d;\n    "," {\n      opacity: 0.9;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n  @media (max-width: 429px) {\n    & {\n      font-size: 0.6rem;\n    }\n  }\n"])),(function(n){return n.isDragging?"#1d1d1d":"transparent"}),(function(n){return n.isDragging?"10px":"none"}),b,m),C=o.ZP.div(w||(w=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 7%;\n  :nth-child(2) {\n    padding-left: 20%;\n  }\n  :nth-child(3) {\n    padding-left: 20%;\n  }\n  @media (max-width: 768px) {\n    & {\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      :last-child {\n        display: none;\n      }\n    }\n  }\n"]))),S=o.ZP.div(y||(y=(0,a.Z)(["\n  position: relative;\n"]))),E=o.ZP.div(P||(P=(0,a.Z)([""]))),R=(0,o.ZP)(_)(k||(k=(0,a.Z)(["\n  @media (max-width: 1050px) {\n    & {\n      padding-bottom: 12rem;\n    }\n  }\n"]))),K=o.ZP.img(z||(z=(0,a.Z)(["\n  width: clamp(40px, 2.5vw, 80px);\n"])));function O(){var n=(0,g.s)((function(n){return n.featuredListSlice.featuredList})),i=(0,x.I0)();return(0,f.jsx)(l.Z5,{onDragEnd:function(e){var r=e.destination,d=e.source;if(r&&r){var a=(0,s.Z)(n),o=a[d.index];a.splice(d.index,1),a.splice(null===r||void 0===r?void 0:r.index,0,o),i((0,D.i)(a))}},children:(0,f.jsx)(R,{children:(0,f.jsx)(l.bK,{droppableId:"one",children:function(i){return(0,f.jsxs)(L,(0,t.Z)((0,t.Z)({ref:i.innerRef},i.droppableProps),{},{children:[n.map((function(n,i){return(0,f.jsx)(l._l,{draggableId:n.title,index:i,children:function(i,e){return(0,f.jsxs)(U,(0,t.Z)((0,t.Z)((0,t.Z)({isDragging:e.isDragging,ref:i.innerRef},i.dragHandleProps),i.draggableProps),{},{children:[(0,f.jsxs)(C,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)(K,{src:n.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,f.jsx)(I,{videoUrl:n.url})]}),(0,f.jsx)(E,{children:(0,f.jsx)("span",{children:n.title})})]}),(0,f.jsx)(C,{children:(0,f.jsx)("span",{children:n.artist})}),(0,f.jsx)(C,{children:(0,f.jsx)("span",{children:n.album})})]}))}},n.title)})),i.placeholder]}))}})})})}var G,H=c.memo(O),N=e(657),Q=e(1492),X=o.ZP.img(G||(G=(0,a.Z)(["\n  width: clamp(40px, 4vw, 128px);\n"])));function A(){var n=(0,g.s)((function(n){return n.lolChampionsListSlice.lolChampionsList})),i=(0,x.I0)();return(0,f.jsx)(l.Z5,{onDragEnd:function(e){var r=e.destination,d=e.source;if(r&&r){var a=(0,s.Z)(n),o=a[d.index];a.splice(d.index,1),a.splice(null===r||void 0===r?void 0:r.index,0,o),i((0,Q.L)(a))}},children:(0,f.jsx)(_,{children:(0,f.jsx)(l.bK,{droppableId:"one",children:function(i){return(0,f.jsxs)(L,(0,t.Z)((0,t.Z)({ref:i.innerRef},i.droppableProps),{},{children:[n.map((function(n,i){return(0,f.jsx)(l._l,{draggableId:n.title,index:i,children:function(i,e){return(0,f.jsxs)(U,(0,t.Z)((0,t.Z)((0,t.Z)({isDragging:e.isDragging,ref:i.innerRef},i.dragHandleProps),i.draggableProps),{},{children:[(0,f.jsxs)(C,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)(X,{src:n.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,f.jsx)(I,{videoUrl:n.url})]}),(0,f.jsx)(E,{children:(0,f.jsx)("span",{children:n.title})})]}),(0,f.jsx)(C,{children:(0,f.jsx)("span",{children:n.artist})}),(0,f.jsx)(C,{children:(0,f.jsx)("span",{children:n.album})})]}))}},n.title)})),i.placeholder]}))}})})})}var B,F,M,T,V,W,q,J,Y=c.memo(A),$=o.ZP.section(B||(B=(0,a.Z)(["\n  width: 100%;\n  padding-top: 3vw;\n  background-color: #fff;\n  border-radius: 5vw 5vw 0 0;\n  margin-top: -6rem;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);\n"]))),nn=o.ZP.div(F||(F=(0,a.Z)(["\n  width: 100%;\n"]))),en=(0,o.ZP)(N.zC)(M||(M=(0,a.Z)(["\n  position: sticky;\n  top: 0;\n"]))),rn=o.ZP.div(T||(T=(0,a.Z)(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5vw 5vw 0 0;\n  overflow: hidden;\n  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);\n"]))),dn=o.ZP.div(V||(V=(0,a.Z)(["\n  position: relative;\n"]))),an=o.ZP.img(W||(W=(0,a.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),on=o.ZP.div(q||(q=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #fff;\n  div {\n    position: absolute;\n    left: 5%;\n    bottom: 0;\n  }\n  h2 {\n    font-weight: bold;\n    font-size: 2.5vw;\n    margin-bottom: 1vw;\n  }\n  p {\n    font-size: 1.2vw;\n  }\n  @media (max-width: 650px) {\n    & {\n      p {\n        font-size: 2vw;\n      }\n    }\n  }\n"]))),tn=(0,o.ZP)(on)(J||(J=(0,a.Z)(["\n  background: linear-gradient(\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 0.5) 50%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  div {\n    bottom: 10%;\n  }\n"])));var sn=function(){return(0,f.jsx)($,{id:"music",children:(0,f.jsxs)(nn,{children:[(0,f.jsxs)(en,{children:[(0,f.jsx)(N.rB,{children:"Music List"}),(0,f.jsxs)(N.vD,{children:[(0,f.jsx)("br",{}),"\uc0ac\uc774\ud2b8\ub97c \ubcf4\uc2dc\uba74\uc11c \uc74c\uc545\uc744 \uac10\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),'\ucd5c\uadfc\uc5d0 \uc81c\uc77c \ud56b\ud55c "\ub274\uc9c4\uc2a4"\uc640 \uc81c \ucde8\ud5a5\uc758 \ub178\ub798\ub4e4\uc785\ub2c8\ub2e4.',(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"\ubba4\uc9c1 \ub9ac\uc2a4\ud2b8\ub294 \uc704\uc5d0\uc11c \ubd80\ud130 \ucc28\ub840\ub300\ub85c \uc7ac\uc0dd\ub429\ub2c8\ub2e4.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"\uc7ac\uc0dd \uc21c\uc11c\ub97c \ubc14\uafb8\uc2e4\uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,f.jsxs)(rn,{children:[(0,f.jsxs)(dn,{children:[(0,f.jsx)(an,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5b351a9-0651-45a5-1941-6a03f1756100/public",alt:"newjeans",loading:"lazy",decoding:"async"}),(0,f.jsx)(on,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"T1"}),(0,f.jsx)("p",{children:"FAKER 7\ub144\uc758 \uce68\ubb35 \ub05d, \uc138\uacc4 \ucd5c\ucd08 LOL World Championship 4\ubc88\uc9f8 \uc6b0\uc2b9"})]})})]}),(0,f.jsx)(Y,{}),(0,f.jsxs)(dn,{children:[(0,f.jsx)(an,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/cf6bc677-4cb6-4df4-1209-b5366f14c300/public",alt:"famous artist",loading:"lazy",decoding:"async",style:{height:"45rem"}}),(0,f.jsx)(tn,{children:(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"\ub108\ubb34 \ubbf8\ub9ac \uba54\ub9ac \ud06c\ub9ac\uc2a4\ub9c8\uc2a4"})})})]}),(0,f.jsx)(H,{})]})]})})}}}]);
//# sourceMappingURL=377.77d14049.chunk.js.map