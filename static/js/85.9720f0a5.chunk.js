"use strict";(self.webpackChunkawwwards_my_app=self.webpackChunkawwwards_my_app||[]).push([[85],{6085:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var r=i(4574),s=i(2087),o=i(5043);const n={_origin:"https://api.emailjs.com"},a=(e,t,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const l=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,s)=>{const o=new XMLHttpRequest;o.addEventListener("load",(e=>{let{target:t}=e;const i=new d(t);200===i.status||"OK"===i.text?r(i):s(i)})),o.addEventListener("error",(e=>{let{target:t}=e;s(new d(t))})),o.open("POST",n._origin+e,!0),Object.keys(i).forEach((e=>{o.setRequestHeader(e,i[e])})),o.send(t)}))},m=(e,t,i,r)=>{const s=r||n._userID,o=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(i);a(s,e,t);const d=new FormData(o);return d.append("lib_version","3.12.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",s),l("/api/v1.0/email/send-form",d)};var c=i(579);const h=r.Ay.div`
  width: 32vw;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`,p=r.Ay.form`
  display: flex;
  flex-direction: column;
`,u=r.Ay.label`
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  color: #a1a1a1;
`,_=r.Ay.input`
  height: 3vw;
  margin-bottom: 1rem;
  font-size: 18px;
  font-family: "Apercu", sans-serif;
  color: #222222;
  border: none;
  transition: border 0.3s ease-in-out 0s;
  will-change: border;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }

  @media (max-width: 1024px) {
    & {
      height: 4vw;
    }
  }
  @media (max-width: 640px) {
    & {
      height: 6vw;
    }
  }
  @media (max-width: 480px) {
    & {
      height: 8vw;
    }
  }
`,x=r.Ay.textarea`
  height: 13rem;
  margin-bottom: 4vw;
  font-size: 18px;
  font-family: "Apercu", sans-serif;
  color: #222222;
  border: none;
  transition: all 0.3s ease-in-out 0s;
  will-change: border;
  resize: none;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }
`;const f=function(){const e=(0,o.useRef)();return(0,c.jsx)(h,{children:(0,c.jsxs)(p,{ref:e,onSubmit:t=>{t.preventDefault(),m(`${{NODE_ENV:"production",PUBLIC_URL:"/awwwards-my-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_SERVICE_ID}`,`${{NODE_ENV:"production",PUBLIC_URL:"/awwwards-my-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_TEMPLATE_ID}`,e.current,`${{NODE_ENV:"production",PUBLIC_URL:"/awwwards-my-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_API_KEYS}`).then((e=>{alert("\uc804\uc1a1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4")}),(e=>{alert("\uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4."),console.log(e.text)}))},children:[(0,c.jsx)(u,{children:"Name"}),(0,c.jsx)(_,{type:"text",name:"user_name"}),(0,c.jsx)(u,{children:"E-mail"}),(0,c.jsx)(_,{type:"email",name:"user_email"}),(0,c.jsx)(u,{children:"Message"}),(0,c.jsx)(x,{name:"message"}),(0,c.jsx)(_,{type:"submit",style:{backgroundColor:"#222222",color:"#fff",borderRadius:"7px",height:"3.7rem"},value:"SEND MESSAGE"})]})})},w=r.Ay.div`
  width: 100%;
  background-color: #fff;
`,E=r.Ay.div`
  display: flex;
  gap: 10vw;
  padding-bottom: 13vw;
  @media (max-width: 650px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 15rem;
    }
  }
`,v=r.Ay.div``,S=r.Ay.div`
  line-height: 1.4;
  font-size: 1.2vw;
  font-weight: bold;
`,g=r.Ay.div`
  font-weight: 100;
  line-height: 1.5;
`;const y=function(){return(0,c.jsx)(w,{children:(0,c.jsxs)(s.Rp,{children:[(0,c.jsxs)(s.fI,{children:[(0,c.jsx)(s.CF,{children:"Contact me"}),(0,c.jsx)(s.ku,{children:"get in touch"})]}),(0,c.jsxs)(E,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(S,{children:(0,c.jsxs)("h2",{children:["I check my e-mail from 9:00 every morning!",(0,c.jsx)("br",{}),"send me an email."]})}),(0,c.jsx)(g,{children:(0,c.jsxs)("h3",{children:["If you have any questions, please contact us through this form.",(0,c.jsx)("br",{}),"Please also advise."]})})]}),(0,c.jsx)(f,{})]})]})})}}}]);
//# sourceMappingURL=85.9720f0a5.chunk.js.map