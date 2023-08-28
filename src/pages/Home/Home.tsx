import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import * as a from "./Home.styles";
import ListUser from "../../components/ListUser/ListUser";
import AddUserButton from "../../components/AddUserButton";
import { IoMdAdd } from 'react-icons/io';

interface ListType {
  value: string;
  subLists: string[];
}

const Home = () => {
  const [list, setList] = useState<ListType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    type: "list" | "subList";
    listIndex: number;
    subListIndex?: number;
  } | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const handleDeleteItem = () => {
    if (itemToDelete) {
      if (itemToDelete.type === "list") {
        const newLists = [...list];
        newLists.splice(itemToDelete.listIndex, 1);
        setList(newLists);
        localStorage.setItem("lists", JSON.stringify(newLists));
      } else if (itemToDelete.type === "subList") {
        const newLists = [...list];
        newLists[itemToDelete.listIndex].subLists.splice(
          itemToDelete.subListIndex!,
          1,
        );
        setList(newLists);
        localStorage.setItem("lists", JSON.stringify(newLists));
      }
    }
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      setList(JSON.parse(storedLists));
    }
  }, []);

  return (
    <a.Container>
      <a.Content>
        <div>
        <AddUserButton text="Adicionar" icon={<IoMdAdd />} route="/add-user" />
          <ListUser /> {/* Renderize o componente ListUser aqui */}
        </div>
      </a.Content>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteItem}
      />
    </a.Container>
  );
};

export default Home;
