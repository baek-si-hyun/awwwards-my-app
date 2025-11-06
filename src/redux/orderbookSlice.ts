import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BithumbOrderbookResult } from "../services/bithumbApi";

interface OrderbookState {
  market: string;
  data: BithumbOrderbookResult;
  error: Error | null;
  loading: boolean;
}

const initialState: OrderbookState = {
  market: "",
  data: { bids: [], asks: [] },
  error: null,
  loading: false,
};

const orderbookSlice = createSlice({
  name: "orderbook",
  initialState,
  reducers: {
    setMarket: (state, action: PayloadAction<string>) => {
      state.market = action.payload;
    },
    setOrderbookData: (state, action: PayloadAction<BithumbOrderbookResult>) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    setOrderbookError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setOrderbookLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default orderbookSlice;
export const {
  setMarket,
  setOrderbookData,
  setOrderbookError,
  setOrderbookLoading,
} = orderbookSlice.actions;

