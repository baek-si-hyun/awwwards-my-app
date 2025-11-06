import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchBithumbOrderbook } from "../../../services/bithumbApi";
import {
  setOrderbookData,
  setOrderbookError,
  setOrderbookLoading,
  setMarket,
} from "../../../redux/orderbookSlice";

export function useOrderbookData(market: string, interval: number = 2000) {
  const dispatch = useDispatch();

  const load = useCallback(async () => {
    if (!market) return;

    dispatch(setOrderbookLoading(true));
    try {
      const ob = await fetchBithumbOrderbook(market);
      dispatch(setOrderbookData(ob));
    } catch (err) {
      dispatch(
        setOrderbookError(
          err instanceof Error ? err : new Error("Failed to fetch orderbook")
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market]);

  useEffect(() => {
    dispatch(setMarket(market));
    if (!market) return;

    let active = true;
    let timer: NodeJS.Timeout | null = null;

    const poll = async () => {
      if (!active) return;
      await load();
      if (active) {
        timer = setTimeout(poll, interval);
      }
    };

    poll();

    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load, interval]);
}
