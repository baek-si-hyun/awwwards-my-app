import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{o as t,u as n}from"./images-DpySvLh1.js";import{t as r}from"./react-CaKr0epQ.js";import{t as i}from"./listData-DH6_gE1_.js";import{t as a}from"./jsx-runtime-lTuChwRC.js";var o=e(r()),s=a(),c=n.ul`
  ${t}
`,l=n.li`
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  ${t}
  @media (max-width: 1024px) {
    & {
      font-size: 1.5vw;
    }
  }
  @media (max-width: 1024px) {
    & {
      font-size: 2vw;
    }
  }
  @media (max-width: 480px) {
    & {
      font-size: 2.5vw;
    }
  }
`,u=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`,d=n.div`
  overflow: hidden;
  font-family: "Pretendard", sans-serif;
  height: ${e=>e.selected?`3rem`:`0`};
  transition: height 0.3s;
  will-change: height;
`,f=n.span`
  border: 1px solid black;
  border-radius: 7px;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  will-change: background-color, border-color, color;
  &:hover {
    background-color: #222222;
    border-color: #222222;
    color: #fff;
  }
  @media (max-width: 480px) {
    & {
      font-size: 2.5vw;
      padding: 8px 10px;
    }
  }
`,p=n.div``,m=n.div`
  margin-top: 10px;
`;function h(){let[e,t]=(0,o.useState)(-1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{children:(()=>{let n=[];return i.forEach((r,i)=>{n.push((0,s.jsxs)(l,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(p,{children:(0,s.jsx)(`p`,{children:r.q})}),(0,s.jsx)(f,{onClick:()=>t(i===e?-1:i),children:`View More`})]}),(0,s.jsx)(d,{selected:i===e,children:(0,s.jsx)(m,{children:(0,s.jsx)(`p`,{children:r.a})})})]},i))}),n})()})})}var g=n.div`
  width: 100%;
`,_=n.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vw;
  @media (max-width: 650px) {
    & {
      padding-bottom: 20rem
    }
  }
`,v=n.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`,y=n.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`,b=n.div`
  text-align: center;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
`,x=n.div`
  width: 100%;
`;function S(){return(0,s.jsx)(g,{children:(0,s.jsxs)(_,{children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(y,{children:`FAQS`}),(0,s.jsxs)(b,{children:[`Here are some questions`,(0,s.jsx)(`br`,{}),` I think you might be wondering about.`]})]}),(0,s.jsx)(x,{children:(0,s.jsx)(h,{})})]})})}export{S as default};