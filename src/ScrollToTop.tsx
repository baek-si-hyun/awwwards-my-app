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
    const visitedDataArr = data.docs.map((doc) => doc.data());
    const [visitedData] = visitedDataArr
    const dbDoc = doc(db, "visited", "voY1RSJ3r8uY5XukEgol");
    const date = new Date();
    const todayDate = date.getDate();
    if (todayDate !== visitedData.date) {
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
      airbnbToday: visitedData.airbnbToday,
      airbnbTotal: visitedData.airbnbTotal,
      coinToday: visitedData.coinToday,
      coinTotal: visitedData.coinTotal,
      kanbanToday: visitedData.kanbanToday,
      kanbanTotal: visitedData.kanbanTotal,
      myappToday: visitedData.myappToday,
      myappTotal: visitedData.myappTotal,
      netflixToday: visitedData.netflixToday,
      netflixTotal: visitedData.netflixTotal,
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
    pathCorrection()
  }, [pathname]);
  useEffect(() => {
    updateVisited(pathname);
  }, [visit]);
  return null;
}
