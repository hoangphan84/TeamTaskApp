import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  saveTask: (e: React.FormEvent, formData: ITask | any) => void;
};

const Input = styled.input`
  background: #f5f6f7;
  padding: 0.5rem 1rem;
  border: 1px solid #ff9900;
  border-radius: 10px;
  display: block;
  margin: 0.3rem 1rem 0 0;
`;

const FormButton = styled.button`
  background: #ff9900;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export interface FormProps {
  onSubmit: (e: any) => void;
}

const AddTaskForm: React.FC<FormProps> = (props) => {
  return <Form {...props}></Form>;
};

const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [description, setDescription] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setDescription(e.currentTarget.value);
  };

  return (
    <AddTaskForm onSubmit={(e) => saveTask(e, description)}>
      <Input onChange={handleForm} type="text" id="description" />
      <FormButton disabled={!description}>Add Task</FormButton>
    </AddTaskForm>
  );
};

export default AddTask;
