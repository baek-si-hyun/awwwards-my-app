"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[533],{1533:(e,i,t)=>{t.r(i),t.d(i,{Tr:()=>he,default:()=>Re});var n=t(5043),s=t(4574),r=t(8974);const l="https://api.bithumb.com/public";async function a(){const e=await fetch(`${l}/ticker/ALL_KRW`),i=await e.json();return"0000"!==i.status?{}:i.data||{}}async function d(){const e=await a();return Object.keys(e).filter((e=>"date"!==e)).map((e=>({market:`KRW-${e}`,english_name:e,korean_name:e})))}function p(e,i){const t=`KRW-${e}`,n=Number((null===i||void 0===i?void 0:i.closing_price)||0),s=Number((null===i||void 0===i?void 0:i.fluctate_24H)||0),r=Number((null===i||void 0===i?void 0:i.fluctate_rate_24H)||0),l=s>0?"RISE":s<0?"FALL":"EVEN",a=Number((null===i||void 0===i?void 0:i.acc_trade_value_24H)||0),d=Number((null===i||void 0===i?void 0:i.acc_trade_volume_24H)||0);return{market:t,trade_price:n,change:l,change_price:Math.abs(s),signed_change_price:s,change_rate:Math.abs(r)/100,signed_change_rate:r/100,acc_trade_price_24h:a,acc_trade_volume_24h:d}}const o=e=>{const{data:i}=(0,r.I)(["bithumb","names"],d,{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e5});return{nameData:i}};var c=t(2087),u=t(579);const h=s.Ay.col`
  width: 310px;
  min-width: auto;
  @media (max-width: 1279px) {
    & {
      box-shadow: 0px 0px 2px rgba(128, 138, 157, 0.12),
        0px 0px 24px rgba(128, 138, 157, 0.14);
    }
  }
`,y=s.Ay.col`
  width: 181px;
  min-width: auto;
`,x=s.Ay.col`
  width: 200px;
  min-width: auto;
`,m=s.Ay.col`
  width: 236px;
  min-width: auto;
`,R=s.Ay.col`
  width: 236px;
  min-width: auto;
`,f=s.Ay.col`
  width: 236px;
  min-width: auto;
`,g=s.Ay.col`
  width: 236px;
  min-width: auto;
`,W=s.Ay.col`
  width: 183px;
  min-width: auto;
`;const K=function(){return(0,u.jsxs)("colgroup",{children:[(0,u.jsx)(h,{}),(0,u.jsx)(y,{}),(0,u.jsx)(x,{}),(0,u.jsx)(m,{}),(0,u.jsx)(R,{}),(0,u.jsx)(f,{}),(0,u.jsx)(g,{}),(0,u.jsx)(W,{})]})},w=s.Ay.th`
  text-align: start;
  vertical-align: middle;
  padding: 10px;
  padding-left: 1vw;
  position: sticky;
  top: 0;
  left: -2px;
  z-index: 10;
  background-color: #f8f8f8;
  @media (max-width: 1279px) {
    & {
      ::before {
        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        width: 30px;
        transform: translateX(100%);
        transition: box-shadow 0.3s;
        content: "";
        pointer-events: none;
      }
    }
  }
`,v=s.Ay.th`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #f8f8f8;
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  font-weight: 900;
  white-space: nowrap;
  :last-child {
    padding-right: 1vw;
  }
`;const j=function(){return(0,u.jsxs)(he,{children:[(0,u.jsx)(w,{children:(0,u.jsx)("span",{children:"Name"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Price"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Change (24h)"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Volume (24h)"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Volume Price (24h)"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Circulating Supply"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Market Cap"})}),(0,u.jsx)(v,{children:(0,u.jsx)("span",{children:"Last 200 Days"})})]})},b=s.Ay.div`
  display: flex;
  align-items: center;
  padding: 10px;
`,A=s.Ay.td`
  padding: 3.5px;
  text-align: end;
  vertical-align: middle;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`,_=s.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: flex-end;
`,k=s.Ay.div`
  background-color: #ececec;
  border-radius: 5px;
  padding: 13px 10px;
`,N=(0,s.Ay)(k)`
  width: 100%;
`,E=(0,s.Ay)(k)`
  width: 100%;
`,S=(0,s.Ay)(k)`
  width: 40%;
`,L=(0,s.Ay)(k)`
  width: 50%;
`,M=(0,s.Ay)(k)`
  width: 90%;
`,T=(0,s.Ay)(k)`
  width: 90%;
`,C=(0,s.Ay)(k)`
  width: 90%;
`,O=(0,s.Ay)(k)`
  width: 90%;
`,I=(0,s.Ay)(k)`
  width: 100%;
  height: 50px;
`;const $=function(){return(0,u.jsxs)(he,{children:[(0,u.jsx)(A,{children:(0,u.jsx)(b,{children:(0,u.jsx)(N,{})})}),(0,u.jsx)(A,{children:(0,u.jsx)(_,{children:(0,u.jsx)(E,{})})}),(0,u.jsx)(A,{children:(0,u.jsxs)(_,{children:[(0,u.jsx)(S,{}),(0,u.jsx)(L,{})]})}),(0,u.jsx)(A,{children:(0,u.jsx)(_,{children:(0,u.jsx)(M,{})})}),(0,u.jsx)(A,{children:(0,u.jsx)(_,{children:(0,u.jsx)(T,{})})}),(0,u.jsx)(A,{children:(0,u.jsx)(_,{children:(0,u.jsx)(C,{})})}),(0,u.jsx)(A,{children:(0,u.jsx)(_,{children:(0,u.jsx)(O,{})})}),(0,u.jsx)(A,{children:(0,u.jsx)(I,{})})]})},B=e=>{let{coinName:i,tickerList:t}=e;if(t){var n;const e=null===(n=t.find((e=>e.market===i&&e),0))||void 0===n?void 0:n.trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,u.jsxs)("span",{children:["\u20a9",e||0]})}return(0,u.jsx)(u.Fragment,{})},D=e=>{let{coinName:i,tickerList:t}=e;if(t){var n,s,r;const e=null===(n=t.find((e=>e.market===i&&e),0))||void 0===n?void 0:n.change_price.toString().replace(/\B(?=(\d{3})+(!\d))/g,","),l=null===(s=t.find((e=>e.market===i&&e),"EVEN"))||void 0===s?void 0:s.change,a=null===(r=t.find((e=>e.market===i&&e),0))||void 0===r?void 0:r.change_rate;return(0,u.jsxs)(te,{change:l||"EVEN",children:[(0,u.jsxs)("span",{children:["\u20a9",e||0]}),(0,u.jsxs)("span",{children:["EVEN"===l?(0,u.jsx)(ne,{className:"material-symbols-outlined",children:"check_indeterminate_small"}):"RISE"===l?(0,u.jsx)(ne,{className:"material-symbols-outlined",children:"arrow_drop_up"}):"FALL"===l?(0,u.jsx)(ne,{className:"material-symbols-outlined",children:"arrow_drop_down"}):(0,u.jsx)(ne,{className:"material-symbols-outlined",children:"trending_flat"}),(100*a||0).toFixed(2),"%"]})]})}return(0,u.jsx)(te,{change:"EVEN"})},F=e=>{let{coinName:i,tickerList:t}=e;if(t){var n;const e=null===(n=t.find((e=>e.market===i&&e),0))||void 0===n?void 0:n.acc_trade_price_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,u.jsxs)("span",{children:["\u20a9",e||0]})}return(0,u.jsx)(u.Fragment,{})},P=e=>{let{coinName:i,tickerList:t}=e;if(t){var n;const e=null===(n=t.find((e=>e.market===i&&e),0))||void 0===n?void 0:n.acc_trade_volume_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,u.jsxs)("span",{children:[e||0," ",i.substring(4)||""]})}return(0,u.jsx)(u.Fragment,{})},U=e=>{let{coinName:i,supply:t,tickerList:n}=e;if(n){var s;const e=null===(s=n.find((e=>e.market===i&&e),0))||void 0===s?void 0:s.trade_price;return(0,u.jsxs)("span",{children:["\u20a9",(t*e||0).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})}return(0,u.jsx)(u.Fragment,{})},V=[{id:"KRW-ZETA",supply:683010417},{id:"KRW-IMX",supply:1743800322},{id:"KRW-EGLD",supply:27865314},{id:"KRW-MINA",supply:1214515858},{id:"KRW-BLUR",supply:2203803082},{id:"KRW-ADA",supply:35201193526},{id:"KRW-STRIKE",supply:5265785},{id:"KRW-LSK",supply:166894159},{id:"KRW-SUI",supply:3089707195},{id:"KRW-BTC",supply:19823850},{id:"KRW-ETH",supply:120545398},{id:"KRW-NEO",supply:70538831},{id:"KRW-MTL",supply:83171865},{id:"KRW-XRP",supply:57762545657},{id:"KRW-ETC",supply:150740793},{id:"KRW-OMG",supply:140245398},{id:"KRW-SNT",supply:3996911204},{id:"KRW-WAVES",supply:116974126},{id:"KRW-XEM",supply:8999999999},{id:"KRW-QTUM",supply:105521616},{id:"KRW-STEEM",supply:483263173},{id:"KRW-XLM",supply:30603014104},{id:"KRW-ARDR",supply:998466231},{id:"KRW-ARK",supply:186706754},{id:"KRW-STORJ",supply:401361292},{id:"KRW-GRS",supply:86940619},{id:"KRW-GRT",supply:9548531509},{id:"KRW-POWR",supply:560162329},{id:"KRW-BTG",supply:17513924},{id:"KRW-ICX",supply:1048487515},{id:"KRW-EOS",supply:1546399988},{id:"KRW-TRX",supply:86098744015},{id:"KRW-SC",supply:56025636522},{id:"KRW-ONT",supply:912697857},{id:"KRW-ZIL",supply:19527125342},{id:"KRW-POLYX",supply:925434676},{id:"KRW-POL",supply:8562688053},{id:"KRW-ZRX",supply:848396563},{id:"KRW-LOOM",supply:1242920898},{id:"KRW-BCH",supply:19829019},{id:"KRW-BAT",supply:1495668357},{id:"KRW-IOST",supply:21315e6},{id:"KRW-CVC",supply:1e9},{id:"KRW-IQ",supply:20520426316},{id:"KRW-IOTA",supply:3631397410},{id:"KRW-HIFI",supply:141753577},{id:"KRW-ID",supply:879627042},{id:"KRW-ONG",supply:404983864},{id:"KRW-ASTR",supply:7597621696},{id:"KRW-GAS",supply:77508512},{id:"KRW-UPP",supply:497834800},{id:"KRW-ELF",supply:738908400},{id:"KRW-KNC",supply:186564360},{id:"KRW-BSV",supply:19824725},{id:"KRW-THETA",supply:1e9},{id:"KRW-QKC",supply:7091115594},{id:"KRW-BTT",supply:986061142857e3},{id:"KRW-MOC",supply:423489688},{id:"KRW-TFUEL",supply:6843074105},{id:"KRW-MANA",supply:1942255184},{id:"KRW-STX",supply:1512986823},{id:"KRW-XEC",supply:19824739047583},{id:"KRW-SOL",supply:488170363},{id:"KRW-MATIC",supply:9899052814},{id:"KRW-NU",supply:703e6},{id:"KRW-AAVE",supply:15071805},{id:"KRW-1INCH",supply:1399453973},{id:"KRW-ALGO",supply:8434070346},{id:"KRW-NEAR",supply:1184141216},{id:"KRW-AVAX",supply:411949005},{id:"KRW-T",supply:10108927223},{id:"KRW-CELO",supply:562409366},{id:"KRW-GMT",supply:3157493622},{id:"KRW-APT",supply:586643426},{id:"KRW-SHIB",supply:589253884408118},{id:"KRW-MASK",supply:1e8},{id:"KRW-ARB",supply:4343862574},{id:"KRW-MNT",supply:3364694383},{id:"KRW-ZRO",supply:11e7},{id:"KRW-TAIKO",supply:115016756},{id:"KRW-BLAST",supply:25443907166},{id:"KRW-BEAM",supply:1666915441},{id:"KRW-USDT",supply:112911493076},{id:"KRW-ONDO",supply:3159107529},{id:"KRW-AUCTION",supply:6590076},{id:"KRW-JUP",supply:2637438889},{id:"KRW-STG",supply:204338417},{id:"KRW-GAL",supply:118544998},{id:"KRW-G",supply:876818e4},{id:"KRW-ENS",supply:35549160},{id:"KRW-PENDLE",supply:164896088},{id:"KRW-ATH",supply:6697646536},{id:"KRW-USDC",supply:56098473904},{id:"KRW-UXLINK",supply:3382e5},{id:"KRW-CKB",supply:45947644639},{id:"KRW-W",supply:2862609176},{id:"KRW-CARV",supply:185850382},{id:"KRW-INJ",supply:98970935},{id:"KRW-MEW",supply:88888888888},{id:"KRW-UNI",supply:600518038},{id:"KRW-SAFE",supply:527419089},{id:"KRW-DRIFT",supply:286261798},{id:"KRW-AGLD",supply:77280001},{id:"KRW-PEPE",supply:420689899999995},{id:"KRW-BONK",supply:77231169593284},{id:"KRW-TRUMP",supply:199999617},{id:"KRW-LAYER",supply:21e7},{id:"KRW-ME",supply:113873532},{id:"KRW-BERA",supply:10748e4},{id:"KRW-MOVE",supply:24e8},{id:"KRW-VIRTUAL",supply:648018015},{id:"KRW-VANA",supply:30084e3},{id:"KRW-ANIME",supply:5538604656},{id:"KRW-SONIC",supply:36e7},{id:"KRW-VTHO",supply:86193318511},{id:"KRW-MOCA",supply:1783865250},{id:"KRW-BOUNTY",supply:508749999},{id:"KRW-RENDER",supply:517716590},{id:"KRW-TOKAMAK",supply:43841454}],H="https://api.coingecko.com/api/v3";function G(e,i){try{const t=`supply:${e.toUpperCase()}`;localStorage.setItem(t,JSON.stringify(i))}catch{}}async function X(e){const i=function(e){try{const i=`supply:${e.toUpperCase()}`,t=localStorage.getItem(i);return t?JSON.parse(t):null}catch{return null}}(e);if(i)return i;const t=await async function(e){try{var i;const t=await fetch(`${H}/search?query=${encodeURIComponent(e)}`),n=await t.json(),s=Array.isArray(null===n||void 0===n?void 0:n.coins)?n.coins:[];if(!s.length)return null;const r=e.toLowerCase();return(null===(i=s.find((e=>((null===e||void 0===e?void 0:e.symbol)||"").toLowerCase()===r))||s[0])||void 0===i?void 0:i.id)||null}catch{return null}}(e);if(!t){const i={supply:null,marketCapKRW:null};return G(e,i),i}const n=await async function(e){try{var i,t;const n=`${H}/coins/markets?vs_currency=krw&ids=${encodeURIComponent(e)}`,s=await fetch(n),r=await s.json(),l=Array.isArray(r)?r[0]:null;if(!l)return{supply:null,marketCapKRW:null};return{supply:Number(null!==(i=l.circulating_supply)&&void 0!==i?i:0)||null,marketCapKRW:Number(null!==(t=l.market_cap)&&void 0!==t?t:0)||null}}catch{return{supply:null,marketCapKRW:null}}}(t);return G(e,n),n}const z=e=>{const[i,t]=(0,n.useState)(new Map),s=(0,n.useMemo)((()=>{const e=new Map;for(const i of V){const t=i.id.startsWith("KRW-")?i.id.substring(4):i.id;e.set(`KRW-${t}`,{supply:i.supply,marketCapKRW:null})}return e}),[]);return(0,n.useEffect)((()=>{let i=!1;return async function(){const n=new Map(s),r=function(e){const i=new Set;for(const t of e)t.startsWith("KRW-")&&i.add(t.substring(4));return Array.from(i)}(e),l=r.filter((e=>!n.has(`KRW-${e}`)));for(let e=0;e<l.length;e+=5){const s=l.slice(e,e+5),r=await Promise.all(s.map((e=>X(e))));for(let e=0;e<s.length;e++){const i=s[e];n.set(`KRW-${i}`,r[e])}if(i)return;t(new Map(n))}i||t(new Map(n))}(),()=>{i=!0}}),[e,s]),{supplyMap:i}},J=e=>{const{data:i}=(0,r.I)(["bithumb","tickers",e],(async()=>{const i=await a(),t=[],n=new Set(e);for(const[e,s]of Object.entries(i)){if("date"===e)continue;const i=`KRW-${e}`;n.has(i)&&t.push(p(e,s))}return t}),{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e4,enabled:Array.isArray(e)&&e.length>0});return{tickerHttpData:i}};const Q=e=>{const[i,t]=(0,n.useState)(new Map),s=(0,n.useRef)(null),r=(0,n.useRef)([]),l=(0,n.useCallback)((()=>{if(s.current&&(s.current.readyState===WebSocket.OPEN||s.current.readyState===WebSocket.CONNECTING))return;const i=new WebSocket("wss://pubwss.bithumb.com/pub/ws");s.current=i,i.addEventListener("open",(()=>{const t=function(e){return e.filter((e=>e.startsWith("KRW-"))).map((e=>`${e.substring(4)}_KRW`))}(e);if(r.current=t,0===t.length)return;const n={type:"ticker",symbols:t,tickTypes:["24H"]};i.send(JSON.stringify(n))})),i.addEventListener("message",(e=>{try{const i=JSON.parse(e.data);if("ticker"!==(null===i||void 0===i?void 0:i.type)||null===i||void 0===i||!i.content)return;const n=function(e){try{const i=(null===e||void 0===e?void 0:e.symbol)||"";if(!i.endsWith("_KRW"))return null;const t=`KRW-${i.replace("_KRW","")}`,n=Number((null===e||void 0===e?void 0:e.closePrice)||0),s=Number((null===e||void 0===e?void 0:e.chgAmt)||0),r=Number((null===e||void 0===e?void 0:e.chgRate)||0),l=Number((null===e||void 0===e?void 0:e.value)||0),a=Number((null===e||void 0===e?void 0:e.volume)||0);return{market:t,trade_price:n,change:s>0?"RISE":s<0?"FALL":"EVEN",change_price:Math.abs(s),signed_change_price:s,change_rate:Math.abs(r)/100,signed_change_rate:r/100,acc_trade_price_24h:l,acc_trade_volume_24h:a}}catch{return null}}(i.content);if(!n)return;t((e=>{const i=new Map(e);return i.set(n.market,n),i}))}catch{}})),i.addEventListener("close",(()=>{s.current=null,setTimeout(l,1e3)}))}),[e]);(0,n.useEffect)((()=>(l(),()=>{var e;null===(e=s.current)||void 0===e||e.close(),s.current=null,r.current=[]})),[l]);const a=(0,n.useMemo)((()=>Array.from(i.values())),[i]);return{liveMap:i,liveList:a}},Z=e=>{const{data:i}=(0,r.I)(["bithumb","history",e],(()=>async function(e){const i=e.filter((e=>e.startsWith("KRW-"))).map((e=>`https://api.bithumb.com/public/candlestick/${e.substring(4)}_KRW/24h`));return await Promise.all(i.map((async e=>{const i=await fetch(e),t=await i.json(),n=null===t||void 0===t?void 0:t.status,s=Array.isArray(null===t||void 0===t?void 0:t.data)?t.data:[];if("0000"!==n||0===s.length)return[];const r=`KRW-${e.split("/").slice(-2,-1)[0].replace("_KRW","")}`;return s.map(((e,i)=>{const t=Number(e[0]),n=Number(e[1]),s=Number(e[2]),l=Number(e[3]),a=Number(e[4]),d=s-n,p=n?d/n:0;return{candle_date_time_kst:new Date(t).toISOString(),change_price:d,change_rate:p,high_price:l,low_price:a,market:r,opening_price:n,prev_closing_price:s,timestamp:t}}))})))}(e)),{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:6e4,enabled:Array.isArray(e)&&e.length>0});return{historyData:i}},Y=(0,n.lazy)((()=>Promise.all([t.e(19),t.e(815)]).then(t.bind(t,2815)))),q=s.Ay.a`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: #dadada;
    border-radius: 5px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div span + span {
    color: #808a9d;
  }
`,ee=s.Ay.td`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`,ie=s.Ay.td`
  text-align: start;
  vertical-align: middle;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: -2px;
  z-index: 10;
  background-color: #f8f8f8;
  @media (max-width: 1279px) {
    & {
      ::before {
        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        width: 30px;
        transform: translateX(100%);
        transition: box-shadow 0.3s;
        content: "";
        pointer-events: none;
      }
    }
  }
`,te=(s.Ay.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div span + span {
    color: #808a9d;
  }
`,s.Ay.div`
  display: flex;
  flex-direction: column;
  color: ${e=>"RISE"===e.change?"#c84a31":"FALL"===e.change?"#1261c4":"#222"};
  will-change: color;
`),ne=s.Ay.span`
  vertical-align: middle;
`,se=s.Ay.img`
  margin-right: 5px;
  max-width: 20px;
`;function re(e){let{count:i,nameData:t}=e;const s=(0,n.useMemo)((()=>(null===t||void 0===t?void 0:t.map((e=>e.market)).slice(i-10,i))||[]),[t,i]),{tickerHttpData:r}=J(s),{liveMap:l}=Q(s),{historyData:a}=Z(s),d=(0,n.useMemo)((()=>{const e=r||[];if(!e.length&&0===l.size)return e;const i=l;return e.map((e=>i.get(e.market)||e))}),[r,l]),{supplyMap:p}=z(s);return(0,u.jsx)(u.Fragment,{children:t&&d?s.map((e=>{var i;const s=t.find((i=>i.market===e)),r=p.get(e),l=null!==(i=null===r||void 0===r?void 0:r.supply)&&void 0!==i?i:null,o=(a||[]).find((i=>{var t;return(null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.market)===e}));return(0,u.jsxs)(he,{children:[(0,u.jsx)(ie,{children:(0,u.jsxs)(q,{href:`https://www.bithumb.com/trade/order/${e.substring(4)}_KRW`,target:"_blank",children:[(0,u.jsx)(se,{src:`https://static.upbit.com/logos/${e.substring(4)}.png`,alt:`${e.substring(4)} icon`,loading:"lazy",decoding:"async",onError:i=>{const t=i.currentTarget,n=`${e.substring(4).toLowerCase()}`;t.dataset.fallbackTried?t.style.display="none":(t.dataset.fallbackTried="1",t.src=`https://cryptoicons.org/api/icon/${n}/200`)}}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{children:s.english_name}),(0,u.jsx)("span",{children:e.substring(4)})]})]})}),(0,u.jsx)(ee,{children:(0,u.jsx)(B,{coinName:e,tickerList:d})}),(0,u.jsx)(ee,{children:(0,u.jsx)(D,{coinName:e,tickerList:d})}),(0,u.jsx)(ee,{children:(0,u.jsx)(P,{coinName:e,tickerList:d})}),(0,u.jsx)(ee,{children:(0,u.jsx)(F,{coinName:e,tickerList:d})}),(0,u.jsx)(ee,{children:(0,u.jsx)("span",{children:null!==l?`${l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${e.substring(4)}`:"-"})}),(0,u.jsx)(ee,{children:null!==l?(0,u.jsx)(U,{coinName:e,supply:l,tickerList:d}):(0,u.jsx)("span",{children:"-"})}),(0,u.jsx)(ee,{children:o?(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)("span",{children:"-"}),children:(0,u.jsx)(Y,{coinName:e,history:o,tickerList:d})}):(0,u.jsx)("span",{children:"-"})})]},e)})):(()=>{const e=[];for(let i=1;i<=10;i++)e.push((0,u.jsx)($,{},i));return e})()})}const le=n.memo(re),ae=s.Ay.section`
  width: 100%;
  margin-top: -5rem;
  padding: 4vw 2.7vw 15vw 2.7vw;
  border-radius: 5vw 5vw 0 0;
  background-color: #f8f8f8;
  position: relative;
  z-index: 3;
  @media (max-width: 1050px) {
    & {
      padding-bottom: 12rem;
    }
  }
`,de=s.Ay.div`
  display: flex;
  flex-direction: column;
`,pe=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 10px;
`,oe=s.Ay.input`
  font-family: "Apercu", sans-serif;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 14px;
  width: 240px;
  max-width: 48vw;
  background: #fff;
  &:focus {
    outline: none;
    border-color: #333;
  }
`,ce=s.Ay.div`
  @media (max-width: 1279px) {
    & {
      overflow-x: scroll;
    }
  }
`,ue=s.Ay.table`
  width: 100%;
  font-weight: 900;
  @media (max-width: 650px) {
    & {
      font-size: 2.3vw;
    }
  }
  @media (max-width: 480px) {
    & {
      font-size: 3vw;
    }
  }
`,he=s.Ay.tr`
  border-bottom: 1px solid #e2e2e2;
  :first-child {
    border-top: 1px solid #e2e2e2;
  }
`,ye=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  margin-top: 40px;
`,xe=s.Ay.button`
  font-family: "Apercu", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  font-size: 15px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  background-color: ${e=>e.selected?"#333":"transparent"};
  color: ${e=>e.selected?"#fff":"#333"};
  will-change: background-color, color;
`;function me(){const[e,i]=(0,n.useState)(1),[t,s]=(0,n.useState)(10),[r,l]=(0,n.useState)(""),[a,d]=(0,n.useState)((()=>"undefined"!==typeof window?window.innerWidth:1440));(0,n.useEffect)((()=>{const e=()=>d("undefined"!==typeof window?window.innerWidth:1440);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const p=e=>{i((()=>e))};(0,n.useEffect)((()=>{h(e)}),[e]);const h=e=>{s((()=>10*e))},{nameData:y}=o(!0),x=(0,n.useMemo)((()=>{if(!y)return[];const e=r.trim().toLowerCase();return e?y.filter((i=>{const t=i.market.substring(4).toLowerCase();return i.english_name.toLowerCase().includes(e)||t.includes(e)})):y}),[y,r]);(0,n.useEffect)((()=>{const t=Math.max(1,Math.ceil(x.length/10));e>t&&i(t)}),[x,e]);return(0,u.jsx)(ae,{children:(0,u.jsxs)(de,{children:[(0,u.jsxs)(c.fI,{children:[(0,u.jsx)(c.ku,{children:"CoinList"}),(0,u.jsxs)(c.y_,{children:["Combination of ",(0,u.jsx)("span",{style:{color:"#ff8200"},children:"bithumb"}),", React-Query"]})]}),(0,u.jsx)(pe,{children:(0,u.jsx)(oe,{placeholder:"Search by name or symbol",value:r,onChange:e=>{l(e.target.value),i(1)}})}),(0,u.jsx)(ce,{children:(0,u.jsxs)(ue,{children:[(0,u.jsx)(K,{}),(0,u.jsx)("thead",{children:(0,u.jsx)(j,{})}),(0,u.jsx)("tbody",{children:(0,u.jsx)(le,{count:t,nameData:x})})]})}),(0,u.jsx)(ye,{children:(()=>{const t=[],n=x,s=Math.max(1,Math.ceil(n.length/10)),r=a>=1280?9:a>=768?7:5,l=Math.min(e,s);l!==e&&i(l);const d=Math.max(1,Math.floor((r-3)/2)),o=Math.max(2,l-d),c=Math.min(s-1,l+d);return t.push((0,u.jsx)(xe,{onClick:()=>p(1),selected:1===l,children:"1"},1)),o>2&&t.push((0,u.jsx)("span",{children:"..."},"left-ellipsis")),((i,n)=>{for(let s=i;s<=n;s++)t.push((0,u.jsx)(xe,{onClick:()=>p(s),selected:s===e,children:s},s))})(o,c),c<s-1&&t.push((0,u.jsx)("span",{children:"..."},"right-ellipsis")),s>1&&t.push((0,u.jsx)(xe,{onClick:()=>p(s),selected:l===s,children:s},s)),t})()})]})})}const Re=n.memo(me)}}]);
//# sourceMappingURL=533.b9c301bd.chunk.js.map