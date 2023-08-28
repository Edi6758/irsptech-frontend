import { render } from "@testing-library/react";
import EditUser from "./EditUser";

describe("EditUser", () => {
  it("should render without crashing", () => {
    render(<EditUser />);
  });
});
