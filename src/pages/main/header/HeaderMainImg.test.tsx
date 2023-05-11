import HeaderMainImg from "./HeaderMainImg";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";


test("renders site of the day text", () => {
  render(
    <RecoilRoot>
      <HeaderMainImg></HeaderMainImg>
    </RecoilRoot>
  );
  const headerImgRender = screen.getByAltText("headerimg");
  expect(headerImgRender).toBeInTheDocument();
});
