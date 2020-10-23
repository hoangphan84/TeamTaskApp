import React, { useState } from "react";

type Props = {
  saveTask: (e: React.FormEvent, formData: ITask | any) => void;
};

const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [description, setDescription] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setDescription(e.currentTarget.value);
  };

  return (
    <form className="Form" onSubmit={(e) => saveTask(e, description)}>
      <div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={!description}>Add Task</button>
    </form>
  );
};

export default AddTask;
