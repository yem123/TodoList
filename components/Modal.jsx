import { useState, useEffect } from "react";
import "../style.css";

function Modal({ tasks, setTasks, setIsModalOpen, editTask, setEditTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  
  useEffect(() => {
    if (editTask) {
      setTaskInput(editTask.text);
      setTimeFrom(editTask.rawTimeFrom);
      setTimeTo(editTask.rawTimeTo);
    }
  }, [editTask]); // Update when editTask changes

  const saveTask = () => {
    if (
      taskInput.trim() !== "" &&
      timeFrom.trim() !== "" &&
      timeTo.trim() !== ""
    ) {
      const formattedTimeFrom = new Date(
        `1970-01-01T${timeFrom}`
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formattedTimeTo = new Date(
        `1970-01-01T${timeTo}`
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const updatedTasks = [...tasks];
      if (editTask) {
        const index = tasks.findIndex((task) => task === editTask);
        updatedTasks[index] = {
          text: taskInput.trim(),
          timeFrom: formattedTimeFrom,
          timeTo: formattedTimeTo,
          rawTimeFrom: timeFrom,
          rawTimeTo: timeTo,
        };
      } else {
        updatedTasks.push({
          text: taskInput.trim(),
          timeFrom: formattedTimeFrom,
          timeTo: formattedTimeTo,
          rawTimeFrom: timeFrom,
          rawTimeTo: timeTo,
        });
      }

      setTasks(updatedTasks);
      closeModal();
    } else {
      alert("Please fill in both the task and the time.");
    }
  };

  const closeModal = () => {
    setTaskInput("");
    setTimeFrom("");
    setTimeTo("");
    setEditTask(null);
    setIsModalOpen(false);
  };


  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editTask ? "Edit Task" : "Add Task"}</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Task description"
        />
        <label>From:</label>
        <input
          type="time"
          value={timeFrom}
          onChange={(e) => setTimeFrom(e.target.value)}
        />
        <label>To:</label>
        <input
          type="time"
          value={timeTo}
          onChange={(e) => setTimeTo(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={saveTask}>
            {editTask ? "Update" : "Save"}
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
