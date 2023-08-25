import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import * as a from "./Home.styles";
import ListUser from "../../components/ListUser/ListUser";

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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newLists = [...list];
    const [removed] = newLists.splice(result.source.index, 1);
    newLists.splice(result.destination.index, 0, removed);
    setList(newLists);
    localStorage.setItem("lists", JSON.stringify(newLists));
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
        <Header />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((list, index) => (
                  <Draggable
                    key={list.value}
                    draggableId={list.value}
                    index={index}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <ListUser />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </a.Content>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteItem}
      />
    </a.Container>
  );
  
};

export default Home;
