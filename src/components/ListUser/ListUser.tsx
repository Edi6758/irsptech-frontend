import React, { useEffect, useState } from "react";
import {
  Draggable,
  Droppable,
  DragDropContext,
  DropResult,
} from "react-beautiful-dnd";
import axios from "axios";
import * as s from "./ListUser.styles";
import dragIcon from "../../assets/svg/drag-icon.svg";
import trashIcon from "../../assets/svg/trash-icon.svg";
import Modal from "../Modal";

interface User {
  id: number;
  name: string;
  email: string;
}

interface ListUserProps {
  dragHandleProps?: React.HTMLAttributes<HTMLElement> | null;
}

function ListUser({ dragHandleProps }: ListUserProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  useEffect(() => {
    console.log("Fetching users from server...");
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log("Received response:", response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setIsModalOpen(true);
  };

  const deleteUserOnServer = (userId: number) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        console.log("User deleted:", response.data);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleDragEnd = (result: DropResult) => {
    console.log("Drag end result:", result);

    if (!result.destination) return;

    // Restante do seu código de rearranjo dos usuários
  };

  return (
    <s.Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="user-list" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {users.map((user, index) => (
                <Draggable key={user.id} draggableId={`user-${user.id}`} index={index}>
                  {(provided) => (
                    <s.Content
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <s.DragIcon src={dragIcon} alt="Drag icon" />
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <s.TrashIcon src={trashIcon} alt="Trash icon" onClick={() => handleDeleteClick(user)} />
                    </s.Content>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={() => {
          if (userToDelete) {
            deleteUserOnServer(userToDelete.id);
            setUserToDelete(null);
            setIsModalOpen(false);
          }
        }}
      />
    </s.Container>
  );
}

export default ListUser;
