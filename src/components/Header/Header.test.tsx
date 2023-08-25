import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Test Header", () => {
  it("renders the logo,  menu icons", () => {
    render(<Header />);
    expect(screen.getByRole("img", { name: /main logo/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /menu logo/i })).toBeInTheDocument();
  });
});
