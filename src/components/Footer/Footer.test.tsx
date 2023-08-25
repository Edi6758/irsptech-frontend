import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer text", () => {
    render(<Footer />);
    expect(
      screen.getByText("TODOS OS DIREITOS RESERVADOS À irsptech"),
    ).toBeInTheDocument();
  });

  it("renders the footer logo", () => {
    render(<Footer />);
    expect(screen.getByAltText("IRSPTECH logo")).toBeInTheDocument();
  });
});
