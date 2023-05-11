/* eslint-disable testing-library/no-render-in-setup */
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("footer ul, li test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer></Footer>
      </BrowserRouter>
    );
  });

  test("footer ul render", () => {
    const footerUl = screen.getByRole("list");
    expect(footerUl).toBeInTheDocument();
  });

  test("footer li render", () => {
    const footerLi = screen.queryAllByRole("listitem");
    expect(footerLi).toHaveLength(4);
  });
});
