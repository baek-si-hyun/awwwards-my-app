# awwwards-my-app

개인 포트폴리오 사이트(만든 프로젝트를 웹 전시장처럼 보여 줌). 백엔드 없음 — 정적 SPA 를 GitHub Pages 에 올린다.
마지막 배포: 2026-11-17 22:44 gh-pages `0cb577d`(master `fff6457`). 11-17 사용자 지시로 코인 기능 전부(`3d76676`)와 Contact 페이지 · EmailJS(`fff6457`)를 지웠다 — 옛 `/coinlist` · `/coin/:market` · `/contact` 는 홈으로 간다.

## 스택 (근거: package.json)

- React 19.0.3 (`package.json:26`) + Create React App `react-scripts` 5.0.1 (`package.json:32`), TypeScript 4.9 (`package.json:37`)
- 스타일: styled-components 5 (`package.json:36`) — 전역 리셋은 `src/index.tsx:11` `createGlobalStyle`
- 라우팅: react-router-dom 6 `BrowserRouter basename={process.env.PUBLIC_URL}` (`src/index.tsx:77`), 라우트 표는 `src/App.tsx:199-210`
  - `/` 메인 · `/:projectId` 프로젝트 상세 · `/faqs` · 그 밖(`*`)은 `/` 로 (메인 외 `lazy`)
- 상태: Redux Toolkit (`src/redux/store.ts`). react-query · 차트(apexcharts · recharts) · @emailjs/browser · ws 는 11-17 에 의존성에서 뺐다 — 다시 넣지 않는다.
- 애니메이션: framer-motion · gsap (유틸 `src/utils/animations.ts`)
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

- 없다(11-17 EmailJS 제거 뒤). `npm run deploy` 에 `.env` 가 필요 없다. `.env` 를 만들게 되면 gitignore 유지 · 값은 문서 · 커밋에 쓰지 않는다.

## 외부 호출

- 데이터 API 호출 없음(Bithumb · CoinGecko 는 11-17 에 코인 기능과 함께 지웠다). 남은 외부 주소는 링크(awwwards.com 등)와 react-player 임베드뿐.

## 폴더 (아토믹 디자인, README "폴더 구조")

`pages/` 페이지 → `container/` 조립 → `components/` 조각. 데이터 상수는 `src/services/listData.ts`(사이트 목록 · 프로젝트 `projectData` · FAQ · 일정표), 타입은 `src/interface/`, 훅은 `src/hooks/`·`src/libs/`.

## 주의

- `src/App.tsx:47-156` Footer 표시 로직은 DOM 폴링(interval · rAF · MutationObserver, 최대 4초)으로 콘텐츠 준비를 판단한다. 건드릴 땐 타이머 정리(cleanup) 유지.
- redux 키 `lolChampionsListSlice` 는 실제로 `favoriteListSlice` 를 가리킨다(`src/redux/store.ts:7,14`) — 이름만 옛것.
- `src/babel.config.js` 는 CRA 가 쓰지 않는 별도 babel 설정(jest 용 흔적).
- 이 PC 는 다른 서비스 운영 서버를 겸한다 — 평일 14:45~15:15 · 19:25~19:55 에는 `npm run build`·`deploy` 금지(조직 규칙 org-rules 6장).
- 배포: 사용자 11-17 "어워드는 끝나면 바로 배포" — 일이 끝나고 검사가 통과하면 `npm run deploy` 까지 한다.
