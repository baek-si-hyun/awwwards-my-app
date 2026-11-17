# awwwards-my-app

개인 포트폴리오 사이트(만든 프로젝트를 웹 전시장처럼 보여 줌). 백엔드 없음 — 정적 SPA 를 GitHub Pages 에 올린다.
마지막 배포: 2026-11-18 00:39 gh-pages `ce406af`(master `b7a097a`) — 11-17~18 사용자 지시분(코인 · Contact 제거, CRA → Vite 이전 · 간소화 · 최적화 · 최신화 · 모듈화, 배경 영상 GPU 재인코딩, 배포 직후 404 방지)을 모두 운영에 반영하고 확인했다(사용자 11-17 "어워드 로직 간소화 및 최적화 진행. 최신화 까지", "기존 기능에 문제가 생기면 안된다. 모듈화도 제대로").
코인 기능 전부(`3d76676`)와 Contact 페이지 · EmailJS(`fff6457`)는 11-17 에 지웠다 — 옛 `/coinlist` · `/coin/:market` · `/contact` 는 홈으로 간다.

## 스택 (근거: package.json)

- Vite 8.3 + TypeScript 5.9 + React 19.3. Create React App(react-scripts)은 11-17 에 걷어냈다 — 다시 넣지 않는다.
- 스타일: styled-components 6.6 — `StyleSheetManager` 에 `isPropValid` + `enableVendorPrefixes`. 중첩 가상 선택자는 `&:hover` 꼴로 쓴다.
- 라우팅: react-router 7.18(`import … from 'react-router'`), `/` 메인 · `/:projectId` 프로젝트 상세 · `/faqs` · 그 밖(`*`)은 `/` 로(메인 외 `lazy`).
- 애니메이션: motion 14 — `LazyMotion strict` 이라 `m.div` 를 쓴다(`motion.div` 금지), 기능 묶음은 `src/motionFeatures.ts`(domMax). gsap 도 함께 쓴다.
- 상태: Redux Toolkit 2.14(`src/redux/store.ts` — 즐겨찾기 키는 `favoriteListSlice`). 영상: react-player 2.16.
- react-query · 차트(apexcharts · recharts) · @emailjs/browser · ws 는 11-17 에 뺐다 — 다시 넣지 않는다. `.npmrc`(legacy-peer-deps)도 없앴다 — `npm ci` 가 그대로 통과해야 한다.
- ⚠️ package.json 에 `"type": "module"` 을 넣지 않는다(react-player 가 React 오류 #130 으로 깨진다).

## 실행 · 빌드 · 배포

```bash
npm ci
npm run dev             # vite 개발 서버
npm run check           # 타입(tsc --noEmit) + eslint(flat config) + madge 순환 검사 — 배포 전에 통과해야 한다
npm run build           # tsc --noEmit && vite build → dist/
npm run preview         # dist 확인
npm run deploy:dry-run  # 직전 판에서 함께 올릴 파일만 보여 준다(올리지 않음)
npm run deploy          # predeploy(build → scripts/keep-prev-assets.mjs) 뒤 gh-pages -d dist
```

- 배포처: GitHub Pages `https://baek-si-hyun.github.io/awwwards-my-app`, 저장소 `github.com/baek-si-hyun/awwwards-my-app`. CI(.github) 없음 — 배포는 로컬 `npm run deploy`.
- 배포하는 곳: 작업 중인 체크아웃이 아니라, 배포할 커밋 sha 로 `git worktree add --detach` 한 깨끗한 곳(`C:\workspace\_wt\aw_deploy`)에서 한다(조직 규칙 org-rules 4장). keep-prev-assets 가 `origin` 원격을 쓰므로 이 저장소의 체크아웃 · worktree 안에서 돌린다.
- base `'/awwwards-my-app/'` 는 `vite.config.mts` 에 있다. `index.html` 은 저장소 루트(`%BASE_URL%` 사용).
- 새로고침 404 대응: `public/404.html` 이 경로를 `?p=` 쿼리로 바꿔 리다이렉트(`segmentCount = 1`), `index.html` 의 스크립트가 되돌린다. 저장소 이름 · base 를 바꾸면 셋(vite.config.mts · 404.html · index.html)을 같이 본다.
- 배포 직후 404 방지(11-18 `b7a097a`): GitHub Pages 는 HTML 을 10분 캐시하는데 `gh-pages -d dist` 는 옛 해시 파일을 지운다. 그래서 `scripts/keep-prev-assets.mjs` 가 origin/gh-pages 의 `assets-manifest.json`(그 판이 만든 파일 목록)을 보고 직전 판 assets 를 dist 에 함께 넣는다 — 현재 + 직전 두 판만 남는다. 10분 안에 두 번 배포하면 두 판 전 HTML 은 여전히 404 가 날 수 있다. 그래도 청크를 못 받으면 `src/index.tsx` 의 `vite:preloadError` 처리가 한 번만 새로고침한다(1분 안에 또 실패하면 하지 않는다).
- 되돌리기: 이전 판(예: CRA 판 `0a88dc8`)을 checkout → 그 판의 방식대로 설치 · 빌드 → `npm run deploy`. gh-pages 브랜치 삭제 · force push 금지.
- 테스트는 0개다. 배포 전후 확인은 아래 '주의'의 기능 목록으로 한다.

## 환경 변수

- 없다. `.env` 를 만들게 되면 gitignore 유지 · 값은 문서 · 커밋에 쓰지 않는다.

## 외부 호출

- 데이터 API 호출 없음. 남은 외부 주소는 링크(awwwards.com 등)와 react-player 임베드뿐.

## 폴더 (아토믹 디자인, README "폴더 구조")

`pages/` 페이지 → `container/` 조립 → `components/` 조각. 데이터 상수는 `src/services/listData.ts`(사이트 목록 · 프로젝트 `projectData` · FAQ · 일정표), 타입은 `src/interface/`, 훅은 `src/hooks/`·`src/libs/`. 정의처는 하나, 순환 import 0. 상세 화면 내비 대상(`src/constants/navData.ts`)은 `projectData` 에서 파생한다 — 전시 목록에 넣으면 내비도 붙는다.

## 영상

- 배경 영상은 `src/assets/video` 에 `*.av1.mp4`(AV1) + `*.mp4`(H.264) 두 벌이다. `src/container/Music.tsx` 의 `<source>` 는 AV1 먼저, `type` 에 codecs(`av01.0.08M.08` · `avc1.64002A`)를 적어 AV1 을 못 읽는 브라우저는 H.264 로 내려간다. `muted` · `playsInline` 자동재생.
- 다시 인코딩할 때는 GPU(NVENC): `D:\tools\ffmpeg\ffmpeg-8.0.1-essentials_build\bin\ffmpeg.exe`(`h264_nvenc` · `av1_nvenc`). 같은 폴더의 9.0.2 판은 이 PC 드라이버(595.79)에서 NVENC 가 열리지 않는다. codecs 문자열은 `ffprobe` 로 프로필 · 레벨을 보고 맞춘다.
- 큰 바이너리(수 MB 이상의 영상 · 이미지)는 커밋 전에 총괄에게 알린다 — 저장소 이력에 영구히 남고(11-18 영상 재인코딩으로 약 +75MB), 지우려면 force push 가 필요한데 금지다.

## 주의

- 푸터 표시는 `App.tsx` 의 `ResizeObserver`(main 높이가 300px 를 넘으면 표시, 최대 4초 대기)로 판단한다. 건드릴 땐 관찰자 정리(cleanup) 유지.
- 배포 전 기능 목록(진입 애니메이션 · whileInView · 목록 → 상세 · 상세 내비 · 딥링크 새로고침 · FAQ 열고 닫기 · 드래그 앤 드롭 순서 바꾸기 · 음악 재생/정지 · react-player · 배경 영상 · 푸터 · 옛 주소 → 홈 · 가로 넘침 0 · 콘솔 오류 0 · 375 · 768 · 1440 레이아웃)을 배포 전후로 대조한다. 배포 뒤 확인은 운영 주소에서 한다.
- 이 PC 는 다른 서비스 운영 서버를 겸한다 — 평일 14:45~15:15 · 19:25~19:55 에는 `npm run build` · `deploy` · 영상 인코딩 금지(조직 규칙 org-rules 6장).
- 배포: 사용자 11-17 "어워드는 끝나면 바로 배포" — 일이 끝나고 `npm run check` 가 통과하면 `npm run deploy` 까지 한다(직원 세션이 막히면 커밋 sha 로 총괄에게).
