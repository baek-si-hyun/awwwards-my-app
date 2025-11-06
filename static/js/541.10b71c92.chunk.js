"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[541],{7541:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var i=r(4574),s=r(2087),o=r(5475),n=r(8179),a=r(2997),l=r(5043),c=r(2783),d=r(579);const p={html5:c.DA7,css3:c.$Fp,javascript:c.wAf,django:c.EO7,mysql:c.FUg,amazonec2:c.jvB,amazonroute53:c.iL_,tailwindcss:c.AN7,typescript:c.k8A,react:c.usQ,reactquery:c.UDp,redux:c.H10,prisma:c.fJ3,planetscale:c.vKd,nodedotjs:c.jCk,nextdotjs:c.iaw,cloudflare:c.abC,styledcomponents:c.Yai,recoil:c.Toy,cssmodules:c.ThM,jquery:c.bMh,spring:c.ATT,oracle:c.x$m},h=i.Ay.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${35}px;
  height: ${35}px;
  color: #fff;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
`,m=i.Ay.span`
  display: inline-flex;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }

  svg path {
    fill: currentColor;
  }
`,x=(0,i.Ay)(h)`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;const j=function(e){let{tool:t}=e;const r=(0,l.useMemo)((()=>{const e=t.trim().toLowerCase();return p[e]||null}),[t]);return r?(0,d.jsx)(h,{"aria-label":r.title,title:r.title,children:(0,d.jsx)(m,{dangerouslySetInnerHTML:{__html:r.svg}})}):(0,d.jsx)(x,{children:t})},g=i.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,u=i.Ay.div`
  ${g};
  gap: 1.2vw;
`,f=(0,i.Ay)(o.N_)`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
`,y=i.Ay.span`
  font-size: 1.5vw;
`,b=i.Ay.div`
  display: flex;
  justify-content: center;
`,w=(0,i.Ay)(a.A)`
  aspect-ratio: 4/3;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`,v=i.Ay.div`
  ${g};
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;
  color: #fff;
  opacity: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
  will-change: opacity, background;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    & {
      opacity: 1;
    }
  }
`,_=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 2vh;
  justify-content: center;
`,A=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2rem 0;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    & {
      font-size: 2vw;
    }
  }
  @media (max-width: 650px) {
    & {
      font-size: 3.5vw;
    }
  }
`,k=i.Ay.div`
  display: flex;
  align-items: center;
  small {
    font-weight: 100;
  }
`,$=i.Ay.span`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    border-bottom: 2px solid #b7b7b7;
  }
`,z=(0,i.Ay)(a.A)`
  margin: 0 0.3rem;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;const C=function(){return(0,d.jsx)(d.Fragment,{children:n.OJ&&n.OJ.map(((e,t)=>(0,d.jsxs)(u,{children:[(0,d.jsxs)(f,{to:`/${e.projects_code}`,state:{date:e.projects_date,name:e.projects_name,logo:e.projects_logo,by:e.projects_by,imgs:e.projects_prev_img,fonts:e.projects_fonts,colors:e.projects_colors,ko:e.projects_ko,en:e.projects_en},children:[(0,d.jsx)(b,{children:(0,d.jsx)(w,{sources:e.projects_thumbnail,alt:"thumbnail",fullWidth:!0,fullHeight:!0,objectFit:"cover"})}),(0,d.jsxs)(v,{children:[(0,d.jsx)(y,{children:e.projects_name}),(0,d.jsx)("span",{children:e.projects_date}),(0,d.jsx)(_,{children:e.projects_tools.map(((e,t)=>(0,d.jsx)(j,{tool:e},`${e}-${t}`)))})]})]}),(0,d.jsx)(A,{children:(0,d.jsxs)(k,{children:[(0,d.jsx)("div",{children:(0,d.jsx)("small",{children:"by"})}),(0,d.jsxs)($,{children:[(0,d.jsx)(z,{sources:e.projects_logo,alt:"maker_logo",fullWidth:!0,fullHeight:!0,objectFit:"cover"}),(0,d.jsx)("span",{children:e.projects_by})]})]})})]},t)))})},F=i.Ay.section`
  width: 100%;
  background-color: #fff;
  padding: 1vw 0 13vw 0;
  border-radius: 5vw;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
  margin-top: -1rem;
`,H=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;const T=function(){return(0,d.jsx)(F,{id:"projects",children:(0,d.jsxs)(s.Rp,{children:[(0,d.jsxs)(s.fI,{children:[(0,d.jsx)(s.ku,{children:(0,d.jsx)("h3",{children:"projects"})}),(0,d.jsx)(s.y_,{children:"\uc9c0\uae08\uae4c\uc9c0 \uacf5\ubd80\ud558\uba70 \ub9cc\ub4e0 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc785\ub2c8\ub2e4."})]}),(0,d.jsx)(H,{children:(0,d.jsx)(C,{})})]})})}}}]);
//# sourceMappingURL=541.10b71c92.chunk.js.map