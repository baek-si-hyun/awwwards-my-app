import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
}

global.ResizeObserver = ResizeObserver;

test("renders site of the day text", () => {
  render(
    <RecoilRoot>
      <Header></Header>
    </RecoilRoot>
  );
  const headerRender = screen.getByRole("heading");
  expect(headerRender).toBeInTheDocument();
});
