import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./inputTask.css";

export const InputTask = (props) => {
  const [value, setValue] = useState("");

  const clickHandler = (event) => {
    event.preventDefault();

    const inputs = {
      value1: value.trim(),
      checked: false,
    };

    if (inputs.value1.length === 0) {
      alert("Input field can not be empty..... !");
    } else if (inputs.value1.length !== 0) {
      const newList = [inputs, ...props.taskList];
      window.localStorage.setItem("tasks", JSON.stringify(newList));
      props.setTaskList(newList);
    }

    setValue("");
  };

  return (
    <div className="inputTask-container">
      <div className="inputTask">
        <h1 className="inputTask-heading">Todo List</h1>

        <form className="form">
          <label htmlFor="input">Add Todo</label>

          <div className="input">
            <input
              onChange={(event) => {
                setValue(event.target.value);
              }}
              type="text"
              id="input"
              placeholder="Add new todo"
              value={value}
            />
            <button type="submit" onClick={clickHandler} className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
