import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createGlobalStyle, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { LazyMotion } from "motion/react";
import "./assets/font/css/font.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;  
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

html{
  font-size: 100%;
  scroll-behavior: smooth; 
}
body {
  line-height: 1;
  font-family: "Apercu",sans-serif;
  background-color: #f8f8f8;
  padding: 0;
	color: #222222;
  width: 100%;
  min-height: 100vh;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color:inherit;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
`;
// styled-components 6 는 스타일용 prop(toggle · indexNum 등)을 DOM 까지 넘긴다.
// v5 처럼 HTML 요소에는 유효한 속성만 넘기고, 벤더 접두사도 v5 처럼 붙인다.
const shouldForwardProp = (prop: string, target: unknown) =>
  typeof target === "string" ? isPropValid(prop) : true;

// 애니메이션 기능(domMax)은 첫 화면 번들에서 빼고 따로 받는다. 컴포넌트는 motion 대신 m 을 쓴다.
const loadMotionFeatures = () => import("./motionFeatures").then((mod) => mod.default);

// 배포 뒤 지워진 옛 청크를 불러오다 실패하면(캐시된 옛 HTML 등) 새 판을 받도록 한 번만 새로고침한다.
// 1분 안에 또 실패하면 다시 새로고침하지 않는다(무한 반복 방지).
const RELOAD_KEY = "aw-preload-reload-at";
window.addEventListener("vite:preloadError", (event) => {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < 60_000) return;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
    <StyleSheetManager shouldForwardProp={shouldForwardProp} enableVendorPrefixes>
      <LazyMotion features={loadMotionFeatures} strict>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </LazyMotion>
    </StyleSheetManager>
  </BrowserRouter>
);
