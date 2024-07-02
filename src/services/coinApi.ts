import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";
import { ICoinSocketTickers } from "../interface/icoin";

export async function fetchCoins() {
  const response = await fetch(
    `https://api.upbit.com/v1/market/all?isDetails=false`
  );
  return await response.json();
}
export async function fetchCoinTickers(coinList: string[]) {
  let results = [];
  for (let index = 0; index < coinList.length; index++) {
    const response = await fetch(
      `https://api.upbit.com/v1/ticker?markets=${coinList[index]}`
    );
    const [json] = await response.json();
    results.push(json);
  }
  return results;
}

export async function fetchCoinHistory(coinList: string[]) {
  let results = [];
  for (let index = 0; index < coinList.length; index++) {
    const response = await fetch(
      `https://api.upbit.com/v1/candles/days?market=${coinList[index]}&count=200&convertingPriceUnit=KRW`
    );
    const json = await response.json();
    results.push(json);
  }
  return results;
}
export const useCoinTickersSocket = (coinList: string[]) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const connectWS = useCallback(() => {
    const upbitSocket = new WebSocket("wss://api.upbit.com/websocket/v1");
    setSocket(() => upbitSocket);
    upbitSocket.addEventListener("error", (error) => {
      console.error("WebSocket error:", error);
      connectWS();
    });
    upbitSocket.addEventListener("close", () => {
      connectWS();
    });
  }, []);

  useEffect(() => {
    if (!socket) {
      connectWS();
      return;
    }
    socket.addEventListener("open", () => {
      const subscribeMsg = [
        { ticket: "UNIQUE_TICKET" },
        { type: "ticker", codes: coinList },
      ];
      socket.send(JSON.stringify(subscribeMsg));
    });
  }, [coinList, socket, connectWS]);

  const fetchCoinTickersSocket = useCallback(async () => {
    let newArr: ICoinSocketTickers[] = [];
    await new Promise((resolve, reject) => {
      if (!socket) {
        reject("The websocket connection is experiencing some delay.");
        return;
      }
      socket.addEventListener("message", (message) => {
        message.data.text().then((text: string) => {
          const jsonData = JSON.parse(text);
          newArr = [jsonData];
          resolve(newArr);
        });
      });
    });
    return newArr;
  }, [socket]);

  return useQuery<ICoinSocketTickers[]>(
    ["coinTickers", coinList],
    fetchCoinTickersSocket,
    {
      enabled: !!coinList,
      refetchInterval: 500,
      cacheTime: 500,
      refetchOnWindowFocus: false,
    }
  );
};

//무료 Supply api, market cap api 못찾겠다...
export const circulatingSupply = [
  { id: "KRW-ZETA", supply: 265475000 },
  { id: "KRW-IMX", supply: 1456815249 },
  { id: "KRW-EGLD", supply: 26853943 },
  { id: "KRW-MINA", supply: 1091547861 },
  {
    id: "KRW-BLUR",
    supply: 1559340725,
  },
  {
    id: "KRW-ADA",
    supply: 35631835365,
  },
  { id: "KRW-STRIKE", supply: 4813974 },
  {
    id: "KRW-LSK",
    supply: 128900445,
  },
  {
    id: "KRW-SUI",
    supply: 1295901469,
  },
  {
    id: "KRW-BTC",
    supply: 19689303,
  },
  {
    id: "KRW-ETH",
    supply: 122044085,
  },
  {
    id: "KRW-NEO",
    supply: 70538831,
  },
  {
    id: "KRW-MTL",
    supply: 66588888,
  },
  {
    id: "KRW-XRP",
    supply: 55129144019,
  },
  {
    id: "KRW-ETC",
    supply: 146702776,
  },
  {
    id: "KRW-OMG",
    supply: 140245398,
  },
  {
    id: "KRW-SNT",
    supply: 3877437479,
  },
  {
    id: "KRW-WAVES",
    supply: 114411940,
  },
  {
    id: "KRW-XEM",
    supply: 8999999999,
  },
  {
    id: "KRW-QTUM",
    supply: 104755842,
  },
  {
    id: "KRW-STEEM",
    supply: 460447618,
  },
  {
    id: "KRW-XLM",
    supply: 28918610779,
  },
  {
    id: "KRW-ARDR",
    supply: 998999495,
  },
  {
    id: "KRW-ARK",
    supply: 180363380,
  },
  {
    id: "KRW-STORJ",
    supply: 414984351,
  },
  {
    id: "KRW-GRS",
    supply: 84912674,
  },
  {
    id: "KRW-GRT",
    supply: 9482594119,
  },
  {
    id: "KRW-POWR",
    supply: 512375110,
  },
  {
    id: "KRW-BTG",
    supply: 17513924,
  },
  {
    id: "KRW-ICX",
    supply: 990775901,
  },
  {
    id: "KRW-EOS",
    supply: 1123883481,
  },
  {
    id: "KRW-TRX",
    supply: 87581059304,
  },
  {
    id: "KRW-SC",
    supply: 57008346857,
  },
  {
    id: "KRW-ONT",
    supply: 875249524,
  },
  {
    id: "KRW-ZIL",
    supply: 17372203179,
  },
  {
    id: "KRW-POLYX",
    supply: 843897698,
  },
  {
    id: "KRW-ZRX",
    supply: 847496055,
  },
  {
    id: "KRW-LOOM",
    supply: 1224270898,
  },
  {
    id: "KRW-BCH",
    supply: 19695803,
  },
  {
    id: "KRW-BAT",
    supply: 1490413701,
  },
  {
    id: "KRW-IOST",
    supply: 21315000000,
  },
  {
    id: "KRW-CVC",
    supply: 1000000000,
  },
  {
    id: "KRW-IQ",
    supply: 18032726356,
  },
  {
    id: "KRW-IOTA",
    supply: 3229505319,
  },
  {
    id: "KRW-HIFI",
    supply: 123618290,
  },
  { id: "KRW-ID", supply: 533986987 },
  {
    id: "KRW-ONG",
    supply: 376722113,
  },
  { id: "KRW-ASTR", supply: 5633951458 },
  {
    id: "KRW-GAS",
    supply: 67623878,
  },
  {
    id: "KRW-UPP",
    supply: 497834800,
  },
  {
    id: "KRW-ELF",
    supply: 726537296,
  },
  {
    id: "KRW-KNC",
    supply: 187996102,
  },
  {
    id: "KRW-BSV",
    supply: 19692013,
  },
  {
    id: "KRW-THETA",
    supply: 1000000000,
  },
  {
    id: "KRW-QKC",
    supply: 6983119113,
  },
  {
    id: "KRW-BTT",
    supply: 951421714286000,
  },
  {
    id: "KRW-MOC",
    supply: 412489688,
  },
  {
    id: "KRW-TFUEL",
    supply: 6523967285,
  },
  {
    id: "KRW-MANA",
    supply: 1908319865,
  },
  {
    id: "KRW-ANKR",
    supply: 10000000000,
  },
  {
    id: "KRW-AERGO",
    supply: 445000000,
  },
  {
    id: "KRW-ATOM",
    supply: 390930671,
  },
  { id: "KRW-AKT", supply: 234465962 },
  {
    id: "KRW-TT",
    supply: 10445528584,
  },
  {
    id: "KRW-GAME2",
    supply: 15616114935,
  },
  {
    id: "KRW-MBL",
    supply: 17535220550,
  },
  {
    id: "KRW-WAXP",
    supply: 3436555622,
  },
  {
    id: "KRW-HBAR",
    supply: 35742801273,
  },
  { id: "KRW-PYTH", supply: 1499989003 },
  {
    id: "KRW-MED",
    supply: 8285671092,
  },
  {
    id: "KRW-MLK",
    supply: 353736562,
  },
  {
    id: "KRW-SBD",
    supply: 13194660,
  },
  {
    id: "KRW-STPT",
    supply: 1942420283,
  },
  {
    id: "KRW-ORBS",
    supply: 4301534998,
  },
  {
    id: "KRW-VET",
    supply: 72714516834,
  },
  {
    id: "KRW-CHZ",
    supply: 8888289967,
  },
  {
    id: "KRW-STMX",
    supply: 10000000000,
  },
  {
    id: "KRW-DKA",
    supply: 3716250000,
  },
  {
    id: "KRW-HIVE",
    supply: 500749243,
  },
  {
    id: "KRW-KAVA",
    supply: 1082860622,
  },
  {
    id: "KRW-AHT",
    supply: 4502217832,
  },
  {
    id: "KRW-LINK",
    supply: 587099970,
  },
  {
    id: "KRW-SEI",
    supply: 2800000000,
  },
  {
    id: "KRW-XTZ",
    supply: 979244499,
  },
  {
    id: "KRW-BORA",
    supply: 1046750000,
  },
  {
    id: "KRW-JST",
    supply: 8902080000,
  },
  {
    id: "KRW-CRO",
    supply: 26571560696,
  },
  {
    id: "KRW-TON",
    supply: 43841454,
  },
  {
    id: "KRW-SXP",
    supply: 601550328,
  },
  {
    id: "KRW-HUNT",
    supply: 198912688,
  },
  {
    id: "KRW-PLA",
    supply: 569265030,
  },
  {
    id: "KRW-DOT",
    supply: 1436847160,
  },
  {
    id: "KRW-SRM",
    supply: 263244669,
  },
  {
    id: "KRW-MVL",
    supply: 24652958863,
  },
  {
    id: "KRW-STRAX",
    supply: 1908178499,
  },
  {
    id: "KRW-AQT",
    supply: 26806201,
  },
  {
    id: "KRW-GLM",
    supply: 1000000000,
  },
  {
    id: "KRW-SSX",
    supply: 2861938931,
  },
  {
    id: "KRW-META",
    supply: 1703608720,
  },
  {
    id: "KRW-FCT2",
    supply: 843825196,
  },
  { id: "KRW-CTC", supply: 331783609 },
  {
    id: "KRW-CBK",
    supply: 82944777,
  },
  {
    id: "KRW-SAND",
    supply: 2251731926,
  },
  {
    id: "KRW-HPO",
    supply: 993409273,
  },
  {
    id: "KRW-HUM",
    supply: 913409274,
  },
  {
    id: "KRW-DOGE",
    supply: 144009276384,
  },
  {
    id: "KRW-STRK",
    supply: 3964522,
  },
  {
    id: "KRW-PUNDIX",
    supply: 258491637,
  },
  {
    id: "KRW-FLOW",
    supply: 1501883814,
  },
  {
    id: "KRW-AXS",
    supply: 143636573,
  },
  {
    id: "KRW-STX",
    supply: 1453976524,
  },
  {
    id: "KRW-XEC",
    supply: 19539129673093,
  },
  {
    id: "KRW-SOL",
    supply: 447048737,
  },
  {
    id: "KRW-MATIC",
    supply: 9899052814,
  },
  {
    id: "KRW-NU",
    supply: 703000000,
  },
  {
    id: "KRW-AAVE",
    supply: 14807466,
  },
  {
    id: "KRW-1INCH",
    supply: 1157267877,
  },
  {
    id: "KRW-ALGO",
    supply: 8133112354,
  },
  {
    id: "KRW-NEAR",
    supply: 1065164766,
  },
  {
    id: "KRW-AVAX",
    supply: 378019462,
  },
  {
    id: "KRW-T",
    supply: 9647764144,
  },
  {
    id: "KRW-CELO",
    supply: 533817831,
  },
  {
    id: "KRW-GMT",
    supply: 1930858058,
  },
  {
    id: "KRW-APT",
    supply: 426017434,
  },
  {
    id: "KRW-SHIB",
    supply: 589346914631298,
  },
  {
    id: "KRW-MASK",
    supply: 96025000,
  },
  {
    id: "KRW-ARB",
    supply: 2653939384,
  },
  { id: "KRW-MNT", supply: 3264441708 },
  { id: "KRW-ZRO", supply: 110000000 },
  { id: "KRW-TAIKO", supply: 65951595 },
  { id: "KRW-BLAST", supply: 17000000000 },
  { id: "KRW-BEAM", supply: 49466004168 },
  { id: "KRW-USDT", supply: 112911493076 },
  { id: "KRW-ONDO", supply: 1389759838 },
  { id: "KRW-AUCTION", supply: 6500037 },
];
