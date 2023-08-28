import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddUserForm from "./AddUserForm";

describe("AddUserForm", () => {
  it("renderiza o formulário corretamente", () => {
    const mockOnAddUser = jest.fn();
    const initialValues = {
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    const { getByRole } = render(
      <Router>
        <AddUserForm onAddUser={mockOnAddUser} initialValues={initialValues} />
      </Router>,
    );

    expect(
      getByRole("button", { name: "Adicionar usuário" }),
    ).toBeInTheDocument();
  });
});
