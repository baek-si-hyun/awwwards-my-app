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
        message.data.text().then((text: string) => {
          const jsonData = JSON.parse(text);
          newArr = [jsonData];
          resolve(newArr);
        });
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
      refetchOnWindowFocus: false,
    }
  );
}

//무료 Supply api, market cap api 못찾겠다...
export const circulatingSupply = [
  {
    id: "KRW-BLUR",
    supply: 759758180,
  },
  {
    id: "KRW-ADA",
    supply: 34970155984,
  },
  {
    id: "KRW-LSK",
    supply: 128900445,
  },
  {
    id: "KRW-SUI",
    supply: 654546806,
  },
  {
    id: "KRW-BTC",
    supply: 19427887,
  },
  {
    id: "KRW-ETH",
    supply: 120207913,
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
    supply: 52544091958,
  },
  {
    id: "KRW-ETC",
    supply: 141932150,
  },
  {
    id: "KRW-OMG",
    supply: 140245398,
  },
  {
    id: "KRW-SNT",
    supply: 3852753076,
  },
  {
    id: "KRW-WAVES",
    supply: 111934114,
  },
  {
    id: "KRW-XEM",
    supply: 8999999999,
  },
  {
    id: "KRW-QTUM",
    supply: 104735928,
  },
  {
    id: "KRW-STEEM",
    supply: 438694573,
  },
  {
    id: "KRW-XLM",
    supply: 27063512562,
  },
  {
    id: "KRW-ARDR",
    supply: 998999495,
  },
  {
    id: "KRW-ARK",
    supply: 174218126,
  },
  {
    id: "KRW-STORJ",
    supply: 379362178,
  },
  {
    id: "KRW-GRS",
    supply: 82953344,
  },
  {
    id: "KRW-GRT",
    supply: 9075404128,
  },
  {
    id: "KRW-POWR",
    supply: 480051412,
  },
  {
    id: "KRW-BTG",
    supply: 17513924,
  },
  {
    id: "KRW-ICX",
    supply: 961311974,
  },
  {
    id: "KRW-EOS",
    supply: 1096596667,
  },
  {
    id: "KRW-TRX",
    supply: 89809370915,
  },
  {
    id: "KRW-SC",
    supply: 54594965975,
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
    supply: 690812174,
  },
  {
    id: "KRW-ZRX",
    supply: 847496055,
  },
  {
    id: "KRW-LOOM",
    supply: 1209425698,
  },
  {
    id: "KRW-BCH",
    supply: 19447231,
  },
  {
    id: "KRW-BAT",
    supply: 1489309694,
  },
  {
    id: "KRW-IOST",
    supply: 18588745668,
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
    supply: 16025059730,
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
    supply: 347286772,
  },
  {
    id: "KRW-GAS",
    supply: 10128375,
  },
  {
    id: "KRW-UPP",
    supply: 482834811,
  },
  {
    id: "KRW-ELF",
    supply: 622340178,
  },
  {
    id: "KRW-KNC",
    supply: 170707123,
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
    supply: 390489688,
  },
  {
    id: "KRW-ENJ",
    supply: 1000000000,
  },
  {
    id: "KRW-TFUEL",
    supply: 6206395131,
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
    supply: 430000000,
  },
  {
    id: "KRW-ATOM",
    supply: 346608690,
  },
  {
    id: "KRW-TT",
    supply: 10309503781,
  },
  {
    id: "KRW-CRE",
    supply: 9806931560,
  },
  {
    id: "KRW-MBL",
    supply: 16345372888,
  },
  {
    id: "KRW-WAXP",
    supply: 3326517968,
  },
  {
    id: "KRW-HBAR",
    supply: 32287565809,
  },
  {
    id: "KRW-MED",
    supply: 6908642520,
  },
  {
    id: "KRW-MLK",
    supply: 294958754,
  },
  {
    id: "KRW-SBD",
    supply: 12289431,
  },
  {
    id: "KRW-STPT",
    supply: 1942420283,
  },
  {
    id: "KRW-ORBS",
    supply: 3413370622,
  },
  {
    id: "KRW-VET",
    supply: 72714516834,
  },
  {
    id: "KRW-CHZ",
    supply: 7039695858,
  },
  {
    id: "KRW-STMX",
    supply: 10000000000,
  },
  {
    id: "KRW-DKA",
    supply: 3027916667,
  },
  {
    id: "KRW-HIVE",
    supply: 500749243,
  },
  {
    id: "KRW-KAVA",
    supply: 624984337,
  },
  {
    id: "KRW-AHT",
    supply: 3880335939,
  },
  {
    id: "KRW-LINK",
    supply: 538099970,
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
    supply: 39920279,
  },
  {
    id: "KRW-SXP",
    supply: 570776325,
  },
  {
    id: "KRW-HUNT",
    supply: 198912688,
  },
  {
    id: "KRW-PLA",
    supply: 560128667,
  },
  {
    id: "KRW-DOT",
    supply: 1204118827,
  },
  {
    id: "KRW-SRM",
    supply: 263244669,
  },
  {
    id: "KRW-MVL",
    supply: 23302958863,
  },
  {
    id: "KRW-STRAX",
    supply: 151084467,
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
    supply: 2810599815,
  },
  {
    id: "KRW-META",
    supply: 1687369624,
  },
  {
    id: "KRW-FCT2",
    supply: 706726930,
  },
  {
    id: "KRW-CBK",
    supply: 75635409,
  },
  {
    id: "KRW-SAND",
    supply: 1869731926,
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
    supply: 140148776384,
  },
  {
    id: "KRW-STRK",
    supply: 3808965,
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
    supply: 119284894,
  },
  {
    id: "KRW-STX",
    supply: 1391076849,
  },
  {
    id: "KRW-XEC",
    supply: 19441285923293,
  },
  {
    id: "KRW-SOL",
    supply: 402772504,
  },
  {
    id: "KRW-MATIC",
    supply: 9319469069,
  },
  {
    id: "KRW-NU",
    supply: 703000000,
  },
  {
    id: "KRW-AAVE",
    supply: 14472451,
  },
  {
    id: "KRW-1INCH",
    supply: 947781921,
  },
  {
    id: "KRW-ALGO",
    supply: 7650952566,
  },
  {
    id: "KRW-NEAR",
    supply: 931291384,
  },
  {
    id: "KRW-AVAX",
    supply: 345834259,
  },
  {
    id: "KRW-T",
    supply: 8832515135,
  },
  {
    id: "KRW-CELO",
    supply: 505091663,
  },
  {
    id: "KRW-GMT",
    supply: 1102543766,
  },
  {
    id: "KRW-APT",
    supply: 215154078,
  },
  {
    id: "KRW-SHIB",
    supply: 589346952141274,
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
