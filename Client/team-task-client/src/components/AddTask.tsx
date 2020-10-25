import React, { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./ActionButton";

export interface Props {
  saveTask: (formData: string) => void;
}

const Input = styled.input`
  background: #f5f6f7;
  padding: 0.5rem 1rem;
  border: 1px solid #ff9900;
  border-radius: 20px;
  display: block;
  margin: 0.3rem 1rem 0 0;
  width: 100%;
  height: 2.8rem;
  font-size: 24px;
  outline: none;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.itemType === "add-big" ? "1rem" : "1rem 1.6rem 1rem 1rem"};
  margin-bottom: ${(props) => (props.itemType === "add-big" ? "0rem" : "1rem")};
  justify-content: center;
  position: ${(props) => (props.itemType === "add-big" ? "fixed" : "")};
  bottom: ${(props) => (props.itemType === "add-big" ? "0" : "")};
  z-index: 100;
  blur: ${(props) => (props.itemType === "add-big" ? "5px" : "")};
  width: 100%;
  backdrop-filter: blur(4px);
  height: ${(props) => (props.itemType === "add-big" ? "4.5rem" : "")};
  right: -5px;
`;

const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [description, setDescription] = useState<string>("");
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      saveTaskAction();
    }
  };

  const saveTaskAction = () => {
    saveTask(description);
    setDescription("");
    setIsAddingTask(false);
  };

  return isAddingTask ? (
    <Form>
      <Input
        onChange={handleForm}
        type="text"
        id="description"
        value={description}
        onKeyUp={handleKeyPress}
      />
      <ActionButton
        type="add"
        onClick={() => {
          saveTaskAction();
        }}
      ></ActionButton>
    </Form>
  ) : (
    <Form itemType="add-big">
      <ActionButton
        type="add-big"
        onClick={() => {
          setIsAddingTask(true);
        }}
      ></ActionButton>
    </Form>
  );
};

export default AddTask;
