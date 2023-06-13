import { IScheduleData } from "../interface/interface";

export async function fetchFaqs() {
  const response = await fetch(`https://port-0-awwwards-ec2-server-7xwyjq992lliithryh.sel4.cloudtype.app/api/faqs`);
  if(response.ok){
    
  }
  return await response.json();
}

export async function fetchProjects() {
  const response = await fetch(`https://port-0-awwwards-ec2-server-7xwyjq992lliithryh.sel4.cloudtype.app/api/projects`);
  return await response.json();
}

export async function fetchVistited() {
  const response = await fetch(`https://port-0-awwwards-ec2-server-7xwyjq992lliithryh.sel4.cloudtype.app/api/visited`);
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
    text: [
      "academy project",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Institution training & Team Project",
    date: "2022. 04 ~ 2022. 09",
  },
  {
    id: 1,
    text: [
      "Surgery & Recovery",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Surgery & Recovery",
    date: "2022. 09 ~ 2022. 12",
  },
  {
    id: 2,
    text: ["My app", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2022. 11 ~ 2022. 12",
  },
  {
    id: 3,
    text: [
      "CRYPTO Tracker",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Project",
    date: "2022. 12 ~ 2023. 01",
  },
  {
    id: 4,
    text: ["KANBAN Borad", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023. 02",
  },
  {
    id: 5,
    text: ["NETFLIX clone", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "Project",
    date: "2023. 01 ~ 2023. 02",
  },
  {
    id: 6,
    text: [
      "awwwards My app",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "Project creation and maintenance",
    date: "2023. 02 ~ 2023. 06",
  },
  {
    id: 7,
    text: ["javascript", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "study",
    date: "2023. 03 ~ 2023. 04",
  },
  {
    id: 8,
    text: ["nodejs", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    absoluteBox: "study",
    date: "2023. 04 ~ 2023. 05",
  },
  {
    id: 9,
    text: [
      "Computer Science",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    absoluteBox: "study",
    date: "2023. 04 ~ 2023. 05",
  },
  {
    id: 10,
    text: [
      "",
      "2022. 6",
      "2022. 7",
      "2022. 8",
      "2022. 9",
      "2022. 10",
      "2022. 11",
      "2022. 12",
      "2023. 1",
      "2023. 2",
      "2023. 3",
      "2023. 4",
      "2023. 5",
      "2023. 6",
    ],
    absoluteBox: "",
    date: "",
  },
];
