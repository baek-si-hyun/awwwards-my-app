import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{t}from"./react-CaKr0epQ.js";import{c as n,l as r,o as i}from"./mainCommon-C5VKSBGK.js";import{t as a}from"./jsx-runtime-lTuChwRC.js";var o=e(t()),s=a(),c=[`w`,`h`,`aspectRatio`,`round`,`fullWidth`,`fullHeight`,`isLoaded`,`placeholderAspectRatio`],l=r.div.withConfig({shouldForwardProp:e=>!c.includes(e)})`
  position: relative;
  ${e=>{let t=e.aspectRatio||(e.isLoaded?void 0:e.placeholderAspectRatio);return t?n`
        aspect-ratio: ${t};
      `:n`
      ${e.w&&`width: ${typeof e.w==`number`?`${e.w}px`:e.w}`};
      ${e.h&&`height: ${typeof e.h==`number`?`${e.h}px`:e.h}`};
    `}}
  ${e=>e.fullWidth&&`width: 100%;`}
  ${e=>e.fullHeight&&`height: 100%;`}
  ${e=>e.round&&`border-radius: 50%;`}
  overflow: hidden;
`,u=r.img.withConfig({shouldForwardProp:e=>![`isLoaded`,`w`,`h`,`objectFit`,`round`,`fullWidth`,`fullHeight`].includes(e)})`
  display: block;
  ${e=>e.objectFit&&`object-fit: ${e.objectFit};`}
  ${e=>e.w&&`width: ${typeof e.w==`number`?`${e.w}px`:e.w};`}
  ${e=>e.h&&`height: ${typeof e.h==`number`?`${e.h}px`:e.h};`}
  ${e=>e.fullWidth&&`width: 100%;`}
  ${e=>e.fullHeight&&`height: 100%;`}
  ${e=>e.round&&`border-radius: 50%;`}
  opacity: ${e=>+!!e.isLoaded};
  transition: opacity 0.3s ease;
`,d=i`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`,f=r.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(220, 220, 220, 0.75) 25%,
    rgba(235, 235, 235, 0.95) 50%,
    rgba(220, 220, 220, 0.75) 75%
  );
  transform: translateX(-100%);
  animation: ${d} 1.1s infinite;
`;function p({sources:e,alt:t,w:n,h:r,aspectRatio:i,placeholderAspectRatio:a,objectFit:c=`cover`,round:d=!1,fullWidth:p=!1,fullHeight:m=!1,className:h,onClick:g}){let[_,v]=(0,o.useState)(0),y=(0,o.useMemo)(()=>Array.isArray(e)?e:[e],[e]),b=(0,o.useMemo)(()=>y[_]||``,[y,_]),[x,S]=(0,o.useState)(null),C=x===b,w=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=w.current;e&&e.complete&&e.naturalWidth>0&&S(b)},[b]),b?(0,s.jsxs)(l,{w:n,h:r,aspectRatio:i,round:d,fullWidth:p,fullHeight:m,className:h,onClick:g,isLoaded:C,placeholderAspectRatio:a,children:[!C&&(0,s.jsx)(f,{"aria-hidden":!0}),(0,s.jsx)(u,{w:n,h:r,objectFit:c,round:d,fullWidth:p,fullHeight:m,ref:w,src:b,alt:t,loading:`lazy`,decoding:`async`,isLoaded:C,onError:()=>{_<y.length-1?v(e=>e+1):S(b)},onLoad:()=>{S(b)}})]}):null}export{p as t};