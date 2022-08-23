import React, { useEffect, useState } from "react";
import { InputTask } from "./task/inputTask/inputTask";
import { DisplayTask } from "./task/displayTask/displayTask";
import "./App.css";

import Modal from "react-modal";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  Modal.setAppElement("#root");

  useEffect(() => {
    const localList = JSON.parse(window.localStorage.getItem("tasks"));

    if (localList === null) setTaskList([]);
    else setTaskList(localList);
  }, []);

  return (
    <div className="app-container">
      <div className="app">
        <InputTask taskList={taskList} setTaskList={setTaskList} />
        <DisplayTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
};

export default App;
