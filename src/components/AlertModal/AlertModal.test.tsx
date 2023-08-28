import { render } from "@testing-library/react";
import Modal from "./AlertModal";

describe("Modal", () => {
  it("renderiza o modal corretamente quando está aberto", () => {
    const mockOnClose = jest.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Conteúdo do modal</p>
      </Modal>,
    );

    expect(getByText("Conteúdo do modal")).toBeInTheDocument();
  });

  it("não renderiza o modal quando está fechado", () => {
    const mockOnClose = jest.fn();

    const { queryByText } = render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Conteúdo do modal</p>
      </Modal>,
    );

    expect(queryByText("Conteúdo do modal")).not.toBeInTheDocument();
  });
});
