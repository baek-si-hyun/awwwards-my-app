import { useState, useEffect, useCallback } from "react";
import { ICoinSocketTickers } from "../interface/icoin";
import { json } from "stream/consumers";

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

export const useCoinTickersSocket = (socketNameList: string[]) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [coinTickers, setCoinTickers] = useState<ICoinSocketTickers[]>([]);
  const [error, setError] = useState<string | null>(null);

  const connectWS = useCallback(() => {
    if (
      socket &&
      (socket.readyState === WebSocket.OPEN ||
        socket.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }
    const upbitSocket = new WebSocket("wss://api.upbit.com/websocket/v1");
    setSocket(upbitSocket);

    upbitSocket.addEventListener("error", (error: any) => {
      console.error("WebSocket error:", error.name);
      setError("WebSocket error: " + error.name);
      upbitSocket.close();
    });

    upbitSocket.addEventListener("close", () => {
      setSocket(null);
      connectWS();
    });

    upbitSocket.addEventListener("message", (message) => {
      message.data.text().then((text: string) => {
        try {
          const jsonData = JSON.parse(text);
          setCoinTickers(() => [jsonData]);
        } catch (e) {
          console.error("Error parsing message data:", e);
        }
      });
    });
  }, [socket]);

  useEffect(() => {
    connectWS();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [connectWS]);

  useEffect(() => {
    if (!socket || !socketNameList) return;

    const handleOpen = () => {
      const subscribeMsg = [
        { ticket: "UNIQUE_TICKET" },
        { type: "ticker", codes: socketNameList },
      ];
      socket.send(JSON.stringify(subscribeMsg));
    };

    socket.addEventListener("open", handleOpen);

    return () => {
      socket.removeEventListener("open", handleOpen);
    };
  }, [socketNameList, socket]);
  return { coinTickers, error };
};

//무료 Supply api, market cap api 못찾겠다...
export const circulatingSupply = [
  { id: "KRW-ZETA", supply: 683010417 },
  { id: "KRW-IMX", supply: 1743800322 },
  { id: "KRW-EGLD", supply: 27865314 },
  { id: "KRW-MINA", supply: 1214515858 },
  {
    id: "KRW-BLUR",
    supply: 2203803082,
  },
  {
    id: "KRW-ADA",
    supply: 35201193526,
  },
  { id: "KRW-STRIKE", supply: 5265785 },
  {
    id: "KRW-LSK",
    supply: 166894159,
  },
  {
    id: "KRW-SUI",
    supply: 3089707195,
  },
  {
    id: "KRW-BTC",
    supply: 19823850,
  },
  {
    id: "KRW-ETH",
    supply: 120545398,
  },
  {
    id: "KRW-NEO",
    supply: 70538831,
  },
  {
    id: "KRW-MTL",
    supply: 83171865,
  },
  {
    id: "KRW-XRP",
    supply: 57762545657,
  },
  {
    id: "KRW-ETC",
    supply: 150740793,
  },
  {
    id: "KRW-OMG",
    supply: 140245398,
  },
  {
    id: "KRW-SNT",
    supply: 3996911204,
  },
  {
    id: "KRW-WAVES",
    supply: 116974126,
  },
  {
    id: "KRW-XEM",
    supply: 8999999999,
  },
  {
    id: "KRW-QTUM",
    supply: 105521616,
  },
  {
    id: "KRW-STEEM",
    supply: 483263173,
  },
  {
    id: "KRW-XLM",
    supply: 30603014104,
  },
  {
    id: "KRW-ARDR",
    supply: 998466231,
  },
  {
    id: "KRW-ARK",
    supply: 186706754,
  },
  {
    id: "KRW-STORJ",
    supply: 401361292,
  },
  {
    id: "KRW-GRS",
    supply: 86940619,
  },
  {
    id: "KRW-GRT",
    supply: 9548531509,
  },
  {
    id: "KRW-POWR",
    supply: 560162329,
  },
  {
    id: "KRW-BTG",
    supply: 17513924,
  },
  {
    id: "KRW-ICX",
    supply: 1048487515,
  },
  {
    id: "KRW-EOS",
    supply: 1546399988,
  },
  {
    id: "KRW-TRX",
    supply: 86098744015,
  },
  {
    id: "KRW-SC",
    supply: 56025636522,
  },
  {
    id: "KRW-ONT",
    supply: 912697857,
  },
  {
    id: "KRW-ZIL",
    supply: 19527125342,
  },
  {
    id: "KRW-POLYX",
    supply: 925434676,
  },
  {
    id: "KRW-POL",
    supply: 8562688053,
  },
  {
    id: "KRW-ZRX",
    supply: 848396563,
  },
  {
    id: "KRW-LOOM",
    supply: 1242920898,
  },
  {
    id: "KRW-BCH",
    supply: 19829019,
  },
  {
    id: "KRW-BAT",
    supply: 1495668357,
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
    supply: 20520426316,
  },
  {
    id: "KRW-IOTA",
    supply: 3631397410,
  },
  {
    id: "KRW-HIFI",
    supply: 141753577,
  },
  { id: "KRW-ID", supply: 879627042 },
  {
    id: "KRW-ONG",
    supply: 404983864,
  },
  { id: "KRW-ASTR", supply: 7597621696 },
  {
    id: "KRW-GAS",
    supply: 77508512,
  },
  {
    id: "KRW-UPP",
    supply: 497834800,
  },
  {
    id: "KRW-ELF",
    supply: 738908400,
  },
  {
    id: "KRW-KNC",
    supply: 186564360,
  },
  {
    id: "KRW-BSV",
    supply: 19824725,
  },
  {
    id: "KRW-THETA",
    supply: 1000000000,
  },
  {
    id: "KRW-QKC",
    supply: 7091115594,
  },
  {
    id: "KRW-BTT",
    supply: 986061142857000,
  },
  {
    id: "KRW-MOC",
    supply: 423489688,
  },
  {
    id: "KRW-TFUEL",
    supply: 6843074105,
  },
  {
    id: "KRW-MANA",
    supply: 1942255184,
  },
  {
    id: "KRW-ANKR",
    supply: 10000000000,
  },
  {
    id: "KRW-AERGO",
    supply: 47249996,
  },
  {
    id: "KRW-ATOM",
    supply: 390934204,
  },
  { id: "KRW-AKT", supply: 248285795 },
  {
    id: "KRW-TT",
    supply: 11807804373,
  },
  {
    id: "KRW-GAME2",
    supply: 16831694490,
  },
  {
    id: "KRW-MBL",
    supply: 18269887214,
  },
  {
    id: "KRW-WAXP",
    supply: 3648160776,
  },
  {
    id: "KRW-HBAR",
    supply: 38269622458,
  },
  { id: "KRW-PYTH", supply: 3624988002 },
  {
    id: "KRW-MED",
    supply: 9543626701,
  },
  {
    id: "KRW-MLK",
    supply: 429666797,
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
    supply: 4535312901,
  },
  {
    id: "KRW-VET",
    supply: 80985041177,
  },
  {
    id: "KRW-CHZ",
    supply: 9404573039,
  },
  {
    id: "KRW-STMX",
    supply: 12345659609,
  },
  {
    id: "KRW-DKA",
    supply: 4686666667,
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
    supply: 6023268293,
  },
  {
    id: "KRW-LINK",
    supply: 638099970,
  },
  {
    id: "KRW-SEI",
    supply: 4432638888,
  },
  {
    id: "KRW-XTZ",
    supply: 1030014723,
  },
  {
    id: "KRW-BORA",
    supply: 1099750000,
  },
  {
    id: "KRW-JST",
    supply: 9900000000,
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
    supply: 633436958,
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
    supply: 1548476818,
  },
  {
    id: "KRW-SRM",
    supply: 263244669,
  },
  {
    id: "KRW-MVL",
    supply: 26152958863,
  },
  {
    id: "KRW-STRAX",
    supply: 2007995699,
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
    supply: 1705508722,
  },
  {
    id: "KRW-FCT2",
    supply: 958304370,
  },
  { id: "KRW-CTC", supply: 422084779 },
  {
    id: "KRW-CBK",
    supply: 91066297,
  },
  {
    id: "KRW-SAND",
    supply: 2464357126,
  },
  {
    id: "KRW-HPO",
    supply: 1034734273,
  },
  {
    id: "KRW-HUM",
    supply: 913409274,
  },
  {
    id: "KRW-DOGE",
    supply: 148033876384,
  },
  {
    id: "KRW-STRK",
    supply: 3964522,
  },
  {
    id: "KRW-PUNDIX",
    supply: 258394551,
  },
  {
    id: "KRW-FLOW",
    supply: 1563712953,
  },
  {
    id: "KRW-AXS",
    supply: 158603698,
  },
  {
    id: "KRW-STX",
    supply: 1512986823,
  },
  {
    id: "KRW-XEC",
    supply: 19824739047583,
  },
  {
    id: "KRW-SOL",
    supply: 488170363,
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
    supply: 15071805,
  },
  {
    id: "KRW-1INCH",
    supply: 1399453973,
  },
  {
    id: "KRW-ALGO",
    supply: 8434070346,
  },
  {
    id: "KRW-NEAR",
    supply: 1184141216,
  },
  {
    id: "KRW-AVAX",
    supply: 411949005,
  },
  {
    id: "KRW-T",
    supply: 10108927223,
  },
  {
    id: "KRW-CELO",
    supply: 562409366,
  },
  {
    id: "KRW-GMT",
    supply: 3157493622,
  },
  {
    id: "KRW-APT",
    supply: 586643426,
  },
  {
    id: "KRW-SHIB",
    supply: 589253884408118,
  },
  {
    id: "KRW-MASK",
    supply: 100000000,
  },
  {
    id: "KRW-ARB",
    supply: 4343862574,
  },
  { id: "KRW-MNT", supply: 3364694383 },
  { id: "KRW-ZRO", supply: 110000000 },
  { id: "KRW-TAIKO", supply: 115016756 },
  { id: "KRW-BLAST", supply: 25443907166 },
  { id: "KRW-BEAM", supply: 49466004168 },
  { id: "KRW-USDT", supply: 112911493076 },
  { id: "KRW-ONDO", supply: 3159107529 },
  { id: "KRW-AUCTION", supply: 6590076 },
  { id: "KRW-JUP", supply: 2637438889 },
  { id: "KRW-STG", supply: 204338417 },
  { id: "KRW-GAL", supply: 118544998 },
  { id: "KRW-G", supply: 8768180000 },
  { id: "KRW-ENS", supply: 35549160 },
  { id: "KRW-PENDLE", supply: 164896088 },
  { id: "KRW-ATH", supply: 6697646536 },
  { id: "KRW-USDC", supply: 56098473904 },
  { id: "KRW-UXLINK", supply: 338200000 },
  { id: "KRW-BIGTIME", supply: 1666915441 },
  { id: "KRW-CKB", supply: 45947644639 },
  { id: "KRW-W", supply: 2862609176 },
  { id: "KRW-CARV", supply: 185850382 },
  { id: "KRW-INJ", supply: 98970935 },
  { id: "KRW-MEW", supply: 88888888888 },
  { id: "KRW-UNI", supply: 600518038 },
  { id: "KRW-SAFE", supply: 527419089 },
  { id: "KRW-DRIFT", supply: 286261798 },
  { id: "KRW-AGLD", supply: 77280001 },
  { id: "KRW-PEPE", supply: 420689899999995 },
  { id: "KRW-BONK", supply: 77231169593284 },
  { id: "KRW-TRUMP", supply: 199999617 },
  { id: "KRW-USDT", supply: 141925329576 },
  { id: "KRW-LAYER", supply: 210000000 },
  { id: "KRW-ME", supply: 113873532 },
  { id: "KRW-BERA", supply: 107480000 },
  { id: "KRW-MOVE", supply: 2400000000 },
  { id: "KRW-VIRTUAL", supply: 648018015 },
  { id: "KRW-VANA", supply: 30084000 },
  { id: "KRW-ANIME", supply: 5538604656 },
  { id: "KRW-SONIC", supply: 360000000 },
  { id: "KRW-VTHO", supply: 86193318511 },
  { id: "KRW-MOCA", supply: 1783865250 },
  { id: "KRW-BOUNTY", supply: 508749999 },
  { id: "KRW-RENDER", supply: 517716590 },
  { id: "KRW-TOKAMAK", supply: 43841454 },
];
