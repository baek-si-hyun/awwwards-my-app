"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[377],{1377:(i,e,t)=>{t.r(e),t.d(e,{default:()=>ai});var d=t(4574),n=t(2997),s=t(579);const r=d.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 2.7vw;
  background-color: #efefef;
`,a=d.Ay.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`,o=d.Ay.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`,l=d.Ay.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`,x=d.Ay.div`
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
`,c=d.Ay.div`
  position: relative;
`,h=(0,d.Ay)(n.A)`
  width: 1.7vw;
  border-radius: 20px;
  aspect-ratio: 1 / 1;
  @media (max-width: 640px) {
    & {
      width: 4.7vw;
    }
  }
`,p=d.Ay.div`
  font-size: 1.2vw;
  font-weight: 900;
  @media (max-width: 640px) {
    & {
      font-size: 3vw;
    }
  }
`,f=d.Ay.span`
  position: absolute;
`,v=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: max(10px, 3vw);
`,w=d.AH`
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 7px;
  }
`,g=d.Ay.div`
  padding: 4vw;
  background-color: ${i=>"CRYPTO TRACKER"===i.cardBgColorData?"#3e3e3e":"#222"};
  ${w}
`,m=d.Ay.div`
  object-fit: cover;
  overflow: hidden;
  ${w}
`,j=(0,d.Ay)(n.A)`
  width: 100%;
`;const y=function(i){let{projectData:e}=i;return(0,s.jsxs)(r,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)(o,{children:(0,s.jsx)("h2",{children:e.date})}),(0,s.jsx)(l,{children:(0,s.jsx)("h1",{children:e.name})}),(0,s.jsxs)(x,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(h,{sources:e.logo,alt:"maker_logo",fullWidth:!0,fullHeight:!0,objectFit:"cover"})}),(0,s.jsxs)(p,{children:[(0,s.jsx)("p",{children:e.by}),(0,s.jsx)(f,{})]})]})]}),(0,s.jsx)(v,{children:e.imgs.map(((i,t)=>i?(0,s.jsx)(g,{cardBgColorData:e.name,children:(0,s.jsx)(m,{children:(0,s.jsx)(j,{sources:i,alt:"preview",fullWidth:!0,objectFit:"cover",placeholderAspectRatio:"16 / 9"})})},t):null))})]})};var u=t(5043),A=t(2087);const b=d.Ay.div`
  display: flex;
  flex-direction: column;
`,$=d.Ay.div`
  display: flex;
  gap: 4vw;
  ${A.fe}
  @media (max-width: 480px) {
    & {
      font-size: 1vw;
    }
  }
`,z=d.Ay.div`
  padding: 20px 0;
`,D=d.Ay.div``,k=d.Ay.div`
  display: flex;
  gap: 2vw;
`,H=d.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`,C=d.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-bottom: 2vw;
  ${A.fe}
`,T=d.Ay.div`
  font-weight: 100;
  font-size: 13px;

  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`,E=d.Ay.div`
  padding-bottom: 2vw;
  ${A.fe}
`,R=d.AH`
  border-bottom: 2px solid black;
  color: black;
  font-family: "Apercu", sans-serif;
  font-weight: 900;
`,X=d.AH`
  font-family: ${i=>0===i.toggle?i.fontsData[0]:1===i.toggle?i.fontsData[1]:2===i.toggle?i.fontsData[2]:3===i.toggle?i.fontsData[3]:""},
    sans-serif;
`,F=d.Ay.div`
  padding: 20px 0;
  cursor: pointer;
  color: #a7a7a7;
  font-weight: 100;
  :nth-child(1) {
    ${i=>0===i.toggle?R:""}
  }
  :nth-child(2) {
    ${i=>1===i.toggle?R:""}
  }
  :nth-child(3) {
    ${i=>2===i.toggle?R:""}
  }
  :nth-child(4) {
    ${i=>3===i.toggle?R:""}
  }
`,L=d.Ay.div`
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
  ${A.fe}
  ${X}
`,B=d.Ay.div`
  font-size: 15vw;
  text-align: center;
  ${X}
`,O=d.Ay.div`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  span {
    line-height: 1.4;
  }
  ${X}
`;const S=function(i){let{fonts:e}=i;const[t,d]=(0,u.useState)(0),n=e[t];return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsxs)(b,{children:[(0,s.jsxs)($,{children:[(0,s.jsx)(z,{children:(0,s.jsx)("span",{children:"Typography"})}),(0,s.jsx)(D,{children:(0,s.jsx)(k,{children:e.map(((i,e)=>(0,s.jsx)(F,{num:e,toggle:t,onClick:()=>(i=>{d((()=>i))})(e),children:(0,s.jsx)("span",{children:i})},e)))})})]}),(0,s.jsx)(L,{toggle:t,fontsData:e,children:(0,s.jsx)("span",{children:n})}),(0,s.jsxs)(H,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)(T,{children:(0,s.jsx)("h3",{children:"FONT DETAIL"})}),(0,s.jsx)(B,{toggle:t,fontsData:e,children:(0,s.jsx)("span",{children:"AaBb"})})]}),(0,s.jsxs)(E,{children:[(0,s.jsx)(T,{children:(0,s.jsx)("h3",{children:"LETTERS + NUMBERS"})}),(0,s.jsxs)(O,{toggle:t,fontsData:e,children:[(0,s.jsx)("span",{children:"Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz"}),(0,s.jsx)("span",{children:"0 1 2 3 4 5 6 7 8 9"})]})]})]})]})})},_=d.Ay.div``,M=d.Ay.div`
  display: flex;
  flex-direction: column;
  ${A.fe}
`,N=d.Ay.div`
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
`,P=d.Ay.div`
  display: flex;
  padding: 3vw 0;
  justify-content: center;
  align-items: center;
`,W=d.Ay.div`
  position: relative;
  height: 35vw;
  @media (max-width: 480px) {
    & {
      height: 55vw;
    }
  }
`,I=d.Ay.div`
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
`,K=d.Ay.div`
  font-size: 1vw;
  transition: opacity 0.3s ease-in 0.2s;
  opacity: ${i=>i.isHover?1:0};
  span {
    font-weight: 900;
  }
`,U=d.Ay.div`
  text-align: end;
  font-size: 8vw;
`,Y=(0,d.Ay)(I)`
  :first-child {
    background-color: ${i=>i.colorData};
    border-radius: 15px 0px 0px 15px;
    color: #fff;
    transform: ${i=>2===i.colorDataLength?i.isHover?"translateX(-98%)":"translateX(-62%)":""};
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
  :last-child {
    background-color: ${i=>i.colorData};
    border-radius: 15px;
    color: #fff;
    transform: ${i=>2===i.colorDataLength?i.isHover?"translateX(-2%)":"translateX(-38%)":""};
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
`;const q=function(i){let{colors:e}=i;const[t,d]=(0,u.useState)(!1);return(0,s.jsx)(_,{children:(0,s.jsxs)(M,{children:[(0,s.jsx)(N,{children:(0,s.jsxs)("h3",{children:["This website uses a color palette of ",(0,s.jsx)("span",{children:e.length}),"colors"]})}),(0,s.jsx)(P,{children:(0,s.jsx)(W,{children:e.map(((i,n)=>(0,s.jsxs)(Y,{onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),isHover:t,colorData:i,colorDataLength:e.length,children:[(0,s.jsx)(K,{isHover:t,children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"HEX"}),"\xa0",i]})}),(0,s.jsx)(U,{children:"Aa"})]},n)))})})]})})};var G=t(3216),J=t(4237);const Q=d.Ay.div`
  width: 100%;
`,V=d.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20rem;
`,Z=d.Ay.div`
  padding: 3vw 2.7vw;
`,ii=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`,ei=d.Ay.div`
  font-weight: 100;
  font-size: 1vw;
`,ti=d.Ay.div`
  font-size: 3vw;
  font-weight: 900;
  line-height: 1.2;
`,di=d.Ay.div`
  margin: 4vw 0;
`,ni=d.Ay.div``,si=d.Ay.div`
  font-size: 2vw;
  font-weight: 900;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`,ri=d.Ay.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  :first-child {
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
`;const ai=function(){const{state:i}=(0,G.zy)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Q,{id:"sotd",children:(0,s.jsxs)(V,{children:[(0,s.jsx)(y,{projectData:i}),(0,s.jsxs)(Z,{id:"fontColor",children:[(0,s.jsxs)(ii,{children:[(0,s.jsx)(ei,{children:(0,s.jsx)("h2",{children:"Description"})}),(0,s.jsx)(ti,{children:(0,s.jsx)("h3",{children:"fonts, colors"})})]}),(0,s.jsxs)(di,{children:[(0,s.jsx)(S,{fonts:i.fonts}),(0,s.jsx)(q,{colors:i.colors})]}),(0,s.jsxs)(ni,{id:"routerAbout",children:[(0,s.jsx)(si,{children:(0,s.jsxs)("h3",{children:['About "',i.name,'"']})}),(0,s.jsxs)(ri,{children:[(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:i.ko})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:i.en})})]})]})]})]})}),(0,s.jsx)(J.A,{})]})}}}]);
//# sourceMappingURL=377.2140c43c.chunk.js.map