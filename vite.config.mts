import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 프로젝트 페이지(https://baek-si-hyun.github.io/awwwards-my-app/)에 올리므로 base 고정.
// public/404.html(segmentCount = 1) 과 index.html 의 복귀 스크립트가 이 경로를 전제로 한다.
export default defineConfig({
  base: "/awwwards-my-app/",
  plugins: [react()],
  // 작은 이미지(아이콘 · 썸네일 28개, 약 60KB)를 base64 로 JS 에 넣지 않는다 —
  // 첫 화면 JS 가 그만큼 무거워지고, 이미지는 어차피 loading="lazy" 로 필요할 때 받는다.
  build: { assetsInlineLimit: 0 },
});
