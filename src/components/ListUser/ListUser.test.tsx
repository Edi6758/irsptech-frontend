import { render, screen } from "@testing-library/react";
import ListUser from "./ListUser";

describe("ListUser", () => {
  it("renders the user name and email", async () => {
    render(<ListUser />);
    expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  });
});
