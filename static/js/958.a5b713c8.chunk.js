"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[958],{6958:function(n,i,e){e.r(i),e.d(i,{default:function(){return We}});var t,r,s,a,d,l,c,o,p=e(168),u=e(4088),h=e(657),x=e(4165),f=e(1413),g=e(5861),m=e(9439),y=e(8404),j=e(2791),v=e(184),w=u.ZP.col(t||(t=(0,p.Z)(["\n  width: 310px;\n  min-width: auto;\n  @media (max-width: 1279px) {\n    & {\n      box-shadow: 0px 0px 2px rgba(128, 138, 157, 0.12),\n        0px 0px 24px rgba(128, 138, 157, 0.14);\n    }\n  }\n"]))),b=u.ZP.col(r||(r=(0,p.Z)(["\n  width: 181px;\n  min-width: auto;\n"]))),Z=u.ZP.col(s||(s=(0,p.Z)(["\n  width: 200px;\n  min-width: auto;\n"]))),R=u.ZP.col(a||(a=(0,p.Z)(["\n  width: 236px;\n  min-width: auto;\n"]))),W=u.ZP.col(d||(d=(0,p.Z)(["\n  width: 236px;\n  min-width: auto;\n"]))),K=u.ZP.col(l||(l=(0,p.Z)(["\n  width: 236px;\n  min-width: auto;\n"]))),k=u.ZP.col(c||(c=(0,p.Z)(["\n  width: 236px;\n  min-width: auto;\n"]))),P=u.ZP.col(o||(o=(0,p.Z)(["\n  width: 183px;\n  min-width: auto;\n"])));var S,E,T=function(){return(0,v.jsxs)("colgroup",{children:[(0,v.jsx)(w,{}),(0,v.jsx)(b,{}),(0,v.jsx)(Z,{}),(0,v.jsx)(R,{}),(0,v.jsx)(W,{}),(0,v.jsx)(K,{}),(0,v.jsx)(k,{}),(0,v.jsx)(P,{})]})},L=u.ZP.th(S||(S=(0,p.Z)(['\n  text-align: start;\n  vertical-align: middle;\n  padding: 10px;\n  padding-left: 1vw;\n  position: sticky;\n  top: 0;\n  left: -2px;\n  z-index: 10;\n  background-color: #f8f8f8;\n  @media (max-width: 1279px) {\n    & {\n      ::before {\n        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: -1px;\n        width: 30px;\n        transform: translateX(100%);\n        transition: box-shadow 0.3s;\n        content: "";\n        pointer-events: none;\n      }\n    }\n  }\n']))),N=u.ZP.th(E||(E=(0,p.Z)(["\n  text-align: end;\n  vertical-align: middle;\n  padding: 10px;\n  font-weight: 900;\n  white-space: nowrap;\n  :last-child {\n    padding-right: 1vw;\n  }\n"])));var I=function(){return(0,v.jsxs)(Hn,{children:[(0,v.jsx)(L,{children:(0,v.jsx)("span",{children:"Name"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Price"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Change (24h)"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Volume (24h)"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Volume Price (24h)"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Circulating Supply"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Market Cap"})}),(0,v.jsx)(N,{children:(0,v.jsx)("span",{children:"Last 200 Days"})})]})};function A(){return(A=(0,g.Z)((0,x.Z)().mark((function n(){var i;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.upbit.com/v1/market/all?isDetails=false");case 2:return i=n.sent,n.next=5,i.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return(O=(0,g.Z)((0,x.Z)().mark((function n(i){var e,t,r,s,a,d;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=[],t=0;case 2:if(!(t<i.length)){n.next=15;break}return n.next=5,fetch("https://api.upbit.com/v1/ticker?markets=".concat(i[t]));case 5:return r=n.sent,n.next=8,r.json();case 8:s=n.sent,a=(0,m.Z)(s,1),d=a[0],e.push(d);case 12:t++,n.next=2;break;case 15:return n.abrupt("return",e);case 16:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(){return(_=(0,g.Z)((0,x.Z)().mark((function n(i){var e,t,r,s;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=[],t=0;case 2:if(!(t<i.length)){n.next=13;break}return n.next=5,fetch("https://api.upbit.com/v1/candles/days?market=".concat(i[t],"&count=200&convertingPriceUnit=KRW"));case 5:return r=n.sent,n.next=8,r.json();case 8:s=n.sent,e.push(s);case 10:t++,n.next=2;break;case 13:return n.abrupt("return",e);case 14:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var z,D,C,U,B,X,M,F,V,G,H,Q,J=[{id:"KRW-BLUR",supply:759758180},{id:"KRW-ADA",supply:34970155984},{id:"KRW-LSK",supply:128900445},{id:"KRW-SUI",supply:654546806},{id:"KRW-BTC",supply:19427887},{id:"KRW-ETH",supply:120207913},{id:"KRW-NEO",supply:70538831},{id:"KRW-MTL",supply:66588888},{id:"KRW-XRP",supply:52544091958},{id:"KRW-ETC",supply:141932150},{id:"KRW-OMG",supply:140245398},{id:"KRW-SNT",supply:3852753076},{id:"KRW-WAVES",supply:111934114},{id:"KRW-XEM",supply:8999999999},{id:"KRW-QTUM",supply:104735928},{id:"KRW-STEEM",supply:438694573},{id:"KRW-XLM",supply:27063512562},{id:"KRW-ARDR",supply:998999495},{id:"KRW-ARK",supply:174218126},{id:"KRW-STORJ",supply:379362178},{id:"KRW-GRS",supply:82953344},{id:"KRW-GRT",supply:9075404128},{id:"KRW-POWR",supply:480051412},{id:"KRW-BTG",supply:17513924},{id:"KRW-ICX",supply:961311974},{id:"KRW-EOS",supply:1096596667},{id:"KRW-TRX",supply:89809370915},{id:"KRW-SC",supply:54594965975},{id:"KRW-ONT",supply:875249524},{id:"KRW-ZIL",supply:15867699447},{id:"KRW-POLYX",supply:690812174},{id:"KRW-ZRX",supply:847496055},{id:"KRW-LOOM",supply:1209425698},{id:"KRW-BCH",supply:19447231},{id:"KRW-BAT",supply:1489309694},{id:"KRW-IOST",supply:18588745668},{id:"KRW-RFR",supply:4999180100},{id:"KRW-CVC",supply:1e9},{id:"KRW-IQ",supply:16025059730},{id:"KRW-IOTA",supply:2779530283},{id:"KRW-HIFI",supply:95012805},{id:"KRW-ONG",supply:347286772},{id:"KRW-GAS",supply:10128375},{id:"KRW-UPP",supply:482834811},{id:"KRW-ELF",supply:622340178},{id:"KRW-KNC",supply:170707123},{id:"KRW-BSV",supply:19266077},{id:"KRW-THETA",supply:1e9},{id:"KRW-QKC",supply:6399906497},{id:"KRW-BTT",supply:951421714286e3},{id:"KRW-MOC",supply:390489688},{id:"KRW-ENJ",supply:1e9},{id:"KRW-TFUEL",supply:6206395131},{id:"KRW-MANA",supply:1893095371},{id:"KRW-ANKR",supply:1e10},{id:"KRW-AERGO",supply:43e7},{id:"KRW-ATOM",supply:346608690},{id:"KRW-TT",supply:10309503781},{id:"KRW-CRE",supply:9806931560},{id:"KRW-MBL",supply:16345372888},{id:"KRW-WAXP",supply:3326517968},{id:"KRW-HBAR",supply:32287565809},{id:"KRW-MED",supply:6908642520},{id:"KRW-MLK",supply:294958754},{id:"KRW-SBD",supply:12289431},{id:"KRW-STPT",supply:1942420283},{id:"KRW-ORBS",supply:3413370622},{id:"KRW-VET",supply:72714516834},{id:"KRW-CHZ",supply:7039695858},{id:"KRW-STMX",supply:1e10},{id:"KRW-DKA",supply:3027916667},{id:"KRW-HIVE",supply:500749243},{id:"KRW-KAVA",supply:624984337},{id:"KRW-AHT",supply:3880335939},{id:"KRW-LINK",supply:538099970},{id:"KRW-SEI",supply:18e8},{id:"KRW-XTZ",supply:932500082},{id:"KRW-BORA",supply:99375e4},{id:"KRW-JST",supply:890208e4},{id:"KRW-CRO",supply:25263013692},{id:"KRW-TON",supply:39920279},{id:"KRW-SXP",supply:570776325},{id:"KRW-HUNT",supply:198912688},{id:"KRW-PLA",supply:560128667},{id:"KRW-DOT",supply:1204118827},{id:"KRW-SRM",supply:263244669},{id:"KRW-MVL",supply:23302958863},{id:"KRW-STRAX",supply:151084467},{id:"KRW-AQT",supply:26640785},{id:"KRW-GLM",supply:1e9},{id:"KRW-SSX",supply:2810599815},{id:"KRW-META",supply:1687369624},{id:"KRW-FCT2",supply:706726930},{id:"KRW-CBK",supply:75635409},{id:"KRW-SAND",supply:1869731926},{id:"KRW-HPO",supply:913409273},{id:"KRW-HUM",supply:913409274},{id:"KRW-DOGE",supply:140148776384},{id:"KRW-STRK",supply:3808965},{id:"KRW-PUNDIX",supply:258491637},{id:"KRW-FLOW",supply:10362e5},{id:"KRW-DAWN",supply:74464266},{id:"KRW-AXS",supply:119284894},{id:"KRW-STX",supply:1391076849},{id:"KRW-XEC",supply:19441285923293},{id:"KRW-SOL",supply:402772504},{id:"KRW-MATIC",supply:9319469069},{id:"KRW-NU",supply:703e6},{id:"KRW-AAVE",supply:14472451},{id:"KRW-1INCH",supply:947781921},{id:"KRW-ALGO",supply:7650952566},{id:"KRW-NEAR",supply:931291384},{id:"KRW-AVAX",supply:345834259},{id:"KRW-T",supply:8832515135},{id:"KRW-CELO",supply:505091663},{id:"KRW-GMT",supply:1102543766},{id:"KRW-APT",supply:215154078},{id:"KRW-SHIB",supply:589346952141274},{id:"KRW-MASK",supply:82112500},{id:"KRW-ARB",supply:1275e6}],Y=u.ZP.td(z||(z=(0,p.Z)(["\n  padding: 3.5px;\n  text-align: end;\n  vertical-align: middle;\n  white-space: nowrap;\n  :last-child {\n    padding: 0px;\n  }\n"]))),q=u.ZP.div(D||(D=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 3px;\n  align-items: flex-end;\n"]))),$=u.ZP.div(C||(C=(0,p.Z)(["\n  background-color: #ececec;\n  border-radius: 5px;\n  padding: 13px 10px;\n"]))),nn=(0,u.ZP)($)(U||(U=(0,p.Z)(["\n  width: 100%;\n"]))),en=(0,u.ZP)($)(B||(B=(0,p.Z)(["\n  width: 100%;\n"]))),tn=(0,u.ZP)($)(X||(X=(0,p.Z)(["\n  width: 40%;\n"]))),rn=(0,u.ZP)($)(M||(M=(0,p.Z)(["\n  width: 50%;\n"]))),sn=(0,u.ZP)($)(F||(F=(0,p.Z)(["\n  width: 90%;\n"]))),an=(0,u.ZP)($)(V||(V=(0,p.Z)(["\n  width: 90%;\n"]))),dn=(0,u.ZP)($)(G||(G=(0,p.Z)(["\n  width: 90%;\n"]))),ln=(0,u.ZP)($)(H||(H=(0,p.Z)(["\n  width: 90%;\n"]))),cn=(0,u.ZP)($)(Q||(Q=(0,p.Z)(["\n  width: 100%;\n  height: 50px;\n"])));var on,pn,un=function(){return(0,v.jsxs)(Hn,{children:[(0,v.jsx)(Y,{children:(0,v.jsx)(Tn,{children:(0,v.jsx)(nn,{})})}),(0,v.jsx)(Y,{children:(0,v.jsx)(q,{children:(0,v.jsx)(en,{})})}),(0,v.jsx)(Y,{children:(0,v.jsxs)(q,{children:[(0,v.jsx)(tn,{}),(0,v.jsx)(rn,{})]})}),(0,v.jsx)(Y,{children:(0,v.jsx)(q,{children:(0,v.jsx)(sn,{})})}),(0,v.jsx)(Y,{children:(0,v.jsx)(q,{children:(0,v.jsx)(an,{})})}),(0,v.jsx)(Y,{children:(0,v.jsx)(q,{children:(0,v.jsx)(dn,{})})}),(0,v.jsx)(Y,{children:(0,v.jsx)(q,{children:(0,v.jsx)(ln,{})})}),(0,v.jsx)(Y,{children:(0,v.jsx)(cn,{})})]})},hn=function(n){var i=n.coinName,e=n.tickerSocketData,t=n.tickerList;if(e){var r,s=null===(r=t.find((function(n){return n.market===i&&n}),0))||void 0===r?void 0:r.trade_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,v.jsxs)("span",{children:["\u20a9",s||0]})}return(0,v.jsx)(v.Fragment,{})},xn=function(n){var i=n.coinName,e=n.tickerSocketData,t=n.tickerList;if(e){var r,s,a,d=null===(r=t.find((function(n){return n.market===i&&n}),0))||void 0===r?void 0:r.change_price.toString().replace(/\B(?=(\d{3})+(!\d))/g,","),l=null===(s=t.find((function(n){return n.market===i&&n}),"EVEN"))||void 0===s?void 0:s.change,c=null===(a=t.find((function(n){return n.market===i&&n}),0))||void 0===a?void 0:a.change_rate;return(0,v.jsxs)(Ln,{change:l||"EVEN",children:[(0,v.jsxs)("span",{children:["\u20a9",d||0]}),(0,v.jsxs)("span",{children:["EVEN"===l?(0,v.jsx)(Nn,{className:"material-symbols-outlined",children:"check_indeterminate_small"}):"RISE"===l?(0,v.jsx)(Nn,{className:"material-symbols-outlined",children:"arrow_drop_up"}):"FALL"===l?(0,v.jsx)(Nn,{className:"material-symbols-outlined",children:"arrow_drop_down"}):(0,v.jsx)(Nn,{className:"material-symbols-outlined",children:"trending_flat"}),(100*c||0).toFixed(2),"%"]})]})}return(0,v.jsx)(Ln,{change:"EVEN"})},fn=function(n){var i=n.coinName,e=n.supply,t=n.tickerSocketData,r=n.tickerList;if(t){var s,a=null===(s=r.find((function(n){return n.market===i&&n}),0))||void 0===s?void 0:s.trade_price;return(0,v.jsxs)("span",{children:["\u20a9",(e*a||0).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})}return(0,v.jsx)(v.Fragment,{})},gn=function(n){var i=n.coinName,e=n.tickerSocketData,t=n.tickerList;if(e){var r,s=null===(r=t.find((function(n){return n.market===i&&n}),0))||void 0===r?void 0:r.acc_trade_price_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,v.jsxs)("span",{children:["\u20a9",s||0]})}return(0,v.jsx)(v.Fragment,{})},mn=function(n){var i=n.coinName,e=n.tickerSocketData,t=n.tickerList;if(e){var r,s=null===(r=t.find((function(n){return n.market===i&&n}),0))||void 0===r?void 0:r.acc_trade_volume_24h.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,v.jsxs)("span",{children:[s||0," ",i.substring(4)||""]})}return(0,v.jsx)(v.Fragment,{})},yn=e(3496),jn=u.ZP.div(on||(on=(0,p.Z)(["\n  max-width: 100%;\n  max-height: 61px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),vn=(0,u.ZP)(yn.Z)(pn||(pn=(0,p.Z)(["\n  width: 164px;\n  color: ",";\n  will-change: color;\n"])),(function(n){return"RISE"===n.change?"#c84a31":"FALL"===n.change?" #1261c4":"#222"}));var wn,bn,Zn,Rn,Wn,Kn,kn=function(n){var i,e=n.history,t=n.change;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(jn,{children:(0,v.jsx)(vn,{change:t,type:"line",series:[{data:null!==(i=e.map((function(n){return{x:n.timestamp,y:n.prev_closing_price}})))&&void 0!==i?i:[]}],options:{chart:{type:"line",background:"transparent",zoom:{enabled:!1},toolbar:{show:!1},animations:{enabled:!1}},grid:{show:!1},legend:{show:!1},dataLabels:{enabled:!1},labels:{show:!1},tooltip:{enabled:!1},markers:{size:0},stroke:{curve:"smooth",width:3},colors:["RISE"===t?"#c84a31":"EVEN"===t?"#222":"#1261c4"],xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime"},yaxis:{show:!1}}})})})},Pn=function(n){var i=n.coinName,e=n.history,t=n.tickerSocketData,r=n.tickerList;if(t){var s,a=null===(s=r.find((function(n){return n.market===i&&n}),"EVEN"))||void 0===s?void 0:s.change;return(0,v.jsx)(kn,{history:e,change:a})}return(0,v.jsx)(v.Fragment,{})},Sn=u.ZP.td(wn||(wn=(0,p.Z)(["\n  text-align: end;\n  vertical-align: middle;\n  padding: 10px;\n  white-space: nowrap;\n  :last-child {\n    padding: 0px;\n  }\n"]))),En=u.ZP.td(bn||(bn=(0,p.Z)(['\n  text-align: start;\n  vertical-align: middle;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  left: -2px;\n  z-index: 10;\n  background-color: #f8f8f8;\n  @media (max-width: 1279px) {\n    & {\n      ::before {\n        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: -1px;\n        width: 30px;\n        transform: translateX(100%);\n        transition: box-shadow 0.3s;\n        content: "";\n        pointer-events: none;\n      }\n    }\n  }\n']))),Tn=u.ZP.div(Zn||(Zn=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n  div span + span {\n    color: #808a9d;\n  }\n"]))),Ln=u.ZP.div(Rn||(Rn=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  will-change: color;\n"])),(function(n){return"RISE"===n.change?"#c84a31":"FALL"===n.change?"#1261c4":"#222"})),Nn=u.ZP.span(Wn||(Wn=(0,p.Z)(["\n  vertical-align: middle;\n"]))),In=u.ZP.img(Kn||(Kn=(0,p.Z)(["\n  margin-right: 5px;\n  max-width: 20px;\n"])));function An(n){var i=n.mergeData,e=n.coinList,t=n.count,r=(0,y.a)(["ticker",t],(function(){return function(n){return O.apply(this,arguments)}(e)}),{enabled:!!e,refetchOnMount:!1,refetchOnWindowFocus:!1}),s=r.data,a=function(n){var i=(0,j.useState)(null),e=(0,m.Z)(i,2),t=e[0],r=e[1];(0,j.useEffect)((function(){var i=new WebSocket("wss://api.upbit.com/websocket/v1");r(i);var e=function(){setTimeout((function(){r(new WebSocket("wss://api.upbit.com/websocket/v1"))}),5e3)};return i.addEventListener("open",(function(){var e=[{ticket:"UNIQUE_TICKET"},{type:"ticker",codes:n}];i.send(JSON.stringify(e))})),i.addEventListener("error",e),i.addEventListener("close",e),function(){i.removeEventListener("error",e),i.removeEventListener("close",e)}}),[n]);var s=function(){var n=(0,g.Z)((0,x.Z)().mark((function n(){var i;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=[],n.next=3,new Promise((function(n,e){t?(t.addEventListener("message",(function(e){e.data.text().then((function(e){var t=JSON.parse(e);n(i=[t])}))})),t.addEventListener("error",(function(n){e(n)}))):e("The websocket connection is experiencing some delay.")}));case 3:return n.abrupt("return",i);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,y.a)(["coinTickers",n],(function(){return s()}),{enabled:!!n,refetchInterval:500,cacheTime:500})}(e),d=a.data,l=(0,j.useState)(s||[]),c=(0,m.Z)(l,2),o=c[0],p=c[1];(0,j.useEffect)((function(){d&&p((null===s||void 0===s?void 0:s.map((function(n){var i=d.find((function(i){return n.market===i.code}));return i?(0,f.Z)((0,f.Z)({},n),i):n})))||[])}),[s,d]);return(0,v.jsx)(v.Fragment,{children:i&&d&&s&&o?i.map((function(n,i){return(0,v.jsxs)(Hn,{children:[(0,v.jsx)(En,{children:(0,v.jsxs)(Tn,{children:[(0,v.jsx)(In,{src:"https://static.upbit.com/logos/".concat(n.market.substring(4),".png"),alt:"coin_icon",loading:"lazy",decoding:"async"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:n.english_name}),(0,v.jsx)("span",{children:n.market.substring(4)})]})]})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(hn,{coinName:n.market,tickerList:o,tickerSocketData:d})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(xn,{coinName:n.market,tickerList:o,tickerSocketData:d})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(mn,{coinName:n.market,tickerList:o,tickerSocketData:d})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(gn,{coinName:n.market,tickerList:o,tickerSocketData:d})}),(0,v.jsx)(Sn,{children:(0,v.jsxs)("span",{children:[n.supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",n.market.substring(4)]})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(fn,{coinName:n.market,supply:n.supply,tickerList:o,tickerSocketData:d})}),(0,v.jsx)(Sn,{children:(0,v.jsx)(Pn,{coinName:n.market,history:n.historyArr,tickerList:o,tickerSocketData:d})})]},i)})):function(){for(var n=[],i=1;i<=10;i++)n.push((0,v.jsx)(un,{},i));return n}()})}var On,_n,zn,Dn,Cn,Un,Bn,Xn=j.memo(An),Mn=u.ZP.div(On||(On=(0,p.Z)(["\n  width: 100%;\n"]))),Fn=u.ZP.div(_n||(_n=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Vn=u.ZP.div(zn||(zn=(0,p.Z)(["\n  @media (max-width: 1279px) {\n    & {\n      overflow-x: scroll;\n    }\n  }\n"]))),Gn=u.ZP.table(Dn||(Dn=(0,p.Z)(["\n  width: 100%;\n  font-weight: 900;\n  @media (max-width: 650px) {\n    & {\n      font-size: 2.3vw;\n    }\n  }\n  @media (max-width: 480px) {\n    & {\n      font-size: 3vw;\n    }\n  }\n"]))),Hn=u.ZP.tr(Cn||(Cn=(0,p.Z)(["\n  border-bottom: 1px solid #e2e2e2;\n  :first-child {\n    border-top: 1px solid #e2e2e2;\n  }\n"]))),Qn=u.ZP.div(Un||(Un=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5vw;\n  margin-top: 40px;\n"]))),Jn=u.ZP.button(Bn||(Bn=(0,p.Z)(['\n  font-family: "Apercu", sans-serif;\n  font-weight: 600;\n  border: none;\n  border-radius: 7px;\n  font-size: 15px;\n  cursor: pointer;\n  padding: 5px 10px;\n  transition: all 0.2s ease-in-out;\n  background-color: ',";\n  color: ",";\n  will-change: background-color, color;\n"])),(function(n){return n.selected?"#333":"transparent"}),(function(n){return n.selected?"#fff":"#333"}));function Yn(){var n=(0,j.useState)(1),i=(0,m.Z)(n,2),e=i[0],t=i[1],r=(0,j.useState)(10),s=(0,m.Z)(r,2),a=s[0],d=s[1];(0,j.useEffect)((function(){l(e)}),[e]);var l=function(n){d((function(){return 10*n}))},c=(0,j.useState)([]),o=(0,m.Z)(c,2),p=o[0],u=o[1],h=(0,y.a)(["name"],(function(){return function(){return A.apply(this,arguments)}()}),{select:function(n){return n.filter((function(n){return!n.market.indexOf("KRW")}))},refetchOnMount:!1,refetchOnWindowFocus:!1}),w=h.data,b=null===w||void 0===w?void 0:w.map((function(n){return n.market})).slice(a-10,a),Z=(0,y.a)(["history",a],(function(){return function(n){return _.apply(this,arguments)}(b)}),{enabled:!!b,refetchOnMount:!1,refetchOnWindowFocus:!1}),R=Z.data,W=function(){var n=(0,g.Z)((0,x.Z)().mark((function n(){var i;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=[],n.next=3,Promise.all(w.map(function(){var n=(0,g.Z)((0,x.Z)().mark((function n(e){var t,r,s;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(t=J.find((function(n){return n.id===e.market})))&&(r=R.find((function(n){return n[0].market===e.market})))&&(s=(0,f.Z)((0,f.Z)((0,f.Z)({},e),t),{},{historyArr:r}),i.push(s));case 2:case"end":return n.stop()}}),n)})));return function(i){return n.apply(this,arguments)}}())).then((function(){return u((function(){return i}))}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,j.useEffect)((function(){R&&W()}),[R]),(0,v.jsx)(Mn,{children:(0,v.jsxs)(Fn,{children:[(0,v.jsx)(Vn,{children:(0,v.jsxs)(Gn,{children:[(0,v.jsx)(T,{}),(0,v.jsx)("thead",{children:(0,v.jsx)(I,{})}),(0,v.jsx)("tbody",{children:p&&b&&(0,v.jsx)(Xn,{coinList:b,mergeData:p,count:a})})]})}),(0,v.jsx)(Qn,{children:function(){for(var n=[],i=function(i){n.push((0,v.jsx)(Jn,{onClick:function(){return n=i,void t((function(){return n}));var n},selected:i===e,children:i},i))},r=1;r<=12;r++)i(r);return n}()})]})})}var qn,$n,ni=j.memo(Yn),ii=e(3433),ei=e(3418),ti=e(5048),ri=e(5),si=e(6749),ai=u.ZP.div(qn||(qn=(0,p.Z)(["\n  position: absolute;\n  opacity: ",";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  transition: opacity 0.2s ease-in-out;\n  will-change: opacity;\n"])),(function(n){return!0===n.isPlaying?.9:0})),di=u.ZP.button($n||($n=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n  will-change: opacity;\n  background: none;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  span {\n    color: #fff;\n    font-size: clamp(30px, 2vw, 60px);\n  }\n"])),(function(n){return!0===n.isPlaying?1:0}));var li,ci,oi,pi,ui,hi,xi,fi=function(n){var i=n.videoUrl,e=(0,j.useState)(!1),t=(0,m.Z)(e,2),r=t[0],s=t[1],a=(0,ti.I0)(),d=(0,ti.v9)((function(n){return n.playingVideoInfoSlice.videoInfo}),ti.wU);return(0,j.useEffect)((function(){d.videoUrl===i&&s(d.playing),d.videoUrl!==i&&s(!1)}),[d,i]),(0,v.jsx)(ai,{isPlaying:r,children:(0,v.jsx)(di,{onClick:function(){return function(){var n=!r;s(n),a((0,ri.P)({playing:n,videoUrl:i,img:d.img,title:d.title,artist:d.artist})),a((0,si.S)(!0))}()},isPlaying:r,children:r?(0,v.jsx)("span",{className:"material-symbols-rounded",children:"pause"}):(0,v.jsx)("span",{className:"material-symbols-rounded",children:"play_arrow"})})})},gi=e(9043),mi=u.ZP.div(li||(li=(0,p.Z)(["\n  width: 90%;\n"]))),yi=u.ZP.div(ci||(ci=(0,p.Z)(["\n  padding: 0px 40px;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media (max-width: 480px) {\n    & {\n      padding: 0px 20px;\n    }\n  }\n"]))),ji=u.ZP.div(oi||(oi=(0,p.Z)(["\n  padding: 10px 2vw;\n  background-color: ",";\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  font-size: 1vw;\n  border-bottom: 1px solid #1d1d1d;\n  border-radius: ",";\n  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;\n  will-change: background-color, border-radius;\n  :last-child {\n    border-bottom: none;\n  }\n  :hover {\n    background-color: #1d1d1d;\n    "," {\n      opacity: 0.9;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n  @media (max-width: 429px) {\n    & {\n      font-size: 0.6rem;\n    }\n  }\n"])),(function(n){return n.isDragging?"#1d1d1d":"transparent"}),(function(n){return n.isDragging?"10px":"none"}),ai,di),vi=u.ZP.div(pi||(pi=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 7%;\n  :nth-child(2) {\n    padding-left: 20%;\n  }\n  :nth-child(3) {\n    padding-left: 20%;\n  }\n  @media (max-width: 768px) {\n    & {\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      :last-child {\n        display: none;\n      }\n    }\n  }\n\n"]))),wi=u.ZP.div(ui||(ui=(0,p.Z)(["\n  position: relative;\n"]))),bi=u.ZP.div(hi||(hi=(0,p.Z)([""]))),Zi=u.ZP.img(xi||(xi=(0,p.Z)(["\n  width: clamp(40px, 4vw, 128px);\n"])));function Ri(){var n=(0,ti.v9)((function(n){return n.newJeansListSlice.newjeansList})),i=(0,ti.I0)();return(0,v.jsx)(ei.Z5,{onDragEnd:function(e){var t=e.destination,r=e.source;if(t&&t){var s=(0,ii.Z)(n),a=s[r.index];s.splice(r.index,1),s.splice(null===t||void 0===t?void 0:t.index,0,a),i((0,gi.F)(s))}},children:(0,v.jsx)(mi,{children:(0,v.jsx)(ei.bK,{droppableId:"one",children:function(i){return(0,v.jsxs)(yi,(0,f.Z)((0,f.Z)({ref:i.innerRef},i.droppableProps),{},{children:[n.map((function(n,i){return(0,v.jsx)(ei._l,{draggableId:n.title,index:i,children:function(i,e){return(0,v.jsxs)(ji,(0,f.Z)((0,f.Z)((0,f.Z)({isDragging:e.isDragging,ref:i.innerRef},i.dragHandleProps),i.draggableProps),{},{children:[(0,v.jsxs)(vi,{children:[(0,v.jsxs)(wi,{children:[(0,v.jsx)(Zi,{src:n.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,v.jsx)(fi,{videoUrl:n.url})]}),(0,v.jsx)(bi,{children:(0,v.jsx)("span",{children:n.title})})]}),(0,v.jsx)(vi,{children:(0,v.jsx)("span",{children:n.artist})}),(0,v.jsx)(vi,{children:(0,v.jsx)("span",{children:n.album})})]}))}},n.title)})),i.placeholder]}))}})})})}var Wi,Ki=j.memo(Ri),ki=e(3469),Pi=u.ZP.img(Wi||(Wi=(0,p.Z)(["\n  width: clamp(40px, 2.5vw, 80px);\n"])));function Si(){var n=(0,ti.v9)((function(n){return n.featuredListSlice.featuredList})),i=(0,ti.I0)();return(0,v.jsx)(ei.Z5,{onDragEnd:function(e){var t=e.destination,r=e.source;if(t&&t){var s=(0,ii.Z)(n),a=s[r.index];s.splice(r.index,1),s.splice(null===t||void 0===t?void 0:t.index,0,a),i((0,ki.i)(s))}},children:(0,v.jsx)(mi,{children:(0,v.jsx)(ei.bK,{droppableId:"one",children:function(i){return(0,v.jsxs)(yi,(0,f.Z)((0,f.Z)({ref:i.innerRef},i.droppableProps),{},{children:[n.map((function(n,i){return(0,v.jsx)(ei._l,{draggableId:n.title,index:i,children:function(i,e){return(0,v.jsxs)(ji,(0,f.Z)((0,f.Z)((0,f.Z)({isDragging:e.isDragging,ref:i.innerRef},i.dragHandleProps),i.draggableProps),{},{children:[(0,v.jsxs)(vi,{children:[(0,v.jsxs)(wi,{children:[(0,v.jsx)(Pi,{src:n.img,alt:"album_photo",loading:"lazy",decoding:"async"}),(0,v.jsx)(fi,{videoUrl:n.url})]}),(0,v.jsx)(bi,{children:(0,v.jsx)("span",{children:n.title})})]}),(0,v.jsx)(vi,{children:(0,v.jsx)("span",{children:n.artist})}),(0,v.jsx)(vi,{children:(0,v.jsx)("span",{children:n.album})})]}))}},n.title)})),i.placeholder]}))}})})})}var Ei,Ti,Li,Ni,Ii,Ai,Oi,_i,zi,Di=j.memo(Si),Ci=u.ZP.div(Ei||(Ei=(0,p.Z)(["\n  width: 100%;\n"]))),Ui=u.ZP.div(Ti||(Ti=(0,p.Z)(["\n  width: 100%;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n"]))),Bi=u.ZP.div(Li||(Li=(0,p.Z)(["\n  position: relative;\n"]))),Xi=u.ZP.img(Ni||(Ni=(0,p.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),Mi=u.ZP.div(Ii||(Ii=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #fff;\n  div {\n    position: absolute;\n    left: 5%;\n    bottom: 10%;\n  }\n  h2 {\n    font-weight: bold;\n    font-size: 2vw;\n    margin-bottom: 1vw;\n  }\n"]))),Fi=u.ZP.div(Ai||(Ai=(0,p.Z)(["\n  border: 1px solid black;\n  background: #000;\n  padding: 8vw 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7vw;\n  color: #fff;\n  p {\n    font-size: 2.2vw;\n    text-align: center;\n    @media (max-width: 429px) {\n      & {\n        font-size: 1rem;\n      }\n    }\n  }\n"]))),Vi=u.ZP.div(Oi||(Oi=(0,p.Z)(["\n  position: relative;\n"]))),Gi=u.ZP.div(_i||(_i=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 0.5) 50%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #fff;\n  h2 {\n    font-weight: lighter;\n    font-size: 2.2vw;\n  }\n"]))),Hi=u.ZP.div(zi||(zi=(0,p.Z)(["\n  background: #000;\n  padding: 8vw 0;\n  border-radius: 0 0 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7vw;\n  color: #fff;\n  p {\n    font-size: 2.2vw;\n    text-align: center;\n    @media (max-width: 429px) {\n      & {\n        font-size: 1rem;\n      }\n    }\n  }\n"])));var Qi,Ji,Yi,qi,$i,ne,ie,ee,te,re,se,ae=function(){return(0,v.jsx)(Ci,{children:(0,v.jsxs)(Ui,{children:[(0,v.jsxs)(Bi,{children:[(0,v.jsx)(Xi,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ee6e50a8-17dd-458b-29e3-ad794eeca500/public",alt:"newjeans",loading:"lazy",decoding:"async"}),(0,v.jsx)(Mi,{children:(0,v.jsx)("div",{children:(0,v.jsx)("h2",{children:"NewJeans"})})})]}),(0,v.jsxs)(Fi,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:'"You can listen to recommended songs."'})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Recommended List"})}),(0,v.jsx)(Ki,{})]}),(0,v.jsxs)(Vi,{children:[(0,v.jsx)(Xi,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f204c79a-26ad-4cb8-5018-c779d6a93200/public",alt:"famous artist",loading:"lazy",decoding:"async"}),(0,v.jsx)(Gi,{})]}),(0,v.jsxs)(Hi,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Recommended List"})}),(0,v.jsx)(Di,{})]})]})})},de=u.ZP.div(Qi||(Qi=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.4vw;\n  clear: both;\n  @media (max-width: 650px) {\n    & {\n      width: 100%;\n      grid-template-columns: repeat(1, 1fr);\n      gap: 3rem;\n    }\n  }\n"]))),le=u.ZP.div(Ji||(Ji=(0,p.Z)(["\n  width: 30.6vw;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2vw;\n  @media (max-width: 650px) {\n    & {\n      width: 100%;\n    }\n  }\n"]))),ce=u.ZP.div(Yi||(Yi=(0,p.Z)(["\nposition: relative;\n  aspect-ratio: 4/3;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: fill;\n  }\n"]))),oe=u.ZP.img(qi||(qi=(0,p.Z)([""]))),pe=u.ZP.div($i||($i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  @media (max-width: 650px) {\n    & {\n      gap: 1rem;\n    }\n  }\n"]))),ue=u.ZP.figure(ne||(ne=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  img {\n    margin: 0 0.5vw;\n    object-fit: cover;\n  }\n  figcaption {\n    span {\n      font-weight: bold;\n      font-size: 1.3vw;\n      border-bottom: 2px solid #b7b7b7;\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      gap: 1rem;\n      figcaption {\n        span {\n          font-size: 1.5rem;\n        }\n      }\n    }\n  }\n"]))),he=u.ZP.div(ie||(ie=(0,p.Z)(["\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n  opacity: 0;\n  :hover {\n    opacity: 1;\n  }\n  @media (max-width: 1024px) {\n    & {\n      opacity: 1;\n    }\n  }\n"]))),xe=u.ZP.a(ee||(ee=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1vw 1vw;\n  background-color: #f8f8f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  will-change: background-color, color;\n  font-size: 0.8vw;\n  :hover {\n    background-color: #3e3e3e;\n    color: #fff;\n  }\n  @media (max-width: 1024px) {\n    & {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 650px) {\n    & {\n      font-size: 1rem;\n      padding: 1rem 1rem;\n    }\n  }\n"]))),fe=u.ZP.div(te||(te=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5vw;\n  position: absolute;\n  left: 5%;\n  bottom: 8%;\n  color: #fff;\n"]))),ge=u.ZP.div(re||(re=(0,p.Z)(["\n  font-weight: lighter;\n  @media (max-width: 650px) {\n    & {\n      font-size: 3vw;\n    }\n  }\n"]))),me=u.ZP.div(se||(se=(0,p.Z)(["\n  font-size: 1.5vw;\n  font-weight: 500;\n  @media (max-width: 650px) {\n    & {\n      font-size: 5vw;\n    }\n  }\n"])));var ye,je,ve,we=function(){return(0,v.jsxs)(de,{children:[(0,v.jsxs)(le,{children:[(0,v.jsxs)(ce,{children:[(0,v.jsx)("img",{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e80d2483-5516-4d36-dea9-b2622a4d0e00/public",alt:"awwwards",loading:"lazy",decoding:"async"}),(0,v.jsxs)(he,{children:[(0,v.jsxs)(xe,{href:"https://www.awwwards.com/",target:"_blank",children:[(0,v.jsx)("span",{className:"material-symbols-outlined",children:"arrow_right_alt"}),"\xa0",(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:"Visit Site"})})]}),(0,v.jsxs)(fe,{children:[(0,v.jsx)(ge,{children:"WEBSITE"}),(0,v.jsx)(me,{children:"awwwards"})]})]})]}),(0,v.jsxs)(pe,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("small",{children:"by"})}),(0,v.jsxs)(ue,{children:[(0,v.jsx)("img",{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e1f7fdb0-746c-4598-7dd0-c37a0b344d00/icon",style:{width:30,height:30,borderRadius:20},alt:"awwwardicon",loading:"lazy",decoding:"async"}),(0,v.jsx)("figcaption",{children:(0,v.jsx)("span",{children:"awwwards"})})]})]})]}),(0,v.jsxs)(le,{children:[(0,v.jsxs)(ce,{children:[(0,v.jsx)(oe,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0b467ebf-f1d9-46f9-37d9-e4b9c08ac600/public",alt:"upbit",loading:"lazy",decoding:"async"}),(0,v.jsxs)(he,{children:[(0,v.jsxs)(xe,{href:"https://upbit.com/home",target:"_blank",children:[(0,v.jsx)("span",{className:"material-symbols-outlined",children:"arrow_right_alt"}),"\xa0",(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:"Visit Site"})})]}),(0,v.jsxs)(fe,{children:[(0,v.jsx)(ge,{children:"WEBSITE"}),(0,v.jsx)(me,{children:"UPbit"})]})]})]}),(0,v.jsxs)(pe,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("small",{children:"by"})}),(0,v.jsxs)(ue,{children:[(0,v.jsx)("img",{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/aaca2829-bf16-4dfc-1bcd-d50e53b57a00/icon",style:{width:30,height:30,borderRadius:20},alt:"upbiticon",loading:"lazy",decoding:"async"}),(0,v.jsx)("figcaption",{children:(0,v.jsx)("span",{children:"UPbit"})})]})]})]}),(0,v.jsxs)(le,{children:[(0,v.jsxs)(ce,{children:[(0,v.jsx)(oe,{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/d8446547-c0c4-4aa5-aace-5592214d5700/public",alt:"investing",loading:"lazy",decoding:"async"}),(0,v.jsxs)(he,{children:[(0,v.jsxs)(xe,{href:"https://kr.investing.com/",target:"_blank",children:[(0,v.jsx)("span",{className:"material-symbols-outlined",children:"arrow_right_alt"}),"\xa0",(0,v.jsx)("div",{children:(0,v.jsx)("span",{children:"Visit Site"})})]}),(0,v.jsxs)(fe,{children:[(0,v.jsx)(ge,{children:"WEBSITE"}),(0,v.jsx)(me,{children:"INVESTING"})]})]})]}),(0,v.jsxs)(pe,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("small",{children:"by"})}),(0,v.jsxs)(ue,{children:[(0,v.jsx)("img",{src:"https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a5badb6f-87f1-4735-072d-9c270ab6ea00/icon",style:{width:30,height:30,borderRadius:20},alt:"investingicon",loading:"lazy",decoding:"async"}),(0,v.jsx)("figcaption",{children:(0,v.jsx)("span",{children:"INVESTING"})})]})]})]})]})},be=u.ZP.div(ye||(ye=(0,p.Z)(["\n  width: 100%;\n  text-align: left;\n  margin: 3vw 0px 3vw 0;\n  font-size: 2.6vw;\n  font-weight: bold;\n"]))),Ze=u.ZP.span(je||(je=(0,p.Z)(["\n  margin-top: 4vw;\n  font-size: 1vw;\n"]))),Re=u.ZP.div(ve||(ve=(0,p.Z)(["\n  margin: 15vw 0px 5vw 0;\n  line-height: 1.4;\n  width: 100%;\n  text-align: left;\n  font-size: 2.6vw;\n  font-weight: bold;\n"])));var We=function(){return(0,v.jsx)(h.W2,{id:"about",children:(0,v.jsxs)(h.W_,{children:[(0,v.jsxs)(h.zC,{children:[(0,v.jsx)(h.JB,{children:"Si Hyun Baek"}),(0,v.jsx)(h.rB,{children:"just dummy"}),(0,v.jsx)(h.vD,{children:"Place to practice"})]}),(0,v.jsx)(be,{children:"Combination of UPBIT Websocket, React-Query"}),(0,v.jsx)(ni,{}),(0,v.jsx)(Ze,{children:"Source: Each game company site"}),(0,v.jsx)(Re,{children:"This is a frequently visited site."}),(0,v.jsx)(we,{}),(0,v.jsx)(Ze,{children:"Source: Captured from each company site"}),(0,v.jsx)(Re,{children:"Songs I've been listening to lately"}),(0,v.jsx)(ae,{})]})})}}}]);
//# sourceMappingURL=958.a5b713c8.chunk.js.map