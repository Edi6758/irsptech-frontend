import { useEffect, useState } from "react";
import axios from "axios";
import * as s from "./ListUser.styles";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function ListUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Edi6758/irsptech-frontend/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <s.Container>
      {users.map((user) => (
        <s.Content key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </s.Content>
      ))}
    </s.Container>
  );
}

export default ListUser;
