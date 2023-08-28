import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddUser from "./AddUser";

describe("AddUser", () => {
  it("should render without crashing", () => {
    render(
      <Router>
        <AddUser />
      </Router>,
    );
  });
});
