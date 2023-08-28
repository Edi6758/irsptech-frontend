import { render, fireEvent } from "@testing-library/react";
import AddUserButton from "./AddUserButton";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("AddUserButton", () => {
  it("navega para a rota correta ao clicar no botão", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const route = "/add-user";
    const { getByText } = render(
      <AddUserButton text="Adicionar usuário" icon={null} route={route} />,
    );

    fireEvent.click(getByText("Adicionar usuário"));
    expect(mockNavigate).toHaveBeenCalledWith(route);
  });
});
