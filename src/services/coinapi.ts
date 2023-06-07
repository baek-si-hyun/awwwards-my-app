import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { ICoinSocketTickers } from "../interface/interface";

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

  useEffect(() => {
    const upbitSocket = new WebSocket("wss://api.upbit.com/websocket/v1");
    setSocket(upbitSocket);
    const handleSocket = () => {
      setTimeout(() => {
        setSocket(new WebSocket("wss://api.upbit.com/websocket/v1"));
      }, 5000);
    };
    upbitSocket.addEventListener("open", () => {
      const subscribeMsg = [
        { ticket: "UNIQUE_TICKET" },
        { type: "ticker", codes: coinList },
      ];
      upbitSocket.send(JSON.stringify(subscribeMsg));
    });
    upbitSocket.addEventListener("error", handleSocket);
    upbitSocket.addEventListener("close", handleSocket);
    return () => {
      upbitSocket.removeEventListener("error", handleSocket);
      upbitSocket.removeEventListener("close", handleSocket);
    };
  }, [coinList]);

  const fetchCoinTickersSocket = async () => {
    let newArr: ICoinSocketTickers[] = [];
    await new Promise((resolve, reject) => {
      if (!socket) {
        reject("The websocket connection is experiencing some delay.");
        return;
      }

      socket.addEventListener("message", (message) => {
        const fileReader = new FileReader();
        fileReader.readAsText(message.data);
        fileReader.onload = () => {
          if (fileReader.result !== null) {
            const jsonData = JSON.parse(fileReader.result as string);
            newArr = [jsonData];
            resolve(newArr);
          }
        };
      });
      socket.addEventListener("error", (error) => {
        reject(error);
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
    }
  );
}



//무료 Supply api, market cap api 못찾겠다...
export const circulatingSupply = [
  {
    id: "KRW-BTC",
    supply: 19333156,
  },
  {
    id: "KRW-ETH",
    supply: 122373866,
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
    supply: 51678187732,
  },
  {
    id: "KRW-ETC",
    supply: 140161809,
  },
  {
    id: "KRW-OMG",
    supply: 140245398,
  },
  {
    id: "KRW-SNT",
    supply: 3964730597,
  },
  {
    id: "KRW-WAVES",
    supply: 111036670,
  },
  {
    id: "KRW-XEM",
    supply: 8999999999,
  },
  {
    id: "KRW-QTUM",
    supply: 104596095,
  },
  {
    id: "KRW-STEEM",
    supply: 430475782,
  },
  {
    id: "KRW-XLM",
    supply: 26627280380,
  },
  {
    id: "KRW-ARDR",
    supply: 998999495,
  },
  {
    id: "KRW-ARK",
    supply: 169776776,
  },
  {
    id: "KRW-STORJ",
    supply: 412937122,
  },
  {
    id: "KRW-GRS",
    supply: 82243084,
  },
  {
    id: "KRW-REP",
    supply: 11000000,
  },
  {
    id: "KRW-POWR",
    supply: 480228784,
  },
  {
    id: "KRW-BTG",
    supply: 17513924,
  },
  {
    id: "KRW-ICX",
    supply: 951886575,
  },
  {
    id: "KRW-EOS",
    supply: 1086869539,
  },
  {
    id: "KRW-TRX",
    supply: 91032746831,
  },
  {
    id: "KRW-SC",
    supply: 53644192991,
  },
  {
    id: "KRW-ONT",
    supply: 875249524,
  },
  {
    id: "KRW-ZIL",
    supply: 15867699447,
  },
  {
    id: "KRW-POLYX",
    supply: 606152961,
  },
  {
    id: "KRW-ZRX",
    supply: 847496055,
  },
  {
    id: "KRW-LOOM",
    supply: 1132425698,
  },
  {
    id: "KRW-BCH",
    supply: 19351638,
  },
  {
    id: "KRW-BAT",
    supply: 1485963648,
  },
  {
    id: "KRW-IOST",
    supply: 18708894189,
  },
  {
    id: "KRW-RFR",
    supply: 4999180100,
  },
  {
    id: "KRW-CVC",
    supply: 1000000000,
  },
  {
    id: "KRW-IQ",
    supply: 12521015157,
  },
  {
    id: "KRW-IOTA",
    supply: 2779530283,
  },
  {
    id: "KRW-HIFI",
    supply: 95012805,
  },
  {
    id: "KRW-ONG",
    supply: 338792143,
  },
  {
    id: "KRW-GAS",
    supply: 10128375,
  },
  {
    id: "KRW-UPP",
    supply: 459834811,
  },
  {
    id: "KRW-ELF",
    supply: 591510172,
  },
  {
    id: "KRW-KNC",
    supply: 164893760,
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
    supply: 379623956,
  },
  {
    id: "KRW-ENJ",
    supply: 1000000000,
  },
  {
    id: "KRW-TFUEL",
    supply: 6083517964,
  },
  {
    id: "KRW-MANA",
    supply: 1855084192,
  },
  {
    id: "KRW-ANKR",
    supply: 9662899378,
  },
  {
    id: "KRW-AERGO",
    supply: 430000000,
  },
  {
    id: "KRW-ATOM",
    supply: 286370297,
  },
  {
    id: "KRW-TT",
    supply: 10175990665,
  },
  {
    id: "KRW-CRE",
    supply: 8790810727,
  },
  {
    id: "KRW-MBL",
    supply: 15885372888,
  },
  {
    id: "KRW-WAXP",
    supply: 2425726482,
  },
  {
    id: "KRW-HBAR",
    supply: 30162396685,
  },
  {
    id: "KRW-MED",
    supply: 6908642520,
  },
  {
    id: "KRW-MLK",
    supply: 272979471,
  },
  {
    id: "KRW-STPT",
    supply: 1844503611,
  },
  {
    id: "KRW-ORBS",
    supply: 2876767039,
  },
  {
    id: "KRW-VET",
    supply: 72511146418,
  },
  {
    id: "KRW-CHZ",
    supply: 6768673450,
  },
  {
    id: "KRW-STMX",
    supply: 10000000000,
  },
  {
    id: "KRW-DKA",
    supply: 2495833333,
  },
  {
    id: "KRW-HIVE",
    supply: 476190255,
  },
  {
    id: "KRW-KAVA",
    supply: 461630959,
  },
  {
    id: "KRW-AHT",
    supply: 3550362121,
  },
  {
    id: "KRW-LINK",
    supply: 517099970,
  },
  {
    id: "KRW-XTZ",
    supply: 932500082,
  },
  {
    id: "KRW-BORA",
    supply: 927500000,
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
    supply: 38587479,
  },
  {
    id: "KRW-SXP",
    supply: 559603547,
  },
  {
    id: "KRW-HUNT",
    supply: 110357399,
  },
  {
    id: "KRW-PLA",
    supply: 537855941,
  },
  {
    id: "KRW-DOT",
    supply: 1174089701,
  },
  {
    id: "KRW-SRM",
    supply: 263244669,
  },
  {
    id: "KRW-MVL",
    supply: 22852958863,
  },
  {
    id: "KRW-STRAX",
    supply: 147605535,
  },
  {
    id: "KRW-AQT",
    supply: 26640784,
  },
  {
    id: "KRW-GLM",
    supply: 1000000000,
  },
  {
    id: "KRW-SSX",
    supply: 2755482191,
  },
  {
    id: "KRW-META",
    supply: 1687369624,
  },
  {
    id: "KRW-FCT2",
    supply: 642369407,
  },
  {
    id: "KRW-CBK",
    supply: 72386801,
  },
  {
    id: "KRW-SAND",
    supply: 1499470108,
  },
  {
    id: "KRW-HUM",
    supply: 913409274,
  },
  {
    id: "KRW-DOGE",
    supply: 138743686384,
  },
  {
    id: "KRW-STRK",
    supply: 3661890,
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
    id: "KRW-DAWN",
    supply: 74464266,
  },
  {
    id: "KRW-AXS",
    supply: 115612959,
  },
  {
    id: "KRW-STX",
    supply: 1368438789,
  },
  {
    id: "KRW-XEC",
    supply: 19347704673303,
  },
  {
    id: "KRW-SOL",
    supply: 385472842,
  },
  {
    id: "KRW-MATIC",
    supply: 9080469069,
  },
  {
    id: "KRW-NU",
    supply: 703000000,
  },
  {
    id: "KRW-AAVE",
    supply: 14093193,
  },
  {
    id: "KRW-1INCH",
    supply: 827975236,
  },
  {
    id: "KRW-ALGO",
    supply: 7145816906,
  },
  {
    id: "KRW-NEAR",
    supply: 866021029,
  },
  {
    id: "KRW-AVAX",
    supply: 325883255,
  },
  {
    id: "KRW-T",
    supply: 8575884818,
  },
  {
    id: "KRW-CELO",
    supply: 491531934,
  },
  {
    id: "KRW-GMT",
    supply: 600000000,
  },
  {
    id: "KRW-APT",
    supply: 177305846,
  },
  {
    id: "KRW-SHIB",
    supply: 589543276515359,
  },
  {
    id: "KRW-MASK",
    supply: 76150000,
  },
  {
    id: "KRW-ARB",
    supply: 1275000000,
  },
];
