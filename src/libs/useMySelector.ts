import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function useMySelector<TSelected>(
  selector: (state: RootState) => TSelected
) {
  return useSelector<RootState, TSelected>(selector, shallowEqual);
}
