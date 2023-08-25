import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the Header component", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders the AddListInput component", () => {
    render(<Home />);
    expect(
      screen.getByPlaceholderText("Qual lista você pretende criar?"),
    ).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(<Home />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the Footer Lit", () => {
    render(<Home />);
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
