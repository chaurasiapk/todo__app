import React, { useState } from "react";
import "./displayTask.css";

import { Modal1 } from "../modal1/modal1";

export const DisplayTask = ({ taskList, setTaskList }) => {
  const newList = [...taskList];

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  const checkHandler = (index) => {
    if (!newList[index].checked) {
      newList[index] = { ...newList[index], checked: true };
      window.localStorage.setItem("tasks", JSON.stringify(newList));
      setTaskList(newList);
    } else {
      newList[index] = { ...newList[index], checked: false };
      window.localStorage.setItem("tasks", JSON.stringify(newList));
      setTaskList(newList);
    }
  };

  const deleteHandler = (index) => {
    newList.splice(index, 1);
    window.localStorage.setItem("tasks", JSON.stringify(newList));
    setTaskList(newList);
  };

  const modalHandler = (task) => {
    setSelectedItem(task);
    setModalOpen(true);
  };

  return (
    <div className="displayTask-container">
      <table className="displayTask-list">
        <thead>
          <tr className="displayTask-list-headings">
            <th>#</th>
            <th className="">Task-Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => {
            return (
              <tr key={index} className="display-item">
                <td className="serial-number">{index + 1}:</td>

                <td className={`task-name ${task.checked ? "task-done" : ""}`}>
                  {task.value1}
                </td>

                <td className="icons">
                  <i
                    className="ri-eye-line take-a-look"
                    onClick={() => modalHandler(task)}
                  ></i>
                  {!task.checked ? (
                    <span
                      onClick={() => checkHandler(index)}
                      className="material-symbols-outlined check"
                    >
                      done_all
                    </span>
                  ) : (
                    <span
                      onClick={() => checkHandler(index)}
                      className="material-symbols-outlined check"
                    >
                      remove_done
                    </span>
                  )}

                  <i
                    onClick={() => deleteHandler(index)}
                    className="ri-delete-bin-line bin"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal1
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};
