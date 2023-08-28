import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddUserForm from "../../components/AddUserForm";
import * as a from "./EditUser.styles";
import axios from "axios";

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

function EditUser() {
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<UserData | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/Edi6758/irsptech-frontend/users/${userId}`,
      )
      .then((response) => {
        setUserDetails(response.data as UserData);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  const handleEditUser = () => {
    // Atualizar os dados do usuário no backend usando uma chamada de API
    // e, em seguida, redirecionar para a página inicial ou detalhes do usuário
  };

  return (
    <a.Container>
      <a.Content>
        {userDetails ? (
          <AddUserForm initialValues={userDetails} onAddUser={handleEditUser} />
        ) : (
          <p>Loading user details...</p>
        )}
      </a.Content>
    </a.Container>
  );
}

export default EditUser;
