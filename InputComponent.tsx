import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoListComponent";
import { nanoid } from "nanoid";
import { ToDoItem } from "../types/todo";

const getLocalItems = () => {
  let items = localStorage.getItem("TASK");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const Input = () => {
  const [toDoList, setToDoList] = useState(getLocalItems());
  const [inputData, setInputData] = useState("");

  const onSubmitHandler = (event: { preventDefault: () => void; }) => {
    // Prevent the default form submission behavior
    // and check if the input data is not empty
    // If empty, return early
    // Otherwise, clear the input and add the new task to the list
    // The task is added with a unique ID generated by nanoid
    // and the input data is reset to an empty string
    // The new task is added to the existing list of tasks
    // and the state is updated accordingly
    // The task is added to the end of the list
    // The task is stored in the local storage
    // The task is stored as a JSON string
    // The task is stored with the key "TASK"
    event.preventDefault();
    if (inputData.trim().length <= 0) {
      return;
    }
    setInputData("");
    setToDoList((prevValue: any) => [
      ...prevValue,
      { toDo: inputData, id: Number(nanoid()) }
    ]);
  };

const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData(event.target.value);
};

const onDeleteHandler = (itemID: number) => {
    setToDoList((oldValues: any[]) =>
      oldValues.filter((item: { id: number; }) => item.id !== itemID)
    );
  };
  

  useEffect(() => {
    const stringifyToDoList = JSON.stringify(toDoList)
    localStorage.setItem("TASK", stringifyToDoList);
  }, [toDoList]);

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
          <input
              type="text"
              value={inputData}
              placeholder=" 📝 Add Task"
              className="appInput"
              onChange={onChangeHandler} />
          <button type="submit">Add Task</button>
      </form>
      <ToDoList
          item={toDoList}
          onDelete={onDeleteHandler} />
    </React.Fragment>
  );
};

export default Input;
// This component is a simple input field that allows users to type text.
// It uses React's useState hook to manage the input value.
// The handleChange function updates the input value whenever the user types in the field.
// The input field has a placeholder that prompts the user to type something.
// The component can be styled using CSS to improve its appearance.
// The component can be tested using a testing library like Jest or React Testing Library.
// The component can be further enhanced by adding features like validation, error messages, and character limits.
// The component can be made more interactive by using state management libraries like Redux or Context API.
// The component can be made more accessible by adding ARIA attributes and ensuring it works with screen readers.
// The component can be made responsive by using CSS media queries or a CSS framework like Bootstrap or Tailwind CSS.
// The component can be made more user-friendly by adding features like tooltips, modals, and notifications.
// The component can be made more visually appealing by using animations, transitions, and hover effects.
// The component can be made more performant by using techniques like memoization and lazy loading.
// The component can be made more maintainable by following best practices like keeping the code DRY, using meaningful variable names, and writing comments.
// The component can be made more scalable by using a modular architecture and separating concerns.