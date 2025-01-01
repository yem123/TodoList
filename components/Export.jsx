const Export = ({ tasks }) => {
  // Export tasks to a file
  const exportTasks = () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tasks.json";
    link.click();
    URL.revokeObjectURL(url);

    // Save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div>
      <button onClick={exportTasks} className="export-button" title="download">
        <i className="fa-solid fa-download"></i>
      </button>
    </div>
  );
}

export default Export
