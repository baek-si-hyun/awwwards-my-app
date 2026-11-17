import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 프로젝트 페이지(https://baek-si-hyun.github.io/awwwards-my-app/)에 올리므로 base 고정.
// public/404.html(segmentCount = 1) 과 index.html 의 복귀 스크립트가 이 경로를 전제로 한다.
export default defineConfig({
  base: "/awwwards-my-app/",
  plugins: [react()],
});
