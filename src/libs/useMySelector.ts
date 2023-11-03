import { shallowEqual, useSelector } from "react-redux";

export function useMySelector({ selector }: any) {
  return useSelector(selector, shallowEqual);
}
