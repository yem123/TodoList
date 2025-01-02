import { useState, useEffect } from "react";
import Add from "./Add";
import Tasks from "./Tasks";
import Modal from "./Modal";
import Export from "./Export";
import Import from "./Import";
import "../style.css";

function App() {
  const [tasks, setTasks] = useState([]); // Task state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [editTask, setEditTask] = useState(null); // Task data when editing

  const handleEditTask = (task) => {
    setEditTask(task); // Set the task when editing
    setIsModalOpen(true); // Open modal
  };

  const handleAddTask = () => {
    setIsModalOpen(true); // Open modal
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <div className="file-actions">
        <Import setTasks={setTasks} />
        <span> | </span>
        <Export tasks={tasks} />
      </div>
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
        handleEditTask={handleEditTask} // Pass the handle function to Tasks
      />
      {isModalOpen && (
        <Modal
          tasks={tasks}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          editTask={editTask} // Pass editTask for editing mode
          setEditTask={setEditTask} // Allows clearing the edit task when modal closes
        />
      )}

      <Add handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;
