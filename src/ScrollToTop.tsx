import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { visited, pathSelector } from "./atom";
import { useEffect } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const path = useSetRecoilState(pathSelector);
  const usersCollectionRef = collection(db, "visited");
  const pathCorrection = () => {
    path({ pathname });
  };

  const [visit, setVisit] = useRecoilState(visited);

  const updateVisited = async (pathname: string) => {
    const dbDoc = doc(db, "visited", "voY1RSJ3r8uY5XukEgol");

    if (pathname === "/Netflix") {
      const newField = {
        netflixToday: visit.netflixToday + 1,
        netflixTotal: visit.netflixTotal + 1,
      };
      await updateDoc(dbDoc, newField);
    }
    if (pathname === "/Kanban") {
      const newField = {
        kanbanToday: visit.kanbanToday + 1,
        kanbanTotal: visit.kanbanTotal + 1,
      };
      await updateDoc(dbDoc, newField);
    }
    if (pathname === "/Coin") {
      const newField = {
        coinToday: visit.coinToday + 1,
        coinTotal: visit.coinTotal + 1,
      };
      await updateDoc(dbDoc, newField);
    }
    if (pathname === "/Myapp") {
      const newField = {
        myappToday: visit.myappToday + 1,
        myappTotal: visit.myappTotal + 1,
      };
      await updateDoc(dbDoc, newField);
    }
    if (pathname === "/Airbnb") {
      const newField = {
        airbnbToday: visit.airbnbToday + 1,
        airbnbTotal: visit.airbnbTotal + 1,
      };
      await updateDoc(dbDoc, newField);
    }
  };
  const getVisited = async () => {
    const data = await getDocs(usersCollectionRef);
    const visitedData = data.docs.map((doc) => doc.data());
    const dbDoc = doc(db, "visited", "voY1RSJ3r8uY5XukEgol");
    const date = new Date();
    const todayDate = date.getDate();
    if (todayDate !== visitedData[0].date) {
      const newField = {
        airbnbToday: 0,
        coinToday: 0,
        kanbanToday: 0,
        myappToday: 0,
        netflixToday: 0,
        date: todayDate,
      };
      await updateDoc(dbDoc, newField);
    }
    const newVisitedAtom = {
      airbnbToday: visitedData[0].airbnbToday,
      airbnbTotal: visitedData[0].airbnbTotal,
      coinToday: visitedData[0].coinToday,
      coinTotal: visitedData[0].coinTotal,
      kanbanToday: visitedData[0].kanbanToday,
      kanbanTotal: visitedData[0].kanbanTotal,
      myappToday: visitedData[0].myappToday,
      myappTotal: visitedData[0].myappTotal,
      netflixToday: visitedData[0].netflixToday,
      netflixTotal: visitedData[0].netflixTotal,
    };
    setVisit(() => newVisitedAtom);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    getVisited();
    pathCorrection();
    updateVisited(pathname);
  }, [pathname]);
  return null;
}
