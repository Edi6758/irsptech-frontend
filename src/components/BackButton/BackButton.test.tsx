import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackButton from "./BackButton";

describe("BackButton", () => {
  it("renderiza o botão corretamente", () => {
    const { getByText } = render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>,
    );

    expect(getByText("Voltar")).toBeInTheDocument();
  });
});
