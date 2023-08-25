/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  it("renders the modal when isOpen is true", () => {
    render(<Modal isOpen={true} onClose={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByText("Tem certeza de que deseja deletar?"),
    ).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    render(<Modal isOpen={false} onClose={() => {}} onDelete={() => {}} />);
    expect(
      screen.queryByText("Tem certeza de que deseja deletar?"),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when the cancel button is clicked", () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose} onDelete={() => {}} />);
    screen.getByText("Cancelar").click();
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onDelete when the delete button is clicked", () => {
    const onDelete = jest.fn();
    render(<Modal isOpen={true} onClose={() => {}} onDelete={onDelete} />);
    screen.getByText("Deletar").click();
    expect(onDelete).toHaveBeenCalled();
  });
});
