import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IMainPosition {
  home: boolean;
  projects: boolean;
  music: boolean;
  schedule: boolean;
}
export interface IRouterPosition {
  sotd: boolean;
  fontColor: boolean;
  routerAbout: boolean;
}
export interface IDomApi {
  pathname: string;
  setMainPosition: Dispatch<SetStateAction<IMainPosition>>;
  setRouterPosition: Dispatch<SetStateAction<IRouterPosition>>;
}
export interface IScheduleData {
  id: number;
  text: string[];
  absoluteBox: string;
  date: string;
}

export interface IFaqsLists {
  q: string;
  a: string;
}
export interface IProjectsData {
  projects_code: string;
  projects_name: string;
  projects_date: string;
  projects_tools: string[];
  projects_thumbnail: string;
  projects_logo: string;
  projects_by: string;
  projects_prev_img: string[];
  projects_fonts: string[];
  projects_colors: string[];
  projects_ko: string;
  projects_en: string;
}
export interface IProjectData {
  id: string;
  date: string;
  name: string;
  thumbnail: string;
  logo: string;
  by: string;
  imgs: string[];
  fonts: string[];
  colors: string[];
  ko: string;
  en: string;
}
export type NavHandler = (e: MouseEvent<HTMLElement>) => void;
