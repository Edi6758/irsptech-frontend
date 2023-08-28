import { render } from "@testing-library/react";
import ListUser from "./ListUser";

describe("ListUser", () => {
  it("renderiza o componente corretamente", () => {
    const { container } = render(<ListUser />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
