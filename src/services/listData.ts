import { IScheduleData } from "../interface/interface";

export async function fetchFaqs() {
  const response = await fetch(`http://localhost:4000/api/faqs`);
  return await response.json();
}

export async function fetchProjects() {
  const response = await fetch(`http://localhost:4000/api/projects`);
  return await response.json();
}


export const gameName: string[] = [
  "League of Legends",
  "War Thunder",
  "Black Desert",
];

export const schedule: IScheduleData[] = [
  {
    id: 0,
    text: ["academy project", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Institution training & Team Project",
    date: "2022. 04 ~ 2022 .09",
  },
  {
    id: 1,
    text: ["Surgery & Recovery", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Surgery & Recovery",
    date: "2022. 09 ~ 2023 .12",
  },
  {
    id: 2,
    text: ["My app", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 11 ~ 2023 .12",
  },
  {
    id: 3,
    text: ["COIN market cap", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 12 ~ 2023 .01",
  },
  {
    id: 4,
    text: ["KANBAN Borad", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023 .02",
  },
  {
    id: 5,
    text: ["NETFLIX clone", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023 .02",
  },
  {
    id: 6,
    text: ["awwwards My app", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "apply project",
    date: "2023. 02 ~ 2023 .03",
  },
  {
    id: 7,
    text: [
      "",
      "2022. 6",
      "2022. 7",
      "2022. 8",
      "2022. 9",
      "2022. 10",
      "2022. 11",
      "2022. 12",
      "2022. 1",
      "2022. 2",
      "2022. 3",
    ],
    absoluteBox: "",
    date: "",
  },
];
