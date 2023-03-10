import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { pathSelector } from "./atom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(pathname);
  const path = useSetRecoilState(pathSelector);
  const pathCorrection = () => {
    path({ pathname });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    pathCorrection();
  }, [pathname]);

  return null;
}
