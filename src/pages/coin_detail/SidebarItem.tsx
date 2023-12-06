import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ICoins } from "../../interface/icoin";
import useCoinNames from "../../libs/useCoinNames";
import { useCoinTickersSocket } from "../../services/coinApi";

const ListLi = styled.li`
  display: flex;
`;
const Interest = styled.div``;
const Candle = styled.div``;
const Name = styled.div``;
const TradePrice = styled.div``;
const Change = styled.div``;
const Volume = styled.div``;
function SidebarItem() {
  const { pathname } = useLocation();
  const [coinName, setCoinName] = useState<string[]>();
  const [nameObj, setNameObj] = useState<string[]>();
  const { nameData } = useCoinNames(false);
  const { data: tickerSocketData } = useCoinTickersSocket(coinName!);
  useEffect(() => {
    // const coinList = nameData?.map((data) => data.market);
    // if (coinList) {
    //   setNameObj(coinList);
    //   const coinWithPrefix = "KRW-" + editPathname;
    //   setCoinName(coinWithPrefix);
    // }
  }, [pathname, nameData]);
  return (
    <ListLi>
      <Interest></Interest>
      <Candle></Candle>
      <Name>
        <span></span>
        <span></span>
      </Name>
      <TradePrice></TradePrice>
      <Change>
        <span></span>
        <span></span>
      </Change>
      <Volume></Volume>
    </ListLi>
  );
}

export default SidebarItem;
