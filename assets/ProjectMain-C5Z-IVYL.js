import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{l as t,o as n,u as r}from"./images-DpySvLh1.js";import{l as i,t as a}from"./react-CprOFjTI.js";import{t as o}from"./ImageWithSkeleton-F1af-2W9.js";import{t as s}from"./jsx-runtime-lTuChwRC.js";import{t as c}from"./react-CaKr0epQ.js";import{a as l}from"./index-C_sDVt_1.js";var u=s(),ee=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 2.7vw;
  background-color: #efefef;
`,te=r.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`,d=r.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`,f=r.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`,p=r.div`
  width: 20vw;
  margin-top: 1.5vw;
  margin-bottom: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`,m=r.div`
  position: relative;
`,h=r(o)`
  width: 1.7vw;
  border-radius: 20px;
  aspect-ratio: 1 / 1;
  @media (max-width: 640px) {
    & {
      width: 4.7vw;
    }
  }
`,g=r.div`
  font-size: 1.2vw;
  font-weight: 900;
  @media (max-width: 640px) {
    & {
      font-size: 3vw;
    }
  }
`,_=r.span`
  position: absolute;
`,v=r.div`
  display: flex;
  flex-direction: column;
  gap: max(10px, 3vw);
`,y=t`
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 7px;
  }
`,b=r(a.div)`
  padding: 4vw;
  background-color: #222;
  ${y}
  overflow: hidden;
`,x=r.div`
  object-fit: cover;
  overflow: hidden;
  ${y}
`,S=r(o)`
  width: 100%;
`;function C({projectData:e}){return(0,u.jsxs)(ee,{children:[(0,u.jsxs)(te,{children:[(0,u.jsx)(d,{children:(0,u.jsx)(`h2`,{children:e.date})}),(0,u.jsx)(f,{children:(0,u.jsx)(`h1`,{children:e.name})}),(0,u.jsxs)(p,{children:[(0,u.jsx)(m,{children:(0,u.jsx)(h,{sources:e.logo,alt:`maker_logo`,fullWidth:!0,fullHeight:!0,objectFit:`cover`})}),(0,u.jsxs)(g,{children:[(0,u.jsx)(`p`,{children:e.by}),(0,u.jsx)(_,{})]})]})]}),(0,u.jsx)(v,{children:e.imgs.map((e,t)=>e?(0,u.jsx)(b,{layout:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:t*.1,ease:`easeOut`},children:(0,u.jsx)(x,{children:(0,u.jsx)(S,{sources:e,alt:`preview`,fullWidth:!0,objectFit:`cover`,placeholderAspectRatio:`16 / 9`})})},t):null)})]})}var w=e(c()),T=r.div`
  display: flex;
  flex-direction: column;
`,E=r.div`
  display: flex;
  gap: 4vw;
  ${n}
  @media (max-width: 480px) {
    & {
      font-size: 1vw;
    }
  }
`,D=r.div`
  padding: 20px 0;
`,O=r.div``,k=r.div`
  display: flex;
  gap: 2vw;
`,A=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`,j=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-bottom: 2vw;
  ${n}
`,M=r.div`
  font-weight: 100;
  font-size: 13px;

  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`,N=r.div`
  padding-bottom: 2vw;
  ${n}
`,P=t`
  border-bottom: 2px solid black;
  color: black;
  font-family: "Apercu", sans-serif;
  font-weight: 900;
`,F=t`
  font-family: ${e=>e.toggle===0?e.fontsData[0]:e.toggle===1?e.fontsData[1]:e.toggle===2?e.fontsData[2]:e.toggle===3?e.fontsData[3]:``},
    sans-serif;
`,I=r.div`
  padding: 20px 0;
  cursor: pointer;
  color: #a7a7a7;
  font-weight: 100;
  &:nth-child(1) {
    ${e=>e.toggle===0?P:``}
  }
  &:nth-child(2) {
    ${e=>e.toggle===1?P:``}
  }
  &:nth-child(3) {
    ${e=>e.toggle===2?P:``}
  }
  &:nth-child(4) {
    ${e=>e.toggle===3?P:``}
  }
`,L=r.div`
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
  ${n}
  ${F}
`,R=r.div`
  font-size: 15vw;
  text-align: center;
  ${F}
`,z=r.div`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  span {
    line-height: 1.4;
  }
  ${F}
`;function B({fonts:e}){let[t,n]=(0,w.useState)(0),r=e=>{n(()=>e)},i=e[t];return(0,u.jsx)(u.Fragment,{children:e&&(0,u.jsxs)(T,{children:[(0,u.jsxs)(E,{children:[(0,u.jsx)(D,{children:(0,u.jsx)(`span`,{children:`Typography`})}),(0,u.jsx)(O,{children:(0,u.jsx)(k,{children:e.map((e,n)=>(0,u.jsx)(I,{num:n,toggle:t,onClick:()=>r(n),children:(0,u.jsx)(`span`,{children:e})},n))})})]}),(0,u.jsx)(L,{toggle:t,fontsData:e,children:(0,u.jsx)(`span`,{children:i})}),(0,u.jsxs)(A,{children:[(0,u.jsxs)(j,{children:[(0,u.jsx)(M,{children:(0,u.jsx)(`h3`,{children:`FONT DETAIL`})}),(0,u.jsx)(R,{toggle:t,fontsData:e,children:(0,u.jsx)(`span`,{children:`AaBb`})})]}),(0,u.jsxs)(N,{children:[(0,u.jsx)(M,{children:(0,u.jsx)(`h3`,{children:`LETTERS + NUMBERS`})}),(0,u.jsxs)(z,{toggle:t,fontsData:e,children:[(0,u.jsx)(`span`,{children:`Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz`}),(0,u.jsx)(`span`,{children:`0 1 2 3 4 5 6 7 8 9`})]})]})]})]})})}var V=r.div``,H=r.div`
  display: flex;
  flex-direction: column;
  ${n}
`,U=r.div`
  width: 15%;
  font-weight: lighter;
  line-height: 1.4;
  font-size: 1vw;
  span {
    font-weight: 900;
  }
  @media (max-width: 480px) {
    & {
      width: 30%;
    }
  }
`,W=r.div`
  display: flex;
  padding: 3vw 0;
  justify-content: center;
  align-items: center;
`,G=r.div`
  position: relative;
  height: 35vw;
  @media (max-width: 480px) {
    & {
      height: 55vw;
    }
  }
`,K=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4vw 1.7vw 1vw 1.7vw;
  width: 22vw;
  height: 32vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  color: #fff;
  @media (max-width: 1024px) {
    & {
      border-radius: 12px;
    }
  }
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      width: 35vw;
      height: 50vw;
      border-radius: 7px;
    }
  }
`,q=r.div`
  font-size: 1vw;
  transition: opacity 0.3s ease-in 0.2s;
  opacity: ${e=>+!!e.isHover};
  span {
    font-weight: 900;
  }
`,J=r.div`
  text-align: end;
  font-size: 8vw;
`,Y=r(K)`
  &:first-child {
    background-color: ${e=>e.colorData};
    border-radius: 15px 0px 0px 15px;
    color: #fff;
    transform: ${e=>e.colorDataLength===2?e.isHover?`translateX(-98%)`:`translateX(-62%)`:``};
    transition: transform 0.2s ease-in-out 0s;
    @media (max-width: 1024px) {
      & {
        border-radius: 12px 0px 0px 12px;
      }
    }
    @media (max-width: 768px) {
      & {
        border-radius: 10px 0px 0px 10px;
      }
    }
    @media (max-width: 480px) {
      & {
        border-radius: 7px 0px 0px 7px;
      }
    }
  }
  &:last-child {
    background-color: ${e=>e.colorData};
    border-radius: 15px;
    color: #fff;
    transform: ${e=>e.colorDataLength===2?e.isHover?`translateX(-2%)`:`translateX(-38%)`:``};
    transition: transform 0.2s ease-in-out 0s;
    @media (max-width: 1024px) {
      & {
        border-radius: 12px;
      }
    }
    @media (max-width: 768px) {
      & {
        border-radius: 10px;
      }
    }
    @media (max-width: 480px) {
      & {
        border-radius: 7px;
      }
    }
  }
`;function X({colors:e}){let[t,n]=(0,w.useState)(!1);return(0,u.jsx)(V,{children:(0,u.jsxs)(H,{children:[(0,u.jsx)(U,{children:(0,u.jsxs)(`h3`,{children:[`This website uses a color palette of `,(0,u.jsx)(`span`,{children:e.length}),`colors`]})}),(0,u.jsx)(W,{children:(0,u.jsx)(G,{children:e.map((r,i)=>(0,u.jsxs)(Y,{onMouseOver:()=>n(!0),onMouseOut:()=>n(!1),isHover:t,colorData:r,colorDataLength:e.length,children:[(0,u.jsx)(q,{isHover:t,children:(0,u.jsxs)(`span`,{children:[(0,u.jsx)(`span`,{children:`HEX`}),`\xA0`,r]})}),(0,u.jsx)(J,{children:`Aa`})]},i))})})]})})}var Z=r.div`
  width: 100%;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20rem;
`,ne=r.div`
  padding: 3vw 2.7vw;
`,re=r.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`,ie=r.div`
  font-weight: 100;
  font-size: 1vw;
`,ae=r.div`
  font-size: 3vw;
  font-weight: 900;
  line-height: 1.2;
`,oe=r.div`
  margin: 4vw 0;
`,$=r.div``,se=r.div`
  font-size: 2vw;
  font-weight: 900;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`,ce=r.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  &:first-child {
  }
  div {
    width: 50%;
  }
  @media (max-width: 480px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
      div {
        width: 100%;
      }
    }
  }
`;function le(){let{state:e}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Z,{id:`sotd`,children:(0,u.jsxs)(Q,{children:[(0,u.jsx)(C,{projectData:e}),(0,u.jsxs)(ne,{id:`fontColor`,children:[(0,u.jsxs)(re,{children:[(0,u.jsx)(ie,{children:(0,u.jsx)(`h2`,{children:`Description`})}),(0,u.jsx)(ae,{children:(0,u.jsx)(`h3`,{children:`fonts, colors`})})]}),(0,u.jsxs)(oe,{children:[(0,u.jsx)(B,{fonts:e.fonts}),(0,u.jsx)(X,{colors:e.colors})]}),(0,u.jsxs)($,{id:`routerAbout`,children:[(0,u.jsx)(se,{children:(0,u.jsxs)(`h3`,{children:[`About "`,e.name,`"`]})}),(0,u.jsxs)(ce,{children:[(0,u.jsx)(`div`,{children:(0,u.jsx)(`span`,{children:e.ko})}),(0,u.jsx)(`div`,{children:(0,u.jsx)(`span`,{children:e.en})})]})]})]})]})}),(0,u.jsx)(l,{})]})}export{le as default};