import { Suspense } from "react";
import CoinList from "../../container/CoinList";

function CoinListPage() {
  return (
    <Suspense fallback={<></>}>
      <main>
        <CoinList />
      </main>
    </Suspense>
  );
}

export default CoinListPage;

