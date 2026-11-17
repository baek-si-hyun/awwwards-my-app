# awwwards-my-app

개인 포트폴리오 사이트(만든 프로젝트를 웹 전시장처럼 보여 줌). 백엔드 없음 — 정적 SPA 를 GitHub Pages 에 올린다.
마지막 코드 커밋: 2026-02-02 (`f0e92f3`).

## 스택 (근거: package.json)

- React 19.0.3 (`package.json:26`) + Create React App `react-scripts` 5.0.1 (`package.json:32`), TypeScript 4.9 (`package.json:37`)
- 스타일: styled-components 5 (`package.json:36`) — 전역 리셋은 `src/index.tsx:11` `createGlobalStyle`
- 라우팅: react-router-dom 6 `BrowserRouter basename={process.env.PUBLIC_URL}` (`src/index.tsx:89`), 라우트 표는 `src/App.tsx:164-206`
  - `/` 메인 · `/:projectId` 프로젝트 상세 · `/coinlist` · `/coin/:market` · `/faqs` · `/contact` (메인 외 전부 `lazy`)
- 상태: Redux Toolkit (`src/redux/store.ts`), 서버 상태: @tanstack/react-query v4 (`src/index.tsx:75`)
- 애니메이션: framer-motion · gsap (`package.json:22,24`, 유틸 `src/utils/animations.ts`)
- 차트: apexcharts · recharts (`package.json:21,33`)
- 메일: @emailjs/browser (`src/components/Contact/EmailJs.tsx:74`)
- `.npmrc` 에 `legacy-peer-deps=true` — `npm install` 이 이걸 전제로 한다.

## 실행 · 빌드 · 배포 (근거: package.json:43-48, 68)

```bash
npm install
npm start        # react-scripts start → http://localhost:3000
npm run build    # build/ (gitignore 됨)
npm test         # react-scripts test — 현재 *.test.* 파일 없음
npm run deploy   # predeploy 로 build 후 gh-pages -d build
```

- 배포처: GitHub Pages `https://baek-si-hyun.github.io/awwwards-my-app` (`package.json:68`), 저장소 `github.com/baek-si-hyun/awwwards-my-app`. CI(.github) 없음 — 배포는 로컬 `npm run deploy` 수동.
- 새로고침 404 대응: `public/404.html` 이 경로를 `?p=` 쿼리로 바꿔 리다이렉트(`segmentCount = 1`, `public/404.html:26`), `public/index.html:29` 스크립트가 되돌린다. 저장소 이름/경로를 바꾸면 둘 다 같이 봐야 한다.

## 환경 변수

- `REACT_APP_EMAILJS_SERVICE_ID` · `REACT_APP_EMAILJS_TEMPLATE_ID` · `REACT_APP_EMAILJS_API_KEYS` (`src/components/Contact/EmailJs.tsx:76-79`). `.env` 는 gitignore — 값은 문서·커밋에 쓰지 않는다. 없으면 Contact 메일 전송만 실패하고 나머지는 동작.

## 외부 호출 (전부 브라우저에서 직접)

- Bithumb 공개 REST `https://api.bithumb.com/public` (`src/services/bithumbApi.ts:10`), WebSocket `wss://pubwss.bithumb.com/pub/ws` (`src/libs/useBithumbSocket.ts:69`)
- CoinGecko 시가총액 (`src/libs/useSupplyMap.ts:77`)
- 코인 화면(`/coinlist`, `/coin/:market`)은 README 에 아직 설명이 없다.

## 폴더 (아토믹 디자인, README "폴더 구조")

`pages/` 페이지 → `container/` 조립 → `components/` 조각. 데이터 상수는 `src/services/listData.ts`(사이트 목록 · 프로젝트 `projectData` · FAQ · 일정표), 타입은 `src/interface/`, 훅은 `src/hooks/`·`src/libs/`.

## 주의

- `src/App.tsx:47-156` Footer 표시 로직은 DOM 폴링(interval · rAF · MutationObserver, 최대 4초)으로 콘텐츠 준비를 판단한다. 건드릴 땐 타이머 정리(cleanup) 유지.
- redux 키 `lolChampionsListSlice` 는 실제로 `favoriteListSlice` 를 가리킨다(`src/redux/store.ts:7,14`) — 이름만 옛것.
- `src/babel.config.js` 는 CRA 가 쓰지 않는 별도 babel 설정(jest 용 흔적).
- 이 PC 는 다른 서비스 운영 서버를 겸한다 — 평일 14:45~15:15 · 19:30~19:50 에는 `npm run build`·`deploy` 금지.
