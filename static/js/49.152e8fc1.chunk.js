"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[49],{9243:(e,n,r)=>{r.d(n,{n:()=>a});var t=r(5043);function a(e,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const a=(0,t.useDeferredValue)(n);return{filtered:(0,t.useMemo)((()=>{if(!e)return[];const n=a.trim().toLowerCase();if(!n)return e;if(r){const r=n.split(/\s+/).filter(Boolean);return e.filter((e=>{const n=`${e.market.substring(4).toLowerCase()} ${(e.english_name||"").toLowerCase()} ${(e.korean_name||"").toLowerCase()}`;return r.every((e=>n.includes(e)))}))}return e.filter((e=>{const r=e.market.substring(4).toLowerCase(),t=(e.english_name||"").toLowerCase(),a=(e.korean_name||"").toLowerCase();return t.includes(n)||a.includes(n)||r.includes(n)}))}),[e,a,r]),deferredQuery:a}}},321:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(8974),a=r(6254);const i=e=>{const{data:n}=(0,t.I)(["bithumb","names"],a.Tr,{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e5});return{nameData:n}}},9904:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(5043);function a(e){return e.filter((e=>e.startsWith("KRW-"))).map((e=>`${e.substring(4)}_KRW`))}const i=e=>{const[n,r]=(0,t.useState)(new Map),i=(0,t.useRef)(null),o=(0,t.useRef)([]),s=(0,t.useRef)([]),l=(0,t.useRef)(null),c=(0,t.useMemo)((()=>{const n=[...e].sort(),r=n.join(",");return s.current.join(",")!==r&&(s.current=n),s.current}),[e]),d=(0,t.useCallback)((()=>{if(i.current&&(i.current.readyState===WebSocket.OPEN||i.current.readyState===WebSocket.CONNECTING))return;l.current&&(clearTimeout(l.current),l.current=null);const e=new WebSocket("wss://pubwss.bithumb.com/pub/ws");i.current=e,e.addEventListener("open",(()=>{const n=a(c);if(o.current=n,0===n.length)return;const r={type:"ticker",symbols:n,tickTypes:["24H"]};e.send(JSON.stringify(r))})),e.addEventListener("message",(e=>{try{const n=JSON.parse(e.data);if("ticker"!==(null===n||void 0===n?void 0:n.type)||null===n||void 0===n||!n.content)return;const t=function(e){try{const n=(null===e||void 0===e?void 0:e.symbol)||"";if(!n.endsWith("_KRW"))return null;const r=`KRW-${n.replace("_KRW","")}`,t=Number((null===e||void 0===e?void 0:e.closePrice)||0),a=Number((null===e||void 0===e?void 0:e.chgAmt)||0),i=Number((null===e||void 0===e?void 0:e.chgRate)||0),o=Number((null===e||void 0===e?void 0:e.value)||0),s=Number((null===e||void 0===e?void 0:e.volume)||0);return{market:r,trade_price:t,change:a>0?"RISE":a<0?"FALL":"EVEN",change_price:Math.abs(a),signed_change_price:a,change_rate:Math.abs(i)/100,signed_change_rate:i/100,acc_trade_price_24h:o,acc_trade_volume_24h:s}}catch{return null}}(n.content);if(!t)return;r((e=>{const n=new Map(e);return n.set(t.market,t),n}))}catch{}})),e.addEventListener("close",(()=>{i.current=null,l.current||(l.current=setTimeout(d,1e3))})),e.addEventListener("error",(()=>{i.current=null}))}),[c]);(0,t.useEffect)((()=>(d(),()=>{var e;l.current&&(clearTimeout(l.current),l.current=null),null===(e=i.current)||void 0===e||e.close(),i.current=null,o.current=[]})),[d]),(0,t.useEffect)((()=>{const e=i.current;if(!e||e.readyState!==WebSocket.OPEN)return;const n=a(c),r=o.current;r.length===n.length&&r.every(((e,r)=>e===n[r]))||(o.current=n,0!==n.length&&e.send(JSON.stringify({type:"ticker",symbols:n,tickTypes:["24H"]})))}),[c]);const u=(0,t.useMemo)((()=>Array.from(n.values())),[n]);return{liveMap:n,liveList:u}}},9406:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(5043),a=r(8974),i=r(6254);const o=e=>{const n=(0,t.useMemo)((()=>[...e].sort().join(",")),[e]),r=(0,t.useMemo)((()=>async()=>{const n=await(0,i.kz)(),r=new Set(e),t=[];for(const[e,a]of Object.entries(n)){if("date"===e)continue;const n=`KRW-${e}`;r.has(n)&&t.push((0,i.lA)(e,a))}return t}),[e]),{data:o}=(0,a.I)(["bithumb","tickers",n],r,{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e4,enabled:Array.isArray(e)&&e.length>0});return{tickerHttpData:o}}},9049:(e,n,r)=>{r.r(n),r.d(n,{default:()=>Ce});var t=r(5043),a=r(3216),i=r(4574),o=r(579);const s=i.Ay.div`
  width: 100%;
  height: ${e=>e.heightPx?`${e.heightPx}px`:"70vh"};
  min-height: 400px;
`;const l=e=>{let{market:n,exchange:r="BITHUMB",interval:a="D",theme:i="light",locale:l="kr",heightPx:c}=e;const d=(0,t.useRef)(null),[u,m]=(0,t.useState)(!1),h=(0,t.useMemo)((()=>function(e,n){const[r,t]=n.split("-");return`${e}:${t}${r}`}(r,n)),[r,n]);return(0,t.useEffect)((()=>{let e=!1;return new Promise(((e,n)=>{if(window.TradingView)return e();const r=document.querySelector('script[src="https://s3.tradingview.com/tv.js"]');if(r)return r.addEventListener("load",(()=>e())),void r.addEventListener("error",(()=>n(new Error("tv.js failed to load"))));const t=document.createElement("script");t.src="https://s3.tradingview.com/tv.js",t.async=!0,t.onload=()=>e(),t.onerror=()=>n(new Error("tv.js failed to load")),document.body.appendChild(t)})).then((()=>{e||m(!0)})).catch((()=>m(!1))),()=>{e=!0}}),[]),(0,t.useEffect)((()=>{if(!u||!window.TradingView||!d.current)return;const e=`tv_${Math.random().toString(36).slice(2)}`;d.current.id=e;const n=new window.TradingView.widget({symbol:h,interval:a,container_id:e,autosize:!0,timezone:"Asia/Seoul",theme:i,locale:l,toolbar_bg:"#f1f3f6",hide_top_toolbar:!1,hide_side_toolbar:!0,withdateranges:!0,allow_symbol_change:!1,studies:[],details:!1,overrides:{"mainSeriesProperties.candleStyle.upColor":"#c84a31","mainSeriesProperties.candleStyle.downColor":"#1261c4","mainSeriesProperties.candleStyle.borderUpColor":"#c84a31","mainSeriesProperties.candleStyle.borderDownColor":"#1261c4","mainSeriesProperties.candleStyle.wickUpColor":"#c84a31","mainSeriesProperties.candleStyle.wickDownColor":"#1261c4",volumePaneSize:"medium","paneProperties.background":"#ffffff","paneProperties.backgroundType":"solid"},studies_overrides:{"volume.volume.color.0":"#1261c4","volume.volume.color.1":"#c84a31"}});return()=>{try{n&&"function"===typeof n.remove&&n.remove()}catch{}}}),[u,h,a,i,l]),(0,o.jsx)(s,{ref:d,heightPx:c})},c=(0,t.memo)(l);var d=r(321),u=r(9406),m=r(9904),h=r(2151);const p=i.Ay.div`
  border: none;
  border-radius: 0;
  background: transparent;
  overflow: hidden;
`,g=i.Ay.div`
  padding: 0 0 12px 0;
  font-weight: 600;
  font-size: 14px;
  color: #8c8d9a;
  border-bottom: 1px solid #1e2329;
  margin-bottom: 12px;
`,x=i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #0b0e11;
  }
  &::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }
`,b=i.Ay.div`
  padding: 0 8px;
`,f=i.Ay.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  padding: 6px 8px;
  font-size: 13px;
  line-height: 1.4;
  border-radius: 0;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${e=>Math.max(0,Math.min(100,100*e.ratio))}%;
    background: ${e=>e.color};
    opacity: 0.15;
    pointer-events: none;
  }
  .price { 
    font-weight: 600; 
    color: ${e=>e.color};
  }
  .qty { 
    color: #8c8d9a; 
    font-weight: 500;
  }
`,_=e=>isFinite(e)?e.toLocaleString():"-",v="#c84a31",k="#1261c4",y={color:v},w={color:k};function j(e){let{levels:n=10}=e;const{data:r,error:a}=(0,h.t)((e=>({data:e.orderbookSlice.data,error:e.orderbookSlice.error}))),i=(0,t.useMemo)((()=>({bids:r.bids.slice(0,n),asks:r.asks.slice(0,n)})),[r,n]),s=(0,t.useMemo)((()=>[...i.asks].reverse()),[i.asks]),l=(0,t.useMemo)((()=>0===i.bids.length&&0===i.asks.length?1:Math.max(1,...i.bids.map((e=>e.quantity)),...i.asks.map((e=>e.quantity)))),[i]);return a?(0,o.jsxs)(p,{children:[(0,o.jsx)(g,{children:"Order Book"}),(0,o.jsx)("div",{style:{padding:"20px",textAlign:"center",color:"#8c8d9a"},children:"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}):(0,o.jsxs)(p,{children:[(0,o.jsx)(g,{children:"Order Book"}),(0,o.jsxs)(x,{children:[(0,o.jsx)(b,{children:s.map(((e,n)=>(0,o.jsxs)(f,{color:v,ratio:e.quantity/l,children:[(0,o.jsx)("span",{className:"price",style:y,children:_(e.price)}),(0,o.jsx)("span",{className:"qty",children:_(e.quantity)})]},`a-${e.price}-${n}`)))}),(0,o.jsx)(b,{children:i.bids.map(((e,n)=>(0,o.jsxs)(f,{color:k,ratio:e.quantity/l,children:[(0,o.jsx)("span",{className:"price",style:w,children:_(e.price)}),(0,o.jsx)("span",{className:"qty",children:_(e.quantity)})]},`b-${e.price}-${n}`)))})]})]})}const A=(0,t.memo)(j),S=i.Ay.div`
  border: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
`,M=i.Ay.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8d9a;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #1e2329;
`,N=i.Ay.svg`
  width: 100%;
  height: 220px;
  display: block;
`;function $(){const{data:e,error:n}=(0,h.t)((e=>({data:e.orderbookSlice.data,error:e.orderbookSlice.error}))),r=(0,t.useMemo)((()=>({bids:e.bids.slice(0,30).sort(((e,n)=>n.price-e.price)),asks:e.asks.slice(0,30).sort(((e,n)=>e.price-n.price))})),[e]),a=(0,t.useMemo)((()=>{const e=r.bids,n=r.asks;if(!e.length||!n.length)return null;const t=e[e.length-1].price,a=n[n.length-1].price,i=640,o=220,s=[];let l=0;for(let r=e.length-1;r>=0;r--){l+=e[r].quantity;const n=(e[r].price-t)/(a-t)*i;s.push({x:n,y:l})}const c=[];l=0;for(let r=0;r<n.length;r++){l+=n[r].quantity;const e=(n[r].price-t)/(a-t)*i;c.push({x:e,y:l})}const d=Math.max(1,...s.map((e=>e.y)),...c.map((e=>e.y))),u=(e,n)=>{if(0===e.length)return"";return`${"left"===n?`M 0 220 L ${e[0].x} 220`:`M 640 220 L ${e[0].x} 220`} ${e.map((e=>{return`L ${e.x} ${n=e.y,o-n/d*200}`;var n})).join(" ")} ${"left"===n?"L 0 220 Z":"L 640 220 Z"}`};return{width:i,height:o,bidPath:u(s,"left"),askPath:u(c,"right")}}),[r]);return n?(0,o.jsxs)(S,{children:[(0,o.jsx)(M,{children:"Market Depth"}),(0,o.jsx)("div",{style:{padding:"40px",textAlign:"center",color:"#8c8d9a"},children:"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}):(0,o.jsxs)(S,{children:[(0,o.jsx)(M,{children:"Market Depth"}),(0,o.jsxs)(N,{viewBox:`0 0 ${(null===a||void 0===a?void 0:a.width)||640} ${(null===a||void 0===a?void 0:a.height)||220}`,preserveAspectRatio:"none",children:[(0,o.jsx)("path",{d:(null===a||void 0===a?void 0:a.bidPath)||"",fill:"#1261c4",opacity:.18}),(0,o.jsx)("path",{d:(null===a||void 0===a?void 0:a.askPath)||"",fill:"#c84a31",opacity:.18})]})]})}const L=(0,t.memo)($);var T=r(8974),C=r(6254);function E(e){let{data:n,width:r=140,height:a=40,color:i="#0062DF"}=e;const s=(0,t.useMemo)((()=>{if(!n||n.length<2)return"";const e=Math.min(...n),t=Math.max(...n),i=Math.max(1,t-e),o=r/(n.length-1);return n.map(((n,r)=>`${r*o},${a-(n-e)/i*(a-2)-1}`)).join(" ")}),[n,r,a]);return!n||n.length<2?null:(0,o.jsx)("svg",{width:r,height:a,viewBox:`0 0 ${r} ${a}`,preserveAspectRatio:"none",children:(0,o.jsx)("polyline",{fill:"none",stroke:i,strokeWidth:"2",points:s})})}const R=(0,t.memo)(E),O="#8c8d9a",I=i.Ay.div`
  margin-bottom: 24px;
`,z=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 16px;
`,P=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #e8ecef;
  }
`,W=i.Ay.span`
  font-size: 14px;
  font-weight: 500;
  color: #8c8d9a;
  padding: 4px 8px;
  border-radius: 4px;
  background: #1e2329;
`,D=i.Ay.div`
  display: flex;
  gap: 0;
  margin: 0 0 16px 0;
  border-bottom: 1px solid #1e2329;

  button {
    font-family: "Inter", sans-serif;
    border: none;
    background: transparent;
    border-radius: 0;
    padding: 12px 24px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: #8c8d9a;
    transition: color 0.2s ease;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
  }

  button:hover {
    color: #e8ecef;
  }

  .on {
    color: #f0b90b;
    border-bottom-color: #f0b90b;
  }
`,K=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 24px;
  border-radius: 0;
  background: #181a20;
  margin-bottom: 16px;
  font-weight: 600;
  color: #e8ecef;
  border-bottom: 1px solid #1e2329;
`,H=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,q=i.Ay.span`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,F=i.Ay.span`
  font-size: 0.5em;
  font-weight: 500;
  opacity: 0.7;
  margin-left: 6px;
  color: #8c8d9a;
`,B=i.Ay.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,V=i.Ay.span`
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
`,X=i.Ay.span`
  font-size: 14px;
  font-weight: 500;
  color: #8c8d9a;
`,U=i.Ay.div`
  margin-left: auto;
  width: 200px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`,G=i.Ay.span`
  color: #8c8d9a;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: block;
  width: 100%;
`;function Z(e){let{market:n,info:r,tick:a,sparklineData:i,mainTab:s,onTabChange:l}=e;const c=(0,t.useMemo)((()=>null!==a&&void 0!==a&&a.signed_change_rate?a.signed_change_rate<0?"#1261c4":"#c84a31":O),[null===a||void 0===a?void 0:a.signed_change_rate]),d=i.length>1,u=(0,t.useCallback)((()=>{l("price")}),[l]),m=(0,t.useCallback)((()=>{l("info")}),[l]),h=(0,t.useMemo)((()=>"number"!==typeof(null===a||void 0===a?void 0:a.signed_change_rate)?"-":`${a.signed_change_rate>0?"+":""}${(100*a.signed_change_rate).toFixed(2)}%`),[null===a||void 0===a?void 0:a.signed_change_rate]),p=(0,t.useMemo)((()=>"number"!==typeof(null===a||void 0===a?void 0:a.signed_change_price)?"-":`${a.signed_change_price>0?"+":""}${a.signed_change_price.toLocaleString()}`),[null===a||void 0===a?void 0:a.signed_change_price]),g=(0,t.useMemo)((()=>{var e,n;return null!==(e=null===a||void 0===a||null===(n=a.trade_price)||void 0===n?void 0:n.toLocaleString())&&void 0!==e?e:"-"}),[null===a||void 0===a?void 0:a.trade_price]);return(0,o.jsxs)(I,{children:[(0,o.jsxs)(z,{children:[(0,o.jsxs)(P,{children:[(0,o.jsx)("span",{children:null===r||void 0===r?void 0:r.english_name}),(0,o.jsx)(W,{children:null===r||void 0===r?void 0:r.base})]}),(0,o.jsxs)(D,{children:[(0,o.jsx)("button",{className:"price"===s?"on":"",onClick:u,children:"\uc2dc\uc138"}),(0,o.jsx)("button",{className:"info"===s?"on":"",onClick:m,children:"\uc815\ubcf4"})]})]}),"price"===s?(0,o.jsxs)(K,{change:null===a||void 0===a?void 0:a.signed_change_rate,children:[(0,o.jsxs)(H,{children:[(0,o.jsxs)(q,{style:{color:c},children:[g," ",(0,o.jsx)(F,{children:"KRW"})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(V,{className:"chg",style:{color:c,background:c===O?"#1e2329":`${c}20`},children:h}),(0,o.jsx)(X,{style:{color:c===O?"#8c8d9a":c},children:p})]})]}),(0,o.jsx)(U,{children:d?(0,o.jsx)(R,{data:i,width:200,height:60,color:c}):null})]}):(0,o.jsx)(K,{children:(0,o.jsx)(G,{children:"\ucf54\uc778 \uc815\ubcf4\ub294 \ucd94\ud6c4 \ucd94\uac00\ub429\ub2c8\ub2e4."})})]})}const J=(0,t.memo)(Z),Q=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 0 24px 0;
  padding: 16px;
  background: #181a20;
  border-bottom: 1px solid #1e2329;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  small {
    color: #8c8d9a;
    font-size: 12px;
    font-weight: 500;
    display: block;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    display: block;
    color: #e8ecef;
  }
`;function Y(e){let{tick:n,baseSymbol:r}=e;return(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("small",{children:"\uace0\uac00(24H)"}),(0,o.jsx)("strong",{style:{color:"#c84a31"},children:null!==n&&void 0!==n&&n.high_price_24h?n.high_price_24h.toLocaleString():"-"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("small",{children:"\uc800\uac00(24H)"}),(0,o.jsx)("strong",{style:{color:"#1261c4"},children:null!==n&&void 0!==n&&n.low_price_24h?n.low_price_24h.toLocaleString():"-"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("small",{children:"\uac70\ub798\ub7c9(24H)"}),(0,o.jsxs)("strong",{children:[null!==n&&void 0!==n&&n.acc_trade_volume_24h?n.acc_trade_volume_24h.toLocaleString():"-"," ",r]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("small",{children:"\uac70\ub798\ub300\uae08(24H)"}),(0,o.jsxs)("strong",{children:[null!==n&&void 0!==n&&n.acc_trade_price_24h?n.acc_trade_price_24h.toLocaleString():"-"," ","KRW"]})]})]})}const ee=(0,t.memo)(Y);var ne=r(5475),re=r(9243);const te=i.Ay.aside`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 16px;
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    position: static;
    max-height: none;
  }
`,ae=i.Ay.input`
  font-family: "Inter", sans-serif;
  border: 1px solid #1e2329;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;
  width: 100%;
  background: #0b0e11;
  margin-bottom: 16px;
  color: #e8ecef;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #5e6673;
  }

  &:focus {
    outline: none;
    border-color: #2b3139;
  }
`,ie=i.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #0b0e11;
  }
  &::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }
`,oe=i.i7`
  from { background-color: rgba(47, 193, 156, 0.18); }
  to { background-color: transparent; }
`,se=i.i7`
  from { background-color: rgba(255, 77, 79, 0.18); }
  to { background-color: transparent; }
`,le=i.Ay.li`
  margin-bottom: 10px;

  a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    column-gap: 12px;
    padding: 12px;
    border-radius: 0;
    color: #e8ecef;
    text-decoration: none;
    background: ${e=>e.active?"#1e2329":"transparent"};
    border-left: 2px solid ${e=>e.active?"#f0b90b":"transparent"};
    transition: background 0.2s ease;

    ${e=>"up"===e.flash?i.AH`
            animation: ${oe} 800ms ease-out;
          `:"down"===e.flash?i.AH`
            animation: ${se} 800ms ease-out;
          `:null}
  }

  .name {
    display: flex;
    gap: 8px;
    align-items: baseline;
    font-weight: 500;
    font-size: 14px;
    color: #e8ecef;
  }

  .name .sym {
    color: #8c8d9a;
    font-size: 12px;
    font-weight: 500;
  }

  .right {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .price {
    font-weight: 600;
    font-size: 14px;
    color: #e8ecef;
  }

  .chg {
    font-size: 12px;
    font-weight: 500;
  }
`,ce=(0,t.memo)((function(e){let{market:n,english_name:r,price:a,change:i,isActive:s,flash:l}=e;const c=(0,t.useMemo)((()=>i>0?"#c84a31":i<0?"#1261c4":"#8c8d9a"),[i]);return(0,o.jsx)(le,{active:s,flash:l,children:(0,o.jsxs)(ne.N_,{to:`/coin/${n}`,children:[(0,o.jsxs)("span",{className:"name",children:[(0,o.jsx)("span",{children:r}),(0,o.jsx)("span",{className:"sym",children:n.substring(4)})]}),(0,o.jsxs)("span",{className:"right",children:[(0,o.jsx)("span",{className:"price",children:null!==a?a.toLocaleString():"-"}),(0,o.jsx)("span",{className:"chg",style:{color:c},children:`${(100*i).toFixed(2)}%`})]})]})})}));function de(e){let{currentMarket:n}=e;const{nameData:r}=(0,d.A)(!0),[a,i]=(0,t.useState)(""),{filtered:s}=(0,re.n)(r,a,!0),l=(0,t.useMemo)((()=>s.map((e=>e.market))),[s]),{tickerHttpData:c}=(0,u.A)(l),{liveMap:h}=(0,m.A)(l),p=(0,t.useMemo)((()=>{const e=new Map;for(const n of c||[])e.set(n.market,{price:n.trade_price,chg:n.signed_change_rate});return h.forEach(((n,r)=>e.set(r,{price:n.trade_price,chg:n.signed_change_rate}))),e}),[c,h]),g=(0,t.useRef)(new Map),[x,b]=(0,t.useState)({});(0,t.useEffect)((()=>{const e={};if(p.forEach(((n,r)=>{const t=g.current.get(r);void 0!==t&&n.price!==t&&(e[r]=n.price>t?"up":"down")})),g.current=new Map(Array.from(p.entries()).map((e=>{let[n,r]=e;return[n,r.price]}))),Object.keys(e).length>0){b((n=>({...n,...e})));const n=setTimeout((()=>{b((n=>{const r={...n};return Object.keys(e).forEach((e=>delete r[e])),r}))}),800);return()=>clearTimeout(n)}}),[p]);const f=(0,t.useCallback)((e=>{i(e.target.value)}),[]);return(0,o.jsxs)(te,{children:[(0,o.jsx)(ae,{placeholder:"Search by name (EN/KR) or symbol",value:a,onChange:f}),(0,o.jsx)(ie,{children:s.map((e=>{var r,t;const a=p.get(e.market);return(0,o.jsx)(ce,{market:e.market,english_name:e.english_name,korean_name:e.korean_name,price:null!==(r=null===a||void 0===a?void 0:a.price)&&void 0!==r?r:null,change:null!==(t=null===a||void 0===a?void 0:a.chg)&&void 0!==t?t:0,isActive:e.market===n,flash:x[e.market]},e.market)}))})]})}const ue=(0,t.memo)(de);function me(e){let{row:n}=e;const r=(0,t.useMemo)((()=>{return`${`${(e=new Date(n.timestamp)).getMonth()+1}`.padStart(2,"0")}.${`${e.getDate()}`.padStart(2,"0")}`;var e}),[n.timestamp]),{delta:a,pct:i,color:s}=(0,t.useMemo)((()=>{const e=n.change_price;return{delta:e,pct:100*n.change_rate,color:e>0?"#c84a31":e<0?"#1261c4":"#8c8d9a"}}),[n.change_price,n.change_rate]),l=(0,t.useMemo)((()=>n.prev_closing_price.toLocaleString()),[n.prev_closing_price]),c=(0,t.useMemo)((()=>a.toLocaleString()),[a]),d=(0,t.useMemo)((()=>`${i.toFixed(2)}%`),[i]),u=(0,t.useMemo)((()=>{var e;return(null!==(e=n.volume)&&void 0!==e?e:0).toLocaleString()}),[n.volume]);return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:r}),(0,o.jsx)("td",{className:"r",style:{color:s},children:l}),(0,o.jsx)("td",{className:"r",style:{color:s},children:c}),(0,o.jsx)("td",{className:"r",style:{color:s},children:d}),(0,o.jsx)("td",{className:"r",children:u})]})}const he=(0,t.memo)(me),pe=i.Ay.div`
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #0b0e11;
  }

  &::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }
`,ge=i.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-weight: 500;
  color: #e8ecef;

  th,
  td {
    padding: 12px 16px;
    font-size: 13px;
    text-align: left;
  }

  thead {
    background: #0b0e11;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #1e2329;

    th {
      font-weight: 600;
      font-size: 12px;
      color: #8c8d9a;
    }
  }

  tbody tr {
    border-bottom: 1px solid #1e2329;

    &:hover {
      background: #1e2329;
    }
  }

  td.r {
    text-align: right;
    font-weight: 500;
  }
`;function xe(e){let{market:n,dailyData:r}=e;const{data:a}=(0,T.I)(["bithumb","daily",n],(()=>(0,C.ai)([n])),{refetchOnWindowFocus:!1,staleTime:6e4,enabled:!!n&&!r,initialData:r}),i=r||a,s=(0,t.useMemo)((()=>((null===i||void 0===i?void 0:i[0])||[]).slice().reverse()),[i]);return(0,o.jsx)(pe,{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"\uc77c\uc790"}),(0,o.jsx)("th",{className:"r",children:"\uc885\uac00(KRW)"}),(0,o.jsx)("th",{className:"r",children:"\uc804\uc77c\ub300\ube44"}),(0,o.jsx)("th",{className:"r",children:"\ub4f1\ub77d\ub960"}),(0,o.jsx)("th",{className:"r",children:"\uac70\ub798\ub7c9"})]})}),(0,o.jsx)("tbody",{children:s.map((e=>(0,o.jsx)(he,{row:e},e.timestamp)))})]})})}const be=(0,t.memo)(xe),fe=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #1e2329;
`,_e=i.Ay.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #e8ecef;
`,ve=(0,i.Ay)(ne.N_)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #8c8d9a;
  text-decoration: none;
  border: 1px solid #1e2329;
  border-radius: 4px;
  padding: 8px 16px;
  background: #181a20;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2b3139;
    background: #1e2329;
    color: #e8ecef;
  }
`;function ke(e){let{market:n,info:r}=e;const a=(0,t.useMemo)((()=>r?`${r.english_name} (${r.base}) / ${r.quote}`:n),[r,n]);return(0,o.jsxs)(fe,{children:[(0,o.jsx)(_e,{children:a}),(0,o.jsx)(ve,{to:"/coinlist",children:"\u2190 Coin List"})]})}const ye=(0,t.memo)(ke);var we=r(3003),je=r(1430);const Ae=i.Ay.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px 20px 80px 20px;
  background: #0b0e11;
  color: #e8ecef;
  position: relative;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
`,Se=i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 16px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`,Me=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ne=i.Ay.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 0;
  min-height: 500px;
`,$e=i.Ay.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 16px;
`,Le=i.Ay.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 0;
  overflow: hidden;
`,Te=i.Ay.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 40px;
  text-align: center;
  color: #8c8d9a;
  font-size: 14px;
  font-weight: 500;
`;const Ce=function(){const e=(0,a.g)().market||"",{nameData:n}=(0,d.A)(!0),[r,i]=(0,t.useState)("price"),s=(0,t.useMemo)((()=>{const n=e.split("-");return{base:n[1]||"",quote:n[0]||""}}),[e]),l=(0,t.useMemo)((()=>{const r=(n||[]).find((n=>n.market===e));return r?{base:s.base,quote:s.quote,english_name:r.english_name,korean_name:r.korean_name}:null}),[n,e,s]),h=(0,t.useMemo)((()=>[e]),[e]),{tickerHttpData:p}=(0,u.A)(h),{liveMap:g}=(0,m.A)(h),x=(0,t.useMemo)((()=>{const n=(p||[]).find((n=>n.market===e));return g.get(e)||n||null}),[p,g,e]),{data:b}=(0,T.I)(["bithumb","daily",e],(()=>(0,C.ai)(h)),{refetchOnWindowFocus:!1,staleTime:6e4,enabled:!!e}),f=(0,t.useMemo)((()=>((null===b||void 0===b?void 0:b[0])||[]).slice(-30).map((e=>e.prev_closing_price))),[b]),_=(0,t.useCallback)((e=>{i(e)}),[]);return function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;const r=(0,we.wA)(),a=(0,t.useCallback)((async()=>{if(e){r((0,je.kR)(!0));try{const n=await(0,C.vc)(e);r((0,je.S2)(n))}catch(n){r((0,je.CL)(n instanceof Error?n:new Error("Failed to fetch orderbook")))}}}),[e]);(0,t.useEffect)((()=>{if(r((0,je.J7)(e)),!e)return;let t=!0,i=null;const o=async()=>{t&&(await a(),t&&(i=setTimeout(o,n)))};return o(),()=>{t=!1,i&&clearTimeout(i)}}),[a,n])}(e,1500),(0,o.jsxs)(Ae,{children:[(0,o.jsx)(ye,{market:e,info:l}),(0,o.jsx)(J,{market:e,info:l,tick:x,sparklineData:f,mainTab:r,onTabChange:_}),(0,o.jsx)(ee,{tick:x,baseSymbol:null===l||void 0===l?void 0:l.base}),(0,o.jsxs)(Se,{children:[(0,o.jsx)(Me,{children:e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ne,{children:(0,o.jsx)(c,{market:e,exchange:"BITHUMB",interval:"D",theme:"dark",locale:"kr",heightPx:580})}),(0,o.jsx)($e,{children:(0,o.jsx)(A,{})}),(0,o.jsx)($e,{children:(0,o.jsx)(L,{})}),(0,o.jsx)(Le,{children:(0,o.jsx)(be,{market:e,dailyData:b})})]}):(0,o.jsx)(Te,{children:"Invalid market"})}),(0,o.jsx)(ue,{currentMarket:e})]})]})}},6254:(e,n,r)=>{r.d(n,{kz:()=>i,ai:()=>l,Tr:()=>o,vc:()=>c,lA:()=>s});const t={BTC:{english_name:"Bitcoin",korean_name:"\ube44\ud2b8\ucf54\uc778"},ETH:{english_name:"Ethereum",korean_name:"\uc774\ub354\ub9ac\uc6c0"},XRP:{english_name:"XRP",korean_name:"\ub9ac\ud50c"},ADA:{english_name:"Cardano",korean_name:"\uc5d0\uc774\ub2e4"},SOL:{english_name:"Solana",korean_name:"\uc194\ub77c\ub098"},DOGE:{english_name:"Dogecoin",korean_name:"\ub3c4\uc9c0\ucf54\uc778"},DOT:{english_name:"Polkadot",korean_name:"\ud3f4\uce74\ub2f7"},TRX:{english_name:"TRON",korean_name:"\ud2b8\ub860"},LTC:{english_name:"Litecoin",korean_name:"\ub77c\uc774\ud2b8\ucf54\uc778"},BCH:{english_name:"Bitcoin Cash",korean_name:"\ube44\ud2b8\ucf54\uc778\uce90\uc2dc"},EOS:{english_name:"EOS",korean_name:"\uc774\uc624\uc2a4"},XLM:{english_name:"Stellar",korean_name:"\uc2a4\ud154\ub77c\ub8e8\uba58"},LINK:{english_name:"Chainlink",korean_name:"\uccb4\uc778\ub9c1\ud06c"},MATIC:{english_name:"Polygon",korean_name:"\ud3f4\ub9ac\uace4"},SHIB:{english_name:"Shiba Inu",korean_name:"\uc2dc\ubc14\uc774\ub204"},APT:{english_name:"Aptos",korean_name:"\uc571\ud1a0\uc2a4"},AVAX:{english_name:"Avalanche",korean_name:"\uc544\ubc1c\ub780\uccb4"},NEAR:{english_name:"NEAR Protocol",korean_name:"\ub2c8\uc5b4\ud504\ub85c\ud1a0\ucf5c"},SAND:{english_name:"The Sandbox",korean_name:"\ub354 \uc0cc\ub4dc\ubc15\uc2a4"},AXS:{english_name:"Axie Infinity",korean_name:"\uc5d1\uc2dc\uc778\ud53c\ub2c8\ud2f0"},FLOW:{english_name:"Flow",korean_name:"\ud50c\ub85c\uc6b0"},GRT:{english_name:"The Graph",korean_name:"\ub354 \uadf8\ub798\ud504"},AAVE:{english_name:"Aave",korean_name:"\uc5d0\uc774\ube0c"},UNI:{english_name:"Uniswap",korean_name:"\uc720\ub2c8\uc2a4\uc651"},KNC:{english_name:"Kyber Network",korean_name:"\uce74\uc774\ubc84\ub124\ud2b8\uc6cc\ud06c"},ICX:{english_name:"ICON",korean_name:"\uc544\uc774\ucf58"},KLAY:{english_name:"Klaytn",korean_name:"\ud074\ub808\uc774\ud2bc"},QTUM:{english_name:"Qtum",korean_name:"\ud000\ud140"},ETC:{english_name:"Ethereum Classic",korean_name:"\uc774\ub354\ub9ac\uc6c0\ud074\ub798\uc2dd"},XEM:{english_name:"NEM",korean_name:"\ub134"},XTZ:{english_name:"Tezos",korean_name:"\ud14c\uc870\uc2a4"},OMG:{english_name:"OMG Network",korean_name:"\uc624\ubbf8\uc138\uace0"},ZIL:{english_name:"Zilliqa",korean_name:"\uc9c8\ub9ac\uce74"},IOST:{english_name:"IOST",korean_name:"\uc544\uc774\uc624\uc5d0\uc2a4\ud2f0"},IOTA:{english_name:"IOTA",korean_name:"\uc544\uc774\uc624\ud0c0"},SXP:{english_name:"Solar",korean_name:"\uc194\ub77c"},HIVE:{english_name:"Hive",korean_name:"\ud558\uc774\ube0c"},KAVA:{english_name:"Kava",korean_name:"\uce74\ubc14"},LINK2:{english_name:"Chainlink",korean_name:"\uccb4\uc778\ub9c1\ud06c"}},a="https://api.bithumb.com/public";async function i(){const e=await fetch(`${a}/ticker/ALL_KRW`),n=await e.json();return"0000"!==n.status?{}:n.data||{}}async function o(){const e=await i();return Object.keys(e).filter((e=>"date"!==e)).map((e=>{const n=t[e]||{english_name:e,korean_name:e};return{market:`KRW-${e}`,english_name:n.english_name,korean_name:n.korean_name}}))}function s(e,n){const r=`KRW-${e}`,t=Number((null===n||void 0===n?void 0:n.closing_price)||0),a=Number((null===n||void 0===n?void 0:n.fluctate_24H)||0),i=Number((null===n||void 0===n?void 0:n.fluctate_rate_24H)||0),o=a>0?"RISE":a<0?"FALL":"EVEN",s=Number((null===n||void 0===n?void 0:n.acc_trade_value_24H)||0),l=Number((null===n||void 0===n?void 0:n.acc_trade_volume_24H)||0),c=Number((null===n||void 0===n?void 0:n.max_price)||0),d=Number((null===n||void 0===n?void 0:n.min_price)||0);return{market:r,trade_price:t,change:o,change_price:Math.abs(a),signed_change_price:a,change_rate:Math.abs(i)/100,signed_change_rate:i/100,acc_trade_price_24h:s,acc_trade_volume_24h:l,high_price_24h:c,low_price_24h:d}}async function l(e){const n=e.filter((e=>e.startsWith("KRW-"))).map((e=>`https://api.bithumb.com/public/candlestick/${e.substring(4)}_KRW/24h`));return await Promise.all(n.map((async e=>{const n=await fetch(e),r=await n.json(),t=null===r||void 0===r?void 0:r.status,a=Array.isArray(null===r||void 0===r?void 0:r.data)?r.data:[];if("0000"!==t||0===a.length)return[];const i=`KRW-${e.split("/").slice(-2,-1)[0].replace("_KRW","")}`;return a.map(((e,n)=>{var r;const t=Number(e[0]),a=Number(e[1]),o=Number(e[2]),s=Number(e[3]),l=Number(e[4]),c=Number(null!==(r=e[5])&&void 0!==r?r:0),d=o-a,u=a?d/a:0;return{candle_date_time_kst:new Date(t).toISOString(),change_price:d,change_rate:u,high_price:s,low_price:l,market:i,opening_price:a,prev_closing_price:o,timestamp:t,volume:c}}))})))}async function c(e){const n=function(e){const[n,r]=e.split("-");return`${r}_${n}`}(e),r=await fetch(`${a}/orderbook/${n}`),t=await r.json(),i=(null===t||void 0===t?void 0:t.data)||{};return{bids:Array.isArray(null===i||void 0===i?void 0:i.bids)?i.bids.map((e=>({price:Number(e.price),quantity:Number(e.quantity)}))):[],asks:Array.isArray(null===i||void 0===i?void 0:i.asks)?i.asks.map((e=>({price:Number(e.price),quantity:Number(e.quantity)}))):[]}}}}]);
//# sourceMappingURL=49.152e8fc1.chunk.js.map