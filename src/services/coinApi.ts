import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
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

export function useCoinTickersSocket(coinList: string[]) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const connectWS = () => {
    const upbitSocket = new WebSocket("wss://api.upbit.com/websocket/v1");
    setSocket(() => upbitSocket);
    upbitSocket.addEventListener("error", (error) => {
      console.error("WebSocket error:", error);
      connectWS();
    });
    upbitSocket.addEventListener("close", () => {
      console.log("WebSocket connection closed");
      connectWS();
    });
  };
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
  }, [coinList, socket]);

  const fetchCoinTickersSocket = async () => {
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
  };

  return useQuery<ICoinSocketTickers[]>(
    ["coinTickers", coinList],
    () => fetchCoinTickersSocket(),
    {
      enabled: !!coinList,
      refetchInterval: 1000,
      cacheTime: 1000,
      refetchOnWindowFocus: false,
    }
  );
}

//무료 Supply api, market cap api 못찾겠다...
export const circulatingSupply = [
  { id: "KRW-EGLD", supply: 26141841 },
  { id: "KRW-MINA", supply: 993204269 },
  {
    id: "KRW-BLUR",
    supply: 1037696566,
  },
  {
    id: "KRW-ADA",
    supply: 35239093292,
  },
  {
    id: "KRW-LSK",
    supply: 128900445,
  },
  {
    id: "KRW-SUI",
    supply: 860392960,
  },
  {
    id: "KRW-BTC",
    supply: 19527825,
  },
  {
    id: "KRW-ETH",
    supply: 120269588,
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
    supply: 53560508378,
  },
  {
    id: "KRW-ETC",
    supply: 143761250,
  },
  {
    id: "KRW-OMG",
    supply: 140245398,
  },
  {
    id: "KRW-SNT",
    supply: 3867254211,
  },
  {
    id: "KRW-WAVES",
    supply: 112880272,
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
    supply: 447323620,
  },
  {
    id: "KRW-XLM",
    supply: 27828662953,
  },
  {
    id: "KRW-ARDR",
    supply: 998999495,
  },
  {
    id: "KRW-ARK",
    supply: 176574732,
  },
  {
    id: "KRW-STORJ",
    supply: 369601919,
  },
  {
    id: "KRW-GRS",
    supply: 83701269,
  },
  {
    id: "KRW-GRT",
    supply: 9273618693,
  },
  {
    id: "KRW-POWR",
    supply: 511332804,
  },
  {
    id: "KRW-BTG",
    supply: 17513924,
  },
  {
    id: "KRW-ICX",
    supply: 970574697,
  },
  {
    id: "KRW-EOS",
    supply: 1106943005,
  },
  {
    id: "KRW-TRX",
    supply: 88813932678,
  },
  {
    id: "KRW-SC",
    supply: 55459686387,
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
    supply: 743118982,
  },
  {
    id: "KRW-ZRX",
    supply: 847496055,
  },
  {
    id: "KRW-LOOM",
    supply: 1219425698,
  },
  {
    id: "KRW-BCH",
    supply: 19545181,
  },
  {
    id: "KRW-BAT",
    supply: 1490115132,
  },
  {
    id: "KRW-IOST",
    supply: 18588745668,
  },
  {
    id: "KRW-CVC",
    supply: 1000000000,
  },
  {
    id: "KRW-IQ",
    supply: 17022926376,
  },
  {
    id: "KRW-IOTA",
    supply: 2980714977,
  },
  {
    id: "KRW-HIFI",
    supply: 95012805,
  },
  {
    id: "KRW-ONG",
    supply: 360446029,
  },
  {
    id: "KRW-GAS",
    supply: 10128375,
  },
  {
    id: "KRW-UPP",
    supply: 490334811,
  },
  {
    id: "KRW-ELF",
    supply: 622340178,
  },
  {
    id: "KRW-KNC",
    supply: 170553950,
  },
  {
    id: "KRW-BSV",
    supply: 19266077,
  },
  {
    id: "KRW-THETA",
    supply: 1000000000,
  },
  {
    id: "KRW-QKC",
    supply: 6399906497,
  },
  {
    id: "KRW-BTT",
    supply: 951421714286000,
  },
  {
    id: "KRW-MOC",
    supply: 399489688,
  },
  {
    id: "KRW-TFUEL",
    supply: 6329728259,
  },
  {
    id: "KRW-MANA",
    supply: 1893095371,
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
    supply: 372014559,
  },
  {
    id: "KRW-TT",
    supply: 10445528584,
  },
  {
    id: "KRW-CRE",
    supply: 10000000000,
  },
  {
    id: "KRW-MBL",
    supply: 16805372888,
  },
  {
    id: "KRW-WAXP",
    supply: 3369760187,
  },
  {
    id: "KRW-HBAR",
    supply: 33530602294,
  },
  {
    id: "KRW-MED",
    supply: 6908642520,
  },
  {
    id: "KRW-MLK",
    supply: 316685004,
  },
  {
    id: "KRW-SBD",
    supply: 12532609,
  },
  {
    id: "KRW-STPT",
    supply: 1942420283,
  },
  {
    id: "KRW-ORBS",
    supply: 3837372313,
  },
  {
    id: "KRW-VET",
    supply: 72714516834,
  },
  {
    id: "KRW-CHZ",
    supply: 7565079839,
  },
  {
    id: "KRW-STMX",
    supply: 10000000000,
  },
  {
    id: "KRW-DKA",
    supply: 3121666667,
  },
  {
    id: "KRW-HIVE",
    supply: 500749243,
  },
  {
    id: "KRW-KAVA",
    supply: 885982791,
  },
  {
    id: "KRW-AHT",
    supply: 4317728503,
  },
  {
    id: "KRW-LINK",
    supply: 556849970,
  },
  {
    id: "KRW-SEI",
    supply: 1800000000,
  },
  {
    id: "KRW-XTZ",
    supply: 932500082,
  },
  {
    id: "KRW-BORA",
    supply: 993750000,
  },
  {
    id: "KRW-JST",
    supply: 8902080000,
  },
  {
    id: "KRW-CRO",
    supply: 25263013692,
  },
  {
    id: "KRW-TON",
    supply: 43749835,
  },
  {
    id: "KRW-SXP",
    supply: 582529712,
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
    supply: 1263709202,
  },
  {
    id: "KRW-SRM",
    supply: 263244669,
  },
  {
    id: "KRW-MVL",
    supply: 23752958863,
  },
  {
    id: "KRW-STRAX",
    supply: 154744623,
  },
  {
    id: "KRW-AQT",
    supply: 26640785,
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
    supply: 766632231,
  },
  {
    id: "KRW-CBK",
    supply: 78071865,
  },
  {
    id: "KRW-SAND",
    supply: 2071031926,
  },
  {
    id: "KRW-HPO",
    supply: 913409273,
  },
  {
    id: "KRW-HUM",
    supply: 913409274,
  },
  {
    id: "KRW-DOGE",
    supply: 141619286384,
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
    supply: 1036200000,
  },
  {
    id: "KRW-AXS",
    supply: 141391485,
  },
  {
    id: "KRW-STX",
    supply: 1415522352,
  },
  {
    id: "KRW-XEC",
    supply: 19539129673093,
  },
  {
    id: "KRW-SOL",
    supply: 419295247,
  },
  {
    id: "KRW-MATIC",
    supply: 9309803041,
  },
  {
    id: "KRW-NU",
    supply: 703000000,
  },
  {
    id: "KRW-AAVE",
    supply: 14598485,
  },
  {
    id: "KRW-1INCH",
    supply: 1043779237,
  },
  {
    id: "KRW-ALGO",
    supply: 7925375653,
  },
  {
    id: "KRW-NEAR",
    supply: 989205460,
  },
  {
    id: "KRW-AVAX",
    supply: 355071893,
  },
  {
    id: "KRW-T",
    supply: 9312266778,
  },
  {
    id: "KRW-CELO",
    supply: 515094127,
  },
  {
    id: "KRW-GMT",
    supply: 1294809379,
  },
  {
    id: "KRW-APT",
    supply: 247248463,
  },
  {
    id: "KRW-SHIB",
    supply: 589346914631298,
  },
  {
    id: "KRW-MASK",
    supply: 82112500,
  },
  {
    id: "KRW-ARB",
    supply: 1275000000,
  },
];
