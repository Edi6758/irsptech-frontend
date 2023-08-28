import { useForm } from 'react-hook-form';
import axios from 'axios';

interface AddUserFormProps {
  onAddUser: (newUser: any) => void;
}

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


function AddUserForm({ onAddUser }: AddUserFormProps) {
  const { register, handleSubmit, reset } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    try {
      const response = await axios.post('https://my-json-server.typicode.com/Edi6758/irsptech-frontend/users', data);
      if (response.status === 201) {
        onAddUser(response.data);
        reset();
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name', { required: true })} />

      <label>Username:</label>
      <input {...register('username', { required: true })} />

      <label>Email:</label>
      <input {...register('email', { required: true })} />

      <label>Street:</label>
      <input {...register('address.street', { required: true })} />

      <label>Suite:</label>
      <input {...register('address.suite', { required: true })} />

      <label>City:</label>
      <input {...register('address.city', { required: true })} />

      <label>Zip Code:</label>
      <input {...register('address.zipcode', { required: true })} />

      <label>Phone:</label>
      <input {...register('phone', { required: true })} />

      <label>Website:</label>
      <input {...register('website', { required: true })} />

      <label>Company Name:</label>
      <input {...register('company.name', { required: true })} />

      <label>Company Catch Phrase:</label>
      <input {...register('company.catchPhrase', { required: true })} />

      <label>Company BS:</label>
      <input {...register('company.bs', { required: true })} />

      <button type="submit">Adicionar usuário</button>
    </form>
  );
}

export default AddUserForm;
