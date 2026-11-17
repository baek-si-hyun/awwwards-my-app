import { RefObject, useEffect, useState } from "react";

// 경로가 바뀌면 false 로 시작해, 본문(target)이 실제 높이(300px 초과)를 갖는 순간 true 가 된다.
// lazy 화면은 Suspense 빈 fallback 동안 높이가 0 이라 그동안은 false. 최대 4초 뒤엔 무조건 true.
// '준비된 경로'를 기억해 비교하므로 effect 안에서 상태를 되돌리지 않는다.
export function useContentReady(
  target: RefObject<HTMLElement | null>,
  pathname: string
) {
  const [readyPath, setReadyPath] = useState<string | null>(null);

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const markReady = () => setReadyPath(pathname);
    const observer = new ResizeObserver(() => {
      if (el.offsetHeight > 300) {
        markReady();
        observer.disconnect();
      }
    });
    observer.observe(el);
    const maxTimer = setTimeout(markReady, 4000);
    return () => {
      observer.disconnect();
      clearTimeout(maxTimer);
    };
  }, [target, pathname]);

  return readyPath === pathname;
}
