// 배포 직전(predeploy)에 돈다. GitHub Pages 는 HTML 을 10분(max-age=600) 캐시하는데
// gh-pages -d dist 는 옛 해시 파일을 지우므로, 배포 직후 캐시된 옛 HTML 을 연 사람은 옛 JS · 영상이 404 난다.
// 그래서 "지금 운영에 있는 판(직전 배포)"이 쓰던 assets 만 dist/assets 에 함께 넣어 올린다.
// 그 전 판은 다음 배포 때 빠진다(현재 + 직전 두 판만 유지).
//
// - 이 판이 만든 파일 목록을 dist/assets-manifest.json 에 남긴다(다음 배포가 '직전 판'을 알아보는 기준).
// - 직전 판 목록은 origin/gh-pages 의 assets-manifest.json. 없으면(첫 배포) 그 브랜치의 assets/ 전부.
// - 파일은 git 오브젝트에서 바로 꺼낸다(외부 다운로드 · worktree 없음). 같은 이름(=같은 내용 해시)은 건너뛴다.
//
// 사용: node scripts/keep-prev-assets.mjs [--dry-run]
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const ASSETS = join(DIST, "assets");
const MANIFEST = "assets-manifest.json";
const REMOTE_BRANCH = "origin/gh-pages";
const dryRun = process.argv.includes("--dry-run");

const git = (args, opts = {}) =>
  execFileSync("git", args, { maxBuffer: 512 * 1024 * 1024, ...opts });

if (!existsSync(ASSETS)) {
  console.error(`[keep-prev-assets] ${ASSETS} 가 없다 — build 먼저`);
  process.exit(1);
}

const own = readdirSync(ASSETS);
if (!dryRun) {
  writeFileSync(join(DIST, MANIFEST), JSON.stringify(own, null, 2) + "\n");
}

try {
  git(["fetch", "--quiet", "origin", "gh-pages"], { stdio: "ignore" });
} catch {
  console.warn("[keep-prev-assets] origin gh-pages 를 받지 못했다 — 직전 판 없이 진행");
  process.exit(0);
}

let prev;
try {
  prev = JSON.parse(
    git(["show", `${REMOTE_BRANCH}:${MANIFEST}`], {
      stdio: ["ignore", "pipe", "ignore"],
    }).toString()
  );
} catch {
  prev = git(["ls-tree", "--name-only", `${REMOTE_BRANCH}:assets`])
    .toString()
    .split("\n")
    .filter(Boolean);
}

const ownSet = new Set(own);
const toCopy = prev.filter((name) => !ownSet.has(name));
let bytes = 0;
for (const name of toCopy) {
  const blob = git(["show", `${REMOTE_BRANCH}:assets/${name}`]);
  bytes += blob.length;
  if (!dryRun) writeFileSync(join(ASSETS, name), blob);
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(
  `[keep-prev-assets]${dryRun ? " (dry-run)" : ""} 이 판 ${own.length}개 · 직전 판 ${prev.length}개 중 ` +
    `${toCopy.length}개(${mb(bytes)}MB)를 함께 올린다`
);
for (const name of toCopy) console.log(`  + ${name}`);
