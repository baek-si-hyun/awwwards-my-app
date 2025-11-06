"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[391],{9243:(e,i,n)=>{n.d(i,{n:()=>p});var s=n(5043);function p(e,i){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const p=(0,s.useDeferredValue)(i);return{filtered:(0,s.useMemo)((()=>{if(!e)return[];const i=p.trim().toLowerCase();if(!i)return e;if(n){const n=i.split(/\s+/).filter(Boolean);return e.filter((e=>{const i=`${e.market.substring(4).toLowerCase()} ${(e.english_name||"").toLowerCase()} ${(e.korean_name||"").toLowerCase()}`;return n.every((e=>i.includes(e)))}))}return e.filter((e=>{const n=e.market.substring(4).toLowerCase(),s=(e.english_name||"").toLowerCase(),p=(e.korean_name||"").toLowerCase();return s.includes(i)||p.includes(i)||n.includes(i)}))}),[e,p,n]),deferredQuery:p}}},321:(e,i,n)=>{n.d(i,{A:()=>t});var s=n(8974),p=n(6254);const t=e=>{const{data:i}=(0,s.I)(["bithumb","names"],p.Tr,{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e5});return{nameData:i}}},9904:(e,i,n)=>{n.d(i,{A:()=>t});var s=n(5043);function p(e){return e.filter((e=>e.startsWith("KRW-"))).map((e=>`${e.substring(4)}_KRW`))}const t=e=>{const[i,n]=(0,s.useState)(new Map),t=(0,s.useRef)(null),l=(0,s.useRef)([]),r=(0,s.useRef)([]),a=(0,s.useRef)(null),d=(0,s.useMemo)((()=>{const i=[...e].sort(),n=i.join(",");return r.current.join(",")!==n&&(r.current=i),r.current}),[e]),u=(0,s.useCallback)((()=>{if(t.current&&(t.current.readyState===WebSocket.OPEN||t.current.readyState===WebSocket.CONNECTING))return;a.current&&(clearTimeout(a.current),a.current=null);const e=new WebSocket("wss://pubwss.bithumb.com/pub/ws");t.current=e,e.addEventListener("open",(()=>{const i=p(d);if(l.current=i,0===i.length)return;const n={type:"ticker",symbols:i,tickTypes:["24H"]};e.send(JSON.stringify(n))})),e.addEventListener("message",(e=>{try{const i=JSON.parse(e.data);if("ticker"!==(null===i||void 0===i?void 0:i.type)||null===i||void 0===i||!i.content)return;const s=function(e){try{const i=(null===e||void 0===e?void 0:e.symbol)||"";if(!i.endsWith("_KRW"))return null;const n=`KRW-${i.replace("_KRW","")}`,s=Number((null===e||void 0===e?void 0:e.closePrice)||0),p=Number((null===e||void 0===e?void 0:e.chgAmt)||0),t=Number((null===e||void 0===e?void 0:e.chgRate)||0),l=Number((null===e||void 0===e?void 0:e.value)||0),r=Number((null===e||void 0===e?void 0:e.volume)||0);return{market:n,trade_price:s,change:p>0?"RISE":p<0?"FALL":"EVEN",change_price:Math.abs(p),signed_change_price:p,change_rate:Math.abs(t)/100,signed_change_rate:t/100,acc_trade_price_24h:l,acc_trade_volume_24h:r}}catch{return null}}(i.content);if(!s)return;n((e=>{const i=new Map(e);return i.set(s.market,s),i}))}catch{}})),e.addEventListener("close",(()=>{t.current=null,a.current||(a.current=setTimeout(u,1e3))})),e.addEventListener("error",(()=>{t.current=null}))}),[d]);(0,s.useEffect)((()=>(u(),()=>{var e;a.current&&(clearTimeout(a.current),a.current=null),null===(e=t.current)||void 0===e||e.close(),t.current=null,l.current=[]})),[u]),(0,s.useEffect)((()=>{const e=t.current;if(!e||e.readyState!==WebSocket.OPEN)return;const i=p(d),n=l.current;n.length===i.length&&n.every(((e,n)=>e===i[n]))||(l.current=i,0!==i.length&&e.send(JSON.stringify({type:"ticker",symbols:i,tickTypes:["24H"]})))}),[d]);const o=(0,s.useMemo)((()=>Array.from(i.values())),[i]);return{liveMap:i,liveList:o}}},9406:(e,i,n)=>{n.d(i,{A:()=>l});var s=n(5043),p=n(8974),t=n(6254);const l=e=>{const i=(0,s.useMemo)((()=>[...e].sort().join(",")),[e]),n=(0,s.useMemo)((()=>async()=>{const i=await(0,t.kz)(),n=new Set(e),s=[];for(const[e,p]of Object.entries(i)){if("date"===e)continue;const i=`KRW-${e}`;n.has(i)&&s.push((0,t.lA)(e,p))}return s}),[e]),{data:l}=(0,p.I)(["bithumb","tickers",i],n,{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:3e4,enabled:Array.isArray(e)&&e.length>0});return{tickerHttpData:l}}},7391:(e,i,n)=>{n.r(i),n.d(i,{default:()=>ke});var s=n(5043),p=n(4574),t=n(321),l=n(9243),r=n(2087),a=n(579);const d=p.Ay.col`
  width: 310px;
  min-width: auto;
  @media (max-width: 1279px) {
    & {
      box-shadow: 0px 0px 2px rgba(128, 138, 157, 0.12),
        0px 0px 24px rgba(128, 138, 157, 0.14);
    }
  }
`,u=p.Ay.col`
  width: 181px;
  min-width: auto;
`,o=p.Ay.col`
  width: 200px;
  min-width: auto;
`,c=p.Ay.col`
  width: 236px;
  min-width: auto;
`,y=p.Ay.col`
  width: 236px;
  min-width: auto;
`,R=p.Ay.col`
  width: 236px;
  min-width: auto;
`,h=p.Ay.col`
  width: 236px;
  min-width: auto;
`,m=p.Ay.col`
  width: 183px;
  min-width: auto;
`;const K=function(){return(0,a.jsxs)("colgroup",{children:[(0,a.jsx)(d,{}),(0,a.jsx)(u,{}),(0,a.jsx)(o,{}),(0,a.jsx)(c,{}),(0,a.jsx)(y,{}),(0,a.jsx)(R,{}),(0,a.jsx)(h,{}),(0,a.jsx)(m,{})]})},W=p.Ay.th`
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
`,x=p.Ay.th`
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
`;const g=function(){return(0,a.jsxs)(xe,{children:[(0,a.jsx)(W,{children:(0,a.jsx)("span",{children:"Name"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Price"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Change (24h)"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Volume (24h)"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Volume Price (24h)"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Circulating Supply"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Market Cap"})}),(0,a.jsx)(x,{children:(0,a.jsx)("span",{children:"Last 200 Days"})})]})},f=p.Ay.div`
  display: flex;
  align-items: center;
  padding: 10px;
`,A=p.Ay.td`
  padding: 3.5px;
  text-align: end;
  vertical-align: middle;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`,_=p.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: flex-end;
`,v=p.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,k=p.Ay.div`
  background: linear-gradient(90deg, #ececec 25%, #f5f5f5 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ${v} 1.2s ease-in-out infinite;
  border-radius: 5px;
  padding: 13px 10px;
`,b=(0,p.Ay)(k)`
  width: 100%;
`,w=(0,p.Ay)(k)`
  width: 100%;
`,j=(0,p.Ay)(k)`
  width: 40%;
`,E=(0,p.Ay)(k)`
  width: 50%;
`,N=(0,p.Ay)(k)`
  width: 90%;
`,O=(0,p.Ay)(k)`
  width: 90%;
`,T=(0,p.Ay)(k)`
  width: 90%;
`,L=(0,p.Ay)(k)`
  width: 90%;
`,C=(0,p.Ay)(k)`
  width: 100%;
  height: 50px;
  @media (max-width: 768px) {
    height: 44px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;const M=function(){return(0,a.jsxs)(xe,{children:[(0,a.jsx)(A,{children:(0,a.jsx)(f,{children:(0,a.jsx)(b,{})})}),(0,a.jsx)(A,{children:(0,a.jsx)(_,{children:(0,a.jsx)(w,{})})}),(0,a.jsx)(A,{children:(0,a.jsxs)(_,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(E,{})]})}),(0,a.jsx)(A,{children:(0,a.jsx)(_,{children:(0,a.jsx)(N,{})})}),(0,a.jsx)(A,{children:(0,a.jsx)(_,{children:(0,a.jsx)(O,{})})}),(0,a.jsx)(A,{children:(0,a.jsx)(_,{children:(0,a.jsx)(T,{})})}),(0,a.jsx)(A,{children:(0,a.jsx)(_,{children:(0,a.jsx)(L,{})})}),(0,a.jsx)(A,{children:(0,a.jsx)(C,{})})]})};const I=function(e){let{rows:i=10}=e;return(0,a.jsx)(a.Fragment,{children:Array.from({length:i}).map(((e,i)=>(0,a.jsx)(M,{},i)))})},S=[{id:"KRW-0G",supply:213243998},{id:"KRW-1INCH",supply:1399452470},{id:"KRW-AAVE",supply:15172172},{id:"KRW-ADA",supply:35860558784},{id:"KRW-AERGO",supply:489999996},{id:"KRW-2Z",supply:3471417500},{id:"KRW-A8",supply:390581151},{id:"KRW-ACE",supply:78054262},{id:"KRW-ACH",supply:9646645375},{id:"KRW-ACS",supply:43951350028},{id:"KRW-ADP",supply:4634832902},{id:"KRW-AERO",supply:902402800},{id:"KRW-AGI",supply:1565540034},{id:"KRW-AGLD",supply:86610001},{id:"KRW-AI16Z",supply:1099989950},{id:"KRW-AIOZ",supply:1214582309},{id:"KRW-AKT",supply:281622989},{id:"KRW-AL",supply:806353514},{id:"KRW-ALGO",supply:8790883874},{id:"KRW-ALICE",supply:99824840},{id:"KRW-AMP",supply:84282133547},{id:"KRW-ANIME",supply:5538604656},{id:"KRW-ANKR",supply:1e10},{id:"KRW-API3",supply:86421978},{id:"KRW-APM",supply:1520400320},{id:"KRW-APT",supply:720009347},{id:"KRW-AQT",supply:26806201},{id:"KRW-AR",supply:65652466},{id:"KRW-ARB",supply:5509691911},{id:"KRW-ARK",supply:192402028},{id:"KRW-ARPA",supply:151e7},{id:"KRW-ASTER",supply:20177e5},{id:"KRW-ASTR",supply:8209518895},{id:"KRW-ATH",supply:14234731752},{id:"KRW-AUCTION",supply:6590320},{id:"KRW-AUDIO",supply:1369179621},{id:"KRW-AVAIL",supply:2346136962},{id:"KRW-AVAX",supply:426967946},{id:"KRW-AWE",supply:1942420283},{id:"KRW-AXS",supply:166945514},{id:"KRW-AZIT",supply:382006641},{id:"KRW-B3",supply:30297828333},{id:"KRW-BABY",supply:981289697215},{id:"KRW-BARD",supply:225e6},{id:"KRW-BAT",supply:1495711957},{id:"KRW-BB",supply:851938359},{id:"KRW-BCH",supply:19948500},{id:"KRW-BEL",supply:8e7},{id:"KRW-BFC",supply:1386638564},{id:"KRW-BICO",supply:985e6},{id:"KRW-BIGTIME",supply:2016203703},{id:"KRW-BIOT",supply:8379845064},{id:"KRW-BLUE",supply:330125592},{id:"KRW-BLUR",supply:2586904895},{id:"KRW-BLY",supply:979999996},{id:"KRW-BNB",supply:137737632},{id:"KRW-BNT",supply:115188102},{id:"KRW-BONK",supply:82109642291657},{id:"KRW-BORA",supply:109975e4},{id:"KRW-BRETT",supply:9910236395},{id:"KRW-BSV",supply:19942866},{id:"KRW-BTC",supply:19944128},{id:"KRW-BTR",supply:343221964},{id:"KRW-BTT",supply:986061142857e3},{id:"KRW-C98",supply:185e6},{id:"KRW-CAMP",supply:2105620500},{id:"KRW-CBK",supply:98375665},{id:"KRW-CELO",supply:586791005},{id:"KRW-CELR",supply:7803424107},{id:"KRW-CFX",supply:5151034809},{id:"KRW-CKB",supply:47583789746},{id:"KRW-COOKIE",supply:627657489},{id:"KRW-CORE",supply:1016658368},{id:"KRW-COS",supply:5176458774},{id:"KRW-COTI",supply:2458248204},{id:"KRW-COW",supply:520479967},{id:"KRW-CPOOL",supply:836446855},{id:"KRW-CRTS",supply:49299676745},{id:"KRW-CRV",supply:1409085453},{id:"KRW-CTC",supply:496416053},{id:"KRW-CTK",supply:152108124},{id:"KRW-CTSI",supply:886160770},{id:"KRW-CTXC",supply:233706272},{id:"KRW-CYBER",supply:52850367},{id:"KRW-DAO",supply:25e7},{id:"KRW-DBR",supply:1924684519},{id:"KRW-DEEP",supply:4368147611},{id:"KRW-DOGE",supply:151635696384},{id:"KRW-DOT",supply:1629739714},{id:"KRW-DRIFT",supply:3842e5},{id:"KRW-DVI",supply:1e9},{id:"KRW-DYDX",supply:797576738},{id:"KRW-EDU",supply:599333666},{id:"KRW-EGG",supply:6e9},{id:"KRW-EGLD",supply:28760328},{id:"KRW-EL",supply:4901825155},{id:"KRW-ELF",supply:802659126},{id:"KRW-ELX",supply:26e7},{id:"KRW-ENA",supply:7423437500},{id:"KRW-ENJ",supply:1899989591},{id:"KRW-EPT",supply:3072196960},{id:"KRW-ES",supply:132647860},{id:"KRW-ETH",supply:120697275},{id:"KRW-ETHFI",supply:56409e4},{id:"KRW-EUL",supply:20693549},{id:"KRW-F",supply:2711524825},{id:"KRW-FANC",supply:1533725349},{id:"KRW-FCT",supply:1073815640},{id:"KRW-FET",supply:2360658252},{id:"KRW-FIDA",supply:990911173},{id:"KRW-FIL",supply:706355140},{id:"KRW-FLOCK",supply:238574396},{id:"KRW-FLOKI",supply:9540152485611},{id:"KRW-FLOW",supply:1618946500},{id:"KRW-FLR",supply:78176065500},{id:"KRW-FLUID",supply:77488209},{id:"KRW-FLUX",supply:395809346},{id:"KRW-FORT",supply:626790388},{id:"KRW-FRAX",supply:89513468},{id:"KRW-G",supply:102352e5},{id:"KRW-GALA",supply:46463610275},{id:"KRW-GAME",supply:1e9},{id:"KRW-GAS",supply:64992331},{id:"KRW-GLM",supply:1e9},{id:"KRW-GMT",supply:3111400155},{id:"KRW-GNO",supply:2589588},{id:"KRW-GRT",supply:10568995054},{id:"KRW-GTC",supply:96384728},{id:"KRW-H",supply:2176841216},{id:"KRW-HBAR",supply:42475229924},{id:"KRW-HEMI",supply:9775e5},{id:"KRW-HFT",supply:621117033},{id:"KRW-HIGH",supply:77591518},{id:"KRW-HIVE",supply:496463856},{id:"KRW-HOLO",supply:175115810456},{id:"KRW-HOME",supply:272e7},{id:"KRW-HOOK",supply:268082065},{id:"KRW-HUNT",supply:126167678},{id:"KRW-ICP",supply:53952e4},{id:"KRW-ICX",supply:1079484459},{id:"KRW-ID",supply:1198313905},{id:"KRW-ILV",supply:6672350},{id:"KRW-INIT",supply:173308930},{id:"KRW-INJ",supply:99970935},{id:"KRW-IO",supply:23378e4},{id:"KRW-IOST",supply:28875737516},{id:"KRW-IOTX",supply:9441368979},{id:"KRW-IP",supply:32e7},{id:"KRW-IQ",supply:23802092881},{id:"KRW-JASMY",supply:48419999999},{id:"KRW-JST",supply:99e8},{id:"KRW-JUP",supply:135e7},{id:"KRW-KAIA",supply:6160194728},{id:"KRW-KAITO",supply:241388889},{id:"KRW-KAVA",supply:1082847745},{id:"KRW-KERNEL",supply:286308020},{id:"KRW-KITE",supply:18e8},{id:"KRW-KSM",supply:17280573},{id:"KRW-KSP",supply:79651387},{id:"KRW-LA",supply:380105462},{id:"KRW-LAYER",supply:312514104},{id:"KRW-LBL",supply:2697909680},{id:"KRW-LINEA",supply:15482147850},{id:"KRW-LINK",supply:696849970},{id:"KRW-LM",supply:3268074832},{id:"KRW-MTL",supply:87659735},{id:"KRW-MAPO",supply:6102450962},{id:"KRW-MAV",supply:778401691},{id:"KRW-MBL",supply:18861887214},{id:"KRW-MBX",supply:261246075},{id:"KRW-ME",supply:167130947},{id:"KRW-MED",supply:10644041819},{id:"KRW-MERL",supply:1051977508},{id:"KRW-META",supply:22e6},{id:"KRW-METIS",supply:67e5},{id:"KRW-MEV",supply:1726645036},{id:"KRW-MEW",supply:88888888888},{id:"KRW-MINA",supply:1260158587},{id:"KRW-MIRA",supply:191244643},{id:"KRW-MLK",supply:51358e4},{id:"KRW-MNT",supply:3172988154},{id:"KRW-MOC",supply:438489688},{id:"KRW-MOCA",supply:3956637685},{id:"KRW-MORPHO",supply:355426978},{id:"KRW-MOVE",supply:28e8},{id:"KRW-NCT",supply:1885500782},{id:"KRW-NEAR",supply:1279134102},{id:"KRW-NEIRO",supply:420684524674},{id:"KRW-NEO",supply:705e5},{id:"KRW-NEWT",supply:215e6},{id:"KRW-NFT",supply:99999e10},{id:"KRW-NIL",supply:271106917},{id:"KRW-NMR",supply:7638556},{id:"KRW-OAS",supply:5538637805},{id:"KRW-OBSR",supply:6307080871},{id:"KRW-OBT",supply:1e9},{id:"KRW-OGN",supply:660168861},{id:"KRW-OM",supply:1100691177},{id:"KRW-ONDO",supply:3159107529},{id:"KRW-ONG",supply:429405966},{id:"KRW-ONT",supply:918864523},{id:"KRW-OPEN",supply:2155e5},{id:"KRW-ORBS",supply:4252498213},{id:"KRW-ORDER",supply:330899781},{id:"KRW-OXT",supply:997214634},{id:"KRW-PARTI",supply:422549998},{id:"KRW-PCI",supply:1055286017},{id:"KRW-PENDLE",supply:168524571},{id:"KRW-PENGU",supply:62860396090},{id:"KRW-PEPE",supply:420689899653543},{id:"KRW-PLUME",supply:3135813492},{id:"KRW-POKT",supply:2275691926},{id:"KRW-POLA",supply:534994747},{id:"KRW-POLYX",supply:1004480221},{id:"KRW-PONKE",supply:555544226},{id:"KRW-POPCAT",supply:979973185},{id:"KRW-POWR",supply:529761884},{id:"KRW-PROMPT",supply:365768148},{id:"KRW-PUFFER",supply:175949105},{id:"KRW-PUMP",supply:354e9},{id:"KRW-PUNDIX",supply:258386541},{id:"KRW-PYR",supply:44487720},{id:"KRW-QKC",supply:7177132182},{id:"KRW-QTUM",supply:105878230},{id:"KRW-RAD",supply:51575979},{id:"KRW-RAY",supply:265769182},{id:"KRW-RECALL",supply:823452996},{id:"KRW-RED",supply:1999956015},{id:"KRW-RENDER",supply:380297107},{id:"KRW-REQ",supply:999877924},{id:"KRW-RESOLV",supply:598444106},{id:"KRW-ROA",supply:258194181},{id:"KRW-RON",supply:249032279},{id:"KRW-RPL",supply:19946860},{id:"KRW-RSR",supply:5108664075},{id:"KRW-T",supply:10784054376},{id:"KRW-TAIKO",supply:187152136},{id:"KRW-TAO",supply:10238947},{id:"KRW-TAVA",supply:695877944},{id:"KRW-TDROP",supply:11958805856},{id:"KRW-TEMCO",supply:3973256413},{id:"KRW-TIA",supply:834629226},{id:"KRW-TON",supply:2486372644},{id:"KRW-TOSHI",supply:420674914395},{id:"KRW-THE",supply:1e9},{id:"KRW-TOWNS",supply:2109362819},{id:"KRW-TRUMP",supply:199999236},{id:"KRW-TT",supply:12834267074},{id:"KRW-TURBO",supply:69e9},{id:"KRW-UMA",supply:68947415},{id:"KRW-UNI",supply:630330528},{id:"KRW-UOS",supply:477450509},{id:"KRW-USD1",supply:2917337551},{id:"KRW-USDC",supply:75159613302},{id:"KRW-USDS",supply:9433925994},{id:"KRW-USDT",supply:183430228993},{id:"KRW-VANA",supply:30084e3},{id:"KRW-VET",supply:85985041177},{id:"KRW-VIRTUAL",supply:656082021},{id:"KRW-VTHO",supply:95859294672},{id:"KRW-W",supply:4893909434},{id:"KRW-WAVES",supply:119255560},{id:"KRW-WAXL",supply:106e7},{id:"KRW-WAXP",supply:377e7},{id:"KRW-WIF",supply:99887e4},{id:"KRW-WIKEN",supply:1053023953},{id:"KRW-WLD",supply:2270493868},{id:"KRW-WNCG",supply:548175863},{id:"KRW-WOO",supply:1925574381},{id:"KRW-XAI",supply:1824504636},{id:"KRW-XAN",supply:25e8},{id:"KRW-XCN",supply:36002056529},{id:"KRW-XEC",supply:19942992172580},{id:"KRW-XLM",supply:32079686976},{id:"KRW-XPLA",supply:849472463},{id:"KRW-XPR",supply:28205780261},{id:"KRW-XRP",supply:60107199237},{id:"KRW-XTER",supply:141630717},{id:"KRW-XTZ",supply:977621108},{id:"KRW-XVS",supply:17e6},{id:"KRW-YGG",supply:677780308},{id:"KRW-ZETA",supply:1120729167},{id:"KRW-ZK",supply:8235057425},{id:"KRW-ZKC",supply:200937056},{id:"KRW-ZRC",supply:2194923458},{id:"KRW-ZRO",supply:204090997},{id:"KRW-ZRX",supply:848396563},{id:"KRW-ZTX",supply:4204949769}],P=(()=>{const e=new Map;for(const i of S)e.set(i.id,i.supply);return e})(),B=e=>{const i=(0,s.useMemo)((()=>[...e].sort()),[e]),[n,p]=(0,s.useState)(new Map),[t,l]=(0,s.useState)((()=>new Map)),[r,a]=(0,s.useState)((()=>new Map));return(0,s.useEffect)((()=>{const e=new AbortController;return(async()=>{try{const n=await fetch("https://api.bithumb.com/public/ticker/ALL_KRW",{method:"GET",signal:e.signal});if(!n.ok)return;const s=await n.json(),p=null===s||void 0===s?void 0:s.data;if(!p)return;const t=new Map;for(const[e,l]of Object.entries(p)){var i;if(!l||"date"===e)continue;const n=parseFloat(null!==(i=null===l||void 0===l?void 0:l.closing_price)&&void 0!==i?i:"");Number.isFinite(n)&&t.set(e.toUpperCase(),n)}e.signal.aborted||l(t)}catch(n){0}})(),()=>e.abort()}),[]),(0,s.useEffect)((()=>{const e=new AbortController;return(async()=>{try{const n=[1,2,3],s=await Promise.all(n.map((async i=>{try{const n=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&per_page=250&page=${i}&sparkline=false&price_change_percentage=24h`,{signal:e.signal});return n.ok?await n.json():[]}catch{return[]}}))),p=new Map;for(const e of s)for(const n of e){var i;if(!n)continue;const e=null===(i=n.symbol)||void 0===i?void 0:i.toUpperCase(),s="number"===typeof n.circulating_supply?n.circulating_supply:Number(n.circulating_supply);!e||!Number.isFinite(s)||s<=0||(p.has(e)||p.set(e,s))}e.signal.aborted||a(p)}catch(n){0}})(),()=>e.abort()}),[]),(0,s.useEffect)((()=>{const e=new Map;for(const n of i){if(!n.startsWith("KRW-"))continue;const i=n.substring(4).toUpperCase(),s=r.get(i),p=P.get(n),l=void 0!==s?s:void 0!==p?p:null,a=t.get(i),d="number"===typeof l&&Number.isFinite(l)&&void 0!==a&&Number.isFinite(a)?l*a:null;e.set(n,{supply:l,marketCapKRW:d})}p(e)}),[i,t,r]),{supplyMap:n}};var D=n(9406),F=n(9904),X=n(8974),H=n(6254);const G=e=>{const i=(0,s.useMemo)((()=>[...e].sort().join(",")),[e]),{data:n}=(0,X.I)(["bithumb","history",i],(()=>(0,H.ai)(e)),{refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:6e4,enabled:Array.isArray(e)&&e.length>0});return{historyData:n}};var U=n(3216);const V=e=>{let{coinName:i,tickerList:n}=e;if(n){var s;const e=null===(s=n.find((e=>e.market===i&&e),0))||void 0===s?void 0:s.trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,a.jsxs)("span",{children:["\u20a9",e||0]})}return(0,a.jsx)(a.Fragment,{})},$=p.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 3px;
  color: ${e=>"RISE"===e.change?"#c84a31":"FALL"===e.change?"#1261c4":"#222222"};
`,z=p.Ay.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`,Z=e=>{let{coinName:i,tickerList:n}=e;if(n){var s,p,t;const e=null===(s=n.find((e=>e.market===i&&e),0))||void 0===s?void 0:s.change_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),l=null===(p=n.find((e=>e.market===i&&e),"EVEN"))||void 0===p?void 0:p.change,r=null===(t=n.find((e=>e.market===i&&e),0))||void 0===t?void 0:t.change_rate;return(0,a.jsxs)($,{change:l||"EVEN",children:[(0,a.jsxs)("span",{children:["\u20a9",e||0]}),(0,a.jsxs)("span",{children:["EVEN"===l?(0,a.jsx)(z,{className:"material-symbols-outlined",children:"check_indeterminate_small"}):"RISE"===l?(0,a.jsx)(z,{className:"material-symbols-outlined",children:"arrow_drop_up"}):"FALL"===l?(0,a.jsx)(z,{className:"material-symbols-outlined",children:"arrow_drop_down"}):(0,a.jsx)(z,{className:"material-symbols-outlined",children:"trending_flat"}),(100*r||0).toFixed(2),"%"]})]})}return(0,a.jsx)($,{change:"EVEN"})},Y=e=>{let{coinName:i,tickerList:n}=e;if(n){var s;const e=null===(s=n.find((e=>e.market===i&&e),0))||void 0===s?void 0:s.acc_trade_price_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,a.jsxs)("span",{children:["\u20a9",e||0]})}return(0,a.jsx)(a.Fragment,{})},Q=e=>{let{coinName:i,tickerList:n}=e;if(n){var s;const e=null===(s=n.find((e=>e.market===i&&e),0))||void 0===s?void 0:s.acc_trade_volume_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,a.jsxs)("span",{children:[e||0," ",i.substring(4)||""]})}return(0,a.jsx)(a.Fragment,{})};const J=function(e){let{coinName:i,supply:n,marketCapKRW:s,tickerList:p}=e;if("number"===typeof s&&s>0)return(0,a.jsxs)("span",{children:["\u20a9",s.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]});if(null!==n){var t;const e=((null===(t=p.find((e=>e.market===i)))||void 0===t?void 0:t.trade_price)||0)*n;if(e>0)return(0,a.jsxs)("span",{children:["\u20a9",e.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})}return(0,a.jsx)("span",{children:"-"})},q=p.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,ee=p.Ay.div`
  width: 164px;
  height: 50px;
  background: linear-gradient(90deg, #ececec 25%, #f5f5f5 37%, #ececec 63%);
  background-size: 400% 100%;
  animation: ${q} 1.2s ease-in-out infinite;
  border-radius: 5px;
  @media (max-width: 1279px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 48vw;
    height: 44px;
  }
  @media (max-width: 480px) {
    width: 56vw;
    height: 40px;
  }
`;const ie=function(){return(0,a.jsx)(ee,{})};var ne=n(2997);const se=(0,s.lazy)((()=>Promise.all([n.e(19),n.e(815)]).then(n.bind(n,2815)))),pe=p.Ay.td`
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
`,te=p.Ay.div`
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
`,le=p.Ay.td`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`,re=p.Ay.span`
  display: inline-flex;
  margin-right: 5px;
`;function ae(e){let{data:i,tickerList:n,supply:p,marketCapKRW:t,history:l}=e;const r=(0,U.Zp)(),d=i.market,u=(0,s.useMemo)((()=>d.substring(4)),[d]),o=(0,s.useMemo)((()=>null===p?"-":`${p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${u}`),[p,u]),c=(0,s.useCallback)((()=>{r(`/coin/${d}`)}),[r,d]),y=(0,s.useMemo)((()=>[`https://static.upbit.com/logos/${u}.png`,`https://cryptoicons.org/api/icon/${u.toLowerCase()}/200`]),[u]),R=(0,s.useMemo)((()=>({cursor:"pointer"})),[]);return(0,a.jsxs)(xe,{onClick:c,style:R,children:[(0,a.jsx)(pe,{children:(0,a.jsxs)(te,{children:[(0,a.jsx)(re,{children:(0,a.jsx)(ne.A,{w:20,h:20,round:!0,alt:`${u} icon`,sources:y})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:i.english_name}),(0,a.jsx)("span",{children:u})]})]})}),(0,a.jsx)(le,{children:(0,a.jsx)(V,{coinName:d,tickerList:n})}),(0,a.jsx)(le,{children:(0,a.jsx)(Z,{coinName:d,tickerList:n})}),(0,a.jsx)(le,{children:(0,a.jsx)(Q,{coinName:d,tickerList:n})}),(0,a.jsx)(le,{children:(0,a.jsx)(Y,{coinName:d,tickerList:n})}),(0,a.jsx)(le,{children:(0,a.jsx)("span",{children:o})}),(0,a.jsx)(le,{children:(0,a.jsx)(J,{coinName:d,supply:p,marketCapKRW:t,tickerList:n})}),(0,a.jsx)(le,{children:l?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(ie,{}),children:(0,a.jsx)(se,{coinName:d,history:l,tickerList:n})}):(0,a.jsx)(ie,{})})]})}const de=(0,s.memo)(ae);function ue(e){let{nameData:i}=e;const n=(0,s.useMemo)((()=>(null===i||void 0===i?void 0:i.map((e=>e.market)))||[]),[i]),{tickerHttpData:p}=(0,D.A)(n),{liveMap:t}=(0,F.A)(n),{historyData:l}=G(n),r=(0,s.useMemo)((()=>{const e=p||[];if(!e.length&&0===t.size)return e;const i=t;return e.map((e=>i.get(e.market)||e))}),[p,t]),{supplyMap:d}=B(n),u=(0,s.useMemo)((()=>{const e=[];for(const n of l||[]){var i;const s=null===n||void 0===n||null===(i=n[0])||void 0===i?void 0:i.market;s&&e.push([s,n])}return new Map(e)}),[l]);return i&&r?(0,a.jsx)(a.Fragment,{children:i.map((e=>{var i;const n=e.market,s=d.get(n),p=u.get(n);return(0,a.jsx)(de,{data:e,tickerList:r,supply:null!==(i=null===s||void 0===s?void 0:s.supply)&&void 0!==i?i:null,marketCapKRW:null===s||void 0===s?void 0:s.marketCapKRW,history:p},n)}))}):(0,a.jsx)(I,{rows:10})}const oe=s.memo(ue);var ce=n(6344);const ye=p.Ay.section`
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
`,Re=p.Ay.div`
  display: flex;
  flex-direction: column;
`,he=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 10px;
`,me=p.Ay.input`
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
`,Ke=p.Ay.div`
  @media (max-width: 1279px) {
    & {
      overflow-x: scroll;
    }
  }
`,We=p.Ay.table`
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
`,xe=p.Ay.tr`
  border-bottom: 1px solid #e2e2e2;
  :first-child {
    border-top: 1px solid #e2e2e2;
  }
`,ge=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  margin-top: 40px;
`,fe=p.Ay.button`
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
`,Ae=(0,p.Ay)(ne.A)`
  height: 2em;
  display: inline-block;
  vertical-align: -0.1em;
  margin: 0 0.2em;
`;function _e(){const[e,i]=(0,s.useState)(1),n=10,[p,d]=(0,s.useState)(""),[u,o]=(0,s.useState)((()=>"undefined"!==typeof window?window.innerWidth:1440)),c=(0,s.useCallback)((()=>{o("undefined"!==typeof window?window.innerWidth:1440)}),[]);(0,s.useEffect)((()=>(window.addEventListener("resize",c),()=>window.removeEventListener("resize",c))),[c]);const y=(0,s.useCallback)((e=>{i(e)}),[]),{nameData:R}=(0,t.A)(!0),{filtered:h}=(0,l.n)(R,p,!1),m=(0,s.useCallback)((e=>{d(e.target.value),i(1)}),[]);(0,s.useEffect)((()=>{const s=Math.max(1,Math.ceil(h.length/n));e>s&&i(s)}),[h,e,n]);const W=(0,s.useMemo)((()=>{const i=(e-1)*n;return h.slice(i,i+n)}),[h,e,n]),x=(0,s.useMemo)((()=>{const i=[],s=h,p=Math.max(1,Math.ceil(s.length/n)),t=u>=1280?9:u>=768?7:5,l=Math.min(e,p),r=Math.max(1,Math.floor((t-3)/2)),d=Math.max(2,l-r),o=Math.min(p-1,l+r);i.push((0,a.jsx)(fe,{onClick:()=>y(1),selected:1===l,children:"1"},1)),d>2&&i.push((0,a.jsx)("span",{children:"..."},"left-ellipsis"));for(let e=d;e<=o;e++)i.push((0,a.jsx)(fe,{onClick:()=>y(e),selected:e===l,children:e},e));return o<p-1&&i.push((0,a.jsx)("span",{children:"..."},"right-ellipsis")),p>1&&i.push((0,a.jsx)(fe,{onClick:()=>y(p),selected:l===p,children:p},p)),i}),[h,e,n,u,y]);return(0,a.jsx)(ye,{children:(0,a.jsxs)(Re,{children:[(0,a.jsxs)(r.fI,{children:[(0,a.jsx)(r.ku,{children:"CoinList"}),(0,a.jsxs)(r.y_,{children:["Combination of"," ",(0,a.jsx)(Ae,{sources:ce.n.COMMON.BITHUMB_LOGO,alt:"Bithumb",fullHeight:!0}),", React-Query"]})]}),(0,a.jsx)(he,{children:(0,a.jsx)(me,{placeholder:"Search by name (EN/KR) or symbol",value:p,onChange:m})}),(0,a.jsx)(Ke,{children:(0,a.jsxs)(We,{children:[(0,a.jsx)(K,{}),(0,a.jsx)("thead",{children:(0,a.jsx)(g,{})}),(0,a.jsx)("tbody",{children:(0,a.jsx)(oe,{nameData:W})})]})}),(0,a.jsx)(ge,{children:x})]})})}const ve=s.memo(_e);const ke=function(){return(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)("main",{children:(0,a.jsx)(ve,{})})})}},6254:(e,i,n)=>{n.d(i,{kz:()=>t,ai:()=>a,Tr:()=>l,vc:()=>d,lA:()=>r});const s={BTC:{english_name:"Bitcoin",korean_name:"\ube44\ud2b8\ucf54\uc778"},ETH:{english_name:"Ethereum",korean_name:"\uc774\ub354\ub9ac\uc6c0"},XRP:{english_name:"XRP",korean_name:"\ub9ac\ud50c"},ADA:{english_name:"Cardano",korean_name:"\uc5d0\uc774\ub2e4"},SOL:{english_name:"Solana",korean_name:"\uc194\ub77c\ub098"},DOGE:{english_name:"Dogecoin",korean_name:"\ub3c4\uc9c0\ucf54\uc778"},DOT:{english_name:"Polkadot",korean_name:"\ud3f4\uce74\ub2f7"},TRX:{english_name:"TRON",korean_name:"\ud2b8\ub860"},LTC:{english_name:"Litecoin",korean_name:"\ub77c\uc774\ud2b8\ucf54\uc778"},BCH:{english_name:"Bitcoin Cash",korean_name:"\ube44\ud2b8\ucf54\uc778\uce90\uc2dc"},EOS:{english_name:"EOS",korean_name:"\uc774\uc624\uc2a4"},XLM:{english_name:"Stellar",korean_name:"\uc2a4\ud154\ub77c\ub8e8\uba58"},LINK:{english_name:"Chainlink",korean_name:"\uccb4\uc778\ub9c1\ud06c"},MATIC:{english_name:"Polygon",korean_name:"\ud3f4\ub9ac\uace4"},SHIB:{english_name:"Shiba Inu",korean_name:"\uc2dc\ubc14\uc774\ub204"},APT:{english_name:"Aptos",korean_name:"\uc571\ud1a0\uc2a4"},AVAX:{english_name:"Avalanche",korean_name:"\uc544\ubc1c\ub780\uccb4"},NEAR:{english_name:"NEAR Protocol",korean_name:"\ub2c8\uc5b4\ud504\ub85c\ud1a0\ucf5c"},SAND:{english_name:"The Sandbox",korean_name:"\ub354 \uc0cc\ub4dc\ubc15\uc2a4"},AXS:{english_name:"Axie Infinity",korean_name:"\uc5d1\uc2dc\uc778\ud53c\ub2c8\ud2f0"},FLOW:{english_name:"Flow",korean_name:"\ud50c\ub85c\uc6b0"},GRT:{english_name:"The Graph",korean_name:"\ub354 \uadf8\ub798\ud504"},AAVE:{english_name:"Aave",korean_name:"\uc5d0\uc774\ube0c"},UNI:{english_name:"Uniswap",korean_name:"\uc720\ub2c8\uc2a4\uc651"},KNC:{english_name:"Kyber Network",korean_name:"\uce74\uc774\ubc84\ub124\ud2b8\uc6cc\ud06c"},ICX:{english_name:"ICON",korean_name:"\uc544\uc774\ucf58"},KLAY:{english_name:"Klaytn",korean_name:"\ud074\ub808\uc774\ud2bc"},QTUM:{english_name:"Qtum",korean_name:"\ud000\ud140"},ETC:{english_name:"Ethereum Classic",korean_name:"\uc774\ub354\ub9ac\uc6c0\ud074\ub798\uc2dd"},XEM:{english_name:"NEM",korean_name:"\ub134"},XTZ:{english_name:"Tezos",korean_name:"\ud14c\uc870\uc2a4"},OMG:{english_name:"OMG Network",korean_name:"\uc624\ubbf8\uc138\uace0"},ZIL:{english_name:"Zilliqa",korean_name:"\uc9c8\ub9ac\uce74"},IOST:{english_name:"IOST",korean_name:"\uc544\uc774\uc624\uc5d0\uc2a4\ud2f0"},IOTA:{english_name:"IOTA",korean_name:"\uc544\uc774\uc624\ud0c0"},SXP:{english_name:"Solar",korean_name:"\uc194\ub77c"},HIVE:{english_name:"Hive",korean_name:"\ud558\uc774\ube0c"},KAVA:{english_name:"Kava",korean_name:"\uce74\ubc14"},LINK2:{english_name:"Chainlink",korean_name:"\uccb4\uc778\ub9c1\ud06c"}},p="https://api.bithumb.com/public";async function t(){const e=await fetch(`${p}/ticker/ALL_KRW`),i=await e.json();return"0000"!==i.status?{}:i.data||{}}async function l(){const e=await t();return Object.keys(e).filter((e=>"date"!==e)).map((e=>{const i=s[e]||{english_name:e,korean_name:e};return{market:`KRW-${e}`,english_name:i.english_name,korean_name:i.korean_name}}))}function r(e,i){const n=`KRW-${e}`,s=Number((null===i||void 0===i?void 0:i.closing_price)||0),p=Number((null===i||void 0===i?void 0:i.fluctate_24H)||0),t=Number((null===i||void 0===i?void 0:i.fluctate_rate_24H)||0),l=p>0?"RISE":p<0?"FALL":"EVEN",r=Number((null===i||void 0===i?void 0:i.acc_trade_value_24H)||0),a=Number((null===i||void 0===i?void 0:i.acc_trade_volume_24H)||0),d=Number((null===i||void 0===i?void 0:i.max_price)||0),u=Number((null===i||void 0===i?void 0:i.min_price)||0);return{market:n,trade_price:s,change:l,change_price:Math.abs(p),signed_change_price:p,change_rate:Math.abs(t)/100,signed_change_rate:t/100,acc_trade_price_24h:r,acc_trade_volume_24h:a,high_price_24h:d,low_price_24h:u}}async function a(e){const i=e.filter((e=>e.startsWith("KRW-"))).map((e=>`https://api.bithumb.com/public/candlestick/${e.substring(4)}_KRW/24h`));return await Promise.all(i.map((async e=>{const i=await fetch(e),n=await i.json(),s=null===n||void 0===n?void 0:n.status,p=Array.isArray(null===n||void 0===n?void 0:n.data)?n.data:[];if("0000"!==s||0===p.length)return[];const t=`KRW-${e.split("/").slice(-2,-1)[0].replace("_KRW","")}`;return p.map(((e,i)=>{var n;const s=Number(e[0]),p=Number(e[1]),l=Number(e[2]),r=Number(e[3]),a=Number(e[4]),d=Number(null!==(n=e[5])&&void 0!==n?n:0),u=l-p,o=p?u/p:0;return{candle_date_time_kst:new Date(s).toISOString(),change_price:u,change_rate:o,high_price:r,low_price:a,market:t,opening_price:p,prev_closing_price:l,timestamp:s,volume:d}}))})))}async function d(e){const i=function(e){const[i,n]=e.split("-");return`${n}_${i}`}(e),n=await fetch(`${p}/orderbook/${i}`),s=await n.json(),t=(null===s||void 0===s?void 0:s.data)||{};return{bids:Array.isArray(null===t||void 0===t?void 0:t.bids)?t.bids.map((e=>({price:Number(e.price),quantity:Number(e.quantity)}))):[],asks:Array.isArray(null===t||void 0===t?void 0:t.asks)?t.asks.map((e=>({price:Number(e.price),quantity:Number(e.quantity)}))):[]}}}}]);
//# sourceMappingURL=391.e6e09663.chunk.js.map