"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[815],{2815:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(4574),n=s(2019),i=s(579);const o=t.Ay.div`
  max-width: 100%;
  max-height: 61px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,r=(0,t.Ay)(n.A)`
  width: 164px;
  color: ${e=>"RISE"===e.change?"#089981":"FALL"===e.change?" #F23645":"#222"};
  will-change: color;
`;const l=function(e){var a;let{history:s,change:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{children:(0,i.jsx)(r,{change:t,type:"line",series:[{data:null!==(a=s.map((e=>({x:e.timestamp,y:e.prev_closing_price}))))&&void 0!==a?a:[]}],options:{chart:{type:"line",background:"transparent",zoom:{enabled:!1},toolbar:{show:!1},animations:{enabled:!1}},grid:{show:!1},legend:{show:!1},dataLabels:{enabled:!1},labels:{show:!1},tooltip:{enabled:!1},markers:{size:0},stroke:{curve:"smooth",width:3},colors:["RISE"===t?"#c84a31":"EVEN"===t?"#222":"#1261c4"],xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime"},yaxis:{show:!1}}})})})},c=e=>{let{coinName:a,history:s,tickerList:t}=e;if(t){var n;const e=null===(n=t.find((e=>e.market===a&&e),"EVEN"))||void 0===n?void 0:n.change;return(0,i.jsx)(l,{history:s,change:e})}return(0,i.jsx)(i.Fragment,{})}}}]);
//# sourceMappingURL=815.dc6e3ada.chunk.js.map