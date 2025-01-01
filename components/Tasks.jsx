import "../style.css";

function Tasks({ tasks, setTasks, handleEditTask }) {
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    localStorage.removeItem("tasks"); // Remove tasks from localStorage
    setTasks([]); // Clear only the displayed tasks
  };

  return (
    <div>
      <ul className="task-list">
        {tasks
          .sort(
            (a, b) =>
              new Date(`1970-01-01T${a.rawTimeFrom}`) -
              new Date(`1970-01-01T${b.rawTimeFrom}`)
          )
          .map((task, index) => (
            <li key={index}>
              <span className="timeItem">
                <span className="time">
                  {task.timeFrom} ~ {task.timeTo}
                </span>
                <span className="item">{task.text}</span>
              </span>
              <button
                onClick={() => handleEditTask(task)} // Pass the task data to open in modal
                className="edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button onClick={() => deleteTask(index)} className="del">
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          ))}
      </ul>
      {tasks.length > 0 && (
        <button onClick={clearTasks} className="clear-button" title="Clear All">
          <i className="fa-solid fa-trash"></i> Clear All
        </button>
      )}
    </div>
  );
}

export default Tasks;
