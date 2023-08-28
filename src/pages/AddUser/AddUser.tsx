import { useState } from "react";
import AddUserForm from "../../components/AddUserForm";
import * as a from "./AddUser.styles";

interface UserData {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function AddUser() {
  const [users, setUsers] = useState<UserData[]>([]); // Defina o tipo do estado

  const handleAddUser = (newUser: UserData) => {
    setUsers([...users, newUser]); // Adicionar o novo usuário ao estado
  };

  return (
    <a.Container>
      <a.Content>
      <AddUserForm
        onAddUser={handleAddUser} // Sua função de adicionar usuário
        initialValues={{
          name: "",
          username: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
          },
          phone: "",
          website: "",
          company: {
            name: "",
            catchPhrase: "",
            bs: ""
          }
        }}
      />

      </a.Content>
    </a.Container>
  );
}

export default AddUser;
