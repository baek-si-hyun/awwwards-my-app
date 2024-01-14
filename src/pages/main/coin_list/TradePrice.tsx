import { useEffect, useState } from "react";
import { ICoinHttpTickers, ICoinSocketTickers } from "../../../interface/icoin";
import styled, { keyframes, css } from "styled-components";

const TradePrice = ({
  coinName,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;

  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const price: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.trade_price.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;

    return <span>₩{price || 0}</span>;
  }
  return <></>;
};
export default TradePrice;
