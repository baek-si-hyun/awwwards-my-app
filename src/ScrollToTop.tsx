import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { pathSelector } from "./atom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const path = useSetRecoilState(pathSelector);
  const pathCorrection = () => {
    path({ pathname });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    pathCorrection();
  }, [pathname]);

  return null;
}
