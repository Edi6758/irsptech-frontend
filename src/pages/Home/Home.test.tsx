import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  it("should render without crashing", () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
  });
});
