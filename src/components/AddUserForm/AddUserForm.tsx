import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as s from "./AddUserForm.styles";
import BackButton from '../BackButton';
import Modal from '../AlertModal/AlertModal';

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
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    try {
      const response = await axios.post('https://my-json-server.typicode.com/Edi6758/irsptech-frontend/users', data);
      if (response.status === 201) {
        onAddUser(response.data);
        reset();
        setModalMessage("Usuário criado com sucesso!");
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setModalMessage("Ocorreu um erro ao criar o usuário.");
    }
  };

  const handleCloseModal = () => {
    setModalMessage(null);
  };

  return (
    <>

<Modal isOpen={!!modalMessage} onClose={handleCloseModal}>
        <p>{modalMessage}</p>
      </Modal>
    <s.FormTitle>Adicionar usuário</s.FormTitle>
    <s.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name', { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Username:</label>
      <input {...register('username', { required: "Username is required" })} />
      {errors.username && <p>{errors.username.message}</p>}

      <label>Email:</label>
      <input {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })} />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Street:</label>
      <input {...register('address.street', { required: "Street is required" })} />
      {errors.address?.street && <p>{errors.address.street.message}</p>}

      <label>Suite:</label>
      <input {...register('address.suite', { required: "Suite is required" })} />
      {errors.address?.suite && <p>{errors.address.suite.message}</p>}

      <label>City:</label>
      <input {...register('address.city', { required: "City is required" })} />
      {errors.address?.city && <p>{errors.address.city.message}</p>}

      <label>Zip Code:</label>
      <input {...register('address.zipcode', { required: "Zip Code is required" })} />
      {errors.address?.zipcode && <p>{errors.address.zipcode.message}</p>}

      <label>Phone:</label>
      <input {...register('phone', { required: "Phone is required" })} />
      {errors.phone && <p>{errors.phone.message}</p>}

      <label>Website:</label>
      <input {...register('website', { required: "Website is required" })} />
      {errors.website && <p>{errors.website.message}</p>}

      <label>Company Name:</label>
      <input {...register('company.name', { required: "Company Name is required" })} />
      {errors.company?.name && <p>{errors.company.name.message}</p>}
      
      <label>Company Catch Phrase:</label>
      <input {...register('company.catchPhrase', { required: "Company Catch Phrase is required" })} />
      {errors.company?.catchPhrase && <p>{errors.company.catchPhrase.message}</p>}

      <label>Company BS:</label>
      <input {...register('company.bs', { required: "Company BS is required" })} />
      {errors.company?.bs && <p>{errors.company.bs.message}</p>}

      <s.ContentButton>
        <BackButton/>
        <s.AddButton type="submit">Adicionar usuário</s.AddButton>
      </s.ContentButton>
    </s.FormContainer></>
  );
}

export default AddUserForm;
